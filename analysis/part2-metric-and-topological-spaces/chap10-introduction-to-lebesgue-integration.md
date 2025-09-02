---
sidebar_position: 3
---

# Chương 10: Giới thiệu về Tích phân Lebesgue (Introduction to Lebesgue Integration)

*Chương này giới thiệu một lý thuyết tích phân mạnh mẽ hơn nhiều so với tích phân Riemann, làm nền tảng cho lý thuyết xác suất hiện đại và các không gian hàm $L^p$. Thay vì chia miền xác định (trục x), tích phân Lebesgue chia miền giá trị (trục y).*

***

### **Độ đo (Measure) và Hàm đo được (Measurable Functions)**

#### 1. Khái niệm, Cách hiểu đơn giản:
**Độ đo (`measure`)** là sự tổng quát hóa của các khái niệm "độ dài", "diện tích", "thể tích". Nó là một quy tắc gán một "kích thước" (một số không âm) cho các tập con của một không gian. **Hàm đo được (`measurable function`)** là một hàm "cư xử tốt" đối với cấu trúc độ đo này; nó không làm "xáo trộn" thông tin về kích thước. Cụ thể, nghịch ảnh của một tập có "kích thước" đo được qua một hàm đo được cũng phải là một tập có "kích thước" đo được.

#### 2. Định nghĩa toán học:
* **$\sigma$-algebra:** Một họ $\mathcal{M}$ các tập con của $X$ là một $\sigma$-algebra nếu nó đóng kín với phép lấy phần bù và phép hợp đếm được.
* **Measure:** Một hàm $\mu: \mathcal{M} \to [0, \infty]$ là một `measure` nếu $\mu(\emptyset)=0$ và nó có tính cộng tính đếm được (countably additive).
* **Measurable Function:** Một hàm $f: X \to \mathbb{R}$ là đo được nếu với mọi tập Borel $B \subset \mathbb{R}$, nghịch ảnh $f^{-1}(B)$ là một tập đo được trong $X$.
* **Lebesgue Measure:** Là một `measure` cụ thể trên $\mathbb{R}^n$ trùng với khái niệm độ dài, diện tích, thể tích thông thường.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Lý thuyết độ đo cho phép chúng ta gán "kích thước" cho những tập hợp rất phức tạp, ví dụ như tập Cantor (một tập không đếm được nhưng có độ đo Lebesgue bằng 0). Nó cung cấp một nền tảng vững chắc để định nghĩa xác suất: một không gian xác suất chính là một không gian đo được có tổng độ đo bằng 1.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Probability Theory:** Toàn bộ lý thuyết xác suất hiện đại được xây dựng trên lý thuyết độ đo. Một biến ngẫu nhiên là một hàm đo được. Mọi khái niệm trong ML liên quan đến xác suất (ví dụ: hàm mật độ xác suất - PDF, các phương pháp Bayesian, mô hình đồ thị xác suất) đều dựa trên nền tảng này.

***

### **Tích phân Lebesgue và các Định lý Hội tụ**

#### 1. Khái niệm, Cách hiểu đơn giản:
**Tích phân Lebesgue** tính "diện tích dưới đồ thị" bằng một cách thông minh hơn tích phân Riemann. Thay vì cắt theo chiều dọc (trục x), nó cắt theo chiều ngang (trục y). Hãy tưởng tượng việc đếm tiền: tích phân Riemann giống như đi qua từng tờ tiền trong ví và cộng dồn giá trị của chúng; tích phân Lebesgue giống như việc gom tất cả các tờ $1, sau đó gom tất cả các tờ $5, v.v., rồi nhân số lượng với mệnh giá và cộng lại. Cách thứ hai hiệu quả hơn với các hàm "phức tạp". Các **định lý hội tụ** là "vũ khí tối thượng" của nó, cho phép ta đổi chỗ phép lấy giới hạn và tích phân một cách dễ dàng, điều mà tích phân Riemann rất hạn chế.

#### 2. Định nghĩa toán học:
* **Lebesgue Integral:** Tích phân $\int_X f d\mu$ được định nghĩa bằng cách:
    1. Xây dựng cho các hàm đơn giản (simple functions).
    2. Mở rộng cho các hàm không âm đo được.
    3. Mở rộng cho các hàm đo được bất kỳ.
* **Monotone Convergence Theorem (MCT):** Nếu $\{f_n\}$ là một dãy hàm không âm đo được, tăng và hội tụ điểm về $f$, thì $\lim_{n \to \infty} \int f_n d\mu = \int f d\mu$.
* **Fatou's Lemma:** Cung cấp một bất đẳng thức cho giới hạn dưới của tích phân.
* **Dominated Convergence Theorem (DCT):** Nếu $\{f_n\}$ hội tụ điểm về $f$, và tồn tại một hàm khả tích $g$ sao cho $|f_n| \le g$ với mọi $n$, thì $\lim_{n \to \infty} \int f_n d\mu = \int f d\mu$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Ý nghĩa lớn nhất là về mặt giải tích. Các định lý hội tụ, đặc biệt là DCT, là công cụ lao động chính trong giải tích hiện đại, lý thuyết xác suất và phương trình đạo hàm riêng. Chúng đảm bảo rằng các quá trình giới hạn, vốn rất phổ biến trong toán học ứng dụng, có thể được xử lý một cách an toàn và chặt chẽ.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Expectation (Kỳ vọng):** Kỳ vọng của một biến ngẫu nhiên, $E[X]$, được định nghĩa chính xác là tích phân Lebesgue của biến ngẫu nhiên đó đối với độ đo xác suất. Các định lý hội tụ được sử dụng liên tục trong việc chứng minh sự hội tụ của các thuật toán lặp, ví dụ như chứng minh rằng kỳ vọng của gradient trong Stochastic Gradient Descent (SGD) hội tụ về gradient thực sự.

***

### **Không gian $L^p$ (Lp spaces)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Không gian $L^p$ là một không gian `vector` mà các phần tử của nó là các hàm số. "Độ dài" (norm) của một hàm trong không gian này được đo bằng tích phân Lebesgue của lũy thừa bậc $p$ của giá trị tuyệt đối của nó. Đây là sự tổng quát hóa vô hạn chiều của không gian vector $\mathbb{R}^n$ với $p$-norm. Ví dụ, $L^2$ là không gian của các hàm có "năng lượng" hữu hạn.

#### 2. Định nghĩa toán học:
Không gian $L^p(X, \mu)$ (với $1 \le p < \infty$) là không gian của tất cả các hàm đo được $f$ trên $X$ sao cho $\|f\|_p < \infty$, với **$L^p$-norm** được định nghĩa là:
$$ \|f\|_p = \left( \int_X |f|^p d\mu \right)^{1/p} $$
Với $p=\infty$, $L^\infty$-norm là `essential supremum` của hàm.
Một kết quả quan trọng là các không gian $L^p$ là các không gian Banach (đầy đủ).

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Các không gian $L^p$ là "sân khấu" chính diễn ra phần lớn các hoạt động của giải tích hàm và giải tích hiện đại. Đặc biệt, không gian $L^2$ là một không gian Hilbert, nơi có các khái niệm về góc và phép chiếu, làm nền tảng cho chuỗi Fourier và cơ học lượng tử.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Regularization (Điều chuẩn):** Trong các mô hình tuyến tính, $L^2$ regularization (Ridge) và $L^1$ regularization (Lasso) được sử dụng để ngăn chặn overfitting bằng cách thêm một thành phần phạt vào hàm mất mát, tương ứng là bình phương của $L^2$-norm và $L^1$-norm của vector trọng số. Khái niệm này được mở rộng cho các không gian hàm trong các phương pháp như Kernel Ridge Regression, nơi ta tối ưu hóa các hàm trong một không gian Hilbert $L^2$.