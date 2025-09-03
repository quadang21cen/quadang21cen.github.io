---
sidebar_position: 2
---
# Chương 2: Không gian hữu hạn chiều (Finite-Dimensional Vector Spaces)

*Sau khi định nghĩa "sân khấu" trừu tượng là `vector space`, chương này sẽ trả lời một câu hỏi cơ bản: Làm thế nào để đo lường "kích thước" của một sân khấu? Chúng ta sẽ giới thiệu các khái niệm `basis` (cơ sở) và `dimension` (số chiều), những công cụ cho phép chúng ta định lượng và so sánh các không gian `vector`, đặc biệt là trong trường hợp hữu hạn chiều, nơi mà trực giác của chúng ta hoạt động tốt nhất.*

***

### **Cơ sở (Basis)**

#### 1. Động lực / Vấn đề cần giải quyết:
Ở chương 1, chúng ta đã biết về `span` (khả năng "sinh ra" một không gian) và `linear independence` (tính "không dư thừa"). Vấn đề là làm thế nào để kết hợp hai ý tưởng này? Chúng ta muốn tìm một tập hợp `vector` "vừa đủ": vừa có thể sinh ra toàn bộ không gian, lại vừa phải là tập hợp nhỏ nhất có thể, không chứa bất kỳ `vector` thừa thãi nào. Khái niệm `basis` ra đời để định nghĩa chính xác tập hợp "hiệu quả" này.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **`basis`** của một `vector space` giống như một bộ "trục tọa độ" hoặc một bộ "viên gạch Lego" cho không gian đó. Nó là tập hợp các `vector` xây dựng nền tảng, thỏa mãn hai điều kiện:
1.  **Đủ mạnh:** Chúng có thể "xây" nên mọi `vector` khác trong không gian bằng cách tổ hợp tuyến tính (`span`).
2.  **Không thừa:** Không có `vector` nào trong bộ này có thể được xây từ những `vector` còn lại (`linear independence`).
Mỗi `vector` trong không gian sẽ có một "bản thiết kế" duy nhất từ những viên gạch này.

#### 3. Định nghĩa toán học:
Một tập con $B$ của một `vector space` $V$ được gọi là một **`basis`** nếu nó thỏa mãn hai điều kiện:
1.  $B$ là `linearly independent`.
2.  `span(B) = V`.

Một kết quả nền tảng (thường được chứng minh bằng Bổ đề Zorn trong trường hợp tổng quát) là **mọi `vector space` đều có một `basis`**. Trong khóa học này, chúng ta chủ yếu tập trung vào các không gian có `basis` hữu hạn.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, tập hợp $\{(1, 0), (0, 1)\}$ là một `basis` (cơ sở chính tắc). Tập hợp $\{(1, 1), (1, -1)\}$ cũng là một `basis`.
    * Trong không gian các đa thức bậc không quá 2, $\mathcal{P}_2(\mathbb{R})$, tập hợp $\{1, x, x^2\}$ là một `basis`.
* **Phản ví dụ:**
    * Trong $\mathbb{R}^2$, tập hợp $\{(1, 0), (0, 1), (1, 1)\}$ **không** phải là `basis` vì nó không `linearly independent` (dư thừa).
    * Trong $\mathbb{R}^3$, tập hợp $\{(1, 0, 0), (0, 1, 0)\}$ **không** phải là `basis` vì nó không `span` toàn bộ không gian (không thể tạo ra các `vector` có thành phần z khác 0).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Một `basis` định nghĩa một **hệ tọa độ** cho không gian `vector`. Một khi bạn đã chọn một `basis`, mọi `vector` trong không gian đó đều có một "địa chỉ" duy nhất, chính là bộ các hệ số trong tổ hợp tuyến tính biểu diễn `vector` đó qua `basis`. Việc thay đổi `basis` giống như việc xoay hoặc thay đổi tỉ lệ các trục tọa độ.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Feature Engineering:** Các đặc trưng (`features`) mà chúng ta chọn để mô tả dữ liệu có thể được xem như một `basis` cho không gian đặc trưng. Một bộ đặc trưng tốt là một bộ độc lập tuyến tính (cung cấp thông tin mới) và có khả năng `span` (biểu diễn) được các biến thể quan trọng trong dữ liệu.
* **Basis Functions in Kernel Methods:** Trong các phương pháp `kernel`, chúng ta ngầm ánh xạ dữ liệu vào một không gian đặc trưng vô hạn chiều. Các hàm `kernel` hoạt động như thể chúng ta đang làm việc với một `basis` vô hạn các hàm phi tuyến, cho phép các mô hình tuyến tính học được các ranh giới phức tạp.

***

### **Số chiều (Dimension)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta có thể cảm nhận rằng một đường thẳng "nhỏ hơn" một mặt phẳng, và một mặt phẳng "nhỏ hơn" không gian 3 chiều. Làm thế nào để định lượng một cách chính xác khái niệm "kích thước" hay "số bậc tự do" của một `vector space`? Số chiều chính là câu trả lời.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Dimension`** của một `vector space` đơn giản là **số lượng `vector` trong một `basis` bất kỳ** của không gian đó. Một định lý nền tảng đảm bảo rằng mọi `basis` của cùng một không gian đều có cùng một số lượng `vector`. `Dimension` cho bạn biết bạn cần bao nhiêu con số (tọa độ) để xác định vị trí một điểm trong không gian đó.

#### 3. Định nghĩa toán học:
**`Dimension`** của một `vector space` hữu hạn chiều $V$, ký hiệu là $\dim(V)$, là số lượng `vector` trong một `basis` của $V$. Nếu một `vector space` không có `basis` hữu hạn, nó được gọi là vô hạn chiều.
**Mối liên hệ với không gian con:** Nếu $U$ là một `subspace` của $V$, thì:
$$ \dim(U) \le \dim(V) $$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * $\dim(\mathbb{R}^n) = n$.
    * $\dim(\mathcal{P}_n(F)) = n+1$ (vì `basis` là $\{1, x, x^2, \dots, x^n\}$).
    * Không gian các ma trận $m \times n$ có $\dim = m \cdot n$.
* **Phản ví dụ:**
    * Không gian tất cả các đa thức $\mathcal{P}(F)$ là vô hạn chiều.
    * Không gian các hàm liên tục $C(\mathbb{R})$ là vô hạn chiều.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Dimension` là một **bất biến** quan trọng nhất của một `vector space`. Hai không gian `vector` hữu hạn chiều là "giống hệt nhau" về mặt cấu trúc đại số (`isomorphic`) khi và chỉ khi chúng có cùng `dimension`. Điều này có nghĩa là, về mặt trừu tượng, chỉ có một không gian `vector` 3 chiều duy nhất trên trường $\mathbb{R}$, đó chính là $\mathbb{R}^3$. Mọi không gian 3 chiều khác chỉ là một "phiên bản" khác của nó.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Dimensionality Reduction:** Đây là một trong những nhiệm vụ cốt lõi của ML. Dữ liệu thô (ví dụ: hình ảnh) thường có `dimension` rất cao. Các thuật toán như Principal Component Analysis (PCA) hay t-SNE tìm cách chiếu dữ liệu xuống một `subspace` có `dimension` thấp hơn nhiều trong khi vẫn giữ lại được các thông tin quan trọng nhất. `Dimension` của không gian `latent` (không gian ẩn) là một siêu tham số quan trọng trong các mô hình như Autoencoders.

***

### **Tổng (Sum) và Tổng trực tiếp (Direct Sum)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã biết cách phân tích các không gian `vector` thành các `subspace` nhỏ hơn. Bây giờ, chúng ta cần một cách để "ghép" các `subspace` lại với nhau để tạo thành một không gian lớn hơn. Khái niệm `sum` và `direct sum` cung cấp các công cụ đại số để thực hiện việc "xây dựng" này.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **`Sum` (Tổng):** `Sum` của hai `subspace` $U$ và $W$ là tập hợp tất cả các `vector` bạn có thể tạo ra bằng cách lấy một `vector` từ $U$ cộng với một `vector` từ $W$. Nếu $U$ và $W$ là hai đường thẳng khác nhau đi qua gốc tọa độ trong $\mathbb{R}^3$, `sum` của chúng chính là mặt phẳng chứa cả hai đường thẳng đó.
* **`Direct Sum` (Tổng trực tiếp):** Đây là một loại `sum` "đẹp" và "không dư thừa". Nó xảy ra khi hai `subspace` chỉ có một điểm chung duy nhất là `vector` không. Trong trường hợp này, mọi `vector` trong không gian tổng có một "công thức" phân tách duy nhất thành một phần từ $U$ và một phần từ $W$.

#### 3. Định nghĩa toán học:
Cho $U_1, \dots, U_m$ là các `subspace` của $V$.
* **`Sum`** của chúng được định nghĩa là:
    $$ U_1 + \dots + U_m = \{u_1 + \dots + u_m \mid u_i \in U_i\} $$
* `Sum` được gọi là **`direct sum`**, ký hiệu $V = U_1 \oplus \dots \oplus U_m$, nếu mọi `vector` $v \in V$ đều có một biểu diễn **duy nhất** dưới dạng trên. Điều này tương đương với việc giao của bất kỳ `subspace` nào với tổng của các `subspace` còn lại chỉ là $\{0\}$.

**Định lý về số chiều:**
$$ \dim(U+W) = \dim(U) + \dim(W) - \dim(U \cap W) $$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, trục x ($U$) và trục y ($W$) tạo thành một `direct sum`, và $\mathbb{R}^2 = U \oplus W$.
    * Không gian của tất cả các hàm $f: \mathbb{R} \to \mathbb{R}$ có thể được phân tích thành `direct sum` của không gian các hàm chẵn và không gian các hàm lẻ.
* **Phản ví dụ:**
    * Trong $\mathbb{R}^3$, gọi $U$ là mặt phẳng xy và $W$ là mặt phẳng yz. `Sum` của chúng là toàn bộ $\mathbb{R}^3$, nhưng nó **không** phải là `direct sum` vì chúng giao nhau trên trục y ($U \cap W \ne \{0\}$).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Direct sum` là một công cụ phân rã mạnh mẽ. Nó cho phép chúng ta chia một không gian phức tạp thành các thành phần đơn giản hơn, độc lập với nhau. Nhiều định lý quan trọng trong đại số tuyến tính (như Định lý Phổ) về cơ bản là các định lý về việc phân rã một không gian `vector` thành một `direct sum` của các không gian con riêng.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **The Four Fundamental Subspaces:** Với một ma trận $A$, không gian nguồn $\mathbb{R}^n$ có thể được phân rã thành `direct sum` của `row space` và `null space`. Không gian đích $\mathbb{R}^m$ có thể được phân rã thành `direct sum` của `column space` và `left null space`. Sự phân rã trực giao này là nền tảng của nhiều thuật toán, bao gồm cả Singular Value Decomposition (SVD).
* **Analysis of Variance (ANOVA):** Trong thống kê, tổng bình phương sai lệch có thể được phân rã thành một `sum` của các thành phần, mỗi thành phần tương ứng với một nguồn biến thiên khác nhau. Về mặt hình học, đây là một sự phân rã của một `vector` trong một không gian nhiều chiều thành các thành phần nằm trong các `subspace` trực giao.