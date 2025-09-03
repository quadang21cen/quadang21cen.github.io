---
sidebar_position: 2
---
# Chương 4: Biểu diễn ma trận (Matrix Representation)

*Ở chương trước, chúng ta đã nghiên cứu các `linear maps` như những đối tượng trừu tượng, thuần túy. Cách tiếp cận này rất mạnh mẽ về mặt lý thuyết, nhưng lại khó để tính toán cụ thể. Chương này sẽ xây dựng một cây cầu nối liền thế giới trừu tượng của `linear maps` và thế giới cụ thể của các mảng số mà máy tính có thể xử lý. Chúng ta sẽ thấy rằng ma trận không phải là đối tượng cơ bản, mà chỉ là một cách "biểu diễn" hay một "cái bóng" của một `linear map` trong một hệ tọa độ cho trước.*

***

### **Ma trận của một Ánh xạ tuyến tính (Matrix of a Linear Map)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một `linear map` trừu tượng $T: V \to W$ cho chúng ta biết nó bảo toàn cấu trúc đại số, nhưng nó không cho chúng ta biết cách tính toán $T(v)$ cho một `vector` $v$ cụ thể. Để thực hiện các phép tính, chúng ta cần một phương pháp cụ thể. Làm thế nào để "mã hóa" toàn bộ hành động của một `linear map` vào một cấu trúc dữ liệu đơn giản (một mảng các con số) để có thể thực hiện phép biến đổi bằng các phép toán số học thông thường?

#### 2. Khái niệm, Cách hiểu đơn giản:
Một ma trận giống như một "bảng hướng dẫn" chi tiết cho một `linear map`. Nếu bạn biết một hệ tọa độ (`basis`) cho không gian đầu vào, thì ma trận sẽ cho bạn biết chính xác `vector` kết quả sẽ có tọa độ như thế nào. Cụ thể hơn, **cột thứ $j$ của ma trận chính là "địa chỉ" (tọa độ) của `vector` kết quả sau khi biến đổi `vector` cơ sở thứ $j$**. Một khi bạn biết phép biến đổi tác động lên các `vector` cơ sở như thế nào, bạn sẽ biết nó tác động lên mọi `vector` khác ra sao.

#### 3. Định nghĩa toán học:
Cho $T: V \to W$ là một `linear map`, với $B = \{v_1, \dots, v_n\}$ là một `basis` của $V$ và $C = \{w_1, \dots, w_m\}$ là một `basis` của $W$. Với mỗi `vector` cơ sở $v_j \in B$, ảnh của nó $T(v_j)$ là một `vector` trong $W$ và có thể được biểu diễn duy nhất dưới dạng tổ hợp tuyến tính của các `vector` trong $C$:
$$ T(v_j) = A_{1j}w_1 + A_{2j}w_2 + \dots + A_{mj}w_m = \sum_{i=1}^m A_{ij}w_i $$
**Ma trận của $T$ đối với cơ sở $B$ và $C$**, ký hiệu là $\mathcal{M}(T, B, C)$, là một ma trận $m \times n$ có phần tử ở hàng $i$, cột $j$ là $A_{ij}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Xét `linear map` $D: \mathcal{P}_3(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R})$ là phép lấy đạo hàm.
    * Chọn `basis` $B = \{1, x, x^2, x^3\}$ cho $\mathcal{P}_3$ và $C = \{1, x, x^2\}$ cho $\mathcal{P}_2$.
    * Ta có: $D(1)=0$, $D(x)=1$, $D(x^2)=2x$, $D(x^3)=3x^2$.
    * Tọa độ của các ảnh này trong cơ sở $C$ là: $(0,0,0)$, $(1,0,0)$, $(0,2,0)$, $(0,0,3)$.
    * Vậy ma trận của $D$ là:
    $$ \mathcal{M}(D) = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix} $$
* **Phản ví dụ:**
    * Một hàm không tuyến tính, ví dụ $T: \mathbb{R} \to \mathbb{R}$ với $T(x) = x+1$, không thể có một ma trận biểu diễn theo định nghĩa này. Nếu có, nó phải là ma trận $1 \times 1$, ví dụ $[a]$. Khi đó $T(x) = ax$, nhưng $ax \ne x+1$ với mọi $x$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Ma trận là sự cụ thể hóa của một ý tưởng trừu tượng. `Linear map` là một thực thể hình học/đại số độc lập với hệ tọa độ (ví dụ: một phép quay 30 độ). Ma trận biểu diễn là "cái bóng" của phép quay đó khi được chiếu lên một hệ trục tọa độ cụ thể. Nếu bạn thay đổi hệ trục, "cái bóng" (ma trận) sẽ thay đổi, nhưng phép quay thì không.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Weight Matrices in Neural Networks:** Mỗi lớp tuyến tính (fully-connected layer) trong một mạng neural về bản chất là một `linear map`. Ma trận trọng số $W$ của lớp đó chính là ma trận biểu diễn cho `linear map` này đối với các cơ sở chính tắc. Phép toán $y = Wx + b$ chính là việc áp dụng phép biến đổi tuyến tính (nhân ma trận) lên `vector` đầu vào $x$. Quá trình học (`training`) chính là đi tìm ma trận $W$ tối ưu.

***

### **Ma trận chuyển cơ sở (Change of Basis Matrix)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một `vector` là một đối tượng trừu tượng, nhưng để làm việc với nó, chúng ta cần biểu diễn nó bằng một bộ các con số (tọa độ). Các con số này phụ thuộc vào hệ tọa độ (`basis`) mà chúng ta chọn. Vấn đề là: nếu chúng ta biết tọa độ của một `vector` trong hệ tọa độ cũ, làm thế nào để tìm ra tọa độ của nó trong một hệ tọa độ mới? Chúng ta cần một "cỗ máy phiên dịch" tọa độ.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Change of basis matrix`** là một ma trận đặc biệt hoạt động như một "cuốn từ điển" dịch tọa độ. Nếu bạn có `vector` tọa độ trong cơ sở cũ, chỉ cần nhân nó với ma trận chuyển cơ sở, bạn sẽ nhận được `vector` tọa độ tương ứng trong cơ sở mới. Nó mã hóa thông tin về cách các `vector` cơ sở cũ được biểu diễn qua các `vector` cơ sở mới.

#### 3. Định nghĩa toán học:
Cho $V$ là một `vector space` $n$-chiều với hai `basis` là $B = \{v_1, \dots, v_n\}$ (cơ sở cũ) và $C = \{w_1, \dots, w_n\}$ (cơ sở mới). **Ma trận chuyển cơ sở từ $B$ sang $C$**, ký hiệu $P_{C \leftarrow B}$, là ma trận của ánh xạ đồng nhất $I: V \to V$, trong đó `basis` của không gian nguồn là $B$ và `basis` của không gian đích là $C$.
Cột thứ $j$ của $P_{C \leftarrow B}$ chính là `vector` tọa độ của $v_j$ trong cơ sở $C$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, cơ sở cũ là $B = \{(1, 0), (0, 1)\}$ và cơ sở mới là $C = \{(1, 1), (-1, 1)\}$.
    * Ta biểu diễn các `vector` cũ qua `vector` mới:
    * $(1, 0) = \frac{1}{2}(1, 1) + \frac{-1}{2}(-1, 1)$. Tọa độ là $(1/2, -1/2)$.
    * $(0, 1) = \frac{1}{2}(1, 1) + \frac{1}{2}(-1, 1)$. Tọa độ là $(1/2, 1/2)$.
    * Ma trận chuyển cơ sở từ $B$ sang $C$ là $P_{C \leftarrow B} = \begin{pmatrix} 1/2 & 1/2 \\ -1/2 & 1/2 \end{pmatrix}$.
* **Phản ví dụ:**
    * Không thể tạo ra một ma trận chuyển cơ sở đến một tập hợp không phải là `basis` (ví dụ, một tập phụ thuộc tuyến tính), vì khi đó việc biểu diễn tọa độ sẽ không còn là duy nhất.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Change of basis matrix` mô tả một phép biến đổi của chính hệ tọa độ. `Vector` vật lý không thay đổi, nhưng "lưới tọa độ" mà chúng ta dùng để mô tả nó thì thay đổi (bị xoay, co giãn, ...).

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** PCA tìm ra một `basis` trực chuẩn mới cho không gian dữ liệu (các thành phần chính - `principal components`) sao cho phương sai của dữ liệu được tối đa hóa dọc theo các trục mới này. Ma trận có các cột là các `principal components` chính là một `change of basis matrix`. Việc nhân dữ liệu gốc với ma trận này sẽ cho ra tọa độ của dữ liệu trong hệ tọa độ mới, vốn có ý nghĩa và dễ diễn giải hơn.

***

### **Cách ma trận của một linear map thay đổi khi cơ sở thay đổi**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã biết `linear map` là đối tượng chính, còn ma trận chỉ là biểu diễn của nó trong một `basis`. Chúng ta cũng biết cách thay đổi `basis` cho một `vector`. Câu hỏi cuối cùng là: "Bảng hướng dẫn" (ma trận) của một `linear map` sẽ thay đổi như thế nào nếu chúng ta quyết định dùng một bộ "trục tọa độ" (`basis`) khác?

#### 2. Khái niệm, Cách hiểu đơn giản:
Quy tắc thay đổi rất thanh lịch. Ma trận mới trong hệ tọa độ mới có thể được tìm thấy bằng một công thức "kẹp sandwich". Bạn lấy ma trận cũ, kẹp nó ở giữa ma trận chuyển cơ sở và ma trận nghịch đảo của nó. Phép biến đổi này được gọi là một **phép đồng dạng (`similarity transformation`)**.

#### 3. Định nghĩa toán học:
Cho $T: V \to V$ là một `linear operator`. Gọi $A$ là ma trận của $T$ đối với `basis` $B$, và $A'$ là ma trận của $T$ đối với `basis` $C$. Nếu $P$ là ma trận chuyển cơ sở từ `basis` **mới** $C$ sang `basis` **cũ** $B$, thì ta có công thức:
$$ A' = P^{-1} A P $$
Hai ma trận $A$ và $A'$ được gọi là **đồng dạng (`similar`)**.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Xét phép quay 90 độ trong $\mathbb{R}^2$. Ma trận trong cơ sở chính tắc là $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. Nếu ta dùng một `basis` mới được xoay đi 45 độ, ma trận mới $A'$ vẫn sẽ là $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, và công thức $A' = P^{-1}AP$ được thỏa mãn.
* **Phản ví dụ:**
    * Hai ma trận có định thức khác nhau (ví dụ $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ và $B = \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$) không thể đồng dạng với nhau, vì chúng không thể biểu diễn cùng một `linear map`. Các đại lượng như định thức (`determinant`) và vết (`trace`) là các bất biến đồng dạng.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là một ý tưởng cực kỳ sâu sắc. Nó nói rằng tất cả các ma trận đồng dạng với nhau về cơ bản là **cùng một thứ**. Chúng chỉ là những "góc nhìn" khác nhau của cùng một phép biến đổi hình học. Điều này dẫn đến một trong những mục tiêu chính của đại số tuyến tính: với một `linear map` cho trước, hãy tìm một `basis` "đẹp" nhất sao cho ma trận biểu diễn của nó trở nên đơn giản nhất có thể (lý tưởng nhất là ma trận đường chéo).

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Diagonalization (Chéo hóa):** Việc chéo hóa một ma trận ($A = PDP^{-1}$) chính là việc tìm một `basis` (gồm các `eigenvector`) sao cho ma trận $D$ của phép biến đổi trong `basis` này là ma trận đường chéo. Ma trận $P$ chính là ma trận chuyển cơ sở. Điều này cực kỳ hữu ích vì lũy thừa của ma trận đường chéo rất dễ tính ($D^k$), cho phép tính toán hiệu quả trong các hệ thống động lực như chuỗi Markov hoặc các mô hình chuỗi thời gian. Việc phân tích ma trận hiệp phương sai trong PCA chính là một bài toán chéo hóa.