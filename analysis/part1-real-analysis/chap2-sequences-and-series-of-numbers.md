---
sidebar_position: 2
---
# Chương 2: Dãy và Chuỗi số (Sequences and Series of Numbers)

Sau khi xây dựng xong hệ thống số thực với tính chất đầy đủ, giờ là lúc chúng ta làm cho nó "chuyển động". Chương này giới thiệu khái niệm cơ bản nhất về sự thay đổi và xấp xỉ trong giải tích: sự hội tụ của một danh sách số vô hạn (dãy) và ý nghĩa của việc cộng vô hạn các số lại với nhau (chuỗi).

***

### **Định nghĩa giới hạn của một dãy (limit of a sequence)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một dãy số là một danh sách vô hạn các số. Ta nói một dãy có "giới hạn" là $L$ nếu các số hạng của dãy ngày càng tiến sát đến $L$ khi ta đi xa hơn trong danh sách. Hãy tưởng tượng bạn đang đi về một bức tường, mỗi bước đi bằng một nửa khoảng cách còn lại. Bạn sẽ không bao giờ chạm tới bức tường, nhưng bạn sẽ tiến đến gần nó một cách vô hạn. Bức tường đó chính là giới hạn.

#### 2. Định nghĩa toán học:
Một dãy số $(x_n)$ được gọi là **hội tụ (converges)** đến một số thực $L \in \mathbb{R}$ nếu:
Với mọi $\epsilon > 0$, tồn tại một số tự nhiên $N \in \mathbb{N}$ sao cho với mọi $n \ge N$, ta có $|x_n - L| < \epsilon$.
Nếu điều này xảy ra, ta gọi $L$ là **giới hạn (limit)** của dãy và viết $\lim_{n \to \infty} x_n = L$ hoặc $x_n \to L$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Về mặt hình học, định nghĩa này có nghĩa là: bất kể bạn vẽ một "vùng lân cận" nhỏ bé nào quanh điểm $L$ (khoảng $(L - \epsilon, L + \epsilon)$), sẽ luôn tồn tại một thời điểm $N$ mà kể từ đó trở đi, **toàn bộ "đuôi" của dãy số** (tất cả các điểm $x_n$ với $n \ge N$) đều bị "nhốt" hoàn toàn bên trong vùng lân cận đó.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Đây là khái niệm cốt lõi của việc huấn luyện mô hình. Quá trình huấn luyện là một dãy các bước cập nhật trọng số. Dãy các giá trị của hàm mất mát (`loss function`) **phải hội tụ** về một giá trị nhỏ nhất (cực tiểu). Tương tự, dãy các `vector` trọng số của mô hình phải hội tụ đến một `vector` trọng số tối ưu. Nếu giới hạn không tồn tại, mô hình không học được.

***

### **Dãy con (subsequences) và định lý Bolzano-Weierstrass**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một dãy con là một dãy mới được tạo ra bằng cách "nhặt ra" một số phần tử từ dãy ban đầu, nhưng vẫn giữ nguyên thứ tự của chúng. Định lý Bolzano-Weierstrass nói một điều đáng kinh ngạc: nếu bạn có một dãy số vô hạn mà tất cả các số hạng của nó đều bị "nhốt" trong một khoảng hữu hạn (ví dụ, tất cả đều nằm giữa -1 và 1), thì bạn **luôn luôn** có thể nhặt ra được một dãy con hội tụ.

#### 2. Định nghĩa toán học:
Một **dãy con (subsequence)** của dãy $(x_n)$ là một dãy có dạng $(x_{n_k})$ trong đó $n_1 < n_2 < n_3 < \dots$ là một dãy tăng nghiêm ngặt các số tự nhiên.
**Định lý Bolzano-Weierstrass:** Mọi dãy số thực **bị chặn** đều có một dãy con hội tụ.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Nếu bạn có vô số điểm bị nhốt trong một đoạn thẳng $[a, b]$, các điểm này không thể "né tránh" nhau mãi mãi. Chúng buộc phải "tích tụ" hoặc "co cụm" lại quanh ít nhất một điểm nào đó bên trong đoạn thẳng đó. Điểm tích tụ đó chính là giới hạn của một dãy con nào đó. Đây là một biểu hiện sâu sắc của tính chất `compact` của các đoạn đóng và bị chặn trong $\mathbb{R}$.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Trong các chứng minh lý thuyết về sự ổn định của thuật toán học máy, định lý này rất hữu ích. Ví dụ, nếu ta có thể chứng minh rằng dãy các trọng số của mô hình được giữ bị chặn trong quá trình huấn luyện (ví dụ bằng kỹ thuật `regularization`), định lý Bolzano-Weierstrass đảm bảo rằng ít nhất tồn tại một "trạng thái" (một tập trọng số) mà mô hình có xu hướng hội tụ về, giúp phân tích sự ổn định của thuật toán.

***

### **Dãy Cauchy và tiêu chuẩn hội tụ Cauchy**

#### 1. Khái niệm, Cách hiểu đơn giản:
Định nghĩa giới hạn yêu cầu ta phải "biết trước" giới hạn $L$ là gì. Dãy Cauchy đưa ra một cách kiểm tra sự hội tụ mà không cần biết $L$. Một dãy là `Cauchy` nếu các số hạng của nó ngày càng "túm tụm" lại gần **nhau**. Càng đi xa trong dãy, khoảng cách giữa hai số hạng bất kỳ càng trở nên nhỏ bé không đáng kể. Tiêu chuẩn Cauchy khẳng định rằng trong $\mathbb{R}$, việc "túm tụm lại gần nhau" này tương đương với việc "tiến đến một giới hạn".

#### 2. Định nghĩa toán học:
Một dãy số $(x_n)$ được gọi là một **dãy Cauchy (Cauchy sequence)** nếu:
Với mọi $\epsilon > 0$, tồn tại một số tự nhiên $N \in \mathbb{N}$ sao cho với mọi $m, n \ge N$, ta có $|x_n - x_m| < \epsilon$.
**Tiêu chuẩn hội tụ Cauchy:** Một dãy số thực hội tụ **khi và chỉ khi** nó là một dãy Cauchy.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây chính là một cách phát biểu khác của **Tiên đề về sự đầy đủ (Completeness Axiom)**. Tiêu chuẩn Cauchy nói rằng trục số thực không có "lỗ hổng". Nếu các điểm đang cố gắng túm tụm lại với nhau, thì chắc chắn phải có một điểm thực sự tồn tại ở đó để chúng túm tụm quanh. Trong $\mathbb{Q}$, dãy các xấp xỉ của $\sqrt{2}$ là một dãy Cauchy, nhưng nó không hội tụ vì có một "lỗ hổng" tại $\sqrt{2}$.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Trong các hệ thống học máy phân tán (`federated learning`), các mô hình con được huấn luyện trên nhiều thiết bị khác nhau. Ta có thể không biết trước mô hình "tối ưu" cuối cùng trông như thế nào. Tuy nhiên, ta có thể kiểm tra sự hội tụ bằng cách xem xét dãy các mô hình (dưới dạng các `vector` trọng số). Nếu khoảng cách giữa các phiên bản mô hình ở các bước lặp sau này ngày càng nhỏ đi (tức là dãy các `vector` trọng số là một dãy Cauchy), ta có thể kết luận rằng quá trình huấn luyện đang hội tụ và có thể dừng lại.

***

### **Giới hạn trên (limsup) và giới hạn dưới (liminf)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đối với những dãy số không hội tụ mà dao động (ví dụ: $x_n = (-1)^n$), chúng không tiến đến một giới hạn duy nhất. Thay vào đó, chúng có thể có nhiều "điểm tụ". `limsup` (giới hạn trên) là giá trị **lớn nhất** trong số các điểm tụ đó (đỉnh cao nhất mà dãy cứ quay trở lại gần). `liminf` (giới hạn dưới) là giá trị **nhỏ nhất** trong số các điểm tụ đó (đáy sâu nhất mà dãy cứ quay trở lại gần).

#### 2. Định nghĩa toán học:
Cho dãy $(x_n)$, ta định nghĩa:
* $\limsup_{n \to \infty} x_n = \lim_{n \to \infty} (\sup_{k \ge n} x_k)$
* $\liminf_{n \to \infty} x_n = \lim_{n \to \infty} (\inf_{k \ge n} x_k)$
Một dãy số $(x_n)$ hội tụ đến $L$ khi và chỉ khi $\limsup x_n = \liminf x_n = L$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`limsup` và `liminf` mô tả hành vi "bao bọc" của dãy số trong dài hạn. Chúng tạo ra một "dải" mà cuối cùng toàn bộ đuôi của dãy sẽ bị kẹt bên trong. Khi dãy hội tụ, "dải" này co lại thành một điểm duy nhất.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Khi phân tích sự ổn định của quá trình huấn luyện, đặc biệt với các `learning rate` cao, giá trị `loss` có thể dao động. `limsup` của dãy `loss` cho ta biết "mức độ sai tồi nhất" trong dài hạn mà mô hình không thể thoát ra được, trong khi `liminf` cho biết "mức độ sai tốt nhất" có thể đạt được. Một khoảng cách lớn giữa `limsup` và `liminf` là dấu hiệu của sự bất ổn trong quá trình huấn luyện.

***

### **Chuỗi số (series) và các tiêu chuẩn hội tụ**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một chuỗi số là kết quả của việc cộng vô hạn các số hạng trong một dãy lại với nhau. Câu hỏi đặt ra là: liệu tổng vô hạn này sẽ tiến đến một con số hữu hạn (hội tụ) hay sẽ "nổ tung" ra vô cực (phân kỳ)? Các tiêu chuẩn hội tụ (so sánh, d'Alembert, Cauchy...) là những công cụ giúp chúng ta trả lời câu hỏi đó mà không cần phải thực sự tính tổng.

#### 2. Định nghĩa toán học:
Cho một dãy số $(a_n)$, **chuỗi số (series)** tương ứng là tổng hình thức $\sum_{n=1}^\infty a_n$. Dãy các **tổng riêng (partial sums)** được định nghĩa là $S_N = \sum_{n=1}^N a_n$.
Chuỗi số được gọi là **hội tụ** đến giá trị $S$ nếu dãy các tổng riêng $(S_N)$ hội tụ đến $S$, tức là $\lim_{N \to \infty} S_N = S$.
* **Tiêu chuẩn so sánh:** So sánh chuỗi với một chuỗi khác đã biết tính hội tụ.
* **Tiêu chuẩn d'Alembert (Ratio Test):** Xét giới hạn của tỉ số $|a_{n+1}/a_n|$.
* **Tiêu chuẩn Cauchy (Root Test):** Xét giới hạn của $\sqrt[n]{|a_n|}$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy tưởng tượng các tổng riêng $S_N$ là các điểm trên trục số. Chuỗi hội tụ nếu các điểm này ngày càng tiến sát đến một điểm giới hạn $S$. Các tiêu chuẩn hội tụ giúp ta biết được liệu các bước nhảy $a_n$ có nhỏ đi "đủ nhanh" để đảm bảo các điểm $S_N$ không đi ra vô tận hay không.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Chuỗi Taylor, dùng để xấp xỉ các hàm phức tạp bằng tổng vô hạn của các đa thức, là nền tảng của nhiều thuật toán. Ví dụ, việc xấp xỉ hàm `sigmoid` hoặc `softmax` trong các chứng minh lý thuyết đều dựa vào chuỗi lũy thừa. Trong các mô hình xác suất như `Bayesian inference`, các phân phối xác suất thường được biểu diễn dưới dạng các chuỗi hoặc tích phân, và việc kiểm tra sự hội tụ là tối quan trọng để đảm bảo mô hình có ý nghĩa.

***

### **Hội tụ tuyệt đối và hội tụ có điều kiện**

#### 1. Khái niệm, Cách hiểu đơn giản:
* **Hội tụ tuyệt đối:** Một chuỗi hội tụ "một cách mạnh mẽ". Nó hội tụ ngay cả khi bạn lấy giá trị tuyệt đối của tất cả các số hạng (tức là biến mọi số thành số dương) rồi cộng lại. Chuỗi này rất ổn định.
* **Hội tụ có điều kiện:** Một chuỗi hội tụ "một cách mong manh". Nó chỉ hội tụ nhờ vào sự triệt tiêu lẫn nhau một cách tinh tế giữa các số hạng dương và âm. Nếu bạn lấy giá trị tuyệt đối, chuỗi sẽ phân kỳ. Thứ tự các số hạng trong chuỗi này rất quan trọng.

#### 2. Định nghĩa toán học:
* Chuỗi $\sum a_n$ được gọi là **hội tụ tuyệt đối (converges absolutely)** nếu chuỗi các giá trị tuyệt đối $\sum |a_n|$ hội tụ.
* Chuỗi $\sum a_n$ được gọi là **hội tụ có điều kiện (converges conditionally)** nếu nó hội tụ, nhưng chuỗi $\sum |a_n|$ phân kỳ.
**Định lý quan trọng:** Nếu một chuỗi hội tụ tuyệt đối thì nó hội tụ.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hội tụ tuyệt đối giống như một vòng xoắn ốc ngày càng co lại và chắc chắn sẽ dừng tại một điểm. Hội tụ có điều kiện giống như việc đi tới đi lui các bước ngày càng nhỏ dần; bạn có thể đến được một điểm đích, nhưng tổng quãng đường bạn đã đi (tổng các giá trị tuyệt đối) là vô hạn.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Trong xử lý tín hiệu và chuỗi thời gian, ta thường phân tích tín hiệu thành tổng của các sóng sin và cos (chuỗi Fourier). Sự ổn định của việc tái tạo lại tín hiệu phụ thuộc vào kiểu hội tụ của chuỗi này. Các kỹ thuật `regularization` như L1 (`Lasso`) và L2 (`Ridge`) trong `machine learning` liên quan đến việc cộng tổng các giá trị tuyệt đối (L1) hoặc bình phương (L2) của các trọng số. L1 `regularization` có mối liên hệ mật thiết với khái niệm hội tụ tuyệt đối và có khả năng "triệt tiêu" các trọng số không quan trọng về 0.