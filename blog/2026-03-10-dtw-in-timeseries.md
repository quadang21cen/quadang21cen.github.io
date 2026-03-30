---
slug: dtw-in-timeseries
title: DTW in Time Series
description: Dynamic Time Warping in Time Series
authors: [quachdang]
tags: [computer-science]
image: /img/baner.png
---

DTW không chỉ đơn thuần là một thuật toán; đó là lời giải cho bài toán về sự không hoàn hảo của thế giới thực. Thay vì ép buộc dữ liệu phải khớp vào những khung thời gian cứng nhắc, DTW "bẻ cong" không gian để tìm thấy sự đồng điệu trong những tín hiệu tưởng chừng lạc quẻ. Từ những nhịp tim bất ổn trên bản đồ điện tâm đồ đến những biến động khó lường của thị trường tài chính, DTW vẫn đứng vững như một cầu nối giữa toán học cổ điển và sức mạnh của AI hiện đại. Hiểu về DTW là hiểu cách máy tính bắt đầu học cách "cảm nhận" hình thái thay vì chỉ đếm những con số vô hồn.
<!-- truncate -->

<!-- ### Bẻ Cong Thời Gian: Vượt Qua Sự Cứng Nhắc Của Khoảng Cách Euclidean Trong Dữ Liệu Chuỗi (Time Series) -->






#### 1. Dẫn nhập: "Nỗi Đau" Của Sự Đồng Bộ

Hãy tưởng tượng bạn đang xây dựng một hệ thống nhận dạng giọng nói. Bạn ghi âm từ "Hello" làm mẫu. Hôm sau, một người dùng khác cũng nói "Hello", nhưng họ kéo dài âm "o" ở cuối.

Nếu bạn dùng các phương pháp đo khoảng cách tuyến tính truyền thống, tiêu biểu là khoảng cách Euclidean, hệ thống của bạn sẽ sụp đổ. Tại sao? Vì Euclidean ép buộc việc so sánh theo nguyên tắc "điểm nối điểm" (point-to-point) một cách vô hồn: thời điểm $t=1$ của chuỗi A phải so sánh chính xác với $t=1$ của chuỗi B. Khi hai chuỗi lệch pha (out of phase) hoặc có tốc độ khác nhau, khoảng cách Euclidean sẽ cho ra một con số khổng lồ, kết luận sai lệch rằng hai tín hiệu này hoàn toàn khác nhau.

Đó từng là cơn ác mộng trong phân tích chuỗi thời gian: Dữ liệu thực tế hiếm khi nào đồng bộ hoàn hảo. Nó bị nén, bị giãn và lệch nhịp. Chúng ta cần một cách đo lường độ tương đồng dựa trên **hình thái** (shape) thay vì **thời gian tuyệt đối**.

#### 2. Cơ Chế Hoạt Động: Toán Học Của Sự "Bẻ Cong" (Warping)

DTW giải quyết bài toán này bằng cách tìm ra một "đường đi tối ưu" (optimal path) để căn chỉnh hai chuỗi thời gian sao cho tổng khoảng cách giữa chúng là nhỏ nhất. Nó cho phép một điểm ở chuỗi này có thể khớp với nhiều điểm ở chuỗi kia (one-to-many matching).

Về mặt thuật toán, DTW là một ứng dụng tuyệt đẹp của **Quy hoạch động (Dynamic Programming)**.

Giả sử ta có hai chuỗi thời gian: $X = (x_1, x_2, \dots, x_N)$ và $Y = (y_1, y_2, \dots, y_M)$.

**Bước 1: Ma trận chi phí cục bộ (Local Cost Matrix)**
Ta tính toán chi phí (khoảng cách) giữa mọi cặp điểm $(x_i, y_j)$, thường sử dụng khoảng cách tuyệt đối hoặc bình phương: $c(x_i, y_j) = |x_i - y_j|$.

**Bước 2: Ma trận chi phí tích lũy (Accumulated Cost Matrix)**
Đây là nơi phép màu của quy hoạch động xuất hiện. Ta xây dựng ma trận $D$ kích thước $N \times M$, trong đó mỗi ô $D(i, j)$ lưu trữ chi phí tích lũy tối thiểu để đi từ điểm bắt đầu $(1,1)$ đến ô $(i,j)$.

Công thức truy hồi được định nghĩa như sau:

$$D(i, j) = c(x_i, y_j) + \min \begin{cases} D(i-1, j) & \text{(Thêm/Chèn)} \\ D(i, j-1) & \text{(Xóa/Bỏ qua)} \\ D(i-1, j-1) & \text{(Khớp chính xác)} \end{cases}$$

Để đảm bảo đường đi căn chỉnh có ý nghĩa thực tế, DTW bị ràng buộc bởi ba quy tắc khắt khe:

* **Boundary conditions (Điều kiện biên):** Đường đi phải bắt đầu từ $(1,1)$ và kết thúc ở $(N,M)$. Mọi thứ phải được xem xét từ đầu đến cuối.
* **Monotonicity (Tính đơn điệu):** Đường đi không được lùi lại trong thời gian. Nghĩa là $i$ và $j$ chỉ có thể giữ nguyên hoặc tăng lên.
* **Step size (Kích thước bước):** Giới hạn các bước di chuyển (như công thức trên chỉ cho phép đi lên, sang phải, hoặc đi chéo) để tránh việc bỏ qua (skip) quá nhiều dữ liệu.

Khoảng cách DTW cuối cùng chính là giá trị tại $D(N, M)$.

#### 3. Tại Sao DTW Lại Là Một Bước Ngoặt?

Sự ra đời của DTW đã thay đổi hoàn toàn tư duy xử lý tín hiệu thời gian.

* **Tính linh hoạt tuyệt đối:** Nó xử lý được các chuỗi có độ dài khác nhau ($N \neq M$), điều mà Euclidean bất lực (trừ khi bạn dùng các thủ thuật padding/truncating gượng ép).
* **Nắm bắt bản chất hình thái:** DTW cực kỳ mạnh mẽ trong việc nhận diện mẫu (pattern recognition). Dù mẫu hình cái cốc và tay cầm trong chứng khoán diễn ra trong 1 tháng hay 3 tháng, DTW vẫn nhận ra sự tương đồng về mặt hình thái học. Nó là cốt lõi của các hệ thống nhận dạng cử chỉ, phân tích điện tâm đồ (ECG) và thị giác máy tính giai đoạn đầu.

#### 4. Lời Khuyên Từ "Phòng Thí Nghiệm"

Lý thuyết thì rực rỡ, nhưng khi đem DTW vào triển khai thực tế (Production), bạn sẽ vấp phải một bức tường lớn: **Độ phức tạp tính toán**.

* **Vấn đề $O(N^2)$:** Tính toán ma trận cho hai chuỗi độ dài $N$ tốn $O(N^2)$ cả về thời gian lẫn bộ nhớ không gian. Nếu bạn so sánh hàng triệu chuỗi trong một hệ thống Real-time, server của bạn sẽ bốc cháy.
* **Bí kíp 1: Sử dụng Ràng buộc toàn cục (Global Constraints):** Đừng bao giờ chạy DTW mở hoàn toàn trên dữ liệu lớn. Hãy áp dụng *Sakoe-Chiba Band* hoặc *Itakura Parallelogram*. Chúng giới hạn đường đi tối ưu không được lệch quá xa so với đường chéo chính, giảm đột ngột không gian tìm kiếm và tăng tốc đáng kể.
* **Bí kíp 2: Pruning với LB_Keogh:** Nếu bạn dùng DTW trong thuật toán K-Nearest Neighbors (KNN), hãy luôn dùng hàm chặn dưới (Lower Bounding) như LB_Keogh. Nó tính toán siêu nhanh một "khoảng cách tối thiểu có thể". Nếu khoảng cách tối thiểu này đã lớn hơn ngưỡng cho phép, ta loại ngay chuỗi đó mà không cần tính toán DTW đắt đỏ.
* **Bí kíp 3:** Cân nhắc các biến thể xấp xỉ như **FastDTW** nếu độ chính xác tuyệt đối không phải là ưu tiên số một, nhưng bộ nhớ lại eo hẹp.

#### 5. Kết Luận: Tương Lai Của Một Thuật Toán Cổ Điển

Nhiều sinh viên hay hỏi tôi: *"Thưa giáo sư, với sự thống trị của Transformers và LSTMs, DTW có còn đất sống không?"*

Câu trả lời là: **Chắc chắn có.** DTW không chết đi, nó chỉ tiến hóa.

Gần đây nhất, giới học thuật đã phát triển **Soft-DTW**, biến đổi các hàm `min` cứng nhắc của DTW thành một phiên bản có thể vi phân (differentiable). Điều này cho phép chúng ta nhúng trực tiếp Soft-DTW vào làm một hàm Loss (Loss function) cực kỳ lợi hại trong các mạng Neural Networks (như PyTorch/TensorFlow), ép mô hình học cách dự đoán các chuỗi thời gian có tính chất dịch chuyển (time-shift) tốt hơn nhiều so với việc dùng MSE (Mean Squared Error). Cổ điển và hiện đại đã hòa quyện.

---

Nếu bạn muốn nắm bắt thuật toán này một cách trọn vẹn, không gì bằng việc tự tay nhúng chàm vào code. Bạn có muốn tôi viết một đoạn mã Python tối ưu hóa để so sánh trực quan giữa DTW có giới hạn Sakoe-Chiba và DTW truyền thống không?