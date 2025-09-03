---
sidebar_position: 2
---

# Chương 7: Ước lượng điểm (Point Estimation)

Sau khi đã nắm vững các nguyên tắc cơ bản của suy luận, bây giờ là lúc chúng ta đi vào nhiệm vụ cụ thể đầu tiên: **Ước lượng điểm (`Point Estimation`)**. Mục tiêu của chúng ta là từ một mẫu dữ liệu, đưa ra một con số duy nhất được xem là "phỏng đoán tốt nhất" cho một tham số chưa biết của tổng thể. Chương này sẽ giới thiệu các phương pháp để tìm ra phỏng đoán đó và các tiêu chí để đánh giá xem một phỏng đoán tốt đến mức nào.

---

### **Khái niệm 1: Phương pháp Hợp lý Tối đa (`Maximum Likelihood Estimation - MLE`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Giả sử chúng ta có một mẫu dữ liệu và một mô hình xác suất cho dữ liệu đó (ví dụ: dữ liệu tuân theo phân phối chuẩn với $\mu$ và $\sigma^2$ chưa biết). Có vô số giá trị $\mu$ và $\sigma^2$ khả dĩ. Vậy, đâu là cặp giá trị hợp lý nhất? Chúng ta cần một nguyên tắc, một phương pháp có hệ thống để chọn ra giá trị tham số mà làm cho dữ liệu ta đã quan sát được có vẻ "dễ xảy ra nhất".

#### 2. Khái niệm, Cách hiểu đơn giản:
**Nguyên tắc Hợp lý Tối đa (MLE)** hoạt động như một thám tử. Vị thám tử nhìn vào bằng chứng (dữ liệu) và đặt câu hỏi: "Trong số tất cả các nghi phạm (các giá trị tham số), ai là người có khả năng tạo ra bằng chứng này cao nhất?". MLE chọn giá trị tham số $\theta$ để **tối đa hóa xác suất (hoặc mật độ xác suất) của việc quan sát được chính mẫu dữ liệu mà chúng ta đang có trong tay**. Nó tìm kiếm lời giải thích hợp lý nhất cho dữ liệu.

#### 3. Định nghĩa toán học:
Cho một mẫu ngẫu nhiên `i.i.d.` $X_1, ..., X_n$ từ một phân phối có PMF hoặc PDF là $f(x|\theta)$. **Hàm hợp lý (`likelihood function`)** được định nghĩa là:
$L(\theta | x_1, ..., x_n) = \prod_{i=1}^n f(x_i | \theta)$.
Lưu ý: Đây là một hàm của $\theta$, với dữ liệu $x_i$ được coi là cố định.
**Ước lượng hợp lý tối đa (`Maximum Likelihood Estimator - MLE`)**, ký hiệu là $\hat{\theta}_{MLE}$, là giá trị của $\theta$ làm tối đa hóa $L(\theta)$.
Trên thực tế, ta thường tối đa hóa hàm log-hợp lý (`log-likelihood`) $l(\theta) = \log L(\theta) = \sum_{i=1}^n \log f(x_i | \theta)$ vì nó dễ tính toán hơn và cho ra cùng kết quả.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Tung một đồng xu (có thể không cân bằng) $n$ lần, thu được $k$ mặt sấp. Gọi $p$ là xác suất ra mặt sấp.
    * Phân phối của một lần tung là Bernoulli($p$).
    * Hàm hợp lý: $L(p) = p^k (1-p)^{n-k}$.
    * Để tối đa hóa $L(p)$, ta lấy đạo hàm theo $p$ và cho bằng 0. Kết quả thu được là $\hat{p}_{MLE} = k/n$. Đây chính là tỷ lệ mẫu, một kết quả rất trực quan.
* **Phản ví dụ**: MLE có thể cho ra kết quả vô nghĩa trong một số trường hợp. Ví dụ, nếu ta có một mẫu $x_1, ..., x_n$ từ phân phối đều $Uniform(0, \theta)$, hàm hợp lý sẽ bằng $1/\theta^n$ nếu tất cả $x_i \le \theta$ và bằng 0 nếu ngược lại. Để tối đa hóa hàm này, ta phải chọn $\theta$ nhỏ nhất có thể mà vẫn lớn hơn tất cả các $x_i$. Do đó, $\hat{\theta}_{MLE} = \max(x_1, ..., x_n)$. Ước lượng này luôn luôn nhỏ hơn hoặc bằng giá trị thật của $\theta$, tức là nó bị chệch (`biased`).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy tưởng tượng hàm hợp lý $L(\theta)$ là một ngọn đồi, với trục hoành là các giá trị khả dĩ của tham số $\theta$. MLE chính là việc đi tìm đỉnh của ngọn đồi đó. Tọa độ của đỉnh đồi chính là giá trị ước lượng $\hat{\theta}_{MLE}$. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
MLE là nguyên tắc nền tảng cho việc huấn luyện hầu hết các mô hình học máy có giám sát. Ví dụ, trong hồi quy tuyến tính với giả định nhiễu Gauss, việc **tối thiểu hóa tổng bình phương sai số (Least Squares)** hoàn toàn tương đương với việc **tối đa hóa hàm hợp lý**. Tương tự, trong hồi quy logistic, việc tối thiểu hóa hàm mất mát **cross-entropy** cũng chính là việc thực hiện MLE. Nói cách khác, khi bạn huấn luyện một mạng nơ-ron, rất có thể bạn đang thực hiện một dạng của MLE.

---

### **Khái niệm 2: Các tiêu chí đánh giá một ước lượng**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta có thể có nhiều phương pháp khác nhau để đưa ra một ước lượng điểm (ví dụ: MLE, Phương pháp Moment). Vậy làm sao để biết ước lượng nào "tốt" hơn? Chúng ta cần một bộ tiêu chí khách quan để đo lường chất lượng của một công cụ ước lượng, giống như việc chúng ta có các chỉ số để đánh giá hiệu suất của một chiếc xe hơi.

#### 2. Khái niệm, Cách hiểu đơn giản:
Có bốn tiêu chí chính:
* **Không chệch (`Unbiasedness`)**: Một ước lượng được gọi là không chệch nếu "trung bình" của nó (giá trị kỳ vọng của phân phối lấy mẫu) bằng đúng giá trị tham số thật. Nó giống như một người bắn súng không bị lệch tâm; các phát bắn có thể phân tán nhưng trung tâm của chúng là đúng mục tiêu.
* **Hiệu quả (`Efficiency`)**: Giữa hai ước lượng không chệch, ước lượng nào có phương sai nhỏ hơn thì được gọi là hiệu quả hơn. Nó giống như một người bắn súng không chỉ bắn trúng tâm mà còn bắn rất chụm.
* **Nhất quán (`Consistency`)**: Một ước lượng là nhất quán nếu khi kích thước mẫu tăng lên vô hạn, nó hội tụ về giá trị tham số thật. Điều này đảm bảo rằng việc thu thập thêm dữ liệu sẽ giúp ước lượng của bạn tốt hơn.
* **Tính đầy đủ (`Sufficiency`)**: Một thống kê được gọi là đủ nếu nó chứa đựng *tất cả* thông tin về tham số $\theta$ có trong mẫu. Một khi bạn đã tính toán thống kê này, việc xem lại dữ liệu gốc không cung cấp thêm bất kỳ thông tin nào về $\theta$.

#### 3. Định nghĩa toán học:
Cho $\hat{\theta}$ là một ước lượng của $\theta$.
* **Không chệch**: $E[\hat{\theta}] = \theta$ với mọi $\theta$. Độ chệch (`bias`) là $Bias(\hat{\theta}) = E[\hat{\theta}] - \theta$.
* **Hiệu quả**: Nếu $\hat{\theta}_1$ và $\hat{\theta}_2$ đều không chệch, $\hat{\theta}_1$ hiệu quả hơn $\hat{\theta}_2$ nếu $Var(\hat{\theta}_1) \le Var(\hat{\theta}_2)$. **Ước lượng không chệch tốt nhất với phương sai nhỏ nhất (UMVUE)** là ước lượng đánh bại tất cả các ước lượng không chệch khác về phương sai.
* **Nhất quán**: $\hat{\theta}_n$ là nhất quán nếu $\hat{\theta}_n \xrightarrow{P} \theta$ khi $n \to \infty$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Với mẫu từ tổng thể có trung bình $\mu$ và phương sai $\sigma^2$:
    * Trung bình mẫu $\bar{X} = \frac{1}{n}\sum X_i$ là một ước lượng **không chệch** cho $\mu$ vì $E[\bar{X}] = \mu$.
    * Phương sai mẫu $S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$ là một ước lượng **không chệch** cho $\sigma^2$.
* **Phản ví dụ (về không chệch)**: Nếu chúng ta định nghĩa phương sai mẫu là $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ (chia cho $n$ thay vì $n-1$), thì đây sẽ là một ước lượng **bị chệch**. Cụ thể, $E[\hat{\sigma}^2] = \frac{n-1}{n}\sigma^2$, luôn nhỏ hơn giá trị thật. Đây cũng chính là ước lượng MLE cho phương sai của phân phối chuẩn, cho thấy MLE không phải lúc nào cũng không chệch.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy xem phân phối lấy mẫu của các ước lượng khác nhau.
* **Không chệch**: Đỉnh của phân phối lấy mẫu nằm ngay tại giá trị $\theta$ thật.
* **Hiệu quả**: Phân phối lấy mẫu của nó hẹp và cao hơn so với các ước lượng khác.
* **Nhất quán**: Khi $n$ tăng, phân phối lấy mẫu này sẽ co lại thành một đường thẳng đứng tại $\theta$.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Sự đánh đổi Giữa Độ chệch và Phương sai (`Bias-Variance Tradeoff`)** là một khái niệm trung tâm trong học máy.
* **Mô hình có độ chệch cao** (ví dụ: hồi quy tuyến tính cho dữ liệu phi tuyến) là mô hình quá đơn giản, ước lượng "lệch" xa so với hàm mục tiêu thực, gây ra lỗi **underfitting**.
* **Mô hình có phương sai cao** (ví dụ: một cây quyết định rất sâu) là mô hình quá phức tạp, rất nhạy cảm với dữ liệu huấn luyện cụ thể. Ước lượng thay đổi rất nhiều nếu ta thay đổi tập huấn luyện, gây ra lỗi **overfitting**.
Mục tiêu của việc lựa chọn và tinh chỉnh mô hình là tìm ra điểm cân bằng tối ưu giữa hai loại lỗi này để có sai số tổng quát hóa (`generalization error`) thấp nhất.