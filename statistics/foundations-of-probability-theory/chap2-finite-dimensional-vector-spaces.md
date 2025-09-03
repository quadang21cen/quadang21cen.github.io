---
sidebar_position: 2
---
# Chương 2: Biến ngẫu nhiên và Phân phối (Random Variables and Distributions)

Chào mừng các bạn đến với Chương 2. Ở chương trước, chúng ta đã xây dựng ngôn ngữ xác suất cho các "biến cố" (events). Tuy nhiên, trong khoa học và kỹ thuật, chúng ta thường quan tâm đến các giá trị *số* gắn liền với kết quả của một thí nghiệm ngẫu nhiên. Chương này sẽ giới thiệu công cụ trung tâm để làm điều đó: **Biến ngẫu nhiên**. Chúng ta sẽ học cách mô tả hành vi của chúng thông qua các hàm phân phối.

---

### **Khái niệm 1: Biến ngẫu nhiên (`Random Variable`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Các kết quả của một thí nghiệm không phải lúc nào cũng là số. Ví dụ: tung đồng xu cho ra "sấp" hoặc "ngửa"; một bệnh nhân có thể "bị bệnh" hoặc "khỏe mạnh". Để áp dụng các công cụ toán học mạnh mẽ như giải tích, chúng ta cần một cách để ánh xạ những kết quả trừu tượng này thành các con số thực. Biến ngẫu nhiên chính là cây cầu nối giữa không gian mẫu trừu tượng và trục số thực quen thuộc.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **biến ngẫu nhiên** không phải là "biến số" hay "ngẫu nhiên" theo nghĩa thông thường. Nó là một **hàm** xác định rõ ràng, một "cỗ máy" nhận đầu vào là một kết quả từ không gian mẫu (ví dụ: "sấp") và cho ra đầu ra là một con số (ví dụ: số 0). Sự "ngẫu nhiên" nằm ở chỗ chúng ta không biết kết quả nào của không gian mẫu sẽ xảy ra, do đó chúng ta không biết giá trị số nào mà biến ngẫu nhiên sẽ nhận.

#### 3. Định nghĩa toán học:
Cho một không gian xác suất $(\Omega, F, P)$, một **biến ngẫu nhiên** (`random variable`) $X$ là một hàm $X: \Omega \to \mathbb{R}$ sao cho với mọi số thực $x$, tập hợp $\{\omega \in \Omega | X(\omega) \le x\}$ là một biến cố thuộc $F$. Điều kiện này đảm bảo rằng chúng ta có thể tính xác suất cho các câu hỏi như "$P(X \le x)$".

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Thí nghiệm tung một đồng xu cân bằng 2 lần.
    * Không gian mẫu $\Omega = \{HH, HT, TH, TT\}$.
    * Hãy định nghĩa biến ngẫu nhiên $X$ là "số mặt ngửa (Tails)".
    * Đây là một hàm: $X(HH) = 0$, $X(HT) = 1$, $X(TH) = 1$, $X(TT) = 2$.
    * $X$ ánh xạ từ không gian mẫu $\Omega$ đến tập các giá trị số $\{0, 1, 2\}$.
* **Phản ví dụ**: Trong toán học nâng cao, có thể xây dựng các hàm từ $\Omega \to \mathbb{R}$ nhưng không phải là biến ngẫu nhiên vì chúng tạo ra các tập hợp quá "kỳ dị" không thuộc $\sigma$-algebra $F$ (không thể đo lường xác suất). Tuy nhiên, trong hầu hết các ứng dụng thực tế, mọi hàm hợp lý mà chúng ta định nghĩa đều là biến ngẫu nhiên.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Biến ngẫu nhiên là một cách "dán nhãn số" cho mọi kết quả trong không gian mẫu. Nó chiếu (projects) toàn bộ không gian mẫu phức tạp lên một đối tượng đơn giản hơn nhiều là trục số thực, nơi chúng ta có thể sử dụng các công cụ của giải tích.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Đầu ra của một mô hình học máy gần như luôn là một biến ngẫu nhiên. Ví dụ, trong một mô hình hồi quy dự đoán giá nhà, đầu ra là một biến ngẫu nhiên liên tục. Trong một mô hình phân loại dự đoán email là "spam" hay "không spam", chúng ta có thể định nghĩa đầu ra là một biến ngẫu nhiên Bernoulli nhận giá trị $1$ (spam) hoặc $0$ (không spam).

---

### **Khái niệm 2: Hàm Khối/Mật độ Xác suất (PMF/PDF)**

#### 1. Động lực / Vấn đề cần giải quyết:
Khi đã có biến ngẫu nhiên, chúng ta không còn quan tâm nhiều đến từng kết quả riêng lẻ trong $\Omega$ nữa. Thay vào đó, câu hỏi trọng tâm là: "Xác suất để biến ngẫu nhiên $X$ nhận một giá trị cụ thể (hoặc rơi vào một khoảng cụ thể) là bao nhiêu?" Chúng ta cần một hàm để mô tả sự phân bố xác suất này trên trục số.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Hàm khối xác suất (`Probability Mass Function - PMF`)**: Dùng cho biến ngẫu nhiên **rời rạc**. Nó giống như việc đặt các "quả cân" có trọng lượng khác nhau tại các điểm cụ thể trên trục số. Tổng trọng lượng của tất cả các quả cân phải bằng 1. $p(x) = P(X=x)$.
* **Hàm mật độ xác suất (`Probability Density Function - PDF`)**: Dùng cho biến ngẫu nhiên **liên tục**. Vì xác suất tại một điểm chính xác bất kỳ bằng 0, chúng ta không thể dùng "quả cân". Thay vào đó, hãy tưởng tượng một "lớp bụi" có mật độ khác nhau được rải trên trục số. Mật độ bụi tại điểm $x$ là $f(x)$. Để tìm xác suất $X$ rơi vào một khoảng, ta "hốt" toàn bộ bụi trong khoảng đó và cân nó lên (tức là lấy tích phân). Tổng khối lượng của toàn bộ bụi trên trục số phải bằng 1.

#### 3. Định nghĩa toán học:
* Nếu $X$ là biến ngẫu nhiên rời rạc, **PMF** của nó là hàm $p_X(x) = P(X=x)$. Hàm này thỏa mãn $p_X(x) \ge 0$ và $\sum_x p_X(x) = 1$.
* Nếu $X$ là biến ngẫu nhiên liên tục, **PDF** của nó là hàm $f_X(x)$ thỏa mãn $f_X(x) \ge 0$ và $\int_{-\infty}^{\infty} f_X(x) dx = 1$. Xác suất để $X$ rơi vào khoảng $[a, b]$ được tính bằng $P(a \le X \le b) = \int_a^b f_X(x) dx$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (PMF)**: Tung xúc xắc cân bằng. $X$ là kết quả. PMF là $p_X(k) = 1/6$ với $k \in \{1, 2, 3, 4, 5, 6\}$, và $p_X(k) = 0$ với các giá trị khác.
* **Ví dụ (PDF)**: Phân phối đều (`Uniform`) trên $[0, 2]$. PDF là $f_X(x) = 1/2$ nếu $0 \le x \le 2$, và $f_X(x) = 0$ nếu ngược lại. Xác suất $P(0.5 \le X \le 1)$ là $\int_{0.5}^1 (1/2) dx = 1/4$.
* **Phản ví dụ**: Hàm $f(x) = e^{-x}$ với $x \ge 0$ không phải là một PDF hợp lệ vì $\int_0^{\infty} e^{-x} dx = 1$, nhưng nó không xác định cho $x<0$ và tổng tích phân trên toàn trục số không bằng 1 (trừ khi định nghĩa $f(x)=0$ cho $x<0$). Hàm $g(x) = 2e^{-2x}$ với $x \ge 0$ (và 0 nếu ngược lại) mới là một PDF hợp lệ (của phân phối mũ).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
PMF là một biểu đồ cột, với tổng chiều cao của tất cả các cột bằng 1. PDF là một đường cong, với tổng diện tích dưới đường cong bằng 1. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Trong các mô hình sinh (`Generative Models`) như **Generative Adversarial Networks (GANs)** hoặc **Variational Autoencoders (VAEs)**, mục tiêu là học một phân phối dữ liệu phức tạp (ví dụ: phân phối của tất cả các ảnh khuôn mặt người). Về cơ bản, mạng nơ-ron đang cố gắng học một hàm (PDF) $f(x)$ sao cho khi lấy mẫu từ nó, ta sẽ tạo ra được dữ liệu mới (ảnh khuôn mặt mới) trông giống thật.

---

### **Khái niệm 3: Hàm phân phối tích lũy (`Cumulative Distribution Function - CDF`)**

#### 1. Động lực / Vấn đề cần giải quyết:
PMF và PDF là những công cụ tuyệt vời, nhưng chúng có hai dạng khác nhau cho hai loại biến ngẫu nhiên. Liệu có một công cụ **duy nhất**, một ngôn ngữ chung, có thể mô tả hoàn toàn bất kỳ biến ngẫu nhiên nào, dù là rời rạc, liên tục, hay hỗn hợp?

#### 2. Khái niệm, Cách hiểu đơn giản:
**Hàm phân phối tích lũy (CDF)**, ký hiệu là $F_X(x)$, trả lời một câu hỏi rất đơn giản và phổ quát: "Xác suất để biến ngẫu nhiên $X$ nhận giá trị nhỏ hơn hoặc bằng $x$ là bao nhiêu?". Hãy tưởng tượng bạn đang đi từ trái sang phải trên trục số và "tích lũy" tất cả khối lượng xác suất (dù là "quả cân" hay "bụi") mà bạn gặp. Giá trị của CDF tại điểm $x$ chính là tổng khối lượng bạn đã tích lũy được cho đến điểm đó.

#### 3. Định nghĩa toán học:
**CDF** của một biến ngẫu nhiên $X$ được định nghĩa là $F_X(x) = P(X \le x)$ với mọi $x \in \mathbb{R}$.
CDF có các tính chất sau:
1.  $0 \le F_X(x) \le 1$.
2.  $F_X(x)$ là một hàm không giảm (non-decreasing).
3.  $\lim_{x \to -\infty} F_X(x) = 0$ và $\lim_{x \to \infty} F_X(x) = 1$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Rời rạc)**: Tung đồng xu cân bằng một lần. $X=1$ nếu sấp, $X=0$ nếu ngửa.
    * CDF $F_X(x)$ sẽ bằng $0$ nếu $x < 0$.
    * Tại $x=0$, nó nhảy lên $0.5$. $F_X(x)=0.5$ với $0 \le x < 1$.
    * Tại $x=1$, nó nhảy lên $1$. $F_X(x)=1$ với $x \ge 1$.
    * Đây là một hàm bậc thang (step function). 
* **Ví dụ (Liên tục)**: Phân phối đều trên $[0, 1]$. PDF là $f(t)=1$ trên $[0,1]$.
    * CDF $F_X(x) = \int_{-\infty}^x f(t)dt$.
    * $F_X(x) = 0$ nếu $x < 0$.
    * $F_X(x) = x$ nếu $0 \le x \le 1$.
    * $F_X(x) = 1$ nếu $x > 1$.
    * Đây là một hàm dốc tuyến tính.
* **Phản ví dụ**: Hàm $y=x^2$ không thể là một CDF vì nó không bị chặn trên bởi 1. Hàm $y=\sin(x)$ cũng không thể là CDF vì nó không phải là hàm không giảm.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
CDF là "tích phân" của PDF (đối với biến liên tục) hoặc "tổng tích lũy" của PMF (đối với biến rời rạc). Nó luôn bắt đầu từ 0 ở xa bên trái, đi lên (hoặc giữ nguyên) đến 1 ở xa bên phải. Độ dốc của CDF tại một điểm cho biết "mật độ" xác suất tại điểm đó. Chỗ nào CDF dốc đứng nghĩa là mật độ xác suất cao, chỗ nào nó đi ngang nghĩa là mật độ xác suất bằng 0.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Kỹ thuật **lấy mẫu biến đổi ngược (`Inverse Transform Sampling`)** là một phương pháp cơ bản để sinh số ngẫu nhiên theo một phân phối bất kỳ, và nó hoàn toàn dựa vào CDF. Ý tưởng là: nếu bạn có thể tính hàm ngược của CDF, $F_X^{-1}(u)$, bạn chỉ cần sinh một số ngẫu nhiên $U$ theo phân phối đều trên $[0, 1]$ rồi tính $X = F_X^{-1}(U)$. Kết quả $X$ sẽ tuân theo phân phối mong muốn. Kỹ thuật này là nền tảng cho nhiều mô phỏng phức tạp và các mô hình xác suất.