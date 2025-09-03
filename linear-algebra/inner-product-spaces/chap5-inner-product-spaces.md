---
sidebar_position: 1
---

# Chương 5: Không gian Tích vô hướng (Inner Product Spaces)
*Phần này là một bước ngoặt, nơi chúng ta thổi hồn hình học Euclid vào các không gian `vector` trừu tượng. Chúng ta sẽ bổ sung một cấu trúc mới, `inner product` (tích vô hướng), cho phép định nghĩa các khái niệm trực quan như "độ dài" và "góc". Cầu nối giữa đại số trừu tượng và hình học quen thuộc sẽ được thiết lập, mở đường cho các ứng dụng mạnh mẽ như bài toán xấp xỉ tốt nhất.*

***

### **Tích vô hướng (Inner Product) và Bất đẳng thức Cauchy-Schwarz**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong một `vector space` thông thường, chúng ta có thể cộng và co giãn `vector`, nhưng không có cách nào để đo "độ dài" của một `vector` hay "góc" giữa hai `vector`. Làm thế nào để định nghĩa các khái niệm hình học này một cách chặt chẽ trong một không gian trừu tượng, ví dụ như không gian các hàm số? `Inner product` ra đời để giải quyết chính xác vấn đề này.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **`inner product`** là sự tổng quát hóa của phép "tích vô hướng" (dot product) mà bạn đã biết trong $\mathbb{R}^n$. Nó là một quy tắc nhận đầu vào là hai `vector` và trả về một con số (vô hướng). Con số này mã hóa cả thông tin về độ dài của các `vector` và góc giữa chúng. Bất đẳng thức **`Cauchy-Schwarz`** là một hệ quả toán học nền tảng, về cơ bản nói rằng "sự tương quan" giữa hai `vector` không bao giờ có thể vượt quá tích độ dài của chúng.

#### 3. Định nghĩa toán học:
Một **`inner product`** trên một `vector space` $V$ (trên `field` $\mathbb{C}$) là một hàm $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{C}$ thỏa mãn các tiên đề sau:
1.  **Linearity in the first argument:** $\langle u+v, w \rangle = \langle u, w \rangle + \langle v, w \rangle$ và $\langle \alpha u, v \rangle = \alpha \langle u, v \rangle$.
2.  **Conjugate Symmetry:** $\langle u, v \rangle = \overline{\langle v, u \rangle}$.
3.  **Positive Definiteness:** $\langle v, v \rangle \ge 0$, và $\langle v, v \rangle = 0 \iff v=0$.

**`Norm` cảm sinh:** $\|v\| = \sqrt{\langle v, v \rangle}$.
**Bất đẳng thức Cauchy-Schwarz:** $|\langle u, v \rangle| \le \|u\| \|v\|$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{C}^n$, `inner product` tiêu chuẩn là $\langle x, y \rangle = \sum_{i=1}^n x_i \overline{y_i}$.
    * Trong không gian các hàm liên tục $C([0, 1])$, một `inner product` khả dĩ là $\langle f, g \rangle = \int_0^1 f(t)\overline{g(t)} dt$.
* **Phản ví dụ:**
    * `L1-norm` trong $\mathbb{R}^n$, $\|x\|_1 = \sum |x_i|$, **không** được cảm sinh bởi bất kỳ `inner product` nào vì nó không thỏa mãn luật hình bình hành (một hệ quả của các tiên đề `inner product`).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Inner product` cho phép chúng ta định nghĩa góc $\theta$ giữa hai `vector`: $\cos(\theta) = \frac{\text{Re}(\langle u, v \rangle)}{\|u\|\|v\|}$. Nó mang toàn bộ trực giác hình học Euclid (độ dài, góc, sự vuông góc) vào các không gian `vector` trừu tượng, kể cả các không gian hàm vô hạn chiều.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Similarity Measures:** `Inner product` là cách tự nhiên nhất để đo lường "sự tương tự" (`similarity`) giữa hai `vector`. Trong các mô hình như Word2Vec, `inner product` (hoặc cosine similarity, vốn được chuẩn hóa từ `inner product`) của hai `vector` từ cho biết mức độ tương quan ngữ nghĩa của chúng.
* **Kernel Trick:** Toàn bộ các phương pháp `kernel` (ví dụ: SVM, Kernel PCA) dựa trên ý tưởng thay thế các phép tính `inner product` trong một không gian đặc trưng nhiều chiều bằng một hàm `kernel` đơn giản.

***

### **Trực giao (Orthogonality)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong hình học Euclid, hệ tọa độ vuông góc (trực giao) là hệ tọa độ "đẹp" và dễ làm việc nhất. Làm thế nào để tổng quát hóa khái niệm "vuông góc" này cho các không gian trừu tượng? `Orthogonality` chính là câu trả lời, cho phép chúng ta xây dựng các "hệ tọa độ" hiệu quả trong các không gian phức tạp.

#### 2. Khái niệm, Cách hiểu đơn giản:
`Orthogonality` là sự tổng quát hóa của "sự vuông góc". Hai `vector` được gọi là trực giao nếu `inner product` của chúng bằng 0. Về mặt trực quan, hai `vector` trực giao không có "thành phần chung" nào, chúng chỉ theo các "hướng" hoàn toàn độc lập với nhau.

#### 3. Định nghĩa toán học:
Hai `vector` $u, v$ trong một không gian `inner product` được gọi là **trực giao** (`orthogonal`), ký hiệu $u \perp v$, nếu $\langle u, v \rangle = 0$.
**Định lý Pythagoras tổng quát:** Nếu $u_1, \dots, u_m$ là một tập hợp các `vector` đôi một trực giao, thì:
$$ \|u_1 + \dots + u_m\|^2 = \|u_1\|^2 + \dots + \|u_m\|^2 $$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, $(1, 2) \perp (-2, 1)$ vì $\langle (1,2), (-2,1) \rangle = 1 \cdot (-2) + 2 \cdot 1 = 0$.
    * Trong không gian $C([-\pi, \pi])$ với `inner product` tích phân, hai hàm $\sin(t)$ và $\cos(t)$ là trực giao.
* **Phản ví dụ:**
    * Hai `vector` độc lập tuyến tính chưa chắc đã trực giao. Ví dụ, $(1, 0)$ và $(1, 1)$ trong $\mathbb{R}^2$ là độc lập tuyến tính nhưng không trực giao.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Orthogonality` cho phép chúng ta phân rã một `vector` thành các thành phần độc lập, không tương quan. Đây là ý tưởng cốt lõi đằng sau việc xây dựng các hệ tọa độ hiệu quả và phân tích tín hiệu.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Orthogonal Regularization:** Trong các mạng neural, việc buộc các ma trận trọng số phải (gần như) trực giao có thể cải thiện đáng kể quá trình huấn luyện. Các trọng số trực giao giúp giảm thiểu sự tương quan giữa các `feature map`, ngăn chặn hiện tượng bùng nổ/tiêu biến gradient, và làm cho mô hình hội tụ nhanh hơn.

***

### **Cơ sở trực giao và trực chuẩn (Orthogonal and Orthonormal Bases)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một `basis` thông thường có thể có các `vector` bị "xiên" và có "độ dài" khác nhau, làm cho việc tính toán tọa độ trở nên phức tạp. Chúng ta muốn tìm một loại `basis` "lý tưởng" nhất, giống như hệ tọa độ Descartes tiêu chuẩn, nơi mọi trục đều vuông góc với nhau và có độ dài đơn vị. Đây chính là `orthonormal basis`.

#### 2. Khái niệm, Cách hiểu đơn giản:
* Một **`orthogonal basis`** là một `basis` mà tất cả các `vector` trong đó đều vuông góc với nhau.
* Một **`orthonormal basis`** còn "đẹp" hơn: nó là một `orthogonal basis` mà tất cả các `vector` trong đó đều đã được chuẩn hóa để có độ dài bằng 1.
Đây là hệ tọa độ "hoàn hảo" nhất cho một không gian `inner product`.

#### 3. Định nghĩa toán học:
Một `basis` của một không gian `inner product` được gọi là:
* **`Orthogonal`** nếu các `vector` của nó đôi một trực giao.
* **`Orthonormal`** nếu nó là `orthogonal` và mỗi `vector` đều có `norm` bằng 1.
**Lợi ích:** Nếu $\{e_1, \dots, e_n\}$ là một `orthonormal basis` của $V$, thì mọi `vector` $v \in V$ đều có thể được viết một cách dễ dàng là:
$$ v = \langle v, e_1 \rangle e_1 + \langle v, e_2 \rangle e_2 + \dots + \langle v, e_n \rangle e_n $$
Việc tính tọa độ trở thành một phép chiếu đơn giản.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Cơ sở chính tắc $\{(1, 0), (0, 1)\}$ của $\mathbb{R}^2$ là một `orthonormal basis`.
    * Cơ sở $\{(1, 1), (-1, 1)\}$ của $\mathbb{R}^2$ là một `orthogonal basis` nhưng không `orthonormal`.
* **Phản ví dụ:**
    * Cơ sở $\{(1, 0), (1, 1)\}$ của $\mathbb{R}^2$ không phải là `orthogonal`.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Một `orthonormal basis` đại diện cho một hệ tọa độ Descartes lý tưởng, không bị co giãn hay xiên lệch. Mọi phép tính hình học như tính độ dài, khoảng cách, và góc đều trở nên cực kỳ đơn giản trong hệ tọa độ này, tuân theo định lý Pythagoras.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Feature Decorrelation:** Nhiều thuật toán ML hoạt động tốt hơn khi các đặc trưng đầu vào không tương quan với nhau. Việc biến đổi dữ liệu vào một `orthonormal basis` (ví dụ, bằng PCA) sẽ tạo ra một bộ đặc trưng mới không tương quan, giúp cải thiện hiệu suất và sự ổn định của mô hình. Các biến đổi như Fourier Transform hay Wavelet Transform về bản chất là đang biểu diễn dữ liệu trong một `orthonormal basis` các hàm số.

***

### **Quy trình trực giao hóa Gram-Schmidt**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã thấy sự ưu việt của `orthonormal basis`. Nhưng làm thế nào để tìm ra nó? Nếu chúng ta chỉ có một `basis` thông thường (bị xiên lệch), có cách nào để "duỗi thẳng" nó ra thành một `orthogonal basis` không? Quy trình `Gram-Schmidt` chính là thuật toán để làm việc đó.

#### 2. Khái niệm, Cách hiểu đơn giản:
`Gram-Schmidt` là một quy trình xây dựng từng bước.
1.  Lấy `vector` đầu tiên của `basis` cũ làm `vector` đầu tiên của `basis` mới.
2.  Lấy `vector` thứ hai của `basis` cũ, trừ đi "cái bóng" (hình chiếu) của nó lên `vector` mới thứ nhất. Phần còn lại sẽ vuông góc với `vector` mới thứ nhất.
3.  Lấy `vector` thứ ba, trừ đi hình chiếu của nó lên hai `vector` mới đã có.
4.  Lặp lại quá trình này, ở mỗi bước, ta "làm sạch" `vector` mới bằng cách loại bỏ tất cả các thành phần song song với các `vector` đã được xây dựng trước đó.
Cuối cùng, chuẩn hóa tất cả các `vector` để có độ dài 1.

#### 3. Định nghĩa toán học:
Cho một `basis` $\{v_1, \dots, v_n\}$. Ta xây dựng một `orthogonal basis` $\{u_1, \dots, u_n\}$ như sau:
* $u_1 = v_1$
* $u_2 = v_2 - \text{proj}_{u_1}(v_2)$
* $u_3 = v_3 - \text{proj}_{u_1}(v_3) - \text{proj}_{u_2}(v_3)$
* ...
trong đó $\text{proj}_u(v) = \frac{\langle v, u \rangle}{\|u\|^2} u$ là phép chiếu của $v$ lên $u$.
Cuối cùng, `orthonormal basis` được tạo ra bằng cách đặt $e_i = u_i / \|u_i\|$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Áp dụng `Gram-Schmidt` cho `basis` $\{(1, 1), (0, 1)\}$ của $\mathbb{R}^2$ sẽ cho ra `orthonormal basis` $\{ (\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}), (-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}) \}$.
* **Phản ví dụ:** Quy trình này sẽ thất bại (cho ra `vector` không) nếu tập hợp `vector` ban đầu là phụ thuộc tuyến tính, vì khi đó một `vector` sẽ hoàn toàn là hình chiếu của nó lên các `vector` trước đó.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là một thuật toán mang tính xây dựng, chứng tỏ sự tồn tại của `orthonormal basis` trong mọi không gian `inner product` hữu hạn chiều. Nó hiện thực hóa ý tưởng "duỗi thẳng" một hệ tọa độ xiên.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **QR Decomposition:** Phân rã QR của một ma trận $A$ thành $A=QR$ (với $Q$ là ma trận trực giao và $R$ là ma trận tam giác trên) về bản chất là phiên bản ma trận của quy trình `Gram-Schmidt`. Phân rã này là nền tảng của nhiều thuật toán số, bao gồm cả việc giải các bài toán bình phương tối thiểu một cách ổn định.

***

### **Phép chiếu trực giao (Orthogonal Projection) và Bài toán xấp xỉ tốt nhất**

#### 1. Động lực / Vấn đề cần giải quyết:
Cho một `vector` $v$ và một `subspace` $U$ (ví dụ: một điểm và một mặt phẳng). Câu hỏi đặt ra là: "Điểm nào trong $U$ gần với $v$ nhất?". Trực giác hình học cho chúng ta biết đó là "cái bóng" vuông góc của $v$ lên $U$. `Orthogonal projection` định nghĩa một cách chặt chẽ khái niệm "cái bóng" này và kết nối nó với bài toán tối ưu hóa.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Orthogonal projection`** của một `vector` $v$ lên một `subspace` $U$ là `vector` trong $U$ mà gần với $v$ nhất. `Vector` này, ký hiệu là $\text{proj}_U(v)$, có tính chất đặc biệt là "phần sai số" $v - \text{proj}_U(v)$ vuông góc với mọi `vector` trong `subspace` $U$.

#### 3. Định nghĩa toán học:
Cho $U$ là một `subspace` hữu hạn chiều của một không gian `inner product` $V$. Với mọi $v \in V$, **phép chiếu trực giao** của $v$ lên $U$ là một `vector` duy nhất $\text{proj}_U(v) \in U$ thỏa mãn:
$$ v - \text{proj}_U(v) \perp u \quad \text{cho mọi } u \in U $$
**Định lý xấp xỉ tốt nhất:** `Vector` $\text{proj}_U(v)$ là `vector` duy nhất trong $U$ tối thiểu hóa khoảng cách $\|v - u\|$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Trong $\mathbb{R}^3$, hình chiếu của điểm $(1, 2, 3)$ lên mặt phẳng xy (là một `subspace`) chính là điểm $(1, 2, 0)$.
* **Phản ví dụ:** Nếu `subspace` không đầy đủ (không đóng), hình chiếu có thể không tồn tại.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Orthogonal projection` phân rã một `vector` bất kỳ thành hai thành phần vuông góc với nhau: một thành phần "nằm trong" `subspace` và một thành phần "vuông góc" với `subspace`. Đây là một công cụ phân tích cực kỳ mạnh mẽ.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Least Squares Problems (Bài toán bình phương tối thiểu):** Đây là ứng dụng kinh điển và quan trọng nhất. Khi giải một hệ phương trình tuyến tính $Ax=b$ vô nghiệm (thường xảy ra với dữ liệu thực tế), chúng ta tìm một nghiệm xấp xỉ $x^*$ sao cho $Ax^*$ gần với $b$ nhất có thể. Lời giải này chính là việc chiếu `vector` $b$ lên `column space` của ma trận $A$. Toàn bộ phương pháp hồi quy tuyến tính đều dựa trên nguyên lý này.