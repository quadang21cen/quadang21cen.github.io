---
sidebar_position: 2
---
# Chương 10: Phân rã giá trị suy biến (Singular Value Decomposition - SVD)

*Phần này là đỉnh cao của đại số tuyến tính ứng dụng. Chúng ta sẽ khám phá `Singular Value Decomposition (SVD)`, được nhiều người coi là phép phân rã ma trận quan trọng và hữu ích nhất. Không giống như phân tích `eigen` vốn chỉ áp dụng cho ma trận vuông, SVD hoạt động với **mọi ma trận bất kỳ**. Nó cung cấp một cái nhìn hình học sâu sắc về tác động của một phép biến đổi tuyến tính và là nền tảng lý thuyết cho vô số thuật toán trong khoa học dữ liệu.*

***

### **Phân rã giá trị suy biến (Singular Value Decomposition)**

#### 1. Động lực / Vấn đề cần giải quyết:
Định lý Phổ rất mạnh mẽ, nhưng nó có một hạn chế lớn: nó chỉ áp dụng cho các toán tử `normal` (và đặc biệt là `self-adjoint`), vốn phải là các toán tử từ một không gian về chính nó (tương ứng với ma trận vuông). Nhưng trong thực tế, rất nhiều dữ liệu được biểu diễn bởi các ma trận hình chữ nhật (ví dụ: ma trận user-item trong hệ gợi ý). Làm thế nào để "chéo hóa" một ma trận hình chữ nhật? Làm thế nào để tìm ra các "trục co giãn chính" cho một phép biến đổi tuyến tính bất kỳ, ngay cả khi không gian nguồn và không gian đích có số chiều khác nhau? SVD ra đời để giải quyết chính xác vấn đề này.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Singular Value Decomposition (SVD)`** là một định lý khẳng định rằng mọi phép biến đổi tuyến tính, dù phức tạp đến đâu, đều có thể được phân rã thành ba bước hình học đơn giản:
1.  **Một phép quay (và có thể phản chiếu)** trong không gian đầu vào.
2.  **Một phép co giãn** dọc theo các trục tọa độ.
3.  **Một phép quay (và có thể phản chiếu)** khác trong không gian đầu ra.

Về cơ bản, SVD tìm ra một "hệ tọa độ vuông góc hoàn hảo" trong không gian nguồn và một "hệ tọa độ vuông góc hoàn hảo" khác trong không gian đích, sao cho phép biến đổi chỉ đơn thuần là co giãn các `vector` dọc theo các trục này.

#### 3. Định nghĩa toán học:
**Định lý Phân rã giá trị suy biến:** Cho một ma trận $A$ bất kỳ có kích thước $m \times n$. Khi đó, $A$ có thể được phân rã thành:
$$ A = U \Sigma V^T $$
trong đó:
* $U$ là một ma trận trực giao $m \times m$ (`orthogonal matrix`). Các cột của nó, $u_i$, được gọi là các **`left-singular vectors`**.
* $\Sigma$ là một ma trận "đường chéo" $m \times n$. Các phần tử trên đường chéo chính, $\sigma_1 \ge \sigma_2 \ge \dots \ge 0$, được gọi là các **`singular values`** (giá trị suy biến) của $A$.
* $V$ là một ma trận trực giao $n \times n$. Các cột của nó, $v_i$, được gọi là các **`right-singular vectors`**. $V^T$ là ma trận chuyển vị của $V$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Mọi ma trận, ví dụ $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, đều có phân rã SVD. Việc tính toán SVD thường phức tạp, nhưng về mặt lý thuyết nó luôn tồn tại.
* **Phản ví dụ:** Không có phản ví dụ cho sự tồn tại của SVD. Mọi ma trận đều có SVD. Tuy nhiên, SVD không hoàn toàn là duy nhất (ví dụ, bạn có thể đổi dấu đồng thời của một cặp `vector` suy biến trái và phải tương ứng).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là ý nghĩa hình học đẹp nhất của SVD: Mọi phép biến đổi tuyến tính đều biến một hình cầu đơn vị trong không gian nguồn thành một hình ellipsoid (có thể bị suy biến) trong không gian đích.
* Các **`right-singular vectors`** ($v_i$) là một cơ sở trực chuẩn cho không gian nguồn, chỉ ra các hướng của các trục chính của ellipsoid.
* Các **`singular values`** ($\sigma_i$) là độ dài của các bán trục của ellipsoid đó.
* Các **`left-singular vectors`** ($u_i$) là một cơ sở trực chuẩn cho không gian đích, chỉ ra các hướng của các bán trục của ellipsoid.



#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Image Compression (Nén ảnh):** SVD cho phép ta xấp xỉ một ma trận (ảnh) bằng một ma trận có `rank` thấp hơn. Bằng cách chỉ giữ lại $k$ giá trị suy biến lớn nhất (và các `vector` tương ứng), ta có thể tái tạo lại một phiên bản xấp xỉ của ảnh gốc, giúp giảm đáng kể dung lượng lưu trữ.
* **Recommender Systems (Hệ thống gợi ý):** SVD là nền tảng của các phương pháp `matrix factorization`. Ma trận user-item rất thưa thớt có thể được phân rã thành tích của hai ma trận `rank` thấp hơn (ma trận đặc trưng của user và ma trận đặc trưng của item). Điều này giúp "lấp đầy" các ô trống trong ma trận gốc để đưa ra các gợi ý mới.

***

### **Mối liên hệ giữa SVD và Bốn không gian con cơ bản**

#### 1. Động lực / Vấn đề cần giải quyết:
Đại số tuyến tính cơ bản giới thiệu bốn không gian con cơ bản gắn với một ma trận $A$: `column space`, `null space`, `row space`, và `left null space`. Chúng có những mối liên hệ trực giao đẹp đẽ. SVD không chỉ là một công cụ tính toán, nó còn cung cấp một cái nhìn hình học sâu sắc và hoàn hảo về mối liên hệ này. Nó cho chúng ta thấy cách "xây dựng" nên các không gian con này một cách tối ưu nhất.

#### 2. Khái niệm, Cách hiểu đơn giản:
SVD cung cấp các "hệ tọa độ vuông góc hoàn hảo" (`orthonormal bases`) cho cả bốn không gian con cơ bản cùng một lúc.
* Các `right-singular vectors` ($v_i$) cung cấp một `basis` cho `row space` và `null space`.
* Các `left-singular vectors` ($u_i$) cung cấp một `basis` cho `column space` và `left null space`.

#### 3. Định nghĩa toán học:
Cho phân rã $A = U \Sigma V^T$ của một ma trận $m \times n$ có `rank` là $r$.
* **Column Space C(A):** Có một `orthonormal basis` là $\{u_1, \dots, u_r\}$.
* **Left Null Space N(A^T):** Có một `orthonormal basis` là $\{u_{r+1}, \dots, u_m\}$.
* **Row Space C(A^T):** Có một `orthonormal basis` là $\{v_1, \dots, v_r\}$.
* **Null Space N(A):** Có một `orthonormal basis` là $\{v_{r+1}, \dots, v_n\}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Với một ma trận bất kỳ, sau khi tính được $U$ và $V$, ta có thể xác định `rank` $r$ (số giá trị suy biến khác 0) và ngay lập tức chỉ ra các `basis` trực chuẩn cho cả bốn không gian con.
* **Phản ví dụ:** Khái niệm này là một định lý, không có phản ví dụ.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
SVD phân rã toàn bộ không gian nguồn $\mathbb{R}^n$ thành hai `subspace` trực giao là `row space` và `null space`. Nó cũng phân rã không gian đích $\mathbb{R}^m$ thành hai `subspace` trực giao là `column space` và `left null space`. Phép biến đổi $A$ về cơ bản là một `isomorphism` (ánh xạ 1-1 và lên) từ `row space` sang `column space`. Nó "triệt tiêu" `null space` và "bỏ lỡ" `left null space`. SVD cho chúng ta thấy rõ toàn bộ bức tranh hình học này.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** SVD cung cấp một phương pháp tính toán PCA ổn định và hiệu quả mà không cần phải hình thành ma trận hiệp phương sai một cách tường minh. Các `right-singular vectors` của ma trận dữ liệu (đã được trừ đi trung bình) chính là các thành phần chính (`principal components`).
* **Noise Reduction:** Trong nhiều bộ dữ liệu, các `singular value` nhỏ thường tương ứng với nhiễu. Bằng cách loại bỏ các thành phần tương ứng với các `singular value` này (tức là chiếu dữ liệu vào `subspace` sinh bởi các `singular vector` chính), ta có thể loại bỏ nhiễu một cách hiệu quả.

***

### **Dạng giả nghịch đảo (Pseudoinverse)**

#### 1. Động lực / Vấn đề cần giải quyết:
Phép nghịch đảo ma trận chỉ tồn tại cho các ma trận vuông và khả nghịch. Tuy nhiên, trong thực tế, chúng ta thường xuyên phải "giải" các hệ phương trình $Ax=b$ với $A$ là ma trận hình chữ nhật hoặc ma trận vuông suy biến. Làm thế nào để định nghĩa một khái niệm "nghịch đảo tốt nhất có thể" cho mọi ma trận?

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Pseudoinverse`** (hay nghịch đảo Moore-Penrose) là sự tổng quát hóa mạnh mẽ nhất của ma trận nghịch đảo. Với một ma trận $A$ bất kỳ, `pseudoinverse` $A^\dagger$ của nó là một ma trận duy nhất hoạt động như một ma trận nghịch đảo "tốt nhất" theo nghĩa bình phương tối thiểu. Nếu hệ $Ax=b$ có nghiệm, $x = A^\dagger b$ là nghiệm có `norm` nhỏ nhất. Nếu hệ vô nghiệm, $x = A^\dagger b$ là lời giải bình phương tối thiểu.

#### 3. Định nghĩa toán học:
Cho phân rã SVD của $A$ là $A = U \Sigma V^T$. **`Pseudoinverse`** của $A$, ký hiệu $A^\dagger$, được định nghĩa là:
$$ A^\dagger = V \Sigma^\dagger U^T $$
trong đó $\Sigma^\dagger$ có được từ $\Sigma$ bằng cách lấy nghịch đảo của tất cả các giá trị suy biến khác không rồi chuyển vị.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Nếu $A$ là ma trận vuông khả nghịch, thì $A^\dagger = A^{-1}$.
    * `Pseudoinverse` của một `vector` hàng $[a, b, c]$ là một `vector` cột tỉ lệ với chuyển vị liên hợp của nó.
* **Phản ví dụ:**
    * Không giống như nghịch đảo thông thường, ta không có $(AB)^\dagger = B^\dagger A^\dagger$ trong trường hợp tổng quát.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phép biến đổi $A^\dagger$ làm hai việc: (1) Nó nghịch đảo hoàn hảo phép biến đổi $A$ trên `row space` để quay trở lại `column space`. (2) Nó "triệt tiêu" hoàn toàn mọi thứ nằm trong `left null space` (phần không gian mà $A$ "bỏ lỡ"). Kết quả là nó tìm ra lời giải "hoàn hảo" nhất có thể.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Linear Regression:** Lời giải chuẩn cho bài toán hồi quy tuyến tính (tìm $x$ để tối thiểu hóa $\|Ax-b\|^2$) được cho bởi phương trình chuẩn $A^T A x = A^T b$. Lời giải này có thể được viết một cách cô đọng và tổng quát nhất là $x = A^\dagger b$. Hầu hết các thư viện học máy khi giải hồi quy tuyến tính đều ngầm tính toán `pseudoinverse` (thường là thông qua SVD vì sự ổn định về mặt số học).