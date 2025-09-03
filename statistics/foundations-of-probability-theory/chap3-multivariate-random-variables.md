---
sidebar_position: 3
---
# Chương 3: Biến ngẫu nhiên nhiều chiều (Multivariate Random Variables)

Chào mừng các bạn đến với Chương 3. Trong thế giới thực, hiếm khi chúng ta chỉ quan tâm đến một đại lượng ngẫu nhiên duy nhất. Thay vào đó, chúng ta thường nghiên cứu mối quan hệ và sự phụ thuộc lẫn nhau giữa nhiều đại lượng: chiều cao và cân nặng, nhiệt độ và độ ẩm, giá cổ phiếu của các công ty khác nhau. Chương này mở rộng các khái niệm từ một chiều lên nhiều chiều, cho phép chúng ta mô hình hóa các hệ thống phức tạp này.

---

### **Khái niệm 1: Phân phối đồng thời và Phân phối biên (`Joint` and `Marginal Distributions`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Nếu chỉ biết phân phối của chiều cao và phân phối của cân nặng một cách riêng rẽ, chúng ta sẽ bỏ lỡ thông tin quan trọng nhất: mối liên hệ giữa chúng (người cao thường nặng hơn). Chúng ta cần một công cụ để mô tả hành vi xác suất của một nhóm các biến ngẫu nhiên *cùng một lúc*. Ngược lại, nếu đã biết hành vi chung của cả nhóm, làm thế nào để "trích xuất" thông tin về hành vi của một biến riêng lẻ?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Phân phối đồng thời (`Joint Distribution`)**: Hãy tưởng tượng một bản đồ địa hình 2D. Tọa độ $x$ là chiều cao, tọa độ $y$ là cân nặng. Chiều cao của ngọn núi tại điểm $(x, y)$ cho bạn biết "mật độ xác suất" để một người có chính xác cặp chiều cao và cân nặng đó. Phân phối đồng thời chính là tấm bản đồ địa hình hoàn chỉnh này, mô tả toàn bộ cảnh quan xác suất.
* **Phân phối biên (`Marginal Distribution`)**: Bây giờ, hãy đứng ở một phía của bản đồ và nhìn ngang. Hình chiếu bóng của toàn bộ dãy núi lên trục $x$ (chiều cao) cho bạn biết phân phối tổng thể của chiều cao, bất kể cân nặng là gì. Đó chính là phân phối biên của chiều cao. Tương tự, hình chiếu bóng lên trục $y$ cho bạn phân phối biên của cân nặng.

#### 3. Định nghĩa toán học:
Cho hai biến ngẫu nhiên $X$ và $Y$:
* **Đồng thời (Joint)**:
    * Rời rạc: Hàm khối xác suất đồng thời là $p_{X,Y}(x, y) = P(X=x, Y=y)$.
    * Liên tục: Hàm mật độ xác suất đồng thời $f_{X,Y}(x, y)$ là hàm sao cho $P((X,Y) \in A) = \iint_A f_{X,Y}(x, y) dx dy$.
* **Biên (Marginal)**:
    * Rời rạc: PMF biên của $X$ là $p_X(x) = \sum_y p_{X,Y}(x, y)$. (Tổng theo tất cả các giá trị của $Y$).
    * Liên tục: PDF biên của $X$ là $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) dy$. (Lấy tích phân theo biến $Y$).

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Tung hai con xúc xắc công bằng, $X$ là kết quả của con thứ nhất, $Y$ là của con thứ hai.
    * Phân phối đồng thời: $p_{X,Y}(x, y) = 1/36$ cho mọi cặp $(x, y)$ với $x, y \in \{1, ..., 6\}$.
    * Phân phối biên của $X$: $p_X(x) = \sum_{y=1}^6 p_{X,Y}(x, y) = \sum_{y=1}^6 \frac{1}{36} = 6 \times \frac{1}{36} = 1/6$. Đây chính là phân phối của một con xúc xắc riêng lẻ, đúng như mong đợi.
* **Phản ví dụ**: Không phải bất kỳ hàm hai biến nào cũng là một PDF đồng thời hợp lệ. Ví dụ, hàm $f(x, y) = x + y$ trên hình vuông $[0, 1] \times [0, 1]$ không phải là một PDF đồng thời vì tích phân của nó trên hình vuông này là $\int_0^1 \int_0^1 (x+y) dx dy = 1$, nhưng hàm này có thể nhận giá trị âm nếu miền xác định rộng hơn, vi phạm tính chất không âm.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phân phối đồng thời là một "khối" hoặc "bề mặt" xác suất trong không gian nhiều chiều (ví dụ: bề mặt 3D cho 2 biến ngẫu nhiên). Phân phối biên có được bằng cách "ép" hoặc "chiếu" toàn bộ khối xác suất đó xuống trục của một biến duy nhất. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Trong các mô hình sinh ảnh như **StyleGAN**, mô hình học phân phối xác suất đồng thời cực kỳ phức tạp của hàng triệu pixel trong một bức ảnh. $p(pixel_1, pixel_2, ..., pixel_n)$. Khi bạn yêu cầu nó tạo một "khuôn mặt mới", thực chất bạn đang yêu cầu nó lấy một mẫu từ phân phối đồng thời khổng lồ này. Phân phối biên của một pixel (ví dụ, pixel ở giữa trán) có thể sẽ có xác suất cao ở các giá trị màu da.

---

### **Khái niệm 2: Phân phối có điều kiện (`Conditional Distribution`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Biết phân phối chung (đồng thời) là rất tốt, nhưng thường chúng ta có thông tin về một biến và muốn cập nhật kiến thức của mình về biến còn lại. Nếu tôi biết chiều cao của một người là 1m80, phân phối cân nặng của anh ta sẽ thay đổi như thế nào? Nó sẽ không còn là phân phối cân nặng chung của toàn bộ dân số nữa. Chúng ta cần một cách để mô tả phân phối của một biến khi "cố định" giá trị của biến kia.

#### 2. Khái niệm, Cách hiểu đơn giản:
Quay lại với bản đồ địa hình (phân phối đồng thời). Phân phối có điều kiện giống như việc bạn cắt một lát cắt dọc theo bản đồ tại một giá trị $x$ cố định (ví dụ, tại `chiều cao = 1m80`). Lát cắt này sẽ cho bạn một đường cong 1D. Đường cong này cho thấy hình dạng phân bố xác suất của cân nặng, *chỉ dành cho những người cao 1m80*. Tuy nhiên, diện tích dưới đường cong này có thể không bằng 1, vì vậy chúng ta cần "chuẩn hóa" nó (chia cho tổng diện tích) để biến nó thành một phân phối xác suất hợp lệ.

#### 3. Định nghĩa toán học:
Hàm mật độ xác suất có điều kiện (`conditional PDF`) của $Y$ khi biết $X=x$ được định nghĩa là:
$f_{Y|X}(y|x) = \frac{f_{X,Y}(x, y)}{f_X(x)}$, với điều kiện $f_X(x) > 0$.
(Tương tự cho trường hợp rời rạc với các hàm PMF).
Lưu ý rằng $f_{Y|X}(y|x)$ là một hàm của $y$, với $x$ được xem như một hằng số. Với mỗi giá trị $x$ cố định, đây là một PDF hợp lệ theo biến $y$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Giả sử phân phối đồng thời của $(X, Y)$ là đều trên hình tam giác có các đỉnh (0,0), (2,0), và (2,1). PDF đồng thời là $f(x,y) = 2$ bên trong tam giác này. PDF biên của $X$ là $f_X(x) = \int_0^{x/2} 2 dy = x$ với $x \in [0,2]$.
    * Vậy, phân phối có điều kiện của $Y$ khi biết $X=x$ là $f_{Y|X}(y|x) = \frac{f(x,y)}{f_X(x)} = \frac{2}{x}$ với $0 \le y \le x/2$. Đây là một phân phối đều trên đoạn $[0, x/2]$.
* **Phản ví dụ**: Một sai lầm phổ biến là quên chia cho phân phối biên $f_X(x)$. Chỉ lấy "lát cắt" $f_{X,Y}(x, y)$ với $x$ cố định sẽ không cho ta một PDF hợp lệ vì tích phân của nó theo $y$ sẽ bằng $f_X(x)$, thường không bằng 1.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phân phối có điều kiện là việc "bình thường hóa" một lát cắt của phân phối đồng thời để nó trở thành một phân phối xác suất hoàn chỉnh. Nó cho phép chúng ta xem xét các "lát cắt" của không gian xác suất đa chiều. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Các mô hình chuỗi như **Mạng Hồi quy (RNNs)** hoặc **Transformers** trong xử lý ngôn ngữ tự nhiên (NLP) hoạt động dựa trên nguyên tắc phân phối có điều kiện. Để dự đoán từ tiếp theo trong một câu, mô hình tính toán phân phối xác suất của từ tiếp theo, *dựa trên điều kiện là các từ đã xuất hiện trước đó*. Tức là, nó đang mô hình hóa $P(\text{từ}_t | \text{từ}_1, \text{từ}_2, ..., \text{từ}_{t-1})$.

---

### **Khái niệm 3: Hiệp phương sai và Hệ số tương quan (`Covariance` and `Correlation`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta có thể thấy mối quan hệ giữa các biến bằng cách nhìn vào phân phối đồng thời, nhưng đó là một đối tượng phức tạp. Chúng ta cần một con số duy nhất, đơn giản để tóm tắt "mức độ và chiều hướng" của mối quan hệ tuyến tính giữa hai biến ngẫu nhiên. Liệu chúng có xu hướng cùng tăng, cùng giảm, hay không liên quan tuyến tính đến nhau?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Hiệp phương sai (`Covariance`)**: Đo lường chiều hướng của mối quan hệ tuyến tính.
    * Nếu `Cov > 0`: Khi một biến lớn hơn giá trị trung bình của nó, biến kia cũng có xu hướng lớn hơn giá trị trung bình của nó (cùng chiều).
    * Nếu `Cov < 0`: Khi một biến lớn hơn giá trị trung bình của nó, biến kia có xu hướng nhỏ hơn giá trị trung bình của nó (ngược chiều).
    * Nếu `Cov ≈ 0`: Không có mối quan hệ tuyến tính rõ ràng.
    Vấn đề là độ lớn của hiệp phương sai phụ thuộc vào đơn vị đo của các biến (ví dụ: mét vs. centimet), gây khó khăn cho việc so sánh.
* **Hệ số tương quan (`Correlation`)**: Là phiên bản "chuẩn hóa" của hiệp phương sai. Nó loại bỏ ảnh hưởng của đơn vị đo và luôn nằm trong khoảng $[-1, 1]$, giúp diễn giải dễ dàng hơn.
    * Tương quan gần $+1$: Mối quan hệ đồng biến tuyến tính gần như hoàn hảo.
    * Tương quan gần $-1$: Mối quan hệ nghịch biến tuyến tính gần như hoàn hảo.
    * Tương quan gần $0$: Không có mối quan hệ tuyến tính.

#### 3. Định nghĩa toán học:
* Hiệp phương sai: $Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$.
* Hệ số tương quan: $\rho(X, Y) = \frac{Cov(X, Y)}{\sigma_X \sigma_Y} = \frac{Cov(X, Y)}{\sqrt{Var(X)Var(Y)}}$.
* Hai biến ngẫu nhiên độc lập (`independent`) thì có tương quan bằng 0 ($Cov(X,Y)=0$), nhưng điều ngược lại không phải lúc nào cũng đúng.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Chiều cao ($X$) và cân nặng ($Y$) có hiệp phương sai dương và tương quan dương, vì người cao hơn có xu hướng nặng hơn. Số giờ học ($X$) và điểm số ($Y$) cũng vậy. Số giờ chơi game ($X$) và điểm số ($Y$) có thể có tương quan âm.
* **Phản ví dụ**: Tương quan bằng 0 không có nghĩa là độc lập. Xét biến ngẫu nhiên $X$ có phân phối đều trên $[-1, 1]$, và $Y = X^2$. Rõ ràng $Y$ phụ thuộc hoàn toàn vào $X$. Tuy nhiên, $Cov(X, Y) = E[X^3] - E[X]E[X^2] = 0 - 0 = 0$. Mối quan hệ giữa chúng là phi tuyến tính (hình parabol), do đó tương quan (chỉ đo quan hệ tuyến tính) bằng 0.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Nếu vẽ biểu đồ tán xạ (scatterplot) của các cặp $(x, y)$ được lấy mẫu từ phân phối đồng thời, hệ số tương quan cho biết đám mây điểm đó có xu hướng tạo thành một đường thẳng hay không.
* $\rho \approx 1$: Đám mây điểm giống một đường thẳng dốc lên.
* $\rho \approx -1$: Đám mây điểm giống một đường thẳng dốc xuống.
* $\rho \approx 0$: Đám mây điểm có hình tròn, hoặc hình chữ U, hoặc một hình dạng nào đó không phải đường thẳng.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Phân tích thành phần chính (`Principal Component Analysis - PCA`)** là một kỹ thuật giảm chiều dữ liệu hoạt động bằng cách tìm các hướng (thành phần chính) trong không gian đặc trưng mà dữ liệu có phương sai lớn nhất. Ma trận hiệp phương sai (`covariance matrix`) của dữ liệu là đầu vào cốt lõi của thuật toán PCA. Các vector riêng của ma trận này chính là các thành phần chính cần tìm.