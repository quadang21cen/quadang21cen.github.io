---
sidebar_position: 1
---
# Chương 9: Phân rã Ma trận và các Dạng chính tắc (Matrix Decompositions and Canonical Forms)

*Phần này hoàn thiện bức tranh của chúng ta về Đại số tuyến tính. Chúng ta sẽ kết nối lý thuyết trừu tượng về các toán tử với các công cụ tính toán mạnh mẽ—các phép phân rã ma trận. Đây là những "công thức" cho phép chúng ta "giải phẫu" một ma trận bất kỳ thành các thành phần đơn giản hơn, tiết lộ cấu trúc bên trong của nó và cho phép tính toán hiệu quả. Chúng ta cũng sẽ khám phá dạng chính tắc cuối cùng, `Jordan Normal Form`, để hiểu cả những toán tử "xấu tính" nhất.*

***

### **Định thức (Determinant) và Vết (Trace)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã thấy rằng cùng một `linear operator` có thể được biểu diễn bởi nhiều ma trận khác nhau, tùy thuộc vào `basis` được chọn. Điều này đặt ra một câu hỏi quan trọng: liệu có những thuộc tính số nào của các ma trận này vẫn không thay đổi dù ta có đổi `basis` hay không? Chúng ta cần những "bất biến" (`invariants`) để nắm bắt được các đặc tính cốt lõi của chính `operator`, chứ không phải của cách biểu diễn nó.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **`Determinant` (Định thức):** Là một con số duy nhất gắn với một ma trận vuông. Về mặt trực quan, nó cho biết "hệ số thay đổi thể tích" của một phép biến đổi tuyến tính. Nếu bạn biến đổi một hình hộp đơn vị, định thức chính là tỉ lệ thể tích của hình hộp mới so với hình hộp cũ.
* **`Trace` (Vết):** Là tổng các phần tử trên đường chéo chính của một ma trận vuông. Nó có vẻ ít trực quan hơn, nhưng nó liên quan đến tổng của các hệ số co giãn dọc theo các hướng chính (`eigenvalue`).

#### 3. Định nghĩa toán học:
Cho $T: V \to V$ là một `linear operator` trên một không gian `vector` $n$-chiều.
* **`Determinant`** của $T$, ký hiệu $\det(T)$, được định nghĩa là tích của tất cả các `eigenvalue` của $T$ (tính cả bội, trên trường $\mathbb{C}$).
* **`Trace`** của $T$, ký hiệu $\text{trace}(T)$, được định nghĩa là tổng của tất cả các `eigenvalue` của $T$ (tính cả bội, trên trường $\mathbb{C}$).
**Định lý:** Nếu $A$ là ma trận biểu diễn của $T$ trong một `basis` bất kỳ, thì $\det(A) = \det(T)$ và $\text{trace}(A) = \text{trace}(T)$. Do đó, chúng là các đại lượng độc lập với cơ sở.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Ma trận $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ có `eigenvalue` là 3 và 1.
    * $\det(A) = 2 \cdot 2 - 1 \cdot 1 = 3$, và cũng bằng $3 \cdot 1 = 3$.
    * $\text{trace}(A) = 2+2=4$, và cũng bằng $3+1=4$.
* **Phản ví dụ:**
    * Hai ma trận có cùng `determinant` và `trace` chưa chắc đã biểu diễn cùng một `operator` (chúng có thể không đồng dạng). Ví dụ, $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ và $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ đều có $\det=1, \text{trace}=2$, nhưng chúng không đồng dạng.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* **`Determinant`** là hệ số thay đổi thể tích có dấu. Dấu của nó cho biết phép biến đổi có "lật ngược" không gian hay không (bảo toàn hay đảo ngược định hướng). Nếu $\det(T)=0$, phép biến đổi làm "xẹp" không gian xuống một số chiều thấp hơn.
* **`Trace`** có liên quan đến sự thay đổi tức thời của dòng chảy trong một trường `vector` (divergence).

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Change of Variables in Probability:** `Determinant` của ma trận Jacobian là thành phần cốt lõi trong công thức đổi biến cho các hàm mật độ xác suất. Điều này cực kỳ quan trọng trong các mô hình sinh (`generative models`) như `Normalizing Flows`, nơi một phân phối đơn giản được biến đổi thành một phân phối phức tạp thông qua một chuỗi các phép biến đổi khả nghịch.
* **Covariance Matrix:** `Determinant` của ma trận hiệp phương sai cho biết "thể tích" của đám mây dữ liệu.

***

### **Phân rã LU và QR (LU and QR Decompositions)**

#### 1. Động lực / Vấn đề cần giải quyết:
Việc giải hệ phương trình tuyến tính $Ax=b$ bằng cách tính ma trận nghịch đảo $A^{-1}$ rất tốn kém và không ổn định về mặt số học. Phép khử Gauss hiệu quả hơn, nhưng nếu ta phải giải hệ thống với cùng ma trận $A$ và nhiều `vector` $b$ khác nhau, việc lặp lại toàn bộ quá trình khử là lãng phí. Chúng ta cần các phương pháp phân rã ma trận $A$ thành các thành phần đơn giản hơn để việc giải hệ thống trở nên nhanh chóng và ổn định.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Phân rã `LU`:** "Lưu trữ" các bước của phép khử Gauss. Nó phân tích ma trận $A$ thành $A=LU$, với $L$ là ma trận tam giác dưới (`Lower triangular`) và $U$ là ma trận tam giác trên (`Upper triangular`). Việc giải $Ax=b$ trở thành hai bước đơn giản: giải $Ly=b$ (tiến) và $Ux=y$ (lùi).
* **Phân rã `QR`:** Phân tích ma trận $A$ theo một cách hình học hơn, $A=QR$. $Q$ là một ma trận trực giao (`orthogonal`), đại diện cho một phép quay/phản xạ. $R$ là ma trận tam giác trên. Phân rã này cực kỳ ổn định về mặt số học.

#### 3. Định nghĩa toán học:
* **`LU` Decomposition:** Cho một ma trận vuông $A$, phân rã `LU` là việc tìm một ma trận tam giác dưới $L$ với các phần tử đường chéo bằng 1 và một ma trận tam giác trên $U$ sao cho $A = LU$. (Đôi khi cần hoán vị, $PA=LU$).
* **`QR` Decomposition:** Cho một ma trận $A$ bất kỳ có các cột độc lập tuyến tính, phân rã `QR` là việc tìm một ma trận $Q$ có các cột trực chuẩn và một ma trận tam giác trên $R$ khả nghịch sao cho $A=QR$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Phân rã `LU` là kết quả trực tiếp của các bước trong phép khử Gauss.
    * Phân rã `QR` có thể được tính bằng quy trình trực giao hóa Gram-Schmidt trên các cột của $A$.
* **Phản ví dụ:**
    * Ma trận $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ không có phân rã `LU` trừ khi ta cho phép hoán vị hàng.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* **`LU`** là một góc nhìn đại số, tách một phép biến đổi thành một chuỗi các phép biến đổi hàng cơ bản.
* **`QR`** là một góc nhìn hình học, tách một phép biến đổi bất kỳ thành một phép quay/phản xạ (`isometry`) theo sau là một phép co giãn dọc theo các trục.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Solving Linear Systems:** Cả hai phân rã đều là những công cụ cốt lõi trong các thư viện số học tuyến tính (như NumPy, LAPACK) để giải các hệ phương trình tuyến tính một cách hiệu quả.
* **Least Squares:** Phân rã `QR` là phương pháp tiêu chuẩn và ổn định nhất để giải bài toán bình phương tối thiểu $Ax \approx b$. Lời giải được tìm thấy bằng cách giải hệ tam giác đơn giản $Rx = Q^T b$. Điều này được sử dụng rộng rãi trong hồi quy tuyến tính và các bài toán khớp mô hình.

***

### **Dạng chính tắc Jordan (Jordan Normal Form)**

#### 1. Động lực / Vấn đề cần giải quyết:
Định lý Phổ rất đẹp, nhưng nó chỉ áp dụng cho các toán tử `normal`. Còn những toán tử "xấu tính" không chéo hóa được thì sao (ví dụ: các ma trận `shear`)? Liệu có tồn tại một `basis` "tốt nhất có thể" cho chúng không, một dạng ma trận gần-chéo-nhất mà vẫn tiết lộ toàn bộ cấu trúc của toán tử?

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Jordan Normal Form`** là dạng ma trận "đơn giản nhất" mà một toán tử bất kỳ có thể có. Nó là một ma trận đường chéo theo khối. Mỗi khối, gọi là **khối Jordan**, là một ma trận "gần như" đường chéo: nó có `eigenvalue` trên đường chéo chính, và có thể có các số 1 ngay phía trên đường chéo chính. Các số 1 này thể hiện phần "không chéo hóa được" hay phần "trượt" (`shear`) của phép biến đổi.

#### 3. Định nghĩa toán học:
**Định lý:** Cho $T$ là một `linear operator` trên một không gian `vector` phức hữu hạn chiều $V$. Khi đó, tồn tại một `basis` của $V$ (gọi là `Jordan basis`) sao cho ma trận của $T$ trong `basis` này có dạng khối đường chéo:
$$ J = \begin{pmatrix} J_1 & & 0 \\ & \ddots & \\ 0 & & J_k \end{pmatrix} $$
trong đó mỗi $J_i$ là một **khối Jordan** có dạng:
$$ J_i = \begin{pmatrix} \lambda_i & 1 & & 0 \\ & \lambda_i & \ddots & \\ & & \ddots & 1 \\ 0 & & & \lambda_i \end{pmatrix} $$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Ma trận `shear` $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ chính là một khối Jordan. Nó không chéo hóa được.
* **Phản ví dụ:** Một ma trận chéo hóa được có dạng Jordan là chính ma trận đường chéo đó (tất cả các khối Jordan đều có kích thước $1 \times 1$).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Dạng Jordan cung cấp một sự phân loại hoàn chỉnh cho tất cả các `linear operator`. Nó phân rã không gian thành một tổng trực tiếp của các `invariant subspace`, và trên mỗi `subspace` này, toán tử hoạt động như một sự kết hợp của một phép co giãn (`eigenvalue` $\lambda_i$) và một phép biến đổi "đơn giản" gọi là `nilpotent operator` (các số 1 trên đường chéo phụ).

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Analysis of Linear Dynamical Systems:** Dạng Jordan là công cụ lý thuyết cốt lõi để nghiên cứu hành vi dài hạn của các hệ thống động lực tuyến tính $x_{k+1} = Ax_k$. Việc tính lũy thừa $A^k$ trở nên khả thi khi ta biết dạng Jordan của $A$. Nó cho phép ta phân tích chính xác sự ổn định của hệ thống, ngay cả trong các trường hợp suy biến khi hệ thống không chéo hóa được.
* **Control Theory:** Trong lý thuyết điều khiển, dạng Jordan được sử dụng để phân tích các thuộc tính như tính điều khiển được (`controllability`) và tính quan sát được (`observability`) của một hệ thống.