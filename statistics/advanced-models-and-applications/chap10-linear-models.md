---
sidebar_position: 1
---
# Chương 10: Mô hình tuyến tính (Linear Models)

Chào mừng các bạn đến với Phần III, nơi chúng ta sẽ kết nối những lý thuyết suy luận thống kê chặt chẽ đã học với các mô hình ứng dụng cụ thể. Chúng ta sẽ bắt đầu với công cụ được xem là nền tảng, mạnh mẽ và được sử dụng rộng rãi nhất trong kho vũ khí của nhà thống kê và khoa học dữ liệu: **Mô hình tuyến tính (`Linear Models`)**. Chương này sẽ chỉ ra cách chúng ta có thể sử dụng một phương trình đường thẳng đơn giản để mô hình hóa các mối quan hệ phức tạp trong dữ liệu.

---

### **Khái niệm 1: Hồi quy tuyến tính (`Linear Regression`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong rất nhiều lĩnh vực, chúng ta muốn tìm hiểu và định lượng mối quan hệ giữa các biến số. Ví dụ: Liệu chi tiêu cho quảng cáo có thực sự làm tăng doanh thu không, và nếu có thì tăng bao nhiêu? Cân nặng của một người phụ thuộc vào chiều cao như thế nào? Hồi quy tuyến tính cung cấp một khung mô hình đơn giản nhưng mạnh mẽ để trả lời những câu hỏi này, bằng cách giả định rằng mối quan hệ giữa biến đầu vào (biến độc lập) và biến đầu ra (biến phụ thuộc) có dạng một đường thẳng.

#### 2. Khái niệm, Cách hiểu đơn giản:
**Hồi quy tuyến tính** là quá trình tìm ra một "đường thẳng phù hợp nhất" (`best-fit line`) đi qua một đám mây các điểm dữ liệu.
* **Biến độc lập ($X$)**: Biến mà chúng ta dùng để dự đoán (ví dụ: chiều cao).
* **Biến phụ thuộc ($Y$)**: Biến mà chúng ta muốn dự đoán (ví dụ: cân nặng).
* **Mô hình**: Chúng ta giả định rằng $Y \approx \beta_0 + \beta_1 X$.
    * $\beta_0$ (`intercept`): Giá trị của $Y$ khi $X=0$ (điểm cắt trục tung).
    * $\beta_1$ (`slope`): Độ dốc, cho biết $Y$ thay đổi bao nhiêu khi $X$ tăng một đơn vị.
Nhiệm vụ của chúng ta là sử dụng dữ liệu để tìm ra các giá trị "tốt nhất" cho $\beta_0$ và $\beta_1$. Khi có nhiều biến độc lập ($X_1, X_2, ...$), mô hình trở thành hồi quy tuyến tính bội, tương ứng với việc tìm một "siêu phẳng phù hợp nhất".

#### 3. Định nghĩa toán học:
Mô hình hồi quy tuyến tính đơn giản được cho bởi:
$Y_i = \beta_0 + \beta_1 X_i + \epsilon_i$
Trong đó:
* $Y_i$ là giá trị quan sát thứ $i$ của biến phụ thuộc.
* $X_i$ là giá trị quan sát thứ $i$ của biến độc lập.
* $\beta_0$ và $\beta_1$ là các hệ số hồi quy chưa biết (các tham số).
* $\epsilon_i$ là sai số ngẫu nhiên (`random error term`), thường được giả định là các biến ngẫu nhiên độc lập, cùng phân phối với $E[\epsilon_i]=0$ và $Var(\epsilon_i)=\sigma^2$. Thông thường nhất, ta giả định $\epsilon_i \sim N(0, \sigma^2)$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Dữ liệu về giá nhà ($Y$) dựa trên diện tích ($X$). Chúng ta có thể xây dựng một mô hình $Giá\_nhà = \beta_0 + \beta_1 \times Diện\_tích$. Sau khi khớp mô hình, ta có thể thu được kết quả như $Giá\_nhà = 50000 + 1500 \times Diện\_tích$. Điều này có nghĩa là giá nhà cơ bản là 50,000$ và mỗi mét vuông diện tích tăng thêm sẽ làm giá nhà tăng trung bình 1,500$.
* **Phản ví dụ**: Hồi quy tuyến tính giả định một mối quan hệ tuyến tính. Nếu mối quan hệ thực sự là phi tuyến (ví dụ: hình chữ U, như mối quan hệ giữa liều lượng thuốc và hiệu quả), việc áp dụng mô hình tuyến tính sẽ cho kết quả sai lệch và không chính xác (mô hình bị **underfitting**). 

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Trong không gian hai chiều, hồi quy tuyến tính đơn là việc tìm một đường thẳng đi qua đám mây điểm dữ liệu $(X_i, Y_i)$ sao cho tổng khoảng cách (theo phương thẳng đứng) từ các điểm đến đường thẳng là nhỏ nhất. Trong không gian nhiều chiều hơn (hồi quy bội), nó là việc tìm một siêu phẳng (`hyperplane`) phù hợp nhất.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Hồi quy tuyến tính là mô hình nền tảng cho các bài toán **học có giám sát (`supervised learning`)**. Mặc dù đơn giản, nó vẫn cực kỳ hữu ích và thường được dùng làm mô hình cơ sở (`baseline model`) để so sánh với các mô hình phức tạp hơn. Nhiều mô hình phức tạp hơn như mạng nơ-ron thực chất có thể được xem như một chuỗi các phép biến đổi tuyến tính (nhân ma trận trọng số) xen kẽ với các hàm kích hoạt phi tuyến. Lớp cuối cùng của một mạng nơ-ron cho bài toán hồi quy thường là một lớp tuyến tính không có hàm kích hoạt.

---

### **Khái niệm 2: Ước lượng Bình phương Tối thiểu (`Least Squares Estimation`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã có mô hình $Y = \beta_0 + \beta_1 X$. Bây giờ, làm thế nào để tìm ra các giá trị cụ thể cho $\beta_0$ và $\beta_1$ từ dữ liệu? Chúng ta cần một tiêu chí để định nghĩa thế nào là một "đường thẳng phù hợp nhất". Có nhiều đường thẳng có thể vẽ qua một đám mây điểm, vậy đường nào là "tốt nhất"?

#### 2. Khái niệm, Cách hiểu đơn giản:
**Phương pháp Bình phương Tối thiểu** đưa ra một tiêu chí rất trực quan: "Đường thẳng tốt nhất là đường thẳng làm cho tổng của bình phương các sai số dự đoán là nhỏ nhất".
* **Sai số dự đoán (phần dư - `residual`)**: Với mỗi điểm dữ liệu $(X_i, Y_i)$, sai số là khoảng cách theo phương thẳng đứng từ điểm đó đến đường thẳng hồi quy: $e_i = Y_i - \hat{Y}_i$, trong đó $\hat{Y}_i = \hat{\beta}_0 + \hat{\beta}_1 X_i$ là giá trị dự đoán.
* **Bình phương Tối thiểu**: Ta tìm các giá trị $\hat{\beta}_0$ và $\hat{\beta}_1$ để tối thiểu hóa **Tổng Bình phương Sai số (`Sum of Squared Errors - SSE`)**: $SSE = \sum_{i=1}^n e_i^2 = \sum_{i=1}^n (Y_i - (\beta_0 + \beta_1 X_i))^2$.
Việc lấy bình phương đảm bảo các sai số dương và âm không triệt tiêu lẫn nhau và trừng phạt các sai số lớn nặng hơn.

#### 3. Định nghĩa toán học:
Các ước lượng bình phương tối thiểu (`Least Squares Estimators`) $\hat{\beta}_0$ và $\hat{\beta}_1$ là các giá trị tối thiểu hóa hàm $Q(\beta_0, \beta_1) = \sum_{i=1}^n (Y_i - \beta_0 - \beta_1 X_i)^2$.
Bằng cách lấy đạo hàm riêng của $Q$ theo $\beta_0$ và $\beta_1$ rồi cho chúng bằng 0, ta có thể giải ra được các công thức tường minh:
$\hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2} = \frac{Cov(X,Y)}{Var(X)}$
$\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Với bộ dữ liệu {(1, 2), (2, 4), (3, 5)}, ta có thể áp dụng các công thức trên để tính ra các giá trị $\hat{\beta}_0$ và $\hat{\beta}_1$ cụ thể, từ đó có được phương trình đường thẳng phù hợp nhất.
* **Phản ví dụ**: Phương pháp bình phương tối thiểu rất nhạy cảm với các **điểm ngoại lai (`outliers`)**. Một điểm dữ liệu nằm rất xa so với phần còn lại có thể "kéo" đường thẳng hồi quy về phía nó một cách đáng kể, làm sai lệch kết quả. Điều này là do việc bình phương sai số khiến cho các điểm ở xa có ảnh hưởng rất lớn đến tổng SSE. Trong những trường hợp như vậy, các phương pháp hồi quy bền vững hơn (robust regression) có thể cần thiết. 

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Ước lượng bình phương tối thiểu có thể được hiểu dưới góc độ của đại số tuyến tính. Nếu xem vector các giá trị $Y$ là một điểm trong không gian $n$ chiều, và các cột của ma trận thiết kế $X$ tạo ra một không gian con, thì vector các giá trị dự đoán $\hat{Y}$ chính là **hình chiếu trực giao** của vector $Y$ lên không gian con đó. Vector sai số $e = Y - \hat{Y}$ sẽ trực giao với không gian con này. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Phương pháp bình phương tối thiểu là nền tảng cho hàm mất mát **Mean Squared Error (MSE)**, một trong những hàm mất mát phổ biến nhất cho các bài toán hồi quy trong học máy.
$MSE = \frac{1}{n} \sum (Y_i - \hat{Y}_i)^2$
Khi một mạng nơ-ron được huấn luyện để giải quyết một bài toán hồi quy bằng cách sử dụng hàm mất mát MSE, thực chất nó đang tìm kiếm một tập hợp các trọng số để tối thiểu hóa tổng bình phương sai số, tương tự như nguyên tắc của bình phương tối thiểu. Hơn nữa, nếu ta giả định sai số $\epsilon_i$ tuân theo phân phối chuẩn, thì việc tối thiểu hóa SSE (Least Squares) chính là việc **tối đa hóa hàm hợp lý (MLE)**.