---
sidebar_position: 1
---

# Chương 7: Giá trị riêng và Vector riêng (Eigenvalues and Eigenvectors)

*Đây là phần cốt lõi và cao cấp nhất của môn học, nơi chúng ta chuyển từ việc xem xét toán tử tác động lên toàn bộ không gian sang việc phân tích "DNA" của chính toán tử đó. Chúng ta sẽ đi tìm những `vector` "đặc biệt"—những `vector` tiết lộ hành vi cơ bản nhất của một phép biến đổi tuyến tính. Việc hiểu các `vector` này là chìa khóa để chéo hóa ma trận và giải quyết vô số bài toán trong vật lý, kỹ thuật và khoa học dữ liệu.*

***

### **Không gian con bất biến (Invariant Subspaces)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một toán tử tuyến tính $T$ có thể tác động lên không gian $V$ một cách rất phức tạp. Để hiểu nó, một chiến lược hiệu quả là chia không gian $V$ thành các không gian con nhỏ hơn và xem $T$ tác động lên từng phần như thế nào. Vấn đề là, một không gian con $U$ có thể bị $T$ "đẩy" ra khỏi chính nó, làm cho việc phân tích trở nên khó khăn. Do đó, chúng ta muốn tìm những không gian con "ổn định"—những không gian con mà $T$ không thể "thoát ra" được.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **`invariant subspace`** (không gian con bất biến) đối với toán tử $T$ là một "căn phòng" đặc biệt trong không gian $V$. Nếu bạn lấy bất kỳ `vector` nào trong căn phòng này và áp dụng phép biến đổi $T$, kết quả vẫn sẽ nằm gọn trong chính căn phòng đó. $T$ không thể "dịch chuyển" các `vector` ra khỏi không gian con này.

#### 3. Định nghĩa toán học:
Cho $T: V \to V$ là một `linear operator`. Một `subspace` $U$ của $V$ được gọi là **bất biến** (`invariant`) đối với $T$ nếu với mọi $u \in U$, ta có $T(u) \in U$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * `Kernel` của một toán tử, $\ker(T)$, luôn là một `invariant subspace` (vì $T$ biến mọi thứ trong đó thành $0$, và $0$ cũng nằm trong $\ker(T)$).
    * `Image` của một toán tử, $\text{im}(T)$, cũng luôn là một `invariant subspace`.
    * Xét phép quay trong $\mathbb{R}^3$ quanh trục z. Trục z và mặt phẳng xy đều là các `invariant subspace`.
* **Phản ví dụ:**
    * Xét $T: \mathbb{R}^2 \to \mathbb{R}^2$ được biểu diễn bởi ma trận $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (phép `shear`). Trục x (span của $(1,0)$) là một `invariant subspace`. Tuy nhiên, trục y (span của $(0,1)$) **không** phải là `invariant subspace` vì $T(0,1)=(1,1)$ không nằm trên trục y.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Invariant subspace` là chìa khóa để "phân rã" một toán tử. Nếu ta có thể viết $V = U_1 \oplus U_2 \oplus \dots \oplus U_m$ trong đó mỗi $U_i$ là bất biến đối với $T$, thì ma trận của $T$ đối với một cơ sở phù hợp sẽ có dạng khối đường chéo. Điều này giúp đơn giản hóa việc nghiên cứu toán tử phức tạp bằng cách nghiên cứu các toán tử đơn giản hơn trên các không gian con.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **PageRank Algorithm:** Thuật toán PageRank của Google mô hình hóa web như một chuỗi Markov khổng lồ. Nó tìm kiếm một phân phối xác suất ổn định, chính là `eigenvector` chính của ma trận chuyển. Không gian con sinh bởi `eigenvector` này là một `invariant subspace` 1-chiều. Toàn bộ không gian các phân phối xác suất sẽ hội tụ về không gian con bất biến này sau nhiều lần lặp.

***

### **Eigenvalue và Eigenvector**

#### 1. Động lực / Vấn đề cần giải quyết:
Các `invariant subspace` đơn giản nhất có thể là gì? Đó là các không gian 1-chiều. Một không gian con 1-chiều (một đường thẳng đi qua gốc tọa độ) bất biến đối với $T$ có nghĩa là $T$ chỉ có thể "co giãn" các `vector` trên đường thẳng đó chứ không thể làm chúng chệch khỏi đường thẳng. `Vector` khác không nằm trên đường thẳng đó chính là `eigenvector`, và hệ số co giãn chính là `eigenvalue`. Tìm ra chúng chính là tìm ra các "trục tự nhiên" của phép biến đổi.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **`eigenvector`** của một toán tử là một `vector` "đặc biệt" mà khi bị toán tử tác động lên, nó không bị đổi phương, chỉ bị co giãn hoặc co lại (và có thể bị lật ngược chiều). **`Eigenvalue`** tương ứng chính là hệ số co giãn đó. Chúng là những thành phần cơ bản nhất, tiết lộ hành vi cốt lõi của một phép biến đổi tuyến tính.

#### 3. Định nghĩa toán học:
Cho một `linear operator` $T: V \to V$. Một vô hướng $\lambda$ được gọi là một **`eigenvalue`** của $T$ nếu tồn tại một `vector` $v \in V, v \ne 0$, sao cho:
$$ T(v) = \lambda v $$
`Vector` $v$ được gọi là một **`eigenvector`** tương ứng với `eigenvalue` $\lambda$.
* **Mối liên hệ:** $\lambda$ là một `eigenvalue` của $T$ khi và chỉ khi toán tử $(T - \lambda I)$ không phải là đơn ánh, tức là $\ker(T - \lambda I) \ne \{0\}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Ma trận $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ có `eigenvalue` $\lambda_1 = 3$ với `eigenvector` $v_1 = (1, 1)$, và `eigenvalue` $\lambda_2 = 1$ với `eigenvector` $v_2 = (1, -1)$.
* **Phản ví dụ:**
    * Phép quay trong $\mathbb{R}^2$ một góc 90 độ, $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, **không** có `eigenvalue` hay `eigenvector` thực nào (vì không có `vector` nào giữ nguyên phương sau khi quay 90 độ). Tuy nhiên, nó có `eigenvalue` phức là $\pm i$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Eigenvector` là các "trục chính" của một phép biến đổi tuyến tính. `Eigenvalue` cho biết mức độ co giãn dọc theo các trục này. Nếu một toán tử có đủ `eigenvector` để tạo thành một `basis`, thì trong hệ tọa độ đó, tác động của toán tử trở nên cực kỳ đơn giản: chỉ là các phép co giãn độc lập dọc theo mỗi trục.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** `Eigenvector` của ma trận hiệp phương sai của dữ liệu chính là các thành phần chính (`principal components`). Chúng là các hướng trong không gian dữ liệu mà dữ liệu có phương sai lớn nhất. `Eigenvalue` tương ứng cho biết lượng phương sai được giữ lại theo mỗi hướng.
* **Graph Embeddings:** Các kỹ thuật như `Spectral Embedding` biểu diễn các nút trong một đồ thị dưới dạng các `vector`. Tọa độ của các `vector` này thường được lấy từ các `eigenvector` của ma trận Laplacian của đồ thị, giúp nắm bắt cấu trúc kết nối của đồ thị.

***

### **Đa thức đặc trưng (Characteristic Polynomial)**

#### 1. Động lực / Vấn đề cần giải quyết:
Định nghĩa của `eigenvalue` ($\ker(T - \lambda I) \ne \{0\}$) mang tính lý thuyết. Làm thế nào để tìm ra chúng một cách có hệ thống bằng các công cụ tính toán? Chúng ta cần một phương trình mà nghiệm của nó chính là các `eigenvalue`.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Characteristic polynomial`** là một đa thức đặc biệt được xây dựng từ một ma trận. Điều kỳ diệu là các nghiệm của đa thức này chính xác là các `eigenvalue` của ma trận đó. Việc tìm `eigenvalue` trừu tượng được chuyển thành một bài toán đại số quen thuộc: tìm nghiệm của một đa thức.

#### 3. Định nghĩa toán học:
Đối với một ma trận vuông $A$ kích thước $n \times n$, **`characteristic polynomial`** của $A$ là:
$$ p(\lambda) = \det(A - \lambda I) $$
Các `eigenvalue` của $A$ chính là các nghiệm của phương trình đặc trưng $p(\lambda) = 0$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Với $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $p(\lambda) = \det\begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix} = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3$.
    * Nghiệm của $\lambda^2 - 4\lambda + 3 = 0$ là $\lambda=1$ và $\lambda=3$, chính là các `eigenvalue`.
* **Phản ví dụ:**
    * `Characteristic polynomial` chỉ được định nghĩa cho các toán tử trên không gian hữu hạn chiều (vì nó dựa vào định thức của ma trận).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Characteristic polynomial` mã hóa rất nhiều thông tin quan trọng về toán tử, không chỉ các `eigenvalue`. Ví dụ, hệ số của $\lambda^{n-1}$ luôn là $-\text{trace}(A)$, và số hạng tự do là $(-1)^n \det(A)$. Định lý Cayley-Hamilton còn cho thấy một mối liên hệ sâu sắc hơn: mọi ma trận đều là "nghiệm" của chính đa thức đặc trưng của nó.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Stability Analysis of Dynamic Systems:** Trong các hệ thống động lực được mô tả bởi các phương trình sai phân hoặc vi phân tuyến tính, sự ổn định của hệ thống phụ thuộc vào các `eigenvalue` của ma trận hệ thống. Hệ thống sẽ ổn định nếu tất cả các `eigenvalue` đều nằm trong vòng tròn đơn vị (đối với hệ rời rạc) hoặc có phần thực âm (đối với hệ liên tục). `Characteristic polynomial` là công cụ chính để tìm các `eigenvalue` này.

***

### **Toán tử chéo hóa được (Diagonalizable Operators)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã thấy rằng `eigenvector` tạo ra các "trục tự nhiên" cho một phép biến đổi. Câu hỏi lý tưởng là: liệu có đủ các trục tự nhiên này để "phủ" khắp không gian không? Nếu có, mọi `vector` đều có thể được phân tích theo các hướng bất biến này, và tác động của toán tử trở nên cực kỳ đơn giản.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một toán tử là **`diagonalizable`** (chéo hóa được) nếu nó có một bộ `eigenvector` "đủ tốt" để tạo thành một `basis` cho toàn bộ không gian. "Chéo hóa" có nghĩa là tồn tại một hệ tọa độ (`basis` gồm các `eigenvector`) mà trong đó, ma trận biểu diễn cho toán tử chỉ có các số trên đường chéo chính, còn lại là số 0.

#### 3. Định nghĩa toán học:
Một `linear operator` $T$ trên một không gian hữu hạn chiều $V$ được gọi là **`diagonalizable`** nếu tồn tại một `basis` của $V$ bao gồm toàn bộ các `eigenvector` của $T$.
**Tiêu chuẩn chéo hóa:** Một toán tử là `diagonalizable` khi và chỉ khi đa thức tối tiểu của nó không có nghiệm bội. Một điều kiện đủ đơn giản hơn là nếu nó có $n = \dim(V)$ `eigenvalue` phân biệt.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Mọi ma trận đối xứng thực đều `diagonalizable`. Ma trận $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ là `diagonalizable`.
* **Phản ví dụ:**
    * Ma trận `shear` $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ **không** `diagonalizable`. Nó chỉ có một `eigenvalue` là $\lambda=1$, và không gian riêng tương ứng chỉ có 1 chiều. Không thể tìm được một `basis` của $\mathbb{R}^2$ gồm các `eigenvector` của $A$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Diagonalization` là quá trình tìm ra "hệ tọa độ tự nhiên" nhất của một phép biến đổi. Trong hệ tọa độ này, mọi tác động phức tạp của toán tử (kết hợp của quay, co giãn, trượt) được phân rã thành các hành động đơn giản nhất có thể: chỉ là các phép co giãn độc lập dọc theo các trục tọa độ.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Markov Chains:** Ma trận chuyển của một chuỗi Markov thường có thể chéo hóa được. Chéo hóa ma trận chuyển $P = UDU^{-1}$ cho phép tính toán lũy thừa của nó một cách cực kỳ hiệu quả: $P^k = UD^kU^{-1}$. Điều này rất quan trọng để tìm phân phối xác suất của chuỗi sau một số lượng lớn các bước, vì việc tính $D^k$ (lũy thừa của ma trận đường chéo) là tầm thường.