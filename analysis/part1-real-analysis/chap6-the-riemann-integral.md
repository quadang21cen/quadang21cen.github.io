---
sidebar_position: 6
---


# Chương 6: Tích phân Riemann (The Riemann Integral) 

Trong chương này, chúng ta sẽ định nghĩa một cách chặt chẽ ý tưởng trực quan về việc "tính diện tích dưới một đường cong". Chúng ta sẽ xây dựng khái niệm này từ những ý tưởng rất cơ bản về việc xấp xỉ bằng các hình chữ nhật, và khám phá ra mối liên hệ sâu sắc và đẹp đẽ giữa hai quá trình tưởng chừng như ngược nhau: lấy đạo hàm và lấy tích phân.

***

### **Định nghĩa tích phân Riemann bằng tổng Darboux trên và dưới**

#### 1. Khái niệm, Cách hiểu đơn giản:
Làm thế nào để tính diện tích của một hình có đường cong? Ý tưởng của Riemann (và Darboux) là xấp xỉ nó bằng những hình mà ta đã biết cách tính diện tích: các hình chữ nhật.
Ta thực hiện việc này theo hai cách:
1.  **Tổng dưới (Lower Sum):** Vẽ các hình chữ nhật nằm hoàn toàn **bên dưới** đường cong. Tổng diện tích của chúng sẽ luôn nhỏ hơn hoặc bằng diện tích thật. Đây là một sự *đánh giá thấp*.
2.  **Tổng trên (Upper Sum):** Vẽ các hình chữ nhật **phủ hoàn toàn** lên phần diện tích cần tính. Tổng diện tích của chúng sẽ luôn lớn hơn hoặc bằng diện tích thật. Đây là một sự *đánh giá quá cao*.
Ý tưởng cốt lõi là: nếu chúng ta có thể làm cho các hình chữ nhật ngày càng mảnh đi, và sự khác biệt giữa "đánh giá quá cao" và "đánh giá thấp" tiến về 0, thì con số duy nhất bị kẹp ở giữa chính là diện tích thật.

#### 2. Định nghĩa toán học:
Cho một hàm số bị chặn $f$ trên đoạn $[a, b]$ và một **phép phân hoạch (partition)** $P = \{x_0, x_1, \dots, x_n\}$ của $[a, b]$ với $a=x_0 < x_1 < \dots < x_n=b$.
Trên mỗi đoạn con $[x_{i-1}, x_i]$, đặt $m_i = \inf\{f(x) \mid x \in [x_{i-1}, x_i]\}$ và $M_i = \sup\{f(x) \mid x \in [x_{i-1}, x_i]\}$.
* **Tổng Darboux dưới (Lower Darboux Sum):** $L(f, P) = \sum_{i=1}^n m_i (x_i - x_{i-1})$
* **Tổng Darboux trên (Upper Darboux Sum):** $U(f, P) = \sum_{i=1}^n M_i (x_i - x_{i-1})$
Hàm số $f$ được gọi là **khả tích Riemann (Riemann integrable)** trên $[a, b]$ nếu:
$\sup_{P} L(f, P) = \inf_{P} U(f, P)$
Giá trị chung đó được gọi là **tích phân Riemann** của $f$ trên $[a, b]$, ký hiệu là $\int_a^b f(x) dx$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Ý nghĩa hình học vô cùng trực quan. $L(f, P)$ là tổng diện tích của các hình chữ nhật màu xanh nằm gọn bên trong vùng diện tích. $U(f, P)$ là tổng diện tích của các hình chữ nhật màu đỏ phủ lên vùng diện tích. Một hàm số là khả tích nếu khi ta làm cho phép phân hoạch ngày càng "mịn" hơn (các hình chữ nhật ngày càng hẹp đi), thì tổng diện tích của các "phần thừa" màu đỏ nằm phía trên đường cong sẽ co lại dần về 0.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Khái niệm này là nền tảng của **lý thuyết xác suất** cho các biến ngẫu nhiên liên tục. **Hàm mật độ xác suất (Probability Density Function - PDF)** là một đường cong mà diện tích dưới nó trên một khoảng $[a, b]$ cho biết xác suất để biến ngẫu nhiên rơi vào khoảng đó. **Giá trị kỳ vọng (Expected Value)** của một biến ngẫu nhiên, $E[X] = \int x \cdot p(x) dx$, là một tích phân. Mặc dù trong thực tế ta thường tính xấp xỉ bằng tổng hữu hạn (phương pháp Monte Carlo), định nghĩa chặt chẽ của tích phân Riemann đảm bảo rằng các khái niệm này có ý nghĩa toán học.

***

### **Điều kiện khả tích Riemann**

#### 1. Khái niệm, Cách hiểu đơn giản:
Không phải hàm số nào cũng có thể tính được diện tích dưới đồ thị của nó bằng phương pháp Riemann. Một hàm số là **khả tích (integrable)** nếu nó đủ "ngoan ngoãn"—tức là nó không được "dao động" một cách quá điên cuồng. Một cách trực quan, miễn là hàm số liên tục, hoặc chỉ có một số hữu hạn các "bước nhảy" (gián đoạn), thì ta vẫn có thể tính được tích phân của nó.

#### 2. Định nghĩa toán học:
Một hàm số bị chặn $f$ trên $[a, b]$ là khả tích Riemann khi và chỉ khi với mọi $\epsilon > 0$, tồn tại một phép phân hoạch $P$ của $[a, b]$ sao cho $U(f, P) - L(f, P) < \epsilon$.

**Các kết quả quan trọng:**
* Nếu $f$ liên tục trên $[a, b]$, thì $f$ khả tích Riemann trên $[a, b]$.
* Nếu $f$ đơn điệu (monotonic) trên $[a, b]$, thì $f$ khả tích Riemann trên $[a, b]$.
* Nếu $f$ bị chặn trên $[a, b]$ và có một số hữu hạn các điểm gián đoạn, thì $f$ khả tích Riemann trên $[a, b]$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Điều kiện $U(f, P) - L(f, P) < \epsilon$ có nghĩa là tổng diện tích của các "vùng không chắc chắn" (các hình chữ nhật nhỏ nằm giữa tổng trên và tổng dưới) có thể được làm cho nhỏ tùy ý. Điều này là khả thi nếu hàm số đủ "mượt". Đối với các hàm dao động quá mạnh (như hàm Dirichlet, bằng 1 tại các số hữu tỉ và 0 tại các số vô tỉ), vùng không chắc chắn này không bao giờ co lại được, do đó hàm không khả tích.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Điều kiện này cung cấp sự đảm bảo lý thuyết cho các tính toán của chúng ta. Hầu hết các hàm kích hoạt (`activation functions`) như `Sigmoid`, `tanh`, `ReLU` (và các biến thể trơn của nó) đều liên tục hoặc có một số điểm gián đoạn hữu hạn. Điều này đảm bảo rằng các đại lượng tích phân liên quan đến chúng (ví dụ, trong các mô hình xác suất dựa trên năng lượng - `Energy-Based Models`) là có thể tính toán được và có ý nghĩa. Nó đảm bảo rằng các đối tượng toán học mà chúng ta làm việc trong AI là "đủ tốt" để các công cụ của giải tích có thể được áp dụng.

***

### **Các tính chất của tích phân**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là những quy tắc "thông thường" khi làm việc với diện tích. Chúng cho phép chúng ta chia nhỏ các bài toán phức tạp thành các phần đơn giản hơn.
* **Tính cộng:** Diện tích từ A đến C bằng diện tích từ A đến B cộng với diện tích từ B đến C.
* **Tính tuyến tính:** Nếu bạn kéo dãn một đồ thị lên gấp đôi, diện tích dưới nó cũng tăng gấp đôi. Diện tích dưới tổng của hai đồ thị bằng tổng diện tích dưới từng đồ thị.
* **Tính so sánh:** Nếu một đồ thị luôn nằm dưới một đồ thị khác, thì diện tích của nó cũng phải nhỏ hơn.

#### 2. Định nghĩa toán học:
Giả sử $f, g$ là các hàm khả tích trên $[a, b]$ và $k \in \mathbb{R}$.
* **Tính tuyến tính (Linearity):** $\int_a^b (kf(x) + g(x)) dx = k\int_a^b f(x) dx + \int_a^b g(x) dx$.
* **Tính cộng trên khoảng (Additivity):** Nếu $c \in (a, b)$, thì $\int_a^b f(x) dx = \int_a^c f(x) dx + \int_c^b f(x) dx$.
* **Tính đơn điệu (Monotonicity):** Nếu $f(x) \le g(x)$ với mọi $x \in [a, b]$, thì $\int_a^b f(x) dx \le \int_a^b g(x) dx$.
* **Bất đẳng thức tam giác:** $|\int_a^b f(x) dx| \le \int_a^b |f(x)| dx$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Mỗi tính chất đều tương ứng với một thao tác hình học trực quan trên các vùng diện tích. Tính tuyến tính là kéo dãn và chồng các vùng diện tích lên nhau. Tính cộng là ghép các vùng diện tích liền kề. Tính đơn điệu là so sánh kích thước của các vùng diện tích. Bất đẳng thức tam giác nói rằng diện tích của "phần dương" trừ đi "phần âm" sẽ không bao giờ lớn hơn tổng diện tích của cả hai phần.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Các tính chất này được sử dụng liên tục trong các chứng minh lý thuyết của học máy.
* **Tính tuyến tính** là nền tảng cho việc tính giá trị kỳ vọng: $E[aX + bY] = aE[X] + bE[Y]$.
* **Tính đơn điệu** giúp so sánh các mô hình: nếu hàm mất mát của mô hình A luôn nhỏ hơn của mô hình B, thì tổng sai số (tích phân của hàm mất mát) của A cũng sẽ nhỏ hơn.
* **Bất đẳng thức tam giác** cho tích phân là công cụ cốt lõi trong việc chứng minh các **giới hạn sai số (error bounds)** cho các thuật toán học máy, cho thấy sai số của mô hình sẽ không vượt quá một ngưỡng nào đó.