---
slug: cosy-voice
title: Phân Tích Chuyên Sâu Cơ Chế Toán Học Của Mô Hình CosyVoice
authors: [dangquach]
tags: [motivation]
---

# Phân Tích Chuyên Sâu Cơ Chế Toán Học Của Mô Hình CosyVoice

<!-- truncate -->

CosyVoice là một hệ thống tổng hợp giọng nói (TTS) zero-shot đa ngôn ngữ có khả năng mở rộng cao. Điểm đột phá của CosyVoice nằm ở việc sử dụng Token ngữ nghĩa có giám sát (Supervised Semantic Tokens) kết hợp với mô hình Conditional Flow Matching.
Bài viết này sẽ giải mã quy trình hoạt động của CosyVoice qua 4 giai đoạn chính, minh bạch hóa các hàm toán học chuyển đổi dữ liệu từ đầu vào đến đầu ra.
### Tổng Quan Kiến Trúc
Mô hình bao gồm 4 thành phần hoạt động tuần tự,:
1. Speech Tokenizer (S3): Trích xuất token ngữ nghĩa từ giọng nói.
2. Text Encoder: Căn chỉnh không gian ngữ nghĩa của văn bản.
3. Large Language Model (LLM): Dự đoán chuỗi token giọng nói từ văn bản và mẫu giọng.
4. Conditional Flow Matching: Chuyển đổi token thành Mel spectrogram.

![CosyVoice](figure/cosy_voice.png)

--------------------------------------------------------------------------------
## Giai Đoạn 1: Trích Xuất Token Ngữ Nghĩa (Supervised Speech Tokenizer)
Khác với các phương pháp không giám sát truyền thống, CosyVoice sử dụng mô hình nhận dạng giọng nói (ASR) SenseVoice đã được tinh chỉnh để tạo ra token.
Mục tiêu: Chuyển đổi Mel spectrogram liên tục (X) thành chuỗi token rời rạc (μ).
### Bước 1.1: Mã hóa ngữ cảnh (Context Encoding)
- **Đầu vào:** Mel spectrogram $X$.
- **Hàm xử lý:** Tín hiệu đi qua lớp mã hóa vị trí (PosEnc) và phần đầu của bộ mã hóa (Encoder1).
- **Công thức:**
$$H = \text{Encoder1}(\text{PosEnc}(X))$$
Trong đó $H$ là biểu diễn ẩn nhận thức ngữ cảnh (context-aware representations).
### Bước 1.2: Lượng tử hóa Vector (Vector Quantization - VQ)
- **Đầu vào:** Biểu diễn ẩn $h_l$ tại khung thời gian $l$.
- **Hàm xử lý:** Tìm vector gần nhất trong sách mã (codebook) $C$ để gán làm token. Đây là bước rời rạc hóa tín hiệu.
- **Công thức:**
$$\mu_l = \text{VQ}(h_l, C) = \operatorname{arg,min}_{c_n \in C} ||h_l - c_n||_2$$
*Trong đó $|| \cdot ||_2$ là chuẩn L2 norm. $\mu_l$ chính là token giọng nói tại bước $l$.*


**Tại sao dùng công thức này?**
- Tín hiệu giọng nói gốc $h_l$ là liên tục (continuous) và vô hạn. Để LLM có thể "đọc" được giọng nói như đọc văn bản, ta bắt buộc phải biến nó thành hữu hạn (discrete).
- Phép toán này thực chất là Nearest Neighbor Search (Tìm kiếm láng giềng gần nhất). Nó ép mọi biến thể giọng nói phức tạp về một tập hợp hữu hạn các "từ vựng âm thanh" (4096 tokens) trong Codebook C

> Lưu ý quá trình huấn luyện: Các embedding trong codebook được cập nhật bằng phương pháp Exponential Moving Average (EMA): $c_{\mu_l} := \alpha c_{\mu_l} + (1-\alpha)h_l$. 
>
**Tại sao dùng cái này mà không dùng Backpropagation thông thường?**
- Hàm argmin ở trên là một hàm rời rạc, không khả vi (non-differentiable). Tức là ta không thể tính đạo hàm (gradient) truyền ngược qua nó để cập nhật Codebook C bằng thuật toán Gradient Descent thông thường được.

- Thay vì dùng các thủ thuật phức tạp như Gumbel-Softmax, CosyVoice dùng EMA để cập nhật C. Nghĩa là: Vector trong sách mã $c_{\mu_l}$ sẽ từ từ "di chuyển" về phía trung bình của các giọng nói thực tế $h_l$ mà nó đại diện. Điều này giúp quá trình huấn luyện ổn định hơn






### Bước 1.3: Khôi phục ngữ nghĩa (Semantic Verification)

Để đảm bảo token mang ngữ nghĩa (để dùng cho bước sau), hệ thống tiếp tục mã hóa token lượng tử hóa ($\bar{H}$) qua Encoder2 và đưa vào ASR Decoder để dự đoán văn bản.

- **Hàm xử lý:**
$$\tilde{H} = \text{Encoder2}(\text{PosEnc}(\bar{H}))$$
$$P(Y|X) = \text{ASRDecoder}(\tilde{H}, Y_{Z-1})$$
*(Bước này chủ yếu dùng trong huấn luyện để giám sát chất lượng token),.*

---


## Giai Đoạn 2: Mô Hình Hóa Ngôn Ngữ (LLM for TTS)

CosyVoice coi việc tổng hợp tiếng nói là bài toán sinh chuỗi tự hồi quy (auto-regressive sequence generation).

### Bước 2.1: Mã hóa văn bản (Text Encoding)

- **Đầu vào:** Văn bản thô $Y$.
- **Hàm xử lý:** Sử dụng [Byte Pair Encoding (BPE)](https://en.wikipedia.org/wiki/Byte-pair_encoding) và Text Encoder để căn chỉnh không gian ngữ nghĩa với token giọng nói.
- **Công thức:**
$$\bar{Y} = \text{TextEncoder}(\text{BPE}(Y))$$
*Đầu ra $\bar{Y} = {\bar{y}_u}$ là chuỗi mã hóa văn bản.*

### Bước 2.2: Xây dựng chuỗi đầu vào (Sequence Construction)

- **Đầu vào:** Mã hóa văn bản $\bar{Y}$, Vector đặc trưng người nói $v$ (từ mô hình voice-print), và các token đặc biệt.
- **Hàm cấu trúc chuỗi:**
$$\text{Input Sequence} = [S, v, {\bar{y}*u}*{u \in [1:U]}, T, {\mu_l}_{l \in [1:L]}, E]$$
*Trong đó: $S$ (Start), $T$ (Separator), $E$ (End).*

### Bước 2.3: Dự đoán Token (Auto-regressive Prediction)

- **Đầu vào:** Chuỗi token đã sinh ra trước đó.
- **Hàm tối ưu hóa:** LLM tối thiểu hóa hàm mất mát Cross-Entropy để dự đoán xác suất token tiếp theo.
- **Công thức:**
$$L_{LLM} = -\frac{1}{L+1} \sum_{l=1}^{L+1} \log q(\mu_l)$$
*Trong đó $q(\mu_l)$ là xác suất hậu nghiệm được tính qua lớp Softmax của LLM,.*

---

## Giai Đoạn 3: Tổng Hợp Mel Spectrogram (Conditional Flow Matching)

Đây là thành phần thay thế cho mô hình khuếch tán (Diffusion), sử dụng phương pháp **Optimal-Transport Conditional Flow Matching (OT-CFM)** để chuyển token thành phổ âm thanh.

### Bước 3.1: Định nghĩa luồng thời gian (ODE Definition)

Quá trình sinh dữ liệu được mô tả bằng một phương trình vi phân thường (ODE) chuyển đổi từ nhiễu sang dữ liệu thực.

- **Hàm vi phân:**
$$\frac{d}{dt} \phi_t(X) = v_t(\phi_t(X), t)$$
*Với điều kiện biên: $\phi_0(X) \sim \mathcal{N}(0, I)$ (Nhiễu chuẩn) và $\phi_1(X) \sim p_1(X)$ (Phân phối dữ liệu thực).*

### Bước 3.2: Xấp xỉ trường vector tối ưu (Optimal Transport Path)

CosyVoice huấn luyện mạng nơ-ron để khớp với một đường dẫn nội suy tuyến tính giữa nhiễu ($X_0$) và dữ liệu thực ($X_1$).

- **Đường dẫn tối ưu (Ground Truth Flow):**
$$\phi_t^{OT}(X_0, X_1) = (1 - (1 - \sigma)t)X_0 + tX_1$$
- **Mục tiêu huấn luyện (Vector Field Matching):** Mạng nơ-ron $NN_{\theta}$ học để xấp xỉ đạo hàm của đường dẫn trên.
$$v_t(\phi_t^{OT}(X_0, X_1)|\theta) = \text{NN}_{\theta}(\phi_t^{OT}(X_0, X_1), t; v, {\mu_l}, \tilde{X}_1)$$
*Các điều kiện đầu vào bao gồm: Vector người nói $v$, chuỗi token ${\mu_l}$, và Mel spectrogram bị che $\tilde{X}_1$.*

### Bước 3.3: Lấy mẫu với hướng dẫn (Inference with Classifier-free Guidance)

Khi sinh giọng nói, mô hình sử dụng kỹ thuật Classifier-free Guidance (CFG) để tăng cường chất lượng và độ chính xác theo điều kiện.

- **Hàm điều chỉnh vector trường:**
$$\tilde{v}_t(\dots) = (1 + \beta) \cdot v_t(\dots|\Psi) - \beta \cdot v_t(\dots)$$
*Trong đó $\Psi$ là các điều kiện (văn bản, giọng mẫu), $\beta$ là độ mạnh hướng dẫn (thường là 0.7).*

> Chi tiết phụ trợ: CosyVoice sử dụng một Cosine Scheduler cho bước thời gian $t$ để tập trung nhiều bước sinh vào giai đoạn đầu khó khăn hơn: $t := 1 - \cos(\frac{t\pi}{2})$,.
> 

---

## Giai Đoạn 4: Tạo Sóng Âm (Vocoder)

- **Đầu vào:** Mel spectrogram $X_1$ được tạo ra từ Flow Matching (tại $t=1$).
- **Hàm xử lý:** Sử dụng mô hình **HiFi-GAN**.
- **Công thức:**
$$\text{Waveform} = \text{HiFiGAN}(X_1)$$
*Kết quả là tín hiệu âm thanh thô có thể nghe được.*

---

### Tổng Kết

Dưới góc nhìn toán học, CosyVoice là sự kết hợp tinh tế giữa việc **rời rạc hóa tín hiệu** (VQ) để nén thông tin ngữ nghĩa và **giải phương trình vi phân** (Flow Matching) để khôi phục lại độ chi tiết âm học. Việc sử dụng token có giám sát ($S^3$) chính là chìa khóa giúp mô hình đạt được sự nhất quán về nội dung cao hơn so với các phương pháp trước đây.

### Tài Liệu Tham Khảo

- [CosyVoice: Zero-shot Multilingual TTS with Supervised Semantic Tokens](https://arxiv.org/abs/2407.05407)