---
sidebar_position: 2
---
# Chương 8: Ước lượng khoảng (Interval Estimation)

Chào mừng các bạn đến với chương 8. Ở chương trước, chúng ta đã học cách đưa ra một "phỏng đoán tốt nhất" duy nhất cho một tham số, gọi là ước lượng điểm. Tuy nhiên, một ước lượng điểm, dù tốt đến đâu, gần như chắc chắn sẽ không bao giờ bằng chính xác giá trị thật. Nó không cho chúng ta biết gì về mức độ không chắc chắn của phỏng đoán. Chương này sẽ giải quyết vấn đề đó bằng cách xây dựng một khoảng giá trị, thay vì một con số duy nhất, đi kèm với một thước đo độ tin cậy.

---

### **Khái niệm 1: Khoảng tin cậy (`Confidence Interval`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Báo cáo rằng "tỷ lệ cử tri ủng hộ ứng viên A là 52%" là chưa đủ. Con số này có đáng tin cậy không? Nó có thể dễ dàng là 51% hoặc 53% không? Hay thậm chí là 49%? Ước lượng điểm thiếu đi một thước đo về "sai số" hay "độ không chắc chắn". Chúng ta cần một phương pháp để thể hiện kết quả dưới dạng một khoảng, ví dụ như "chúng tôi tin 95% rằng tỷ lệ thực sự nằm trong khoảng từ 49% đến 55%", điều này cung cấp nhiều thông tin hơn hẳn.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **khoảng tin cậy** là một khoảng giá trị được tính toán từ dữ liệu mẫu. Nó có một thuộc tính quan trọng: nếu chúng ta lặp đi lặp lại quy trình lấy mẫu và xây dựng khoảng tin cậy rất nhiều lần, thì một tỷ lệ phần trăm nhất định (ví dụ: 95%) của các khoảng tin cậy đó sẽ chứa giá trị tham số thật.

**Cách diễn giải cốt lõi (và thường bị hiểu sai)**: Độ tin cậy **95%** không phải là xác suất để tham số thật (một hằng số) rơi vào cái khoảng cụ thể mà bạn đã tính. Thay vào đó, nó là thước đo độ tin cậy của **quy trình** tạo ra khoảng đó. Nó giống như bạn có một chiếc máy sản xuất vòng. 95% các chiếc vòng do máy tạo ra sẽ tròng vừa vào một cái cọc (tham số thật). Khi bạn cầm một chiếc vòng cụ thể, bạn không biết nó có tròng vừa hay không, nhưng bạn có độ tin cậy 95% vào cái máy đã tạo ra nó.

#### 3. Định nghĩa toán học:
Một **khoảng tin cậy $100(1-\alpha)\%$** cho một tham số $\theta$ là một cặp thống kê $(L(X_1,..,X_n), U(X_1,..,X_n))$ sao cho:
$P_{\theta}(L(X_1,..,X_n) \le \theta \le U(X_1,..,X_n)) = 1 - \alpha$, với mọi giá trị có thể của $\theta$.
Ở đây, $L$ và $U$ là các biến ngẫu nhiên vì chúng phụ thuộc vào mẫu. $\theta$ là một hằng số. $\alpha$ được gọi là mức ý nghĩa (`significance level`), thường là $0.05$ (cho độ tin cậy 95%).

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Xây dựng khoảng tin cậy 95% cho trung bình $\mu$ của một tổng thể phân phối chuẩn với $\sigma$ đã biết.
    * Theo CLT, $\bar{X} \sim N(\mu, \sigma^2/n)$.
    * Ta biết rằng $P(-1.96 \le \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \le 1.96) = 0.95$.
    * Biến đổi bất đẳng thức bên trong, ta được $P(\bar{X} - 1.96\frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + 1.96\frac{\sigma}{\sqrt{n}}) = 0.95$.
    * Vậy khoảng tin cậy 95% là $[\bar{X} - 1.96\frac{\sigma}{\sqrt{n}}, \bar{X} + 1.96\frac{\sigma}{\sqrt{n}}]$.
* **Phản ví dụ (về cách diễn giải)**: Giả sử sau khi lấy mẫu, ta tính được $\bar{x}=10$ và khoảng tin cậy 95% là $[8, 12]$.
    * **SAI**: "Xác suất để $\mu$ nằm trong khoảng $[8, 12]$ là 95%." $\mu$ là một hằng số, nó hoặc nằm trong khoảng này, hoặc không. Xác suất là 1 hoặc 0.
    * **ĐÚNG**: "Chúng tôi tin cậy 95% rằng quy trình được sử dụng để tạo ra khoảng $[8, 12]$ sẽ tạo ra một khoảng chứa $\mu$." Hoặc: "Nếu chúng ta lặp lại thí nghiệm này 100 lần, chúng ta kỳ vọng khoảng 95 trong số các khoảng tin cậy được tạo ra sẽ chứa giá trị $\mu$ thật."

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy tưởng tượng tham số thật $\theta$ là một đường thẳng ngang cố định. Mỗi khi bạn lấy một mẫu, bạn tính ra một khoảng tin cậy, tương ứng với một đoạn thẳng đứng. Định nghĩa khoảng tin cậy 95% có nghĩa là nếu bạn vẽ rất nhiều các đoạn thẳng đứng này, 95% trong số chúng sẽ cắt đường thẳng ngang $\theta$.


#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Khi đánh giá hiệu suất của một mô hình phân loại, chúng ta thường báo cáo một chỉ số duy nhất như độ chính xác (`accuracy`) là 92%. Đây là một ước lượng điểm. Một báo cáo tốt hơn nhiều là cung cấp một khoảng tin cậy, ví dụ: "Độ chính xác 95% CI: [90.5%, 93.5%]". Điều này cho người đọc biết về sự không chắc chắn của ước tính hiệu suất do sự ngẫu nhiên trong việc chọn tập dữ liệu kiểm tra. Các kỹ thuật như **bootstrap** thường được sử dụng để tính các khoảng tin cậy này cho các chỉ số phức tạp của mô hình.

---

### **Khái niệm 2: Đại lượng bản lề (`Pivotal Quantity`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Việc xây dựng khoảng tin cậy trong ví dụ trên ($Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$) diễn ra khá suôn sẻ. Điều gì đã làm cho nó hoạt động? Đó là vì chúng ta đã tìm thấy một "đại lượng" đặc biệt là hàm của cả dữ liệu và tham số, nhưng có một đặc tính kỳ diệu: **phân phối xác suất của nó hoàn toàn không phụ thuộc vào tham số mà chúng ta muốn ước lượng**. Việc tìm ra những đại lượng như vậy là chìa khóa để xây dựng các khoảng tin cậy một cách có hệ thống.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **đại lượng bản lề** (hay đại lượng chốt) là một "công thức thần kỳ". Nó là một hàm số chứa cả thống kê từ mẫu (ví dụ: $\bar{X}$) và tham số chưa biết (ví dụ: $\mu$), nhưng khi bạn vẽ biểu đồ phân phối của nó, hình dạng của biểu đồ sẽ giữ nguyên bất kể giá trị thật của tham số là gì. Nó giống như một chiếc chìa khóa vạn năng có thể mở được mọi ổ khóa (mọi giá trị của tham số) vì hình dạng của nó là phổ quát.

#### 3. Định nghĩa toán học:
Một đại lượng $Q(X_1, ..., X_n; \theta)$ là một đại lượng bản lề (`pivotal quantity` hay `pivot`) cho tham số $\theta$ nếu phân phối xác suất của $Q$ không phụ thuộc vào $\theta$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (kinh điển)**: Lấy mẫu từ $N(\mu, \sigma^2)$ với $\sigma^2$ chưa biết.
    * Đại lượng $Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ **không phải** là đại lượng bản lề vì phân phối của nó phụ thuộc vào $\sigma$.
    * Tuy nhiên, đại lượng $T = \frac{\bar{X}-\mu}{S/\sqrt{n}}$ (với $S$ là độ lệch chuẩn mẫu) là một **đại lượng bản lề**. Phân phối của nó là **phân phối t-student với $n-1$ bậc tự do**, một phân phối hoàn toàn không có $\mu$ hay $\sigma$ trong định nghĩa của nó. Điều này cho phép chúng ta xây dựng khoảng tin cậy cho $\mu$ khi $\sigma$ chưa biết.
* **Phản ví dụ**: Đại lượng $\bar{X} - \mu$ không phải là một đại lượng bản lề, vì phân phối của nó là $N(0, \sigma^2/n)$, vẫn phụ thuộc vào tham số chưa biết $\sigma^2$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đại lượng bản lề cho phép chúng ta "cô lập" tham số chưa biết. Vì phân phối của đại lượng bản lề là cố định, chúng ta có thể tìm các giá trị $a$ và $b$ sao cho $P(a \le Q(\text{dữ liệu}; \theta) \le b) = 1-\alpha$. Sau đó, ta có thể dùng đại số để biến đổi bất đẳng thức $a \le Q \le b$ thành dạng $L(\text{dữ liệu}) \le \theta \le U(\text{dữ liệu})$, và đó chính là khoảng tin cậy của chúng ta.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Mặc dù không được gọi trực tiếp bằng tên, ý tưởng về "bản lề" xuất hiện trong nhiều kỹ thuật. Ví dụ, trong **mạng nơ-ron Bayes**, thay vì học một bộ trọng số duy nhất, ta học một phân phối cho mỗi trọng số. Khi thực hiện suy luận, ta thường chuẩn hóa đầu ra hoặc các lớp trung gian. Việc này tương tự như tạo ra một đại lượng có phân phối ổn định hơn (ví dụ: chuẩn tắc), giúp cho việc huấn luyện và suy luận diễn ra hiệu quả hơn, độc lập với sự thay đổi tỷ lệ của dữ liệu đầu vào.