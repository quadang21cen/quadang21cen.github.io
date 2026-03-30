---
slug: diffusion-explained
title: Diffusion Models - dưới góc nhìn toán học
description: Bài viết giải thích về Diffusion Models.
authors: [quachdang]
tags: [computer-science]
image: /img/diffusion.png
---

# Diffusion Models - dưới góc nhìn toán học

Trong thế giới Generative AI, nếu GAN là cuộc đối đầu giữa tạo sinh rồi phân biệt thật giả, VAE là kỹ thuật để nén thông tin, thì **Diffusion Model** là một kỹ thuật rất lạ, phá huỷ thông tin để khai phá thông tin :D, nghe thì rất khó hiểu. Thực tế diffusion không phải là "học thông tin", mà là học **Gradient của hàm mật độ xác suất (Score Function)** trong một không gian đa tạp đã được làm trơn. Bài viết này sẽ mổ xẻ kiến trúc **DDPM (Denoising Diffusion Probabilistic Models)** - ông tổ của Stable Diffusion và DALL-E 2 - theo từng step tường minh nhất.
<!-- truncate -->
---

## PHẦN 1: TƯ DUY TỔNG QUÁT (THE BIG PICTURE)

Chúng ta có hai chiều thời gian:

1. **Quá trình Thuận (Forward / Diffusion Process):** Biến dữ liệu ($X_0$) thành Nhiễu Gaussian thuần túy ($X_T$). Đây là quá trình vật lý tự nhiên (Entropy tăng dần).
2. **Quá trình Nghịch (Reverse / Denoising Process):** Dùng Mạng Neural để đảo ngược thời gian, biến Nhiễu ($X_T$) quay lại thành Dữ liệu ($X_0$).


---

## PHẦN 2: THUẬT TOÁN CHI TIẾT (STEP-BY-STEP)

### Giai đoạn 1: Quá trình Thuận (Forward Process) - "Máy Nghiền Dữ Liệu"

Đây là quá trình **CỐ ĐỊNH** (không cần học). Chúng ta từ từ tiêm chất độc (nhiễu) vào bức ảnh theo một lịch trình định sẵn.

**1. Input & Output:**

* **Input:** Ảnh gốc (từ tập dữ liệu).
* **Output:** Ảnh nhiễu tại bất kỳ thời điểm  nào.

**2. Công thức Toán học (Mắt xích Markov):**
Tại mỗi bước nhỏ, ta thêm một lượng nhiễu Gaussian :


* : Lịch trình phương sai (Variance Schedule), thường tăng dần từ  đến .

**3. Công thức "Nhảy cóc" (Quan trọng cho Training):**
Thay vì tính lần lượt , toán học cho phép ta nhảy thẳng từ  tới .
Đặt  và . Ta có:


*(Với  là nhiễu chuẩn tắc)*.

> **Ý nghĩa:** Bức ảnh  là sự pha trộn tuyến tính giữa Ảnh gốc (tín hiệu) và Nhiễu trắng. Khi , , bức ảnh trở thành nhiễu hoàn toàn.

---

### Giai đoạn 2: Quá trình Training (Learning) - "Dạy La Bàn"

Đây là lúc AI vào cuộc. Ta không dạy AI vẽ tranh. Ta dạy AI **nhìn vào một đống hỗn độn và đoán xem lớp nhiễu nào đã được thêm vào.**

**1. Input & Output của Model:**

* **Input:** Bức ảnh nhiễu  và nhãn thời gian .
* **Model:** Mạng U-Net (hoặc Transformer) với tham số .
* **Output:** Vector nhiễu dự đoán .

**2. Hàm Loss (Mục tiêu tối ưu):**
Chúng ta muốn nhiễu dự đoán () giống với nhiễu thật () nhất có thể.
Hàm Loss đơn giản là **MSE (Mean Squared Error)**:

**3. Bản chất Toán học (Tại sao lại đoán Nhiễu?):**
Tại sao không đoán ảnh gốc ?
Theo **Lý thuyết Score Matching**, việc đoán nhiễu  tương đương với việc học **Score Function** (Gradient của log mật độ):


> **Giải thích:** Vector nhiễu  chính là vector chỉ hướng từ "Ảnh gốc" ra "Ảnh nhiễu". Vậy vector đối ngẫu  chính là hướng dẫn đường để quay về "Ảnh gốc" (vùng mật độ cao).

---

### Giai đoạn 3: Quá trình Sinh ảnh (Sampling / Inference) - "Hành Trình Trở Về"

Đây là lúc phép màu xảy ra. Chúng ta bắt đầu từ hư vô và điêu khắc ra bức ảnh.

**1. Khởi tạo:**

* : Một bức tranh nhiễu trắng ngẫu nhiên.

**2. Vòng lặp Lội ngược dòng (Reverse Diffusion):**
Chúng ta lặp từ  về . Tại mỗi bước, ta thực hiện phép **Gỡ nhiễu (Denoising)**.

**Công thức Cập nhật Trạng thái (Update Rule):**


**Giải thích từng thành phần:**

1. **Phần Định hướng:**
* : AI nhìn  và bảo "Đây là phần rác (nhiễu)".
* Ta lấy  trừ đi phần rác đó (có trọng số) để lộ ra phần "ảnh thật" rõ hơn.
* Đây chính là hành động "trượt xuống đồi" theo Score Function.


2. **Phần Ngẫu nhiên ():**
* .
* Tại sao đã gỡ nhiễu lại còn cộng thêm nhiễu?
* **Lý do Toán học:** Nếu không có , quá trình này trở thành ODE tất định (như Flow Matching), nó sẽ sụp đổ về một điểm trung bình mờ nhạt. Việc thêm nhiễu nhẹ giúp mô hình duy trì tính chất phân phối (Langevin Dynamics), cho phép nó "rung lắc" để rơi vào các chi tiết sắc nét (các cực đại cục bộ của đa tạp).



---

## TỔNG KẾT: TẠI SAO NÓ HIỆU QUẢ?

Để kết lại bài viết, hãy hình dung bằng hình học Topology:

1. **Dữ liệu gốc (Manifold):** Là một tờ giấy bị vo viên lại thành một hình thù phức tạp, trôi nổi trong không gian 3D.
* Nếu ta đứng ngẫu nhiên trong không gian, ta không biết tờ giấy ở đâu (Gradient = 0).


2. **Diffusion (Thêm nhiễu):** Là việc ta "thổi phồng" tờ giấy đó lên thành một đám mây khí bao trùm cả căn phòng.
* Bây giờ đứng ở đâu ta cũng ngửi thấy mùi khí. Mùi càng đậm thì càng gần tờ giấy gốc.


3. **Training (Học Score):** Là việc dạy AI ngửi mùi khí và vẽ ra các mũi tên chỉ hướng "Về phía mùi đậm hơn".
4. **Sampling (Sinh ảnh):** Là việc ta thả một hạt bụi vào phòng, và bảo nó cứ bay theo các mũi tên chỉ dẫn. Cuối cùng, nó sẽ đậu lại chính xác trên bề mặt tờ giấy gốc.

Đó chính là vẻ đẹp của Toán học trong AI: **Biến sự hỗn loạn (Chaos) thành công cụ để tìm kiếm trật tự (Order).**

---

*Bài viết này nằm trong chuỗi series "Deep Dive into Generative AI" dành cho các kỹ sư AI muốn tìm hiểu sâu về bản chất toán học.*




