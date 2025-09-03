---
sidebar_position: 3
---
# Chương 11: Ứng dụng trong Machine Learning và Data Science

*Đây là chương cuối cùng, nơi chúng ta gặt hái thành quả của toàn bộ hành trình lý thuyết. Chúng ta sẽ thấy các khái niệm trừu tượng và thanh lịch nhất của Đại số tuyến tính—`orthogonal projection`, `eigenvectors`, và `SVD`—không chỉ là những ý tưởng đẹp đẽ mà còn là nền tảng hoạt động của các thuật toán mạnh mẽ và phổ biến nhất trong Khoa học Dữ liệu và Trí tuệ Nhân tạo. Chương này sẽ xây dựng cầu nối vững chắc giữa lý thuyết và thực hành.*

***

### **Principal Component Analysis (PCA)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong thế giới thực, dữ liệu thường có rất nhiều chiều (features), ví dụ một hình ảnh có thể có hàng triệu pixel. Điều này gây ra "lời nguyền số chiều" (`curse of dimensionality`): các mô hình trở nên khó huấn luyện, dễ bị `overfitting`, và chúng ta không thể trực quan hóa được dữ liệu. Vấn đề đặt ra là: Làm thế nào để giảm số chiều của dữ liệu xuống một cách có nguyên tắc, sao cho chúng ta mất ít thông tin quan trọng nhất có thể?

#### 2. Khái niệm, Cách hiểu đơn giản:
**`Principal Component Analysis (PCA)`** là một thuật toán tìm ra các "hướng" quan trọng nhất trong dữ liệu. "Hướng quan trọng" được định nghĩa là hướng mà dữ liệu có phương sai (`variance`) lớn nhất. PCA về cơ bản là xoay hệ trục tọa độ của dữ liệu sao cho các trục mới (gọi là các **thành phần chính** - `principal components`) thẳng hàng với các hướng có phương sai từ lớn nhất đến nhỏ nhất. Bằng cách chỉ giữ lại vài trục tọa độ đầu tiên, chúng ta có thể tạo ra một "cái bóng" thấp chiều của dữ liệu mà vẫn giữ lại được phần lớn cấu trúc của nó.

#### 3. Định nghĩa toán học:
**`Principal Component Analysis (PCA)`** thực hiện việc giảm chiều dữ liệu bằng cách sử dụng các `eigenvector` của ma trận hiệp phương sai (`covariance matrix`) của dữ liệu.
1.  Chuẩn hóa dữ liệu để có trung bình bằng 0.
2.  Tính ma trận hiệp phương sai $S$.
3.  Tìm các `eigenvector` và `eigenvalue` của $S$.
Các `eigenvector` (thành phần chính) tương ứng với các `eigenvalue` lớn nhất sẽ tạo thành một cơ sở mới cho một không gian con thấp chiều hơn. Dữ liệu sau đó được chiếu lên không gian con này.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Cho một đám mây các điểm dữ liệu 2D có hình dạng của một quả trứng (ellipsoid). PCA sẽ tìm ra `eigenvector` thứ nhất (PC1) là trục dài của quả trứng, và `eigenvector` thứ hai (PC2) là trục ngắn. Để giảm chiều xuống 1D, chúng ta chỉ cần chiếu tất cả các điểm lên trục dài.
* **Phản ví dụ:**
    * Nếu dữ liệu nằm trên một cấu trúc phi tuyến, ví dụ như một đường cong hình chữ "S" (Swiss roll). PCA sẽ thất bại trong việc "trải phẳng" nó ra, vì nó chỉ có thể tìm ra các phép chiếu tuyến tính. Trong trường hợp này, các phương pháp phi tuyến như t-SNE hoặc Isomap sẽ hiệu quả hơn.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
PCA chính là ứng dụng trực tiếp và đẹp đẽ nhất của **Định lý Phổ** (`Spectral Theorem`). Ma trận hiệp phương sai luôn là ma trận đối xứng thực, do đó nó `self-adjoint`. Định lý Phổ đảm bảo rằng nó luôn có một cơ sở trực chuẩn (`orthonormal basis`) gồm các `eigenvector`. Cơ sở này chính là hệ tọa độ mới mà PCA tìm ra, nơi các chiều mới không còn tương quan với nhau.



#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Data Visualization:** Giảm chiều dữ liệu xuống còn 2 hoặc 3 chiều để có thể vẽ và quan sát cấu trúc của các cụm hoặc các `manifold`.
* **Feature Extraction:** Sử dụng các thành phần chính làm đặc trưng mới, ít nhiễu và không tương quan hơn để đưa vào các mô hình học máy khác (ví dụ: hồi quy, phân loại).
* **Noise Reduction:** Giả định rằng các hướng có phương sai nhỏ chủ yếu là nhiễu, PCA có thể loại bỏ nhiễu bằng cách loại bỏ các thành phần chính cuối cùng.

***

### **Least Squares Problems**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong các ứng dụng thực tế, khi chúng ta thu thập dữ liệu để xây dựng một mô hình tuyến tính $Ax=b$, hệ phương trình này hầu như không bao giờ có nghiệm chính xác. Dữ liệu luôn chứa nhiễu và các sai số đo lường, khiến cho `vector` $b$ không nằm trong không gian cột (`column space`) của ma trận $A$. Vậy làm thế nào để tìm ra lời giải "xấp xỉ tốt nhất" có thể?

#### 2. Khái niệm, Cách hiểu đơn giản:
Phương pháp **`Least Squares`** (Bình phương tối thiểu) tìm ra một lời giải $\hat{x}$ sao cho `vector` kết quả $A\hat{x}$ là "gần nhất" với `vector` mục tiêu $b$. "Gần nhất" ở đây được đo bằng khoảng cách Euclid. Thay vì cố gắng làm cho sai số $b - A\hat{x}$ bằng 0 (điều không thể), chúng ta tìm cách tối thiểu hóa "độ dài" của sai số đó, tức là tối thiểu hóa $\|b - A\hat{x}\|^2$.

#### 3. Định nghĩa toán học:
Bài toán **`Least Squares`** là tìm $\hat{x}$ để tối thiểu hóa $\|b - A\hat{x}\|^2$. Lời giải cho bài toán này được tìm thấy bằng cách sử dụng **`orthogonal projection`**. Cụ thể, chúng ta tìm hình chiếu trực giao của `vector` $b$ lên không gian cột của $A$, ký hiệu là $\hat{b} = \text{proj}_{C(A)}(b)$. Lời giải $\hat{x}$ sau đó được tìm bằng cách giải hệ phương trình (luôn có nghiệm) $A\hat{x} = \hat{b}$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Khớp một đường thẳng ($y=mx+c$) với một tập hợp các điểm dữ liệu $(x_i, y_i)$. Đây là một bài toán `least squares` kinh điển, nơi chúng ta tìm $m$ và $c$ để tối thiểu hóa tổng bình phương các sai số theo chiều dọc.
* **Phản ví dụ:**
    * Phương pháp này rất nhạy cảm với các điểm ngoại lai (`outliers`). Một điểm dữ liệu nằm rất xa so với xu hướng chung có thể "kéo" đường hồi quy về phía nó một cách đáng kể. Trong trường hợp này, các phương pháp hồi quy bền vững (`robust regression`) có thể hiệu quả hơn.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Ý nghĩa hình học của `Least Squares` là cực kỳ trực quan. Chúng ta có một điểm $b$ và một "mặt phẳng" (không gian cột của $A$). Chúng ta không thể đạt tới điểm $b$, vì vậy chúng ta chọn điểm $\hat{b}$ trên mặt phẳng đó mà gần $b$ nhất. Theo Định lý Hình chiếu, điểm gần nhất này chính là "cái bóng" vuông góc của $b$ lên mặt phẳng. `Vector` sai số $b-\hat{b}$ luôn luôn trực giao với không gian cột của $A$.



#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Linear Regression:** Đây chính là `Least Squares`. Nó là một trong những mô hình cơ bản và được sử dụng rộng rãi nhất trong thống kê và học máy để mô hình hóa mối quan hệ tuyến tính giữa các biến.
* **Polynomial Regression:** Bằng cách mở rộng ma trận $A$ với các cột là các lũy thừa của đặc trưng ban đầu (ví dụ $x^2, x^3$), chúng ta vẫn có thể sử dụng `Least Squares` để khớp các mô hình đa thức phi tuyến.

***

### **Recommender Systems**

#### 1. Động lực / Vấn đề cần giải quyết:
Các nền tảng như Netflix hay Amazon có một ma trận khổng lồ ghi lại sự tương tác giữa hàng triệu người dùng và hàng triệu sản phẩm. Ma trận này cực kỳ thưa thớt (hầu hết người dùng chưa đánh giá hầu hết sản phẩm). Làm thế nào để "lấp đầy" các ô trống trong ma trận này để dự đoán một người dùng sẽ thích một sản phẩm mà họ chưa từng xem?

#### 2. Khái niệm, Cách hiểu đơn giản:
Ý tưởng cốt lõi là sở thích của người dùng không phải là ngẫu nhiên, mà được điều khiển bởi một vài "sở thích" hay "đặc trưng ẩn" (`latent features`). Ví dụ, sở thích phim của bạn có thể được mô tả bởi một `vector` 10 chiều, trong đó mỗi chiều tương ứng với mức độ bạn thích phim hành động, phim hài, phim của đạo diễn X, v.v. Tương tự, mỗi bộ phim cũng có một `vector` mô tả các đặc tính của nó. Dự đoán của bạn cho một bộ phim sẽ cao nếu `vector` sở thích của bạn "khớp" với `vector` đặc tính của bộ phim đó. **`SVD`** là một công cụ mạnh mẽ để tự động "khám phá" ra các `latent features` này từ ma trận đánh giá thưa thớt.

#### 3. Định nghĩa toán học:
Một phương pháp phổ biến là **`Matrix Factorization`**, dựa trên **`Singular Value Decomposition (SVD)`**. Ma trận đánh giá user-item $A$ (kích thước $m \times n$) được xấp xỉ bởi tích của hai ma trận `rank` thấp hơn: $A \approx P_{m \times k} \cdot Q_{k \times n}^T$.
* $P$ là ma trận `latent features` của người dùng.
* $Q$ là ma trận `latent features` của sản phẩm.
SVD cung cấp một phương pháp trực tiếp để tìm ra các ma trận này một cách tối ưu.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Netflix Prize là một cuộc thi nổi tiếng, nơi các đội đã sử dụng các biến thể phức tạp của `SVD` và `Matrix Factorization` để cải thiện đáng kể độ chính xác của hệ thống gợi ý phim.
* **Phản ví dụ:** Các phương pháp này gặp khó khăn với "vấn đề khởi đầu lạnh" (`cold start problem`): chúng không thể đưa ra gợi ý cho người dùng mới hoặc sản phẩm mới chưa có bất kỳ tương tác nào.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
SVD tìm ra xấp xỉ hạng thấp tốt nhất (`best low-rank approximation`) cho ma trận gốc. Về mặt hình học, nó chiếu các `vector` user và item từ các không gian nhiều chiều, thưa thớt ban đầu vào một không gian `latent` chung có số chiều thấp hơn nhiều ($k$). Trong không gian này, khoảng cách hình học (hoặc `inner product`) giữa một `vector` user và một `vector` item sẽ phản ánh mức độ phù hợp giữa chúng.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Collaborative Filtering:** Đây là lớp thuật toán chính cho các hệ thống gợi ý, được sử dụng rộng rãi trong thương mại điện tử, streaming, và quảng cáo trực tuyến.
* **Topic Modeling:** Các kỹ thuật như Latent Semantic Analysis (LSA) sử dụng SVD trên ma trận term-document để khám phá các "chủ đề" (`topic`) ẩn trong một kho văn bản.

***

### **Markov Chains and Google's PageRank**

#### 1. Động lực / Vấn đề cần giải quyết:
Làm thế nào để xếp hạng tầm quan trọng của các trang trên World Wide Web, một mạng lưới khổng lồ với hàng tỷ trang và liên kết? Một trang được coi là quan trọng nếu nó được liên kết bởi nhiều trang quan trọng khác. Đây là một định nghĩa đệ quy. Chúng ta cần một phương pháp toán học để tìm ra một thứ hạng ổn định và nhất quán từ cấu trúc liên kết này.

#### 2. Khái niệm, Cách hiểu đơn giản:
Chúng ta có thể mô hình hóa hành vi của một người lướt web ngẫu nhiên như một **`Markov Chain`**. Người này bắt đầu ở một trang và ở mỗi bước, họ nhấp ngẫu nhiên vào một liên kết trên trang hiện tại để đến trang tiếp theo. **`PageRank`** của một trang được định nghĩa là xác suất trong dài hạn mà người lướt web ngẫu nhiên này sẽ ở trên trang đó. Phân phối xác suất ổn định này không còn thay đổi sau mỗi bước đi nữa, và nó chính là `eigenvector` tương ứng với `eigenvalue` lớn nhất (luôn bằng 1) của ma trận chuyển đổi của chuỗi Markov.

#### 3. Định nghĩa toán học:
Vấn đề là tìm phân phối xác suất ổn định (`stationary distribution`) $\pi$ của một **`Markov Chain`**. Phân phối này là một `vector` thỏa mãn phương trình:
$$ \pi^T A = \pi^T $$
trong đó $A$ là ma trận chuyển xác suất của chuỗi. Điều này có nghĩa là $\pi$ là một **`eigenvector`** của ma trận $A^T$ tương ứng với **`eigenvalue`** $\lambda = 1$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Xây dựng một đồ thị nhỏ gồm 3-4 trang web, viết ra ma trận chuyển của nó và tính toán `eigenvector` chính để xem trang nào có `PageRank` cao nhất.
* **Phản ví dụ:** Mô hình `Markov Chain` đơn giản có thể gặp vấn đề với các "trang cụt" (`dangling nodes` - không có liên kết ra) hoặc các chu trình khép kín. Thuật toán `PageRank` thực tế của Google bổ sung một "yếu tố dịch chuyển tức thời ngẫu nhiên" (`random teleportation factor`) để đảm bảo ma trận luôn có một `eigenvector` ổn định duy nhất.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Việc lặp đi lặp lại phép nhân với ma trận chuyển $A$ là một phép biến đổi tuyến tính. Việc tìm phân phối ổn định chính là tìm một điểm bất động (`fixed point`) của phép biến đổi này, tức là một `eigenvector`. Định lý Perron-Frobenius cho một lớp ma trận đặc biệt (như ma trận được sử dụng trong `PageRank`) đảm bảo sự tồn tại và duy nhất của một `eigenvector` chính có tất cả các thành phần dương, có thể được diễn giải như một phân phối xác suất.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Search Engine Ranking:** Đây là thuật toán nền tảng ban đầu đã làm nên thành công của Google.
* **Network Analysis:** Ý tưởng tìm `eigenvector` chính (còn gọi là `eigenvector centrality`) được sử dụng rộng rãi để xác định các nút quan trọng nhất trong nhiều loại mạng lưới khác nhau, từ mạng xã hội (tìm người có ảnh hưởng) đến mạng lưới sinh học (tìm protein quan trọng).