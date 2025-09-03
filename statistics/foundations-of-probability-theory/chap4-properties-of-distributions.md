---
sidebar_position: 4
---
# Chương 4: Các Đặc trưng của Phân phối (Properties of Distributions)

chúng ta đã đi qua hành trình mô tả phân phối xác suất bằng các hàm PMF, PDF hay CDF. Đó là những mô tả đầy đủ nhưng phức tạp. Trong thực tế, chúng ta thường cần những con số súc tích hơn để tóm tắt các đặc tính cốt lõi của một phân phối: đâu là "trung tâm" của nó? Nó "phân tán" rộng hay hẹp? Hình dạng của nó "lệch" hay "nhọn"? Chương này sẽ giới thiệu các công cụ để định lượng những đặc trưng đó.

---

### **Khái niệm 1: Kỳ vọng (`Expectation`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một phân phối xác suất chứa toàn bộ thông tin về một biến ngẫu nhiên, nhưng nó quá cồng kềnh. Chúng ta cần một con số duy nhất để trả lời câu hỏi: "Nếu lặp lại thí nghiệm này vô số lần, giá trị trung bình của kết quả sẽ là bao nhiêu?" Con số này sẽ đại diện cho "trung tâm khối lượng" của phân phối.

#### 2. Khái niệm, Cách hiểu đơn giản:
**Kỳ vọng**, hay giá trị kỳ vọng, chính là **trung bình có trọng số** của tất cả các giá trị có thể có của một biến ngẫu nhiên, trong đó trọng số chính là xác suất tương ứng của mỗi giá trị. Hãy tưởng tượng một thanh gỗ có nhiều quả nặng treo tại các vị trí khác nhau. Kỳ vọng chính là điểm thăng bằng của thanh gỗ đó.

#### 3. Định nghĩa toán học:
Kỳ vọng của một biến ngẫu nhiên $X$, ký hiệu là $E[X]$, được định nghĩa là:
* Với $X$ rời rạc có PMF $p(x)$: $E[X] = \sum_x x \cdot p(x)$.
* Với $X$ liên tục có PDF $f(x)$: $E[X] = \int_{-\infty}^{\infty} x \cdot f(x) dx$.
Kỳ vọng của một hàm của biến ngẫu nhiên, $g(X)$, là $E[g(X)] = \int_{-\infty}^{\infty} g(x)f(x)dx$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Tung một con xúc xắc công bằng, $X$ là kết quả.
    $E[X] = 1 \cdot \frac{1}{6} + 2 \cdot \frac{1}{6} + 3 \cdot \frac{1}{6} + 4 \cdot \frac{1}{6} + 5 \cdot \frac{1}{6} + 6 \cdot \frac{1}{6} = \frac{21}{6} = 3.5$.
    Lưu ý rằng giá trị kỳ vọng (3.5) không nhất thiết phải là một kết quả có thể xảy ra.
* **Phản ví dụ**: Không phải biến ngẫu nhiên nào cũng có kỳ vọng hữu hạn. Xét phân phối Cauchy, có PDF là $f(x) = \frac{1}{\pi(1+x^2)}$. Tích phân $\int_{-\infty}^{\infty} x \cdot \frac{1}{\pi(1+x^2)} dx$ không hội tụ. Do đó, phân phối Cauchy không có kỳ vọng. Điều này có nghĩa là nếu bạn lấy trung bình mẫu từ phân phối này, giá trị trung bình sẽ không ổn định quanh một con số nào cả.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Nếu xem PDF $f(x)$ là mật độ khối lượng dọc theo một trục, thì kỳ vọng $E[X]$ chính là tọa độ của **tâm khối (`center of mass`)** của vật thể đó. Nó là điểm mà bạn có thể đặt một mũi kim để toàn bộ phân phối được cân bằng.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Hàm mất mát (`loss function`) trong hầu hết các mô hình học máy là một dạng kỳ vọng. Ví dụ, hàm mất mát **Mean Squared Error (MSE)** $L = \frac{1}{N}\sum_{i=1}^N (y_i - \hat{y}_i)^2$ chính là một ước lượng thực nghiệm của kỳ vọng của bình phương sai số, $E[(Y - \hat{Y})^2]$. Mục tiêu của việc huấn luyện mô hình là tìm các tham số để tối thiểu hóa giá trị kỳ vọng này.

---

### **Khái niệm 2: Phương sai và Độ lệch chuẩn (`Variance` and `Standard Deviation`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Biết được "trung tâm" (kỳ vọng) là chưa đủ. Hai phân phối có thể có cùng kỳ vọng nhưng một phân phối thì co cụm quanh trung tâm, trong khi phân phối kia lại trải dài ra rất xa. Chúng ta cần một thước đo cho sự "phân tán" hay "biến động" của phân phối quanh giá trị kỳ vọng của nó.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Phương sai (`Variance`)**: Là kỳ vọng của bình phương khoảng cách từ biến ngẫu nhiên đến kỳ vọng của nó. Nó trả lời câu hỏi: "Trung bình, các giá trị của $X$ nằm cách xa giá trị trung bình $E[X]$ bao nhiêu?". Nó được tính bằng bình phương đơn vị, ví dụ như "mét vuông", gây khó khăn cho việc diễn giải.
* **Độ lệch chuẩn (`Standard Deviation`)**: Đơn giản là căn bậc hai của phương sai. Ưu điểm lớn của nó là có cùng đơn vị với biến ngẫu nhiên ban đầu (ví dụ: "mét"). Nó cho ta một con số trực quan về "độ rộng" điển hình của phân phối.

#### 3. Định nghĩa toán học:
* Phương sai của $X$, ký hiệu là $Var(X)$ hoặc $\sigma^2$, được định nghĩa là:
    $Var(X) = E[(X - E[X])^2]$.
    Một công thức tính toán tiện lợi hơn là $Var(X) = E[X^2] - (E[X])^2$.
* Độ lệch chuẩn của $X$, ký hiệu là $SD(X)$ hoặc $\sigma$, là:
    $\sigma = \sqrt{Var(X)}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Xét một biến ngẫu nhiên Bernoulli, $X=1$ với xác suất $p$ và $X=0$ với xác suất $1-p$.
    * $E[X] = 1 \cdot p + 0 \cdot (1-p) = p$.
    * $E[X^2] = 1^2 \cdot p + 0^2 \cdot (1-p) = p$.
    * $Var(X) = E[X^2] - (E[X])^2 = p - p^2 = p(1-p)$.
    Phương sai lớn nhất khi $p=0.5$ (không chắc chắn nhất) và bằng 0 khi $p=0$ hoặc $p=1$ (chắc chắn hoàn toàn).
* **Phản ví dụ**: Một biến ngẫu nhiên không có kỳ vọng (như phân phối Cauchy) thì cũng sẽ không có phương sai. Ngay cả khi kỳ vọng tồn tại, phương sai cũng có thể không tồn tại. Ví dụ, phân phối Student's t với 2 bậc tự do có kỳ vọng bằng 0, nhưng phương sai của nó là vô hạn.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Nếu kỳ vọng là tâm của phân phối, thì độ lệch chuẩn là một thước đo "bán kính" hiệu dụng của nó. Một phân phối có độ lệch chuẩn nhỏ sẽ trông giống một ngọn núi cao, hẹp. Một phân phối có độ lệch chuẩn lớn sẽ trông giống một ngọn đồi thấp và trải rộng. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Trong **Tài chính tính toán (`Quantitative Finance`)**, rủi ro của một danh mục đầu tư thường được đo bằng độ lệch chuẩn của tỷ suất sinh lời của nó (còn gọi là **độ biến động - volatility**). Các thuật toán tối ưu hóa danh mục đầu tư như lý thuyết của Markowitz tìm cách tối thiểu hóa phương sai (rủi ro) cho một mức kỳ vọng sinh lời cho trước.

---

### **Khái niệm 3: Bất đẳng thức Markov và Chebyshev (`Markov's and Chebyshev's Inequalities`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Đôi khi, chúng ta không biết hoặc không thể tính toán chi tiết toàn bộ phân phối của một biến ngẫu nhiên. Chúng ta có thể chỉ biết kỳ vọng và phương sai của nó. Liệu chỉ với thông tin ít ỏi này, ta có thể nói gì về xác suất của các sự kiện "cực đoan" (ví dụ: xác suất biến ngẫu nhiên nhận giá trị rất lớn, hoặc rất xa trung tâm)?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Bất đẳng thức Markov**: Cung cấp một giới hạn (chặn trên) rất "lỏng" cho xác suất một biến ngẫu nhiên *không âm* nhận giá trị lớn. Nó nói rằng, nếu kỳ vọng của thu nhập hàng năm là 50,000$, thì xác suất có người thu nhập trên 500,000$ phải nhỏ hơn hoặc bằng $50,000 / 500,000 = 1/10$. Nó chỉ dùng thông tin về kỳ vọng.
* **Bất đẳng thức Chebyshev**: Cung cấp một giới hạn chặt hơn bằng cách sử dụng cả kỳ vọng và phương sai. Nó nói rằng, xác suất một biến ngẫu nhiên nằm cách kỳ vọng của nó một khoảng lớn hơn $k$ lần độ lệch chuẩn thì luôn nhỏ hơn hoặc bằng $1/k^2$. Bất kể hình dạng phân phối là gì, ít nhất $1 - 1/k^2$ khối lượng xác suất phải nằm trong khoảng $k$ độ lệch chuẩn quanh giá trị trung bình.

#### 3. Định nghĩa toán học:
* **Bất đẳng thức Markov**: Nếu $X$ là một biến ngẫu nhiên không âm ($P(X \ge 0) = 1$), thì với mọi hằng số $a > 0$:
    $P(X \ge a) \le \frac{E[X]}{a}$.
* **Bất đẳng thức Chebyshev**: Cho biến ngẫu nhiên $X$ có kỳ vọng $\mu$ và phương sai $\sigma^2$ hữu hạn. Với mọi hằng số $k > 0$:
    $P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Chebyshev)**: Điểm thi của một lớp học có giá trị trung bình là 70 và độ lệch chuẩn là 10. Xác suất một sinh viên có điểm nằm ngoài khoảng $[50, 90]$ là bao nhiêu?
    Khoảng $[50, 90]$ tương ứng với $\mu \pm 2\sigma$ ($k=2$).
    Theo Chebyshev, $P(|X - 70| \ge 20) \le \frac{1}{2^2} = \frac{1}{4}$.
    Vậy, xác suất một sinh viên có điểm dưới 50 hoặc trên 90 không quá 25%.
* **Phản ví dụ**: Giới hạn của các bất đẳng thức này thường rất lỏng và không chặt. Nếu chúng ta biết thêm rằng điểm thi tuân theo phân phối chuẩn, thì xác suất nằm ngoài 2 độ lệch chuẩn chỉ là khoảng 5%, chặt hơn nhiều so với 25% của Chebyshev. Các bất đẳng thức này phát huy tác dụng khi chúng ta không biết gì về hình dạng phân phối.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phương sai đo lường sự phân tán, và bất đẳng thức Chebyshev định lượng hóa mối liên hệ trực tiếp giữa phương sai và xác suất ở vùng "đuôi" của phân phối. Nó nói rằng một phân phối không thể có phương sai nhỏ mà lại có nhiều khối lượng xác suất nằm ở rất xa trung tâm. Có một sự đánh đổi bắt buộc giữa độ rộng của phân phối và xác suất của các giá trị cực đoan.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Các bất đẳng thức này là công cụ lý thuyết nền tảng để chứng minh sự hội tụ của nhiều thuật toán học máy. Ví dụ, trong lý thuyết học thống kê (`statistical learning theory`), chúng được sử dụng để chứng minh rằng, với đủ dữ liệu, sai số của mô hình trên tập huấn luyện (`training error`) sẽ gần với sai số trên dữ liệu thực tế (`true error`). Chúng giúp trả lời câu hỏi: "Cần bao nhiêu mẫu để đảm bảo mô hình của chúng ta tổng quát hóa tốt?".