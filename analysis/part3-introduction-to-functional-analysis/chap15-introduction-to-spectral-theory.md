---
sidebar_position: 5
---

# Chương 15: Nhập môn Lý thuyết phổ (Introduction to Spectral Theory)

*Đây là chương cuối cùng trong lộ trình nền tảng, nơi chúng ta áp dụng toàn bộ cỗ máy của giải tích hàm để trả lời một câu hỏi cốt lõi: "Một toán tử tuyến tính thực sự làm gì với không gian mà nó tác động lên?". Lý thuyết phổ là sự tổng quát hóa sâu sắc của khái niệm giá trị riêng và vector riêng từ đại số tuyến tính sang không gian vô hạn chiều, và là chìa khóa để hiểu các hệ động lực, cơ học lượng tử và nhiều thuật toán học máy hiện đại.*

***

### **Phổ của một toán tử (Spectrum of an Operator)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Trong đại số tuyến tính, "giá trị riêng" là những con số đặc biệt cho biết một ma trận co giãn một `vector` theo hệ số bao nhiêu. Tuy nhiên, trong không gian vô hạn chiều, một toán tử có thể có những hành vi phức tạp hơn là chỉ co giãn. **Phổ (`spectrum`)** của một toán tử là tập hợp của tất cả những con số "có vấn đề" này. Một con số $\lambda$ được coi là "có vấn đề" nếu toán tử $(T - \lambda I)$ (tức là toán tử $T$ bị dời đi một chút) không thể bị "đảo ngược" một cách ổn định. Điều này bao gồm cả các giá trị riêng, nhưng cũng có thể có những loại "vấn đề" khác chỉ xuất hiện ở vô hạn chiều.

#### 2. Định nghĩa toán học:
Cho $T$ là một toán tử tuyến tính bị chặn trên một không gian Banach $X$.
* **Tập chính quy (`resolvent set`)**, ký hiệu $\rho(T)$, là tập hợp tất cả các số phức $\lambda \in \mathbb{C}$ sao cho toán tử $(T - \lambda I)$ là một song ánh và có toán tử ngược $(T - \lambda I)^{-1}$ liên tục.
* **Phổ (`spectrum`)**, ký hiệu $\sigma(T)$, là phần bù của tập chính quy trong mặt phẳng phức: $\sigma(T) = \mathbb{C} \setminus \rho(T)$.
Phổ có thể được phân rã thành ba phần riêng biệt:
1.  **Phổ điểm (`point spectrum`) $\sigma_p(T)$:** Tập hợp các giá trị riêng.
2.  **Phổ liên tục (`continuous spectrum`) $\sigma_c(T)$:** Tập hợp các $\lambda$ sao cho $(T - \lambda I)$ là đơn ánh, có ảnh trù mật, nhưng toán tử ngược không liên tục.
3.  **Phổ thặng dư (`residual spectrum`) $\sigma_r(T)$:** Các trường hợp còn lại.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Spectrum` là một "dấu vân tay" của toán tử, tiết lộ toàn bộ thông tin về hành vi của nó. Phổ điểm cho biết các hướng bất biến (chỉ bị co giãn). Phổ liên tục, một hiện tượng của không gian vô hạn chiều, cho biết các "hướng gần như bất biến", nơi tồn tại các `vector` gần như là `vector` riêng nhưng không hoàn toàn. Về mặt hình học, nó mô tả cách toán tử "kéo dãn" và "xoắn" toàn bộ không gian.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Spectral Clustering (Phân cụm phổ):** Đây là một kỹ thuật phân cụm mạnh mẽ dựa trên `spectrum` của ma trận Laplacian của đồ thị. Các `eigenvector` tương ứng với các `eigenvalue` nhỏ nhất của ma trận Laplacian chứa thông tin về cấu trúc cụm của đồ thị. Việc phân tích `spectrum` này cho phép thuật toán tìm ra các cụm có hình dạng phức tạp mà các phương pháp như K-Means (dựa trên khoảng cách Euclid) không thể phát hiện được.
* **Graph Neural Networks (GNNs):** Các phép toán tích chập trên đồ thị trong GNN thường được định nghĩa trong miền phổ (spectral domain), dựa trên phép biến đổi Fourier trên đồ thị, vốn liên quan trực tiếp đến các `eigenvector` của ma trận Laplacian. `Spectrum` của đồ thị quyết định các "tần số" mà GNN có thể học được.

***

### **Giá trị riêng và Vector riêng (Eigenvalues and Eigenvectors)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một **`eigenvector`** của một toán tử là một `vector` "đặc biệt" mà khi bị toán tử tác động lên, nó không bị đổi phương, chỉ bị co giãn. **`Eigenvalue`** tương ứng chính là hệ số co giãn đó. Chúng đại diện cho các "trục tự nhiên" hay các "hướng bất biến" của một phép biến đổi tuyến tính. Bất kỳ `vector` nào nằm trên các trục này sẽ chỉ di chuyển dọc theo chính các trục đó.

#### 2. Định nghĩa toán học:
Cho một toán tử tuyến tính $T$ trên không gian `vector` $X$. Một `vector` $v \in X, v \ne 0$, được gọi là một **`eigenvector`** của $T$ nếu tồn tại một vô hướng $\lambda$ sao cho:
$$ T(v) = \lambda v $$
Vô hướng $\lambda$ được gọi là **`eigenvalue`** tương ứng với `eigenvector` $v$. Tập hợp tất cả các `eigenvalue` chính là phổ điểm $\sigma_p(T)$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Về mặt hình học, các `eigenvector` xác định các phương không bị thay đổi bởi phép biến đổi. Một `eigenvalue` dương lớn hơn 1 tương ứng với sự giãn ra, nhỏ hơn 1 tương ứng với sự co lại. Một `eigenvalue` âm tương ứng với sự giãn/co và lật ngược chiều. Trong không gian thực, một cặp `eigenvalue` phức liên hợp thường tương ứng với một phép quay. Việc phân tích một `vector` bất kỳ theo cơ sở gồm các `eigenvector` (nếu có thể) sẽ cho ta biết chính xác phép biến đổi tác động lên `vector` đó như thế nào.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Principal Component Analysis (PCA):** PCA là một thuật toán giảm chiều dữ liệu dựa hoàn toàn vào việc tìm `eigenvector` và `eigenvalue`. Nó tính toán ma trận hiệp phương sai của dữ liệu và tìm ra các `eigenvector` của ma trận này. Các `eigenvector` này (gọi là các thành phần chính) chính là các hướng mà dữ liệu có phương sai lớn nhất. Các `eigenvalue` tương ứng cho biết tầm quan trọng của mỗi hướng. Bằng cách chỉ giữ lại các `eigenvector` có `eigenvalue` lớn nhất, ta có thể giảm chiều dữ liệu mà mất ít thông tin nhất.

***

### **Toán tử Compact (Compact Operators)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một `compact operator` là một toán tử tuyến tính trên không gian vô hạn chiều nhưng lại "cư xử tốt" một cách đáng ngạc nhiên, gần giống như một ma trận trong không gian hữu hạn chiều. Đặc điểm chính của nó là nó "nén" các tập vô hạn (cụ thể là các tập bị chặn) thành các tập "nhỏ gọn" (tương đối `compact`). Nó có tác dụng "thuần hóa" sự phức tạp của không gian vô hạn chiều.

#### 2. Định nghĩa toán học:
Một toán tử tuyến tính $T: X \to Y$ giữa hai không gian định chuẩn được gọi là **`compact`** nếu với mọi tập con bị chặn $B \subset X$, ảnh của nó $T(B)$ là một tập hợp tương đối `compact` trong $Y$ (tức là bao đóng $\overline{T(B)}$ là một tập `compact`).
* Một tính chất quan trọng: $T$ là `compact` khi và chỉ khi nó biến mọi dãy bị chặn thành một dãy có dãy con hội tụ.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Một `compact operator` về cơ bản làm "giảm số chiều hiệu dụng" của không gian. Nó không thể biến một hệ vô hạn các `vector` trực giao có độ dài 1 thành một hệ các `vector` vẫn còn "cách xa nhau". Thay vào đó, ảnh của chúng phải "túm tụm" lại gần nhau. Điều này dẫn đến một hệ quả cực kỳ quan trọng: `spectrum` của một `compact operator` rất đơn giản, chỉ bao gồm các `eigenvalue` hội tụ về 0.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Mercer's Theorem và Kernel Methods:** Trong các phương pháp `kernel`, toán tử tích phân được định nghĩa bởi một hàm `kernel` liên tục thường là một `compact operator`. Định lý Mercer, một kết quả quan trọng, khẳng định rằng một `kernel` đối xứng, xác định dương có thể được phân tích theo các `eigenfunction` và `eigenvalue` của toán tử tích phân tương ứng. Điều này cho phép chúng ta biểu diễn không gian đặc trưng vô hạn chiều một cách hiệu quả và là nền tảng lý thuyết cho các thuật toán như Kernel PCA và Support Vector Machines.

***

### **Định lý Phổ (The Spectral Theorem)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là một trong những định lý đẹp và mạnh mẽ nhất của giải tích hàm. Nó phát biểu rằng, đối với lớp toán tử "đẹp" nhất (cụ thể là các toán tử `compact` và tự liên hợp trên `Hilbert space`), chúng ta luôn có thể tìm được một hệ tọa độ "hoàn hảo" (một cơ sở trực chuẩn) mà trong đó, mọi trục tọa độ đều là một `eigenvector` của toán tử. Khi được biểu diễn trong hệ tọa độ này, tác động của toán tử phức tạp ban đầu trở nên cực kỳ đơn giản: nó chỉ là phép co giãn thuần túy dọc theo mỗi trục.

#### 2. Định nghĩa toán học:
**The Spectral Theorem (dạng cho toán tử compact):** Cho $T$ là một toán tử `compact`, tự liên hợp (`self-adjoint`) trên một `Hilbert space` $H$. Khi đó, tồn tại một **cơ sở trực chuẩn** của $H$ bao gồm toàn bộ các `eigenvector` của $T$.
Điều này có nghĩa là $H$ có thể được phân tích thành tổng trực tiếp của các không gian con riêng, và mọi `vector` $x \in H$ có thể được viết là:
$$ x = \sum_i \langle x, e_i \rangle e_i \implies T(x) = \sum_i \lambda_i \langle x, e_i \rangle e_i $$
với $\{e_i\}$ là cơ sở trực chuẩn gồm các `eigenvector` và $\{\lambda_i\}$ là các `eigenvalue` thực tương ứng.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là định lý "chéo hóa" (`diagonalization`) ở mức độ cao nhất. Nó đảm bảo rằng mọi phép biến đổi tuyến tính phức tạp, miễn là nó đủ "đẹp" (`compact` và `self-adjoint`), đều có thể được hiểu một cách đơn giản là một tập hợp các phép co giãn độc lập dọc theo các phương vuông góc với nhau. Nó phân rã toán tử thành các hành động cơ bản nhất của nó.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Singular Value Decomposition (SVD):** SVD của một ma trận, một công cụ nền tảng trong ML, về bản chất là một phiên bản của Định lý Phổ. Nó phân tích một ma trận bất kỳ thành ba ma trận, trong đó có một ma trận đường chéo chứa các "giá trị suy biến" (`singular values`). Các giá trị này chính là căn bậc hai của các `eigenvalue` của ma trận $A^T A$. SVD được dùng trong vô số ứng dụng: từ hệ thống gợi ý (recommendation systems) trong xử lý ngôn ngữ tự nhiên (Latent Semantic Analysis - LSA) đến nén ảnh. Định lý Phổ cung cấp sự đảm bảo về mặt lý thuyết cho sự tồn tại và các tính chất của phép phân tích này.