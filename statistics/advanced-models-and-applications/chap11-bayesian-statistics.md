---
sidebar_position: 2
---
# Chương 11: Thống kê Bayes (Bayesian Statistics)

Cho đến nay, chúng ta đã tiếp cận thống kê theo một triết lý duy nhất, được gọi là trường phái **Tần suất (`Frequentist`)**. Theo đó, xác suất là tần suất xuất hiện trong dài hạn, và các tham số là những hằng số cố định nhưng chưa biết. Bây giờ, chúng ta sẽ khám phá một thế giới quan hoàn toàn khác, một cách tiếp cận mạnh mẽ và ngày càng phổ biến: **Thống kê Bayes (`Bayesian Statistics`)**. Cách tiếp cận này sẽ thay đổi tận gốc cách chúng ta định nghĩa xác suất và suy luận từ dữ liệu.

---

### **Khái niệm 1: Triết lý Bayes và Cỗ máy Suy luận**

#### 1. Động lực / Vấn đề cần giải quyết:
Cách tiếp cận Tần suất có một số diễn giải khá rắc rối. "Khoảng tin cậy 95%" không có nghĩa là xác suất 95% tham số nằm trong đó. "p-value" thường xuyên bị hiểu sai. Hơn nữa, trường phái Tần suất không có một cơ chế chính thức để kết hợp **kiến thức chuyên gia hoặc niềm tin có sẵn** vào mô hình. Thống kê Bayes ra đời để giải quyết những vấn đề này bằng cách định nghĩa lại xác suất như một "mức độ tin tưởng" và cung cấp một quy trình toán học rõ ràng để **cập nhật niềm tin đó khi có bằng chứng mới**.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Sự khác biệt cốt lõi**:
    * **Tần suất (`Frequentist`)**: Xác suất là tần suất tương đối của một sự kiện sau vô số lần lặp lại. Tham số $\theta$ là một hằng số cố định.
    * **Bayes (`Bayesian`)**: Xác suất là một mức độ tin tưởng (`degree of belief`) chủ quan về một mệnh đề. Tham số $\theta$ được xem là một **biến ngẫu nhiên**, và chúng ta có thể có một phân phối xác suất cho nó.
* **Cỗ máy suy luận Bayes**: Toàn bộ quá trình suy luận Bayes là một ứng dụng của Định lý Bayes để học hỏi từ dữ liệu.
    1.  **Niềm tin ban đầu (`Prior`)**: Ta bắt đầu với một **phân phối tiên nghiệm** $p(\theta)$, thể hiện niềm tin của chúng ta về $\theta$ *trước khi* xem xét dữ liệu.
    2.  **Bằng chứng (`Likelihood`)**: Ta thu thập dữ liệu và xây dựng **hàm hợp lý** $p(\text{dữ liệu}|\theta)$. Hàm này cho biết dữ liệu có khả năng xảy ra như thế nào với một giá trị $\theta$ cho trước.
    3.  **Niềm tin cập nhật (`Posterior`)**: Ta sử dụng Định lý Bayes để kết hợp `Prior` và `Likelihood` để tạo ra **phân phối hậu nghiệm** $p(\theta|\text{dữ liệu})$. Đây là niềm tin đã được cập nhật của chúng ta về $\theta$ *sau khi* đã xem xét dữ liệu.

#### 3. Định nghĩa toán học:
Định lý Bayes cho suy luận thống kê được phát biểu như sau:
$p(\theta | \text{dữ liệu}) = \frac{p(\text{dữ liệu} | \theta) \ p(\theta)}{p(\text{dữ liệu})}$
Trong đó:
* $p(\theta | \text{dữ liệu})$ là **phân phối hậu nghiệm (`posterior distribution`)**.
* $p(\text{dữ liệu} | \theta)$ là **hàm hợp lý (`likelihood`)**.
* $p(\theta)$ là **phân phối tiên nghiệm (`prior distribution`)**.
* $p(\text{dữ liệu}) = \int p(\text{dữ liệu} | \theta) p(\theta) d\theta$ là **bằng chứng (`evidence`)**, một hằng số chuẩn hóa.
Do $p(\text{dữ liệu})$ không phụ thuộc vào $\theta$, ta thường viết một cách súc tích:
**Posterior $\propto$ Likelihood $\times$ Prior**

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Giả sử ta muốn ước tính tỷ lệ mặt sấp $p$ của một đồng xu.
    * **Prior**: Ta không biết gì nhiều, nhưng tin rằng đồng xu có lẽ là công bằng. Ta có thể chọn một phân phối tiên nghiệm là $Beta(10, 10)$, có đỉnh ở $p=0.5$.
    * **Likelihood**: Ta tung đồng xu 30 lần và nhận được 25 mặt sấp. Dữ liệu này tuân theo phân phối Binomial.
    * **Posterior**: Bằng cách kết hợp (nhân) prior Beta và likelihood Binomial, ta thu được một phân phối hậu nghiệm là $Beta(10+25, 10+5) = Beta(35, 15)$. Đỉnh của phân phối mới này đã dịch chuyển từ $0.5$ về phía $25/30 \approx 0.83$. Niềm tin của chúng ta đã được cập nhật bởi dữ liệu.
* **Phản ví dụ**: Sự nguy hiểm của một prior quá mạnh và sai lầm. Nếu ta *hoàn toàn chắc chắn* rằng đồng xu là công bằng, ta có thể đặt một prior là $p(p=0.5)=1$ và $0$ ở mọi nơi khác. Khi đó, dù ta có tung ra 100 mặt sấp liên tiếp, phân phối hậu nghiệm vẫn sẽ chỉ có giá trị tại $p=0.5$. Một niềm tin ban đầu tuyệt đối (prior có xác suất 0 ở một số vùng) không thể được thay đổi bởi bất kỳ lượng bằng chứng nào.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phân phối hậu nghiệm là một sự "thỏa hiệp" có trọng số giữa niềm tin ban đầu (prior) và bằng chứng từ dữ liệu (likelihood).
* Nếu prior "phẳng" (không có nhiều thông tin) và dữ liệu lớn, posterior sẽ có hình dạng gần giống với likelihood.
* Nếu prior "nhọn" (rất chắc chắn) và dữ liệu ít, posterior sẽ bị ảnh hưởng nhiều bởi prior.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Tối ưu hóa Bayes (`Bayesian Optimization`)** là một kỹ thuật cực kỳ hiệu quả để tinh chỉnh siêu tham số (`hyperparameter tuning`) cho các mô hình học máy. Thay vì tìm kiếm ngẫu nhiên, nó xây dựng một mô hình xác suất (gọi là mô hình thay thế) về hàm mục tiêu (ví dụ: độ chính xác của mô hình theo `learning rate`). Sau mỗi lần thử nghiệm, nó cập nhật phân phối hậu nghiệm của mô hình thay thế này và sử dụng nó để quyết định một cách thông minh điểm siêu tham số nào cần thử tiếp theo để tối đa hóa khả năng cải thiện.

---

### **Khái niệm 2: Ước lượng Bayes và Khoảng Tin cậy (`Bayesian Estimators` and `Credible Intervals`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Kết quả đầy đủ của một phân tích Bayes là toàn bộ phân phối hậu nghiệm $p(\theta|\text{dữ liệu})$. Tuy nhiên, thường thì chúng ta cần tóm tắt nó thành một con số duy nhất (ước lượng điểm) và một khoảng để thể hiện sự không chắc chắn. Quan trọng hơn, liệu chúng ta có thể tạo ra một khoảng mà có cách diễn giải trực quan, đúng với những gì mọi người thường mong đợi không?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Ước lượng Bayes (`Bayesian Estimator`)**: Thay vì các nguyên tắc phức tạp như MLE, chúng ta chỉ đơn giản tóm tắt phân phối hậu nghiệm.
    * **Trung bình hậu nghiệm (`Posterior Mean`)**: Là giá trị kỳ vọng của phân phối hậu nghiệm. Đây là lựa chọn tốt nếu hàm mất mát là bình phương sai số.
    * **Ước lượng Hợp lý Tối đa hậu nghiệm (`Maximum A Posteriori - MAP`)**: Là điểm có mật độ xác suất cao nhất trên phân phối hậu nghiệm (mode). Nó có thể được xem là một MLE có thêm "sự trừng phạt" từ prior.
* **Khoảng tin cậy (`Credible Interval`)**: Đây là câu trả lời của trường phái Bayes cho khoảng tin cậy. Một khoảng tin cậy 95% có nghĩa là: **"Dựa trên dữ liệu đã quan sát, có 95% xác suất để tham số thật $\theta$ nằm trong khoảng này."** Đây là một phát biểu trực tiếp và trực quan về tham số.

#### 3. Định nghĩa toán học:
Từ phân phối hậu nghiệm $p(\theta | \text{dữ liệu})$:
* **Ước lượng MAP**: $\hat{\theta}_{MAP} = \arg\max_{\theta} p(\theta | \text{dữ liệu})$.
* **Ước lượng Trung bình hậu nghiệm**: $\hat{\theta}_{Mean} = E[\theta | \text{dữ liệu}] = \int \theta \ p(\theta | \text{dữ liệu}) d\theta$.
* Một **khoảng tin cậy $100(1-\alpha)\%$** là một tập con $C$ của không gian tham số sao cho $P(\theta \in C | \text{dữ liệu}) = \int_C p(\theta | \text{dữ liệu}) d\theta = 1 - \alpha$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Với phân phối hậu nghiệm $Beta(35, 15)$ từ ví dụ trước.
    * Ước lượng MAP cho $p$ là $\frac{35-1}{35+15-2} \approx 0.708$.
    * Ước lượng trung bình hậu nghiệm là $\frac{35}{35+15} = 0.7$.
    * Một khoảng tin cậy 95% có thể được tính bằng cách tìm phân vị thứ 2.5 và 97.5 của phân phối $Beta(35, 15)$. Giả sử khoảng đó là $[0.56, 0.82]$. Ta có thể phát biểu: "Dựa trên dữ liệu, chúng tôi 95% tin rằng tỷ lệ mặt sấp thực sự của đồng xu nằm trong khoảng từ 0.56 đến 0.82."
* **Phản ví dụ**: So sánh với Khoảng tin cậy (`Confidence Interval`). Một khoảng tin cậy 95% của trường phái Tần suất, giả sử là $[0.55, 0.81]$, có cách diễn giải hoàn toàn khác: "Nếu chúng ta lặp lại quy trình lấy mẫu này rất nhiều lần, 95% các khoảng tin cậy được tạo ra sẽ chứa giá trị $p$ thật." Nó không nói gì về xác suất của một khoảng cụ thể. Khoảng tin cậy (`Credible Interval`) của Bayes mới có cách diễn giải trực quan mà mọi người mong muốn.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy xem phân phối hậu nghiệm như một ngọn núi thể hiện niềm tin của chúng ta.
* Ước lượng MAP là đỉnh cao nhất của ngọn núi.
* Trung bình hậu nghiệm là tâm khối của ngọn núi.
* Một khoảng tin cậy 95% là một vùng trên mặt đất mà chứa 95% tổng thể tích của ngọn núi.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Mạng Nơ-ron Bayes (`Bayesian Neural Networks - BNNs`)** áp dụng triệt để các nguyên tắc này. Thay vì học một giá trị trọng số duy nhất cho mỗi kết nối trong mạng, BNN học cả một **phân phối hậu nghiệm** cho mỗi trọng số.
* **Đo lường độ không chắc chắn**: Khi dự đoán một đầu vào mới, BNN không chỉ cho ra một kết quả mà còn có thể cho biết nó "chắc chắn" đến mức nào về dự đoán đó bằng cách xem xét sự phân tán của các dự đoán từ các bộ trọng số được lấy mẫu từ hậu nghiệm. Điều này cực kỳ quan trọng cho các ứng dụng như chẩn đoán y tế hoặc xe tự lái.
* **Chính quy hóa (`Regularization`)**: Việc đặt một prior (ví dụ: phân phối chuẩn có trung tâm tại 0) lên các trọng số sẽ tự động khuyến khích các trọng số nhỏ, hoạt động như một cơ chế chính quy hóa (tương tự L2 regularization) để chống lại hiện tượng overfitting.