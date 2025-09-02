---
sidebar_position: 2
---

# Chương 12: Không gian Hilbert (Hilbert Spaces)

*Chương này giới thiệu một loại không gian Banach đặc biệt và hoàn hảo nhất: không gian Hilbert. Bằng cách bổ sung thêm một cấu trúc hình học là `inner product` (tích vô hướng), chúng ta có thể định nghĩa được các khái niệm về "góc" và "sự vuông góc" (`orthogonality`). Đây là môi trường làm việc gần gũi nhất với không gian Euclid quen thuộc, và là nền tảng của cơ học lượng tử, xử lý tín hiệu và nhiều lý thuyết học máy hiện đại.*

***

### **Tích vô hướng (Inner Product) và Bất đẳng thức Cauchy-Schwarz**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một `inner product` là sự tổng quát hóa của phép "tích vô hướng" (dot product) trong không gian Euclid. Nó là một công cụ để đo lường "mức độ tương quan" hoặc "mức độ song song" giữa hai `vector`. Kết quả của nó không chỉ cho biết độ lớn mà còn mã hóa thông tin về "góc" giữa chúng. Từ đó, ta có thể định nghĩa sự vuông góc một cách tự nhiên. Bất đẳng thức `Cauchy-Schwarz` là một hệ quả nền tảng, về cơ bản nói rằng tích vô hướng của hai `vector` không bao giờ có thể "lớn hơn" tích độ dài của chúng.

#### 2. Định nghĩa toán học:
Một **`inner product`** trên một không gian `vector` $H$ (trên trường $\mathbb{C}$) là một hàm $\langle \cdot, \cdot \rangle : H \times H \to \mathbb{C}$ thỏa mãn 3 tiên đề với mọi $x, y, z \in H$ và vô hướng $\alpha \in \mathbb{C}$:
1.  **Positive Definiteness:** $\langle x, x \rangle \ge 0$; và $\langle x, x \rangle = 0 \iff x = 0$.
2.  **Linearity in the first argument:** $\langle \alpha x + y, z \rangle = \alpha \langle x, z \rangle + \langle y, z \rangle$.
3.  **Conjugate Symmetry:** $\langle x, y \rangle = \overline{\langle y, x \rangle}$.

**Bất đẳng thức Cauchy-Schwarz:** Với mọi $x, y \in H$, ta có:
$$|\langle x, y \rangle| \le \|x\| \|y\|$$
trong đó $\|x\| := \sqrt{\langle x, x \rangle}$ là `norm` được cảm sinh bởi `inner product`.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Inner product` chính là công cụ cho phép chúng ta định nghĩa góc $\theta$ giữa hai `vector` trong một không gian trừu tượng thông qua công thức $\cos(\theta) = \frac{\text{Re}(\langle x, y \rangle)}{\|x\|\|y\|}$. Bất đẳng thức `Cauchy-Schwarz` về mặt hình học khẳng định rằng giá trị tuyệt đối của $\cos(\theta)$ không bao giờ vượt quá 1, một điều hiển nhiên trong hình học Euclid.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Kernel Trick trong SVM:** `Inner product` là trái tim của các `kernel methods`. Thay vì phải tính toán tọa độ của các điểm dữ liệu trong một không gian đặc trưng nhiều chiều, "kernel trick" cho phép chúng ta tính trực tiếp `inner product` của chúng trong không gian đó. Hàm `kernel` $K(x_i, x_j) = \langle \phi(x_i), \phi(x_j) \rangle$ đo lường sự tương tự giữa hai điểm dữ liệu, đây chính là nền tảng để Support Vector Machines (SVM) có thể tạo ra các mặt phẳng phân tách phi tuyến.

***

### **Không gian Hilbert (Hilbert Spaces)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một `Hilbert space` là một `inner product space` có thêm tính chất **đầy đủ** (`complete`). Nó là môi trường làm việc lý tưởng nhất: vừa có cấu trúc đại số (không gian `vector`), vừa có cấu trúc hình học (đo được độ dài và góc), lại vừa có cấu trúc giải tích (không có "lỗ hổng", các quá trình giới hạn luôn hợp lệ). Nó là sự mở rộng hoàn hảo của không gian Euclid 3 chiều ra vô hạn chiều.

#### 2. Định nghĩa toán học:
Một **`Hilbert space`** là một không gian `vector` $H$ được trang bị một `inner product` $\langle \cdot, \cdot \rangle$ sao cho $H$ là một không gian metric đầy đủ (`complete`) đối với `norm` cảm sinh $\|x\| = \sqrt{\langle x, x \rangle}$.
Nói cách khác:
$$\text{Hilbert Space} = \text{Inner Product Space} + \text{Completeness}$$

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Trong `Hilbert space`, tất cả các trực giác hình học quen thuộc của chúng ta đều được bảo toàn. Các định lý như định lý Pythagoras, luật hình bình hành, và đặc biệt là khả năng "chiếu" một điểm xuống một không gian con đều đúng. Tính đầy đủ đảm bảo rằng các phép toán hình học này, đặc biệt là phép chiếu, luôn cho ra kết quả tồn tại và duy nhất.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Reproducing Kernel Hilbert Spaces (RKHS):** Đây là một loại `Hilbert space` đặc biệt gồm các hàm số, làm nền tảng lý thuyết cho các `kernel methods` và `Gaussian Processes`. Trong một RKHS, việc tìm ra một hàm phức tạp để nội suy dữ liệu được chuyển thành một bài toán tối ưu lồi có nghiệm duy nhất. Lý thuyết này cung cấp sự đảm bảo về mặt toán học cho việc tại sao các thuật toán như SVM có thể hoạt động hiệu quả.

***

### **Trực giao (Orthogonality)**

#### 1. Khái niệm, Cách hiểu đơn giản:
`Orthogonality` là sự tổng quát hóa của khái niệm "vuông góc" trong không gian Euclid. Hai `vector` được gọi là trực giao nếu `inner product` của chúng bằng 0. Về mặt trực quan, hai `vector` trực giao không có "thành phần chung" nào; chúng hoàn toàn "độc lập" với nhau về mặt hình học.

#### 2. Định nghĩa toán học:
Hai `vector` $x, y$ trong một không gian `inner product` được gọi là **trực giao** (`orthogonal`), ký hiệu $x \perp y$, nếu:
$$\langle x, y \rangle = 0$$
**Định lý Pythagoras tổng quát:** Nếu $x \perp y$, thì:
$$\|x + y\|^2 = \|x\|^2 + \|y\|^2$$

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Khái niệm này cho phép chúng ta phân rã các `vector` phức tạp thành các thành phần đơn giản hơn, độc lập với nhau. Giống như việc phân tích một `vector` trong mặt phẳng thành các thành phần theo trục $x$ và trục $y$ (vốn trực giao với nhau), chúng ta có thể làm điều tương tự trong không gian vô hạn chiều.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** PCA tìm ra một hệ cơ sở trực giao mới cho không gian dữ liệu, gọi là các thành phần chính (principal components). Các trục tọa độ mới này có tính chất là các thành phần của dữ liệu theo các trục đó là bất tương quan. Việc này giúp giảm chiều dữ liệu trong khi vẫn giữ lại được nhiều thông tin nhất.
* **Orthogonal Regularization:** Trong các mạng neural, việc buộc các ma trận trọng số phải (gần như) trực giao có thể giúp quá trình training ổn định hơn, giảm thiểu vấn đề bùng nổ/tiêu biến gradient.

***

### **Định lý hình chiếu (The Projection Theorem)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Định lý này đảm bảo rằng với một "mặt phẳng" (không gian con đóng) bất kỳ trong `Hilbert space` và một điểm nằm ngoài mặt phẳng đó, luôn tồn tại một "cái bóng" duy nhất của điểm đó trên mặt phẳng. Cái bóng này chính là điểm trên mặt phẳng gần nhất với điểm ban đầu. Đường thẳng nối điểm ban đầu và cái bóng của nó luôn vuông góc với mặt phẳng.

#### 2. Định nghĩa toán học:
**The Projection Theorem:** Cho $H$ là một `Hilbert space` và $M$ là một không gian con **đóng** của $H$. Khi đó, với mọi $x \in H$, tồn tại một sự phân tích **duy nhất**:
$$x = m + n$$
trong đó $m \in M$ và $n \in M^\perp$ (phần bù trực giao của $M$).
`Vector` $m$ được gọi là **hình chiếu trực giao** của $x$ lên $M$, ký hiệu là $P_M(x)$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là định lý nền tảng cho các bài toán xấp xỉ. Nó cho chúng ta một cách xây dựng để tìm ra "phần tử tốt nhất" trong một không gian con $M$ để xấp xỉ một phần tử $x$ cho trước. Sai số của phép xấp xỉ, $n = x - m$, luôn trực giao với không gian mà chúng ta đang xấp xỉ.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Linear Regression:** Toàn bộ phương pháp bình phương tối thiểu (Ordinary Least Squares - OLS) chính là một bài toán hình chiếu. Chúng ta có `vector` các giá trị thực tế $y$ và muốn tìm một `vector` dự đoán $\hat{y}$ nằm trong không gian sinh bởi các cột của ma trận đặc trưng $X$. Lời giải OLS chính là hình chiếu trực giao của $y$ lên không gian cột của $X$.

***

### **Cơ sở trực chuẩn (Orthonormal Basis) và Chuỗi Fourier**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một `orthonormal basis` là một hệ tọa độ "hoàn hảo" cho một `Hilbert space`, kể cả khi nó vô hạn chiều. Nó bao gồm các `vector` có độ dài 1 và đôi một vuông góc với nhau. Mọi `vector` trong không gian đều có thể được biểu diễn duy nhất như là một tổng (có thể là vô hạn) của các thành phần theo các trục tọa độ này. **Chuỗi Fourier** chính là trường hợp đặc biệt khi không gian của chúng ta là không gian các hàm số và hệ tọa độ là các hàm sin và cos.

#### 2. Định nghĩa toán học:
Một hệ trực chuẩn $\{e_i\}_{i \in I}$ được gọi là một **`orthonormal basis`** nếu nó là tối đại. Điều này tương đương với:
* **Biểu diễn chuỗi Fourier:** Mọi $x \in H$ đều có thể được viết là $x = \sum_{i \in I} \langle x, e_i \rangle e_i$.
* **Đẳng thức Parseval:** $\|x\|^2 = \sum_{i \in I} |\langle x, e_i \rangle|^2$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đẳng thức Parseval là định lý Pythagoras cho không gian vô hạn chiều. Nó nói rằng "năng lượng" (bình phương độ dài) của một `vector` được bảo toàn và bằng tổng năng lượng của các thành phần của nó theo mỗi hướng trong hệ cơ sở trực chuẩn.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Signal Processing & Feature Extraction:** Phép biến đổi Fourier (Fourier Transform) phân tích một tín hiệu (ví dụ: âm thanh) thành các thành phần tần số của nó. Về mặt toán học, đây chính là việc biểu diễn hàm tín hiệu qua cơ sở trực chuẩn gồm các hàm sin/cos. Các hệ số Fourier sau đó trở thành các đặc trưng đầu vào cho các mô hình ML để phân loại âm thanh hoặc nhận dạng giọng nói. Biến đổi Wavelet cũng là một dạng biểu diễn qua `orthonormal basis`, rất hiệu quả trong xử lý ảnh.

***

### **Định lý biểu diễn Riesz (Riesz Representation Theorem)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là một định lý sâu sắc và đẹp đẽ. Nó nói rằng trong một `Hilbert space`, mọi "phép đo tuyến tính" (một hàm nhận đầu vào là một `vector` và trả ra một con số) đều có thể được biểu diễn một cách cực kỳ đơn giản: đó chính là phép lấy `inner product` với một `vector` cố định, duy nhất. Nói cách khác, mỗi "phép đo" tương ứng với một "vector" duy nhất trong chính không gian đó.

#### 2. Định nghĩa toán học:
**The Riesz Representation Theorem:** Cho $H$ là một `Hilbert space`. Với mọi phiếm hàm tuyến tính liên tục $f \in H^*$ (không gian đối ngẫu của $H$), tồn tại một `vector` **duy nhất** $z \in H$ sao cho:
$$f(x) = \langle x, z \rangle \quad \text{cho mọi } x \in H$$
Hơn nữa, ta có $\|f\|_{H^*} = \|z\|_H$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Định lý này thiết lập một sự tương ứng 1-1 hoàn hảo giữa không gian $H$ và không gian đối ngẫu $H^*$ của nó. Nó cho thấy `Hilbert space` là **tự đối ngẫu** (`self-dual`). Cấu trúc hình học (các `vector`) và cấu trúc giải tích (các phép đo) là hai mặt của cùng một đồng xu. Sự đối xứng này là một trong những lý do khiến `Hilbert space` có cấu trúc hoàn hảo đến vậy.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **The Representer Theorem:** Định lý này trong `kernel methods` là một hệ quả trực tiếp của định lý Riesz. Nó khẳng định rằng nghiệm tối ưu của nhiều bài toán học máy (ví dụ như trong SVM) phải có dạng là một tổ hợp tuyến tính của các hàm `kernel` đặt tại các điểm dữ liệu huấn luyện. Điều này biến một bài toán tối ưu trên không gian hàm vô hạn chiều thành một bài toán tối ưu hữu hạn chiều trên các hệ số, giúp cho việc giải bài toán trở nên khả thi.