---
sidebar_position: 2
---


# Chương 6: Toán tử trên không gian Tích vô hướng (Operators on Inner Product Spaces)

*Khi đã trang bị cho không gian `vector` một cấu trúc hình học thông qua `inner product`, chúng ta bắt đầu khám phá sự tương tác giữa các `linear operators` và cấu trúc hình học này. Chương này giới thiệu các lớp toán tử đặc biệt quan trọng—những toán tử "cư xử tốt" với góc và độ dài. Việc hiểu các toán tử này là bước đệm thiết yếu để đi đến Định lý Phổ, một trong những kết quả đỉnh cao của đại số tuyến tính.*

***

### **Toán tử liên hợp (Adjoint Operator)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong một không gian `inner product`, phép tính $\langle u, v \rangle$ tạo ra một sự đối xứng đẹp đẽ. Một câu hỏi tự nhiên là: nếu ta có một `linear operator` $T$, liệu có tồn tại một toán tử "đối tác" $T^*$ sao cho tác động của $T$ lên `vector` thứ nhất trong `inner product` cũng giống như tác động của $T^*$ lên `vector` thứ hai? Nói cách khác, có cách nào để "di chuyển" toán tử $T$ từ bên này sang bên kia của dấu phẩy trong $\langle \cdot, \cdot \rangle$ một cách hợp lệ không? Khái niệm `adjoint operator` ra đời để trả lời câu hỏi này, và nó chính là sự tổng quát hóa của phép "chuyển vị liên hợp" (`conjugate transpose`) của một ma trận.

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Adjoint operator`** $T^*$ của một toán tử $T$ là "cái bóng" hay "người anh em song sinh" của $T$ đối với cấu trúc `inner product`. Nó là toán tử duy nhất cho phép bạn thực hiện một "mánh khóe" đại số: "chuyển $T$ từ vế trái sang vế phải" bên trong một `inner product`. Đối với ma trận thực, `adjoint` chính là phép chuyển vị (`transpose`) quen thuộc.

#### 3. Định nghĩa toán học:
Cho $V$ là một không gian `inner product` hữu hạn chiều và $T: V \to V$ là một `linear operator`. **`Adjoint`** của $T$, ký hiệu là $T^*$, là một toán tử duy nhất trên $V$ thỏa mãn:
$$ \langle T(u), v \rangle = \langle u, T^*(v) \rangle \quad \text{cho mọi } u, v \in V $$
Sự tồn tại và duy nhất của $T^*$ được đảm bảo bởi Định lý Biểu diễn Riesz.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Nếu $V = \mathbb{R}^n$ và $T$ được biểu diễn bởi ma trận $A$, thì $T^*$ được biểu diễn bởi ma trận chuyển vị $A^T$.
    * Nếu $V = \mathbb{C}^n$ và $T$ được biểu diễn bởi ma trận $A$, thì $T^*$ được biểu diễn bởi ma trận chuyển vị liên hợp $A^*$ (hay $A^H$). Ví dụ, nếu $A = \begin{pmatrix} 1 & i \\ 2 & 3-i \end{pmatrix}$, thì $A^* = \begin{pmatrix} 1 & 2 \\ -i & 3+i \end{pmatrix}$.
* **Phản ví dụ:**
    * Khái niệm `adjoint` phụ thuộc chặt chẽ vào `inner product`. Cùng một `linear map` nhưng trên các không gian với các `inner product` khác nhau sẽ có các `adjoint` khác nhau.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Adjoint` cho biết một toán tử tương tác với hình học của không gian như thế nào. Trong khi $T$ biến đổi các `vector` (không gian "ket" trong vật lý lượng tử), $T^*$ biến đổi các "phép đo" (`covector`, không gian "bra"). Mối quan hệ giữa một toán tử và `adjoint` của nó (ví dụ chúng có giao hoán hay không) sẽ tiết lộ những tính chất hình học sâu sắc của phép biến đổi đó.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Gradient Calculation:** `Adjoint` là một khái niệm nền tảng trong tối ưu hóa và các phương pháp dựa trên gradient. Khi hàm mất mát của bạn có dạng $L(x) = \|Ax - b\|^2$, gradient của nó liên quan đến cả $A$ và `adjoint` của nó $A^*$. Trong các mạng neural, quá trình lan truyền ngược (backpropagation) về bản chất là việc áp dụng lặp đi lặp lại các `adjoint operator` của các lớp trong mạng để tính toán gradient một cách hiệu quả.

***

### **Toán tử tự liên hợp (Self-Adjoint) và Toán tử Normal**

#### 1. Động lực / Vấn đề cần giải quyết:
Sau khi định nghĩa `adjoint`, một câu hỏi tự nhiên là: "Đâu là những toán tử 'đẹp' nhất, có cấu trúc gọn gàng và dễ phân tích nhất?". Hóa ra đó là những toán tử có mối quan hệ đơn giản với `adjoint` của chính nó. Lớp toán tử quan trọng nhất là những toán tử "đối xứng" một cách hoàn hảo, tức là chúng bằng chính `adjoint` của mình. Một lớp rộng hơn nhưng cũng rất "đẹp" là những toán tử giao hoán với `adjoint` của mình.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **`Self-adjoint operator`:** Là một toán tử "tự đối xứng", nó chính là "người anh em song sinh" của chính nó ($T = T^*$). Trong thế giới ma trận thực, đây chính là các **ma trận đối xứng**. Các toán tử này chỉ thực hiện các phép "co giãn" thuần túy dọc theo các trục vuông góc với nhau, chúng không có thành phần "xoay".
* **`Normal operator`:** Là một toán tử "cư xử tốt". Nó có thể không tự đối xứng, nhưng nó "hòa thuận" với `adjoint` của mình, nghĩa là thứ tự áp dụng $T$ và $T^*$ không quan trọng ($TT^* = T^*T$). Lớp này bao gồm các toán tử `self-adjoint`, các toán tử `skew-adjoint` (phản đối xứng), và các toán tử `unitary` (bảo toàn độ dài, tương ứng với phép quay và phản xạ).

#### 3. Định nghĩa toán học:
Cho $T$ là một `operator` trên một không gian `inner product`.
* $T$ được gọi là **`self-adjoint`** nếu $T = T^*$.
* $T$ được gọi là **`normal`** nếu $T$ giao hoán với `adjoint` của nó, tức là:
    $$ TT^* = T^*T $$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Ma trận đối xứng thực $A = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$ là `self-adjoint`.
    * Ma trận quay $R = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ **không** `self-adjoint` (vì $R^T = R^{-1} \ne R$) nhưng nó là `normal` (vì $RR^T = RR^{-1} = I$ và $R^TR = R^{-1}R = I$).
* **Phản ví dụ:**
    * Ma trận $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (một phép `shear`) **không** phải là `normal` vì:
    $AA^T = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ trong khi $A^TA = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là hai lớp toán tử quan trọng nhất vì chúng là những toán tử có thể được "chéo hóa trực chuẩn".
* **`Self-adjoint operators`** có tất cả các `eigenvalue` là số thực, và các `eigenvector` tương ứng với các `eigenvalue` khác nhau thì trực giao với nhau. Chúng đại diện cho các phép "đo lường" vật lý (các `observable` trong cơ học lượng tử).
* **`Normal operators`** là lớp toán tử tổng quát nhất có thể được chéo hóa bởi một `orthonormal basis` trên trường số phức. Chúng đại diện cho các phép biến đổi bảo toàn một cấu trúc hình học nào đó.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** Nền tảng của PCA là việc phân tích `eigen` của ma trận hiệp phương sai. Ma trận hiệp phương sai luôn là ma trận đối xứng thực, do đó nó là một `self-adjoint operator`. Điều này đảm bảo hai điều cốt lõi: (1) các `eigenvalue` (phương sai) của nó là số thực, và (2) các `eigenvector` của nó (các thành phần chính) tạo thành một `orthonormal basis`. Toàn bộ lý thuyết PCA sụp đổ nếu ma trận hiệp phương sai không phải là `self-adjoint`.
* **Spectral Clustering:** Thuật toán này dựa trên việc phân tích `eigen` của ma trận Laplacian của đồ thị, vốn cũng là một ma trận đối xứng và do đó là `self-adjoint`.