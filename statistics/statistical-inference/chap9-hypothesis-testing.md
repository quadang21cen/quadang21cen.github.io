---
sidebar_position: 4
---
# Chương 9: Kiểm định giả thuyết (Hypothesis Testing)

Chào mừng các bạn đến với chương cuối cùng của Phần II, và cũng là một trong những chủ đề quan trọng, được ứng dụng rộng rãi nhất trong thống kê: **Kiểm định giả thuyết (`Hypothesis Testing`)**. Nếu như ước lượng điểm là để "đoán" một giá trị, ước lượng khoảng là để "khoanh vùng" một giá trị, thì kiểm định giả thuyết là để **đưa ra quyết định** giữa hai tuyên bố đối nghịch nhau về thế giới, dựa trên bằng chứng từ dữ liệu.

---

### **Khái niệm 1: Khung kiểm định Giả thuyết (`Hypothesis Testing Framework`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong khoa học và kinh doanh, chúng ta thường xuyên phải đối mặt với các câu hỏi có/không: Một loại thuốc mới có hiệu quả hơn thuốc cũ không? Một chiến dịch quảng cáo mới có làm tăng doanh số không? Một thay đổi trong giao diện website có làm tăng tỷ lệ chuyển đổi không? Chúng ta không thể chỉ nhìn vào con số trung bình trong mẫu và kết luận, vì sự khác biệt đó có thể chỉ là do ngẫu nhiên. Chúng ta cần một quy trình chặt chẽ để quyết định xem liệu bằng chứng có đủ mạnh để bác bỏ "tình trạng mặc định" và chấp nhận một tuyên bố mới hay không.

#### 2. Khái niệm, Cách hiểu đơn giản:
Kiểm định giả thuyết giống như một phiên tòa xét xử:
* **Giả thuyết không ($H_0$) - `Null Hypothesis`**: Đây là "tình trạng mặc định", tuyên bố không có gì xảy ra, không có sự khác biệt, không có hiệu ứng. Bị cáo được xem là **vô tội** (`innocent`).
* **Giả thuyết đối ($H_a$ hoặc $H_1$) - `Alternative Hypothesis`**: Đây là tuyên bố mà nhà nghiên cứu muốn chứng minh, rằng có một hiệu ứng, có sự khác biệt. Bị cáo bị cho là **có tội** (`guilty`).
* **Dữ liệu mẫu**: Đây là **bằng chứng** được trình ra trước tòa.
* **Quy tắc quyết định**: Chúng ta cần một ngưỡng để quyết định khi nào bằng chứng là "đủ mạnh". Nguyên tắc cốt lõi là: **Chúng ta bắt đầu bằng việc giả định $H_0$ là đúng (bị cáo vô tội). Chúng ta chỉ bác bỏ $H_0$ (kết tội bị cáo) nếu bằng chứng (dữ liệu) cực kỳ khó xảy ra nếu $H_0$ thực sự đúng.**

#### 3. Định nghĩa toán học:
Một bài toán kiểm định giả thuyết bao gồm:
1.  **Giả thuyết không ($H_0$)**: Một phát biểu về tham số, thường có dạng $H_0: \theta = \theta_0$ hoặc $H_0: \theta \in \Theta_0$.
2.  **Giả thuyết đối ($H_a$)**: Một phát biểu đối nghịch, thường có dạng $H_a: \theta \ne \theta_0$, $H_a: \theta > \theta_0$, hoặc $H_a: \theta < \theta_0$.
3.  **Thống kê kiểm định (`Test Statistic`) $T(X_1, ..., X_n)$**: Một thống kê được tính từ mẫu.
4.  **Miền bác bỏ (`Rejection Region`) $R$**: Một tập hợp các giá trị của thống kê kiểm định. Nếu $T$ rơi vào $R$, chúng ta **bác bỏ $H_0$**. Nếu không, chúng ta **không bác bỏ $H_0$**.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Một công ty dược tuyên bố thuốc của họ có thời gian phát huy tác dụng trung bình là $\mu = 30$ phút ($H_0$). Một cơ quan quản lý nghi ngờ thời gian này lâu hơn, tức là $\mu > 30$ phút ($H_a$).
    * $H_0: \mu = 30$.
    * $H_a: \mu > 30$.
    * Họ lấy mẫu $n=25$ bệnh nhân và tính ra thời gian trung bình mẫu là $\bar{x} = 33$ phút.
    * Liệu 33 có đủ lớn hơn 30 một cách có ý nghĩa để bác bỏ tuyên bố của công ty không? Khung kiểm định sẽ giúp trả lời câu hỏi này.
* **Phản ví dụ**: Chúng ta **không bao giờ "chấp nhận" $H_0$**. Chúng ta chỉ có thể "không bác bỏ $H_0$". Điều này tương tự như tòa án tuyên "không đủ bằng chứng để kết tội" chứ không tuyên "bị cáo chắc chắn vô tội". Việc không tìm thấy bằng chứng về một hiệu ứng không có nghĩa là hiệu ứng đó không tồn tại.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy xem phân phối lấy mẫu của thống kê kiểm định *giả sử $H_0$ là đúng*. Miền bác bỏ là các vùng "đuôi" của phân phối này. Đây là những vùng chứa các giá trị cực đoan, khó có khả năng xảy ra. Nếu giá trị thống kê tính từ mẫu của chúng ta rơi vào một trong những vùng đuôi này, chúng ta sẽ cho rằng giả định ban đầu ($H_0$ đúng) có lẽ là sai.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Kiểm thử A/B (`A/B Testing`)** là một ứng dụng trực tiếp của kiểm định giả thuyết.
* $H_0$: Tỷ lệ chuyển đổi của phiên bản A (giao diện cũ) bằng tỷ lệ chuyển đổi của phiên bản B (giao diện mới).
* $H_a$: Tỷ lệ chuyển đổi của phiên bản B khác (hoặc cao hơn) phiên bản A.
Các công ty công nghệ chạy hàng ngàn kiểm thử A/B mỗi ngày để đưa ra quyết định dựa trên dữ liệu về việc có nên triển khai một tính năng mới hay không.

---

### **Khái niệm 2: Sai lầm Loại I, Loại II, và Năng lực (`Type I/II Errors`, `Power`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Vì quyết định của chúng ta dựa trên một mẫu ngẫu nhiên hữu hạn, chúng ta không bao giờ có thể chắc chắn 100%. Luôn có khả năng chúng ta đưa ra kết luận sai. Có những loại sai lầm nào, và làm thế nào để định lượng và kiểm soát chúng? Làm thế nào để đo lường khả năng của một kiểm định trong việc phát hiện ra một hiệu ứng thực sự tồn tại?

#### 2. Khái niệm, Cách hiểu đơn giản:
Trở lại với phiên tòa:
* **Sai lầm Loại I (`Type I Error`)**: Kết tội một người vô tội. Tức là, chúng ta **bác bỏ $H_0$ trong khi $H_0$ thực sự đúng**. Xác suất xảy ra sai lầm này được ký hiệu là $\alpha$ (còn gọi là **mức ý nghĩa - `significance level`**). Chúng ta thường cố định $\alpha$ ở một mức nhỏ (ví dụ: 0.05 hoặc 0.01).
* **Sai lầm Loại II (`Type II Error`)**: Tha bổng một kẻ có tội. Tức là, chúng ta **không bác bỏ $H_0$ trong khi $H_a$ thực sự đúng**. Xác suất xảy ra sai lầm này được ký hiệu là $\beta$.
* **Năng lực (`Power`)**: Là khả năng kết tội đúng một kẻ có tội. Nó là xác suất chúng ta **bác bỏ $H_0$ một cách chính xác khi $H_a$ đúng**. Năng lực = $1 - \beta$. Một kiểm định tốt là kiểm định có năng lực cao.

#### 3. Định nghĩa toán học:
* **Xác suất Sai lầm Loại I**: $\alpha = P(\text{Bác bỏ } H_0 | H_0 \text{ đúng})$.
* **Xác suất Sai lầm Loại II**: $\beta = P(\text{Không bác bỏ } H_0 | H_a \text{ đúng})$.
* **Năng lực của kiểm định**: $Power = 1 - \beta = P(\text{Bác bỏ } H_0 | H_a \text{ đúng})$.
Có một sự đánh đổi (`trade-off`) giữa $\alpha$ và $\beta$: giảm sai lầm loại này thường sẽ làm tăng sai lầm loại kia.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Y tế)**:
    * $H_0$: Bệnh nhân không bị ung thư.
    * $H_a$: Bệnh nhân bị ung thư.
    * **Sai lầm Loại I**: Chẩn đoán một người khỏe mạnh là bị ung thư (dương tính giả). Hậu quả: lo lắng, điều trị không cần thiết.
    * **Sai lầm Loại II**: Chẩn đoán một người bị ung thư là khỏe mạnh (âm tính giả). Hậu quả: bệnh không được điều trị, có thể gây tử vong.
    * Trong trường hợp này, hậu quả của Sai lầm Loại II nghiêm trọng hơn nhiều.
* **Phản ví dụ**: Tăng kích thước mẫu ($n$) là cách duy nhất để giảm cả hai loại sai lầm cùng một lúc, do đó làm tăng năng lực của kiểm định.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy vẽ hai phân phối của thống kê kiểm định: một cái giả sử $H_0$ đúng, và một cái giả sử một giá trị cụ thể trong $H_a$ là đúng.
* $\alpha$ là diện tích của miền bác bỏ dưới đường cong của $H_0$.
* $\beta$ là diện tích của miền "không bác bỏ" dưới đường cong của $H_a$.
* Năng lực là diện tích của miền bác bỏ dưới đường cong của $H_a$.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Các khái niệm này tương ứng trực tiếp với các chỉ số đánh giá mô hình phân loại nhị phân:
* $H_0$: Mẫu thuộc lớp Âm tính.
* $H_a$: Mẫu thuộc lớp Dương tính.
* **Sai lầm Loại I**: Dự đoán Dương tính trong khi thực tế là Âm tính (**`False Positive`**). Tỷ lệ này tương ứng với **`False Positive Rate`**.
* **Sai lầm Loại II**: Dự đoán Âm tính trong khi thực tế là Dương tính (**`False Negative`**).
* **Năng lực**: Khả năng dự đoán đúng một mẫu Dương tính. Đây chính là **Độ nhạy (`Sensitivity`)** hay **Tỷ lệ Dương tính thật (`True Positive Rate - TPR`)**.

---

### **Khái niệm 3: Giá trị p (`p-value`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Khung kiểm định cổ điển (bác bỏ/không bác bỏ) có vẻ hơi cứng nhắc. Nó chỉ cho ta một câu trả lời có/không. Liệu có cách nào để định lượng mức độ "gây ngạc nhiên" của dữ liệu, hay mức độ bằng chứng chống lại $H_0$ là mạnh đến đâu không? Thay vì chỉ nói "bằng chứng đủ mạnh", chúng ta muốn một con số để nói "bằng chứng *mạnh như thế nào*".

#### 2. Khái niệm, Cách hiểu đơn giản:
**Giá trị p (`p-value`)** là xác suất, *giả sử giả thuyết không $H_0$ là đúng*, quan sát được một kết quả trong mẫu ít nhất cũng **cực đoan** hoặc **gây ngạc nhiên** như kết quả mà chúng ta đã thực sự quan sát được.
Nói một cách đơn giản: **Nếu $H_0$ là sự thật, khả năng ta gặp phải dữ liệu "lạ" như thế này (hoặc lạ hơn) là bao nhiêu?**
* **p-value nhỏ**: Dữ liệu của chúng ta rất khó xảy ra nếu $H_0$ đúng. Điều này cung cấp bằng chứng mạnh mẽ chống lại $H_0$.
* **p-value lớn**: Dữ liệu của chúng ta hoàn toàn phù hợp với những gì mong đợi nếu $H_0$ đúng. Đây là bằng chứng yếu chống lại $H_0$.
Quy tắc quyết định thông thường: Nếu **p-value < $\alpha$**, chúng ta bác bỏ $H_0$.

#### 3. Định nghĩa toán học:
Giá trị p là xác suất nhỏ nhất mà tại đó chúng ta sẽ bác bỏ $H_0$ với dữ liệu quan sát được. Nếu $t_{obs}$ là giá trị quan sát được của thống kê kiểm định $T$, thì:
* Cho $H_a: \theta > \theta_0$, p-value = $P(T \ge t_{obs} | H_0)$.
* Cho $H_a: \theta < \theta_0$, p-value = $P(T \le t_{obs} | H_0)$.
* Cho $H_a: \theta \ne \theta_0$, p-value = $2 \times P(T \ge |t_{obs}| | H_0)$ (cho các phân phối đối xứng).

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Trong ví dụ về thuốc, giả sử chúng ta tính được giá trị p là 0.03.
    * Diễn giải: "Nếu thời gian tác dụng trung bình thực sự là 30 phút ($H_0$ đúng), thì xác suất để lấy một mẫu ngẫu nhiên 25 người và thấy thời gian trung bình ít nhất là 33 phút (hoặc cực đoan hơn) chỉ là 3%."
    * Vì 0.03 < 0.05 (mức $\alpha$ thông thường), chúng ta bác bỏ $H_0$ và kết luận rằng có bằng chứng thống kê cho thấy thời gian tác dụng trung bình thực sự lớn hơn 30 phút.
* **Phản ví dụ (về cách diễn giải)**:
    * **SAI**: "p-value = 0.03 có nghĩa là xác suất $H_0$ đúng là 3%". p-value được tính DỰA TRÊN GIẢ ĐỊNH $H_0$ ĐÚNG, nó không thể là xác suất của chính giả định đó.
    * **SAI**: "p-value = 0.03 có nghĩa là xác suất $H_a$ đúng là 97%".

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Trên đồ thị phân phối của thống kê kiểm định (giả sử $H_0$ đúng), p-value chính là **diện tích của vùng đuôi tính từ giá trị thống kê quan sát được trở đi**. Nếu giá trị quan sát được càng xa trung tâm, thì diện tích vùng đuôi (p-value) càng nhỏ.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Khi so sánh hiệu suất của hai mô hình (Mô hình A và Mô hình B), chúng ta thường thực hiện kiểm định giả thuyết (ví dụ: kiểm định t-test ghép cặp trên các chỉ số `accuracy` thu được từ các fold của cross-validation).
* $H_0$: Hiệu suất trung bình của mô hình A bằng hiệu suất trung bình của mô hình B.
* $H_a$: Hiệu suất trung bình của mô hình A khác/tốt hơn mô hình B.
Báo cáo một p-value nhỏ (ví dụ: $p < 0.01$) cho phép chúng ta kết luận một cách có ý nghĩa thống kê rằng sự cải thiện hiệu suất của mô hình này so với mô hình kia không phải là do may mắn ngẫu nhiên.