---
sidebar_position: 2
---
# Chương 8: Định lý Phổ (The Spectral Theorem)

*Đây là chương đỉnh cao của đại số tuyến tính hữu hạn chiều, nơi tất cả các khái niệm trừu tượng chúng ta đã xây dựng—`inner product`, `adjoint`, `normal`, `eigenvalue`—hội tụ lại để mang đến một trong những kết quả đẹp và mạnh mẽ nhất của toán học. Định lý Phổ trả lời câu hỏi cuối cùng: "Đâu là những toán tử có thể được hiểu một cách đơn giản nhất có thể?". Câu trả lời hóa ra lại vô cùng thanh lịch và có những ứng dụng sâu rộng.*

***

### **Định lý Phổ cho không gian phức (The Spectral Theorem for Complex Spaces)**

#### 1. Động lực / Vấn đề cần giải quyết:
Ở chương trước, chúng ta đã thấy rằng không phải toán tử nào cũng "chéo hóa được" (`diagonalizable`). Ví dụ, các ma trận `shear` là một vấn đề. Thậm chí nếu một toán tử chéo hóa được, cơ sở gồm các `eigenvector` của nó có thể bị "xiên lệch". Câu hỏi đặt ra là: Liệu có tồn tại một lớp toán tử "đẹp" nào mà không chỉ chéo hóa được, mà còn có thể được chéo hóa bởi một cơ sở "hoàn hảo" nhất—một `orthonormal basis`? Điều này sẽ cho phép chúng ta phân rã phép biến đổi thành các hành động co giãn độc lập dọc theo các trục vuông góc.

#### 2. Khái niệm, Cách hiểu đơn giản:
Định lý Phổ cho không gian phức nói rằng điều kiện "cư xử tốt" (`normal`, tức là $TT^*=T^*T$) là **chính xác** những gì chúng ta cần. Bất kỳ toán tử `normal` nào, dù phức tạp đến đâu (có thể vừa co giãn vừa quay), đều có thể được hiểu một cách đơn giản. Luôn tồn tại một hệ tọa độ vuông góc hoàn hảo (`orthonormal basis`) mà trong đó, mỗi trục tọa độ chính là một `eigenvector`. Khi nhìn trong hệ tọa độ này, toàn bộ phép biến đổi chỉ còn là các phép co giãn (với hệ số phức, có thể bao gồm cả quay) dọc theo các trục đó.

#### 3. Định nghĩa toán học:
**Định lý Phổ (phiên bản phức):** Cho $V$ là một không gian `inner product` phức hữu hạn chiều và $T: V \to V$ là một `linear operator`. $T$ là **`normal`** khi và chỉ khi tồn tại một **`orthonormal basis`** của $V$ bao gồm toàn bộ các `eigenvector` của $T$.
* **Hệ quả quan trọng:** Nếu $T$ là `self-adjoint` (một trường hợp đặc biệt của `normal`), thì tất cả các `eigenvalue` của nó đều là số thực.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Ma trận $A = \begin{pmatrix} 2 & 1+i \\ 1-i & 3 \end{pmatrix}$ là `self-adjoint` (vì $A=A^*$) và do đó là `normal`. Định lý Phổ đảm bảo rằng nó có thể được chéo hóa bởi một ma trận `unitary` (tương ứng với một `orthonormal basis`).
    * Một ma trận quay trong $\mathbb{R}^2$ khi xem xét trên trường phức $\mathbb{C}^2$ là `normal` và có thể được chéo hóa trực chuẩn.
* **Phản ví dụ:**
    * Ma trận `shear` $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ **không** phải là `normal`. Nó không có một `orthonormal basis` gồm các `eigenvector`. Đây là ví dụ kinh điển cho thấy sự cần thiết của điều kiện `normal`. Nó không thể được chéo hóa, dù là trực chuẩn hay không.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Định lý Phổ là sự khẳng định cuối cùng về việc "chéo hóa". Nó nói rằng các toán tử `normal` là lớp toán tử duy nhất có thể được phân rã hoàn toàn thành các hành động hình học đơn giản (co giãn và quay) dọc theo một hệ các trục vuông góc. Mọi sự phức tạp của phép biến đổi đều biến mất khi ta chọn đúng "góc nhìn" (đúng `basis`).

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Quantum Computing và Quantum Machine Learning:** Trạng thái của một hệ thống lượng tử được mô tả bởi một `vector` trong một không gian `Hilbert` phức. Các đại lượng có thể đo được (`observables`) được biểu diễn bởi các toán tử `self-adjoint`. Định lý Phổ là nền tảng vật lý, đảm bảo rằng: (1) các kết quả đo lường (các `eigenvalue`) luôn là số thực, và (2) các trạng thái của hệ thống sau khi đo (các `eigenvector`) là trực giao với nhau. Các thuật toán QML đều dựa trên nguyên lý nền tảng này.

***

### **Định lý Phổ cho không gian thực (The Spectral Theorem for Real Spaces)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trên không gian thực, vấn đề trở nên khó khăn hơn. Một toán tử `normal` (ví dụ: một phép quay) có thể không có bất kỳ `eigenvalue` thực nào cả, do đó chắc chắn không thể tìm được một `basis` gồm các `eigenvector`. Vậy, chúng ta cần một điều kiện mạnh hơn `normal` để đảm bảo sự tồn tại của một `orthonormal basis` gồm các `eigenvector` trong không gian thực. Điều kiện đó là gì?

#### 2. Khái niệm, Cách hiểu đơn giản:
Định lý Phổ cho không gian thực nói rằng điều kiện cần và đủ chính là sự "đối xứng hoàn hảo": toán tử phải là **`self-adjoint`** ($T=T^*$, hay $A=A^T$ đối với ma trận thực). Nếu một phép biến đổi là `self-adjoint`, nó đảm bảo không có bất kỳ thành phần "quay" nào không thể biểu diễn được, và toàn bộ tác động của nó chỉ là các phép co giãn thuần túy dọc theo một hệ các trục vuông góc với nhau.

#### 3. Định nghĩa toán học:
**Định lý Phổ (phiên bản thực):** Cho $V$ là một không gian `inner product` thực hữu hạn chiều và $T: V \to V$ là một `linear operator`. $T$ là **`self-adjoint`** khi và chỉ khi tồn tại một **`orthonormal basis`** của $V$ bao gồm toàn bộ các `eigenvector` của $T$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Mọi ma trận đối xứng thực, ví dụ $A = \begin{pmatrix} 6 & -2 \\ -2 & 9 \end{pmatrix}$, là `self-adjoint`. Định lý Phổ đảm bảo nó có thể được chéo hóa trực chuẩn. Các `eigenvalue` của nó là $5, 10$ và các `eigenvector` tương ứng là trực giao.
* **Phản ví dụ:**
    * Ma trận quay $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ là `normal` nhưng **không** `self-adjoint`. Nó không có `eigenvalue` thực, do đó không thể được chéo hóa trên $\mathbb{R}$. Điều này nhấn mạnh tại sao điều kiện `self-adjoint` là cần thiết trong không gian thực, trong khi điều kiện `normal` đã đủ cho không gian phức.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Về mặt hình học, một toán tử `self-adjoint` trên không gian thực biến hình cầu đơn vị thành một hình ellipsoid. Định lý Phổ khẳng định rằng ellipsoid này luôn có các trục chính (`principal axes`) đôi một vuông góc với nhau. Các trục chính này chính là các `eigenvector`, và độ dài của các bán trục tương ứng với các `eigenvalue`. Định lý này đảm bảo sự tồn tại của các trục đối xứng tự nhiên cho mọi phép biến đổi `self-adjoint`.



#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** Đây là ứng dụng kinh điển nhất của Định lý Phổ thực. Ma trận hiệp phương sai của dữ liệu luôn là một ma trận đối xứng thực, do đó nó là `self-adjoint`. Định lý Phổ đảm bảo rằng chúng ta luôn có thể tìm thấy một `orthonormal basis` gồm các `eigenvector` (chính là các thành phần chính - `principal components`) cho không gian dữ liệu. Điều này cho phép chúng ta xoay hệ tọa độ để các chiều mới không tương quan với nhau, đây chính là mục tiêu của PCA. Nếu không có Định lý Phổ, không có gì đảm bảo rằng các thành phần chính sẽ vuông góc với nhau.
* **Spectral Clustering:** Như đã đề cập, thuật toán này dựa trên việc phân tích `eigen` của ma trận Laplacian của đồ thị, vốn là một ma trận đối xứng thực (`self-adjoint`), do đó Định lý Phổ đảm bảo các tính chất tốt của các `eigenvector` được sử dụng để phân cụm.