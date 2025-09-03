---
sidebar_position: 1
---

# Chương 6: Nguyên tắc Suy luận Thống kê (Statistical Inference)

Chào mừng các bạn đã đến với Phần II của khóa học. Chúng ta sắp thực hiện một bước ngoặt quan trọng: chuyển từ thế giới trừu tượng của **Lý thuyết Xác suất** sang nghệ thuật và khoa học của **Thống kê Suy luận**. Nếu xác suất đi từ mô hình đã biết để dự đoán dữ liệu, thì thống kê làm điều ngược lại: đi từ dữ liệu quan sát được để suy luận về mô hình ẩn giấu đằng sau nó. Chương 6 sẽ trang bị cho chúng ta bộ từ vựng và các khái niệm nền tảng cho hành trình này.

---

### **Khái niệm 1: Tổng thể, Mẫu, Tham số, và Thống kê (`Population`, `Sample`, `Parameter`, `Statistic`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong thực tế, chúng ta không bao giờ có thể khảo sát toàn bộ đối tượng mà chúng ta quan tâm (ví dụ: đo chiều cao của *tất cả* người trưởng thành ở Việt Nam, hay kiểm tra tuổi thọ của *tất cả* bóng đèn được sản xuất). Việc này là bất khả thi về thời gian và chi phí. Do đó, chúng ta cần một khung lý thuyết để có thể đưa ra những kết luận đáng tin cậy về "cái toàn thể" chỉ bằng cách xem xét "một phần nhỏ" của nó.

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Tổng thể (`Population`)**: Là toàn bộ nhóm đối tượng mà chúng ta muốn nghiên cứu. Đây là một khái niệm trừu tượng. Ví dụ: Toàn bộ cử tri Việt Nam.
* **Mẫu (`Sample`)**: Là một tập hợp con hữu hạn mà chúng ta thực sự quan sát và thu thập dữ liệu. Ví dụ: 1000 cử tri được chọn ngẫu nhiên để phỏng vấn.
* **Tham số (`Parameter`)**: Là một con số cố định nhưng **chưa biết** mô tả một đặc tính của **tổng thể**. Ví dụ: Tỷ lệ *thực sự* của cử tri ủng hộ ứng viên A. Chúng ta gần như không bao giờ biết giá trị chính xác của nó.
* **Thống kê (`Statistic`)**: Là một con số được **tính toán** từ **mẫu**. Nó không có gì bí ẩn cả. Ví dụ: Tỷ lệ cử tri ủng hộ ứng viên A trong 1000 người được phỏng vấn. Chúng ta dùng `statistic` để ước lượng `parameter`.

#### 3. Định nghĩa toán học:
* **Tổng thể** có thể được mô tả bởi một phân phối xác suất $f(x | \theta)$, trong đó $\theta$ là một **tham số** (hoặc một vector tham số) chưa biết.
* Một **mẫu** ngẫu nhiên kích thước $n$ là một tập hợp các biến ngẫu nhiên $X_1, X_2, ..., X_n$ độc lập và cùng phân phối (`i.i.d.`) theo $f(x | \theta)$.
* Một **thống kê** là một hàm bất kỳ của mẫu $T(X_1, ..., X_n)$ mà không phụ thuộc vào tham số chưa biết $\theta$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**:
    * **Tổng thể**: Tuổi thọ của tất cả bóng đèn LED do một nhà máy sản xuất, tuân theo phân phối mũ với tham số (chưa biết) $\lambda$.
    * **Tham số**: $\lambda$ (tốc độ hỏng hóc trung bình).
    * **Mẫu**: $n=100$ bóng đèn được lấy ra để kiểm tra, cho ra các tuổi thọ $x_1, x_2, ..., x_{100}$.
    * **Thống kê**: Trung bình mẫu $\bar{X} = \frac{1}{100}\sum_{i=1}^{100} X_i$. Đây là một thống kê, và chúng ta có thể dùng nó để ước lượng $1/\lambda$.
* **Phản ví dụ**: Hàm $T(X_1, ..., X_n) = \bar{X} - 1/\lambda$ **không phải** là một thống kê, vì nó phụ thuộc vào tham số chưa biết $\lambda$. Một thống kê phải là thứ có thể tính được chỉ từ dữ liệu trong tay.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy tưởng tượng **tổng thể** là một bức tranh khổng lồ bị che đi. **Tham số** là một đặc tính của bức tranh đó (ví dụ: màu sắc chủ đạo). **Mẫu** là việc chúng ta được phép nhìn vào một vài ô pixel nhỏ trên bức tranh. **Thống kê** là màu sắc trung bình của những pixel mà chúng ta thấy. Nhiệm vụ của thống kê suy luận là từ màu sắc của vài pixel đó, đoán ra màu sắc chủ đạo của cả bức tranh.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Toàn bộ quá trình huấn luyện một mô hình học máy là một bài toán suy luận thống kê.
* **Tổng thể**: Phân phối xác suất của tất cả các cặp (đầu vào, đầu ra) có thể có trong thực tế.
* **Tham số**: Các trọng số (`weights`) và độ chệch (`biases`) của mạng nơ-ron. Đây là những giá trị "thực" tối ưu mà chúng ta muốn tìm.
* **Mẫu**: Tập dữ liệu huấn luyện (`training data`) mà chúng ta có.
* **Thống kê**: Các giá trị trọng số và độ chệch mà mô hình học được sau khi huấn luyện trên tập dữ liệu. Chúng ta hy vọng các thống kê này sẽ gần với các tham số tối ưu.

---

### **Khái niệm 2: Phân phối lấy mẫu (`Sampling Distribution`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta sử dụng một thống kê (ví dụ: trung bình mẫu $\bar{X}$) để ước lượng một tham số (ví dụ: trung bình tổng thể $\mu$). Nhưng nếu chúng ta lấy một mẫu khác, chúng ta sẽ tính ra một giá trị $\bar{X}$ khác. Nếu lấy mẫu lần nữa, lại ra một giá trị khác nữa. Rõ ràng, bản thân **thống kê cũng là một biến ngẫu nhiên**! Để đánh giá độ tin cậy của ước lượng, chúng ta cần biết nó biến động như thế nào. Phân phối xác suất của một thống kê là gì?

#### 2. Khái niệm, Cách hiểu đơn giản:
**Phân phối lấy mẫu** là phân phối xác suất của một thống kê, được tạo ra bằng cách tưởng tượng việc lấy *tất cả các mẫu có thể có* cùng kích thước từ tổng thể, tính toán thống kê cho mỗi mẫu, và sau đó vẽ biểu đồ phân bố của tất cả các kết quả đó. Ví dụ, phân phối lấy mẫu của trung bình mẫu là "phân phối của tất cả các trung bình mẫu có thể có".

#### 3. Định nghĩa toán học:
Nếu $X_1, ..., X_n$ là một mẫu ngẫu nhiên và $T = T(X_1, ..., X_n)$ là một thống kê, thì **phân phối lấy mẫu** của $T$ chính là phân phối xác suất của biến ngẫu nhiên $T$.
* Một kết quả quan trọng: Nếu $X_i \sim N(\mu, \sigma^2)$, thì phân phối lấy mẫu của trung bình mẫu $\bar{X}$ cũng là một phân phối chuẩn: $\bar{X} \sim N(\mu, \sigma^2/n)$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Giả sử tổng thể chỉ gồm 3 số $\{1, 2, 6\}$ (có trung bình $\mu = 3$). Ta lấy các mẫu ngẫu nhiên có lặp lại, kích thước $n=2$.
    * Tất cả các mẫu có thể: (1,1), (1,2), (1,6), (2,1), (2,2), (2,6), (6,1), (6,2), (6,6).
    * Các trung bình mẫu tương ứng: 1, 1.5, 3.5, 1.5, 2, 4, 3.5, 4, 6.
    * **Phân phối lấy mẫu của $\bar{X}$** là: $P(\bar{X}=1)=1/9, P(\bar{X}=1.5)=2/9, P(\bar{X}=2)=1/9, ...$
* **Phản ví dụ**: Đừng nhầm lẫn phân phối lấy mẫu với phân phối của tổng thể. Phân phối của tổng thể trong ví dụ trên là đều trên $\{1, 2, 6\}$. Phân phối lấy mẫu của $\bar{X}$ thì không đều và có hình dạng khác hẳn. Một đặc điểm quan trọng là phương sai của phân phối lấy mẫu của $\bar{X}$ (là $Var(\bar{X}) = \sigma^2/n$) thường nhỏ hơn nhiều so với phương sai của tổng thể ($\sigma^2$).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phân phối lấy mẫu cho thấy mức độ biến động của ước lượng của chúng ta. Một phân phối lấy mẫu hẹp và tập trung cao độ quanh tham số thật cho thấy rằng thống kê đó là một ước lượng đáng tin cậy. Định lý Giới hạn Trung tâm (CLT) chính là một phát biểu về hình dạng của phân phối lấy mẫu của trung bình mẫu khi $n$ lớn: nó luôn có hình chuông (phân phối chuẩn). 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Kỹ thuật **Bootstrap** là một phương pháp mạnh mẽ để ước tính phân phối lấy mẫu của một thống kê một cách thực nghiệm, đặc biệt khi việc tính toán lý thuyết là quá khó. Ý tưởng là xử lý mẫu dữ liệu hiện có như thể nó là tổng thể. Sau đó, ta "lấy mẫu lại" (`resample`) có lặp lại nhiều lần từ mẫu ban đầu để tạo ra hàng ngàn "mẫu bootstrap". Bằng cách tính thống kê trên mỗi mẫu bootstrap này, ta có thể xây dựng một biểu đồ phân bố thực nghiệm, và đó chính là ước tính của phân phối lấy mẫu. Kỹ thuật này được dùng để tính khoảng tin cậy cho các chỉ số phức tạp của mô hình.