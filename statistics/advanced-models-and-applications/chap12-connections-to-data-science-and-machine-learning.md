---
sidebar_position: 3
---
# Chương 12: Kết nối với Khoa học Dữ liệu và Học máy (Connections to Data Science & Machine Learning)

Chào mừng các bạn đến với chương cuối cùng của khóa học! Đây là nơi tất cả những mảnh ghép lý thuyết xác suất và suy luận thống kê mà chúng ta đã dày công xây dựng sẽ được kết nối một cách chặt chẽ với các khái niệm và thuật toán cốt lõi trong lĩnh vực **Khoa học Dữ liệu và Học máy (`Data Science & Machine Learning`)**. Bạn sẽ thấy rằng những nguyên tắc toán học kinh điển chính là linh hồn đằng sau các công nghệ AI hiện đại.

---

### **Khái niệm 1: MLE và Nguyên tắc Giảm thiểu Hàm mất mát (`MLE and Loss Functions`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong thống kê, chúng ta sử dụng nguyên tắc **Hợp lý Tối đa (MLE)** để tìm tham số. Trong học máy, chúng ta nói về việc **tối thiểu hóa một hàm mất mát (`loss function`)**. Hai ý tưởng này trông có vẻ khác nhau, một bên là tối đa hóa, một bên là tối thiểu hóa. Mối liên hệ thực sự giữa chúng là gì? Việc hiểu rõ mối liên hệ này sẽ hợp nhất hai lĩnh vực và cho thấy quá trình "huấn luyện" một mô hình thực chất là một bài toán suy luận thống kê có nguyên tắc.

#### 2. Khái niệm, Cách hiểu đơn giản:
**Tối đa hóa hàm hợp lý (MLE) chính là tối thiểu hóa hàm log-hợp lý âm (`negative log-likelihood`)**. Hóa ra, nhiều hàm mất mát phổ biến trong học máy, như **Mean Squared Error (MSE)** hay **Cross-Entropy**, về bản chất chính là hàm log-hợp lý âm dưới một giả định xác suất nào đó về dữ liệu.
* **Huấn luyện mô hình = Tìm tham số**
* **Tối thiểu hóa Loss Function = Tối đa hóa Likelihood**
Nói cách khác, khi bạn huấn luyện một mạng nơ-ron bằng cách giảm thiểu hàm mất mát, bạn đang ngầm tìm kiếm các tham số (trọng số mạng) để làm cho dữ liệu huấn luyện có khả năng xảy ra cao nhất theo mô hình xác suất của bạn.

#### 3. Định nghĩa toán học:
Nguyên tắc MLE là tìm $\hat{\theta}_{MLE} = \arg\max_{\theta} L(\theta) = \arg\max_{\theta} \prod_i f(x_i|\theta)$.
Điều này tương đương với việc tối đa hóa log-likelihood: $\arg\max_{\theta} \sum_i \log f(x_i|\theta)$.
Và điều này lại hoàn toàn tương đương với việc tối thiểu hóa log-likelihood âm (NLL):
$\hat{\theta} = \arg\min_{\theta} [-\sum_i \log f(x_i|\theta)]$.
Đại lượng $[-\sum_i \log f(x_i|\theta)]$ chính là **hàm mất mát** được suy ra từ mô hình xác suất.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Hồi quy và MSE)**: Giả sử ta có mô hình hồi quy $y = w^T x + \epsilon$, với sai số tuân theo phân phối chuẩn $ \epsilon \sim N(0, \sigma^2)$. Điều này có nghĩa là $p(y|x, w) = N(y|w^T x, \sigma^2)$.
    * Log-likelihood của một điểm dữ liệu là $\log p(y_i|x_i, w) = -\frac{1}{2\sigma^2}(y_i - w^T x_i)^2 - \log(\sqrt{2\pi}\sigma)$.
    * Log-likelihood âm của toàn bộ dữ liệu (bỏ qua các hằng số không phụ thuộc $w$) là $\frac{1}{2\sigma^2} \sum_i (y_i - w^T x_i)^2$.
    * Tối thiểu hóa đại lượng này chính là tối thiểu hóa $\sum_i (y_i - w^T x_i)^2$, đây chính xác là hàm mất mát **Mean Squared Error (MSE)**.
* **Phản ví dụ**: Không phải mọi hàm mất mát đều có thể được diễn giải trực tiếp dưới dạng MLE. Ví dụ, hàm mất mát **Hinge Loss** được sử dụng trong **Support Vector Machines (SVMs)** không tương ứng trực tiếp với log-likelihood của một mô hình xác suất nào. Nó được tạo ra từ một nguyên tắc khác là tối đa hóa lề (`margin maximization`).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Việc huấn luyện một mô hình học máy có thể được hình dung như việc đi xuống một "thung lũng" trên một bề mặt địa hình phức tạp. Bề mặt này chính là **bề mặt mất mát (`loss surface`)**. Mỗi điểm trên bề mặt tương ứng với một bộ tham số, và chiều cao của nó là giá trị mất mát. Các thuật toán tối ưu hóa như **Gradient Descent** chính là các chiến lược để đi từng bước xuống dốc nhằm tìm ra điểm đáy của thung lũng, tương ứng với điểm có likelihood cao nhất.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Mối liên hệ này là nền tảng. Khi thiết kế một mô hình học máy mới, việc bắt đầu bằng cách viết ra một mô hình xác suất cho dữ liệu ($p(\text{data}|\theta)$) là một cách tiếp cận rất có nguyên tắc. Từ đó, ta có thể tự động suy ra hàm mất mát tương ứng bằng cách lấy log-likelihood âm. Ví dụ, trong các mô hình sinh phức tạp như **Variational Autoencoders (VAEs)**, hàm mất mát của chúng (ELBO) được suy ra trực tiếp từ các nguyên tắc của suy luận xác suất và lý thuyết thông tin.

---

### **Khái niệm 2: Hồi quy và Phân loại dưới lăng kính Thống kê**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong học máy, chúng ta thường học về "hồi quy" và "phân loại" như hai loại nhiệm vụ riêng biệt với các thuật toán và hàm mất mát khác nhau. Thống kê suy luận cung cấp một lăng kính hợp nhất để xem cả hai nhiệm vụ này. Làm thế nào để hiểu chúng như các bài toán suy luận về các tham số của một phân phối xác suất có điều kiện?

#### 2. Khái niệm, Cách hiểu đơn giản:
Cả hai nhiệm vụ đều là việc mô hình hóa **phân phối xác suất có điều kiện $p(y|x)$**, tức là phân phối của đầu ra $y$ khi biết đầu vào $x$.
* **Hồi quy (`Regression`)**: Là trường hợp $y$ là một biến **liên tục**. Nhiệm vụ của mô hình là học các tham số của phân phối $p(y|x)$. Ví dụ, trong hồi quy tuyến tính, ta giả định $p(y|x)$ là một phân phối chuẩn $N(\mu, \sigma^2)$, và mô hình học cách dự đoán tham số trung bình $\mu$ từ $x$ (cụ thể là $\mu = w^T x$).
* **Phân loại (`Classification`)**: Là trường hợp $y$ là một biến **rời rạc** (các lớp). Nhiệm vụ của mô hình là học các xác suất của mỗi lớp, $P(Y=k|x)$ cho $k=1, ..., K$. Đầu ra của mô hình (ví dụ, sau hàm softmax) chính là một ước lượng cho phân phối xác suất này (một phân phối Categorical).

#### 3. Định nghĩa toán học:
* **Mục tiêu Hồi quy**: Ước lượng giá trị kỳ vọng có điều kiện $E[Y|X=x]$. Dưới giả định nhiễu Gauss, điều này tương đương với việc mô hình hóa $p(y|x)$ như một phân phối chuẩn.
* **Mục tiêu Phân loại**: Ước lượng phân phối xác suất có điều kiện $p(Y=k|X=x)$. Mô hình thường xuất ra một vector $[p_1, ..., p_K]$ trong đó $p_k \approx P(Y=k|X=x)$. Hàm mất mát Cross-Entropy được sử dụng vì nó chính là log-likelihood âm cho phân phối Categorical.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Phân loại)**: Mô hình **Hồi quy Logistic (`Logistic Regression`)** mặc dù có tên là "hồi quy", thực chất là một mô hình phân loại. Nó sử dụng hàm sigmoid để ánh xạ một tổ hợp tuyến tính của $x$ vào khoảng $(0, 1)$, trực tiếp mô hình hóa xác suất $P(Y=1|x)$.
* **Phản ví dụ**: Các mô hình như **k-Nearest Neighbors (k-NN)** hoặc **Cây quyết định (`Decision Trees`)** không trực tiếp mô hình hóa một phân phối xác suất có tham số. Chúng được gọi là các phương pháp **phi tham số (`non-parametric`)**, hoạt động dựa trên cấu trúc hình học của dữ liệu thay vì giả định một dạng phân phối cụ thể.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* **Hồi quy**: Tìm một đường cong (hoặc siêu phẳng) "chạy giữa" các điểm dữ liệu, đại diện cho giá trị trung bình có điều kiện.
* **Phân loại**: Tìm một **ranh giới quyết định (`decision boundary`)** trong không gian đặc trưng để phân chia các lớp. Ranh giới này là nơi mà xác suất dự đoán cho các lớp là bằng nhau (ví dụ: $P(Y=1|x) = 0.5$). 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Việc hiểu các nhiệm vụ học máy dưới dạng suy luận thống kê cho phép chúng ta làm những điều tinh vi hơn. Ví dụ, thay vì chỉ dự đoán một giá trị duy nhất trong hồi quy, ta có thể huấn luyện một mạng nơ-ron để dự đoán cả trung bình $\mu(x)$ và phương sai $\sigma^2(x)$ của phân phối $p(y|x)$. Điều này cho phép mô hình không chỉ đưa ra dự đoán mà còn cho biết **độ không chắc chắn** của nó. Ở những vùng dữ liệu mà nó chưa thấy nhiều, nó có thể dự đoán một phương sai lớn, báo hiệu rằng dự đoán ở đó kém tin cậy hơn.

---

### **Khái niệm 3: Phương pháp Phi tham số (`Non-parametric Methods`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Tất cả các mô hình chúng ta đã thảo luận (hồi quy tuyến tính, hồi quy logistic,...) đều là **mô hình tham số (`parametric`)**. Chúng ta giả định trước một dạng hàm cụ thể (ví dụ: đường thẳng, đường cong sigmoid) với một số lượng tham số cố định. Điều gì xảy ra nếu dạng hàm thực sự của dữ liệu rất phức tạp và không tuân theo bất kỳ giả định đơn giản nào của chúng ta? Liệu có cách nào để "để dữ liệu tự lên tiếng" mà không bị ràng buộc bởi các giả định cứng nhắc?

#### 2. Khái niệm, Cách hiểu đơn giản:
**Phương pháp phi tham số** là một lớp các phương pháp không đưa ra giả định chặt chẽ về dạng phân phối của dữ liệu. Số lượng "tham số" hiệu dụng của chúng có thể phát triển và trở nên phức tạp hơn khi có nhiều dữ liệu hơn. Thay vì cố gắng khớp một phương trình duy nhất cho toàn bộ dữ liệu, chúng thường đưa ra các dự đoán dựa trên các điểm lân cận hoặc cấu trúc cục bộ của dữ liệu. **Bootstrap** là một ví dụ điển hình.

#### 3. Định nghĩa toán học:
* **Mô hình tham số**: Mô hình được mô tả bởi một số lượng tham số hữu hạn, cố định. Ví dụ: $y = \beta_0 + \beta_1 x$.
* **Mô hình phi tham số**: Mô hình không thể được mô tả bởi một số lượng tham số hữu hạn. Độ phức tạp của mô hình tăng theo kích thước dữ liệu. Ví dụ: Hồi quy Kernel, k-Nearest Neighbors.
* **Bootstrap**: Là một kỹ thuật lấy mẫu lại (`resampling`) phi tham số để ước tính các đặc tính của một thống kê (như phương sai, khoảng tin cậy). Nó hoạt động bằng cách lấy mẫu có lặp lại từ chính mẫu dữ liệu quan sát được để tạo ra nhiều "bộ dữ liệu giả".

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Bootstrap)**: Giả sử bạn có một mẫu gồm 1000 người dùng và đã tính được thời gian trung bình họ ở lại trên trang web của bạn là 180 giây. Bạn muốn tìm một khoảng tin cậy 95% cho con số này nhưng không muốn giả định dữ liệu tuân theo phân phối chuẩn.
    1.  Bạn tạo ra 5000 "bộ dữ liệu giả", mỗi bộ được tạo bằng cách lấy mẫu ngẫu nhiên có lặp lại 1000 người dùng từ mẫu gốc của bạn.
    2.  Bạn tính toán thời gian trung bình cho mỗi bộ trong số 5000 bộ dữ liệu giả này.
    3.  Bây giờ bạn có một phân phối của 5000 giá trị trung bình. Khoảng tin cậy 95% có thể được ước tính bằng cách lấy phân vị thứ 2.5 và 97.5 của phân phối này.
* **Phản ví dụ**: Các phương pháp phi tham số thường đòi hỏi lượng dữ liệu lớn hơn nhiều so với các phương pháp tham số để hoạt động tốt. Nếu bạn chỉ có 10 điểm dữ liệu và chúng thực sự tuân theo một đường thẳng, một mô hình hồi quy tuyến tính (tham số) sẽ cho kết quả tốt hơn nhiều so với k-NN (phi tham số).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Các mô hình tham số cố gắng tìm một "quy tắc" toàn cục đơn giản (như một đường thẳng). Các mô hình phi tham số xây dựng các "quy tắc" cục bộ phức tạp, giống như việc vẽ một đường cong lượn theo từng cụm điểm dữ liệu. Chúng linh hoạt hơn nhưng cũng dễ bị "overfitting" hơn nếu không được kiểm soát.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Quy trình Gauss (`Gaussian Processes - GPs`)** là một ví dụ mạnh mẽ về mô hình phi tham số Bayes. Một GP có thể được xem là một phân phối xác suất trên các hàm. Thay vì khớp một hàm duy nhất, nó xem xét tất cả các hàm có thể đi qua các điểm dữ liệu và trả về một phân phối hậu nghiệm trên các hàm này. Điều này cho phép nó không chỉ đưa ra dự đoán (trung bình của phân phối) mà còn cả độ không chắc chắn (phương sai của phân phối) tại mỗi điểm. GPs được sử dụng rộng rãi trong tối ưu hóa Bayes, robot và các lĩnh vực khác.