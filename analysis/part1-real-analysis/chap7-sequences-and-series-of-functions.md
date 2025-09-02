---
sidebar_position: 6
---

# Chương 7: Dãy và Chuỗi hàm (Sequences and Series of Functions)

Sau khi đã thành thạo các công cụ để xử lý dãy và chuỗi các con số, bây giờ chúng ta sẽ nâng mức độ trừu tượng lên một bậc: điều gì sẽ xảy ra khi mỗi số hạng trong dãy của chúng ta không phải là một con số, mà là cả một hàm số? Chương này sẽ khám phá các cách khác nhau mà một dãy các đồ thị có thể "biến hình" để hội tụ về một đồ thị cuối cùng, và những hệ quả sâu sắc của quá trình đó.

***

### **Hội tụ điểm (pointwise convergence)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là kiểu hội tụ yếu nhất và trực quan nhất. Hãy tưởng tượng bạn có một dãy các hàm số $f_n(x)$. Hội tụ điểm có nghĩa là, nếu bạn chọn **một điểm $x$ cố định** và cắm một cây kim vào đó, thì dãy các giá trị $f_1(x), f_2(x), f_3(x), \dots$ (chiều cao của các đồ thị tại vị trí cây kim) sẽ hội tụ như một dãy số thông thường. Quá trình này xảy ra tại **từng điểm một**, một cách độc lập với nhau.

#### 2. Định nghĩa toán học:
Ta nói dãy hàm $(f_n)$ **hội tụ điểm (converges pointwise)** đến hàm $f$ trên một tập hợp $S$ nếu với **mỗi** $x \in S$, ta có:
$\lim_{n \to \infty} f_n(x) = f(x)$
Về mặt $\epsilon-N$, điều này có nghĩa là: với mỗi $x \in S$ và mỗi $\epsilon > 0$, tồn tại một số tự nhiên $N$ (có thể phụ thuộc vào cả $\epsilon$ và $x$) sao cho với mọi $n \ge N$, ta có $|f_n(x) - f(x)| < \epsilon$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Về mặt hình học, các đồ thị của $f_n$ ngày càng tiến gần đến đồ thị của $f$. Tuy nhiên, sự hội tụ này có thể rất "không đều". Một số phần của đồ thị có thể hội tụ rất nhanh, trong khi các phần khác lại hội tụ cực kỳ chậm. Nếu bạn vẽ một "ống" bề rộng $2\epsilon$ xung quanh đồ thị của $f$, không có gì đảm bảo rằng toàn bộ đồ thị của $f_n$ sẽ nằm trong ống đó tại cùng một thời điểm.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Hội tụ điểm tương ứng với việc một mô hình học máy chỉ học tốt trên **tập dữ liệu huấn luyện (training data)**. Với mỗi điểm dữ liệu huấn luyện $x_i$, dãy các dự đoán của mô hình qua các `epoch` $f_n(x_i)$ sẽ hội tụ về nhãn đúng $y_i$. Tuy nhiên, điều này không đảm bảo bất cứ điều gì về hành vi của mô hình trên các điểm dữ liệu **chưa từng thấy** nằm giữa các điểm huấn luyện. Một mô hình có thể hội tụ điểm trên tập huấn luyện nhưng lại dao động rất mạnh giữa các điểm đó, dẫn đến hiện tượng **overfitting**.

***

### **Hội tụ đều (uniform convergence) và tiêu chuẩn Cauchy**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là một kiểu hội tụ "vàng", mạnh mẽ và tốt đẹp hơn nhiều. Thay vì mỗi điểm hội tụ với "tốc độ" riêng của nó, **hội tụ đều (uniform convergence)** yêu cầu toàn bộ hàm số phải hội tụ **cùng một lúc**, với cùng một tốc độ. Sai số lớn nhất giữa hàm $f_n$ và hàm giới hạn $f$ trên toàn bộ tập hợp phải tiến về 0. Hãy tưởng tượng một tấm chăn ($f_n$) đang được hạ xuống để phủ lên một chiếc giường ($f$). Hội tụ đều có nghĩa là toàn bộ tấm chăn tiến sát đến chiếc giường cùng một lúc.

#### 2. Định nghĩa toán học:
Ta nói dãy hàm $(f_n)$ **hội tụ đều (converges uniformly)** đến hàm $f$ trên tập hợp $S$ nếu:
Với mỗi $\epsilon > 0$, tồn tại một số tự nhiên $N$ (chỉ phụ thuộc vào $\epsilon$) sao cho với mọi $n \ge N$ và với **mọi** $x \in S$, ta có $|f_n(x) - f(x)| < \epsilon$.
Một cách tương đương: $\lim_{n \to \infty} \sup_{x \in S} |f_n(x) - f(x)| = 0$.
**Tiêu chuẩn Cauchy cho hội tụ đều:** Dãy $(f_n)$ hội tụ đều khi và chỉ khi với mọi $\epsilon > 0$, tồn tại $N$ sao cho với mọi $m, n \ge N$ và với mọi $x \in S$, ta có $|f_n(x) - f_m(x)| < \epsilon$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Ý nghĩa hình học rất đẹp. Nếu bạn vẽ một "ống" có bề rộng $2\epsilon$ xung quanh đồ thị của hàm giới hạn $f$, thì hội tụ đều đảm bảo rằng tồn tại một thời điểm $N$ mà kể từ đó trở đi, **toàn bộ đồ thị** của các hàm $f_n$ ($n \ge N$) sẽ nằm gọn hoàn toàn bên trong chiếc ống đó. Tốc độ hội tụ không phụ thuộc vào vị trí $x$ bạn đang xét.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Hội tụ đều là mục tiêu lý tưởng của **sự tổng quát hóa (generalization)** trong học máy. Chúng ta muốn mô hình được huấn luyện $f_n$ không chỉ tốt trên các điểm huấn luyện, mà còn phải là một xấp xỉ tốt cho hàm "thật" $f$ trên toàn bộ không gian dữ liệu. Hội tụ đều đảm bảo rằng sai số của mô hình là nhỏ **ở khắp mọi nơi**, kể cả trên các điểm dữ liệu mới. Điều này liên quan mật thiết đến việc chứng minh rằng một mô hình có khả năng tổng quát hóa tốt và không bị `overfitting`.

***

### **Các định lý về việc bảo toàn tính chất dưới giới hạn đều**

#### 1. Khái niệm, Cách hiểu đơn giản:
Tại sao hội tụ đều lại quan trọng đến vậy? Bởi vì nó "mạnh" đến mức có thể "di truyền" các tính chất tốt đẹp từ dãy hàm $(f_n)$ cho hàm giới hạn $f$.
* Nếu bạn có một dãy các hàm **liên tục** (đồ thị liền mạch) và chúng hội tụ đều, thì hàm giới hạn cũng phải **liên tục**.
* Nếu bạn có một dãy các hàm **khả tích** và chúng hội tụ đều, thì tích phân của giới hạn sẽ bằng giới hạn của các tích phân.
Hội tụ điểm quá "yếu" và thường làm mất đi các tính chất tốt đẹp này.

#### 2. Định nghĩa toán học:
Giả sử dãy $(f_n)$ hội tụ đều đến $f$ trên một tập $S$.
* **Bảo toàn tính liên tục:** Nếu tất cả các hàm $f_n$ đều liên tục trên $S$, thì hàm giới hạn $f$ cũng liên tục trên $S$.
* **Bảo toàn tính khả tích:** Nếu $S = [a, b]$ và tất cả các hàm $f_n$ đều khả tích Riemann, thì $f$ cũng khả tích Riemann và:
    $\lim_{n \to \infty} \int_a^b f_n(x) dx = \int_a^b \left(\lim_{n \to \infty} f_n(x)\right) dx = \int_a^b f(x) dx$
* **Bảo toàn tính khả vi:** (Điều kiện phức tạp hơn) Nếu $(f_n)$ hội tụ điểm và dãy các đạo hàm $(f'_n)$ hội tụ đều, thì ta có thể tráo đổi giới hạn và đạo hàm.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* **Liên tục:** Nếu bạn có một loạt các sợi dây không bị đứt ($f_n$ liên tục) và chúng cùng nhau tiến sát đến một hình dạng cuối cùng, thì hình dạng đó cũng phải là một sợi dây không bị đứt.
* **Tích phân:** Nếu diện tích dưới các đồ thị $f_n$ tiến đến một giá trị nào đó, thì giá trị đó chính là diện tích dưới đồ thị giới hạn $f$. Hội tụ đều đảm bảo không có "phần diện tích" nào bị "rò rỉ" ra vô tận trong quá trình lấy giới hạn.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Các định lý này cung cấp nền tảng lý thuyết cho việc phân tích các mô hình phức tạp. Ví dụ, **Định lý Xấp xỉ Phổ quát (Universal Approximation Theorem)** nói rằng một mạng neural có thể xấp xỉ bất kỳ hàm liên tục nào. Việc chứng minh các phiên bản mạnh của định lý này đòi hỏi phải làm việc với sự hội tụ của các chuỗi hàm (chính là mạng neural). Việc tráo đổi giới hạn và tích phân là cực kỳ quan trọng trong lý thuyết xác suất và thống kê, cho phép chứng minh rằng giá trị kỳ vọng của một chuỗi các biến ngẫu nhiên sẽ hội tụ về giá trị kỳ vọng của biến ngẫu nhiên giới hạn.

***

### **Chuỗi lũy thừa (power series)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một **chuỗi lũy thừa (power series)** về cơ bản là một "đa thức dài vô tận". Giống như các đa thức hữu hạn là công cụ tuyệt vời để xây dựng các hàm đơn giản, chuỗi lũy thừa là một công cụ cực kỳ mạnh mẽ để biểu diễn hoặc xấp xỉ một loạt các hàm quan trọng và phức tạp hơn nhiều, như $e^x$, $\sin(x)$, $\cos(x)$.

#### 2. Định nghĩa toán học:
Một **chuỗi lũy thừa** tâm tại $c$ có dạng:
$\sum_{n=0}^\infty a_n (x-c)^n = a_0 + a_1(x-c) + a_2(x-c)^2 + \dots$
Với mỗi chuỗi lũy thừa, tồn tại một **bán kính hội tụ (radius of convergence)** $R$ (có thể bằng $0$, $\infty$, hoặc một số dương hữu hạn).
* Chuỗi hội tụ tuyệt đối khi $|x-c| < R$.
* Chuỗi phân kỳ khi $|x-c| > R$.
* Quan trọng: Chuỗi hội tụ **đều** trên bất kỳ đoạn đóng nào nằm hoàn toàn bên trong khoảng hội tụ $(c-R, c+R)$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Một chuỗi lũy thừa là một cách để "xây dựng" một đường cong phức tạp bằng cách cộng dồn các đường cong ngày càng đơn giản hơn (hằng số, đường thẳng, parabol, cubic,...). Mỗi số hạng mới được thêm vào sẽ "hiệu chỉnh" xấp xỉ trước đó để nó khớp với hàm mục tiêu tốt hơn trên một phạm vi rộng hơn.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Đây là nền tảng của **chuỗi Taylor**, công cụ lý thuyết đằng sau hầu hết các thuật toán tối ưu hóa.
* **Gradient Descent** là một phương pháp tối ưu hóa **bậc nhất**, về cơ bản nó sử dụng hai số hạng đầu tiên của chuỗi Taylor để xấp xỉ hàm mất mát bằng một đường thẳng (hay một mặt phẳng) và đi theo hướng dốc nhất.
* Các phương pháp tối ưu hóa **bậc hai** như **phương pháp Newton** sử dụng ba số hạng đầu của chuỗi Taylor để xấp xỉ hàm mất mát bằng một đường parabol (hay một mặt paraboloid), cho phép thuật toán "nhảy" thẳng đến gần điểm cực tiểu và hội tụ nhanh hơn.
Ngoài ra, một số hàm kích hoạt phức tạp như `GELU` đôi khi được xấp xỉ bằng đa thức (một chuỗi lũy thừa hữu hạn) để tính toán nhanh hơn trên phần cứng chuyên dụng.