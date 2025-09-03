---
sidebar_position: 1
---
# Chương 1: Các Nguyên lý Cơ bản của Xác suất (Basic Principles of Probability)

### **Khái niệm 1: Không gian mẫu, σ-đại số, và Biến cố (`Sample space`, `σ-algebra`, `events`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trước khi tính xác suất của một thứ gì đó, chúng ta cần một khung toán học để mô tả chính xác *tất cả các khả năng có thể xảy ra* và *những câu hỏi chúng ta có thể hỏi* về chúng. Nếu tung một con xúc xắc, câu trả lời rất đơn giản. Nhưng nếu kết quả là một số thực bất kỳ từ 0 đến 1 thì sao? Làm thế nào để định nghĩa "tập hợp tất cả các kết quả" một cách chặt chẽ, kể cả trong các trường hợp vô hạn và phức tạp?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Không gian mẫu (`Sample space`) $\Omega$**: Là "vũ trụ" chứa tất cả các kết quả có thể có của một thí nghiệm. Ví dụ: tung xúc xắc thì $\Omega$ là $\{1, 2, 3, 4, 5, 6\}$.
* **Biến cố (`Event`)**: Là một "câu hỏi" về kết quả, tương ứng với một tập hợp con của $\Omega$. Ví dụ: biến cố "kết quả là số chẵn" tương ứng với tập hợp $\{2, 4, 6\}$.
* **σ-đại số (`σ-algebra`) $F$**: Là "bộ quy tắc" về những câu hỏi hợp lệ mà chúng ta có thể hỏi. Nó là một tập hợp các biến cố (tập con của $\Omega$) đảm bảo rằng nếu chúng ta có thể hỏi về các biến cố $A$ và $B$, chúng ta cũng có thể hỏi về "A hoặc B", "A và B", và "không phải A".

#### 3. Định nghĩa toán học:
Một không gian xác suất được định nghĩa bởi bộ ba $(\Omega, F, P)$. Trong đó:
* $\Omega$ là một tập hợp bất kỳ, được gọi là `sample space`.
* $F$ là một `σ-algebra` trên $\Omega$, tức là một tập hợp các tập con của $\Omega$ thỏa mãn:
    1.  $\Omega \in F$ (Toàn bộ vũ trụ là một biến cố hợp lệ).
    2.  Nếu $A \in F$ thì $A^c \in F$ (Nếu $A$ là biến cố thì "không A" cũng là biến cố).
    3.  Nếu $A_1, A_2, ... \in F$ thì $\cup_{i=1}^{\infty} A_i \in F$ (Hợp của một dãy đếm được các biến cố cũng là một biến cố).
* Cặp $(\Omega, F)$ được gọi là một không gian đo được (`measurable space`). Một tập con $A \subseteq \Omega$ được gọi là một biến cố nếu $A \in F$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Tung đồng xu 2 lần.
    * $\Omega = \{HH, HT, TH, TT\}$.
    * $F$ có thể là tập lũy thừa (power set) của $\Omega$, chứa tất cả 16 tập con.
    * Biến cố "có ít nhất một mặt ngửa" là $A = \{HT, TH, TT\}$.
* **Phản ví dụ**: Với $\Omega = \{a, b, c, d\}$, tập hợp $S = \{\emptyset, \{a, b\}, \{c, d\}\}$ **không phải** là một `σ-algebra`. Mặc dù nó chứa $\emptyset$ và các phần tử của nó là phần bù của nhau, nhưng nó không thỏa mãn tính chất hợp. Ví dụ, ta có thể hỏi về $\{a, b\}$, nhưng nếu ta lấy $\{a, b\} \cup \{c\}$ (giả sử $\{c\}$ là một biến cố) thì kết quả $\{a,b,c\}$ không nằm trong $S$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy hình dung `sample space` $\Omega$ như một tấm bản đồ hình chữ nhật. Mỗi điểm trên bản đồ là một kết quả khả dĩ. Một `event` là một vùng (một hình bất kỳ) trên tấm bản đồ đó. `σ-algebra` là bộ sưu tập tất cả các vùng mà chúng ta có thể đo được diện tích một cách hợp lý.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Trong **Học tăng cường (`Reinforcement Learning`)**, tập hợp tất cả các trạng thái (`states`) mà một `agent` có thể ở trong chính là một `sample space` $S$. Một chính sách (`policy`) $\pi$ sẽ ánh xạ từ không gian trạng thái này đến không gian các hành động (`actions`), một `sample space` khác. Việc định nghĩa rõ ràng các không gian này là bước đầu tiên để xây dựng bất kỳ thuật toán RL nào.

---

### **Khái niệm 2: Độ đo xác suất và Các tiên đề của Kolmogorov (`Probability Measure`, `Kolmogorov's Axioms`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Bây giờ chúng ta đã có một khung để mô tả các kết quả và biến cố. Câu hỏi tiếp theo là: Làm thế nào để gán một "giá trị" cho khả năng xảy ra của mỗi biến cố? Cần phải có những quy tắc nền tảng nào để đảm bảo rằng các giá trị xác suất chúng ta gán là nhất quán và có logic, tránh các nghịch lý?

#### 2. Khái niệm, Cách hiểu đơn giản:
Hãy tưởng tượng bạn có 1kg "khối lượng niềm tin" và bạn phải phân bổ nó trên toàn bộ `sample space` $\Omega$. Các tiên đề của Kolmogorov là 3 quy tắc phân bổ bắt buộc:
1.  **Không âm**: Bạn không thể gán khối lượng âm cho bất kỳ khu vực (biến cố) nào.
2.  **Chuẩn hóa**: Tổng khối lượng bạn phân bổ cho toàn bộ vũ trụ $\Omega$ phải chính xác là 1kg.
3.  **Cộng tính**: Nếu bạn có nhiều khu vực riêng biệt (không chồng chéo), tổng khối lượng của chúng khi gộp lại phải bằng tổng khối lượng của từng khu vực riêng lẻ.

#### 3. Định nghĩa toán học:
Cho một không gian đo được $(\Omega, F)$, một độ đo xác suất (`probability measure`) $P$ là một hàm $P: F \rightarrow [0, 1]$ thỏa mãn các tiên đề của Kolmogorov:
1.  $P(A) \ge 0$ với mọi biến cố $A \in F$.
2.  $P(\Omega) = 1$.
3.  Với bất kỳ dãy các biến cố đôi một rời nhau (disjoint) $A_1, A_2, ...$ (tức là $A_i \cap A_j = \emptyset$ với $i \ne j$), ta có $P(\cup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i)$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Tung một con xúc xắc cân bằng. $\Omega = \{1, 2, 3, 4, 5, 6\}$. Gán $P(\{i\}) = 1/6$ cho mỗi $i$. Biến cố $A = \{1, 2\}$ có $P(A) = P(\{1\}) + P(\{2\}) = 1/6 + 1/6 = 1/3$. Phép gán này thỏa mãn cả 3 tiên đề.
* **Phản ví dụ**: Vẫn với con xúc xắc, nếu ta gán $P(\{i\}) = 1/5$ cho mỗi $i$, điều này sẽ vi phạm Tiên đề 2, vì $P(\Omega) = \sum_{i=1}^6 P(\{i\}) = 6/5 \ne 1$. Hệ thống xác suất này không hợp lệ.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Nếu $\Omega$ là tấm bản đồ, thì $P$ là một hàm đo diện tích. Nó gán cho mỗi vùng (biến cố) một giá trị diện tích. Tiên đề 2 nói rằng tổng diện tích của cả tấm bản đồ là 1. Tiên đề 3 nói rằng diện tích của hai vùng không giao nhau khi gộp lại bằng tổng diện tích của từng vùng.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Trong một mạng nơ-ron cho bài toán phân loại (`classification`) nhiều lớp, lớp cuối cùng thường là một hàm **softmax**. Đầu ra của hàm softmax là một `vector` mà các phần tử của nó luôn không âm và có tổng bằng 1. `Vector` này có thể được diễn giải trực tiếp như một phân phối xác suất trên các lớp, và nó phải tuân thủ các tiên đề của Kolmogorov. Đây là nền tảng cho việc sử dụng hàm mất mát **cross-entropy**.

---

### **Khái niệm 3: Xác suất có điều kiện và Tính độc lập (`Conditional Probability`, `Independence`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Thông tin mới có thể thay đổi niềm tin của chúng ta về khả năng xảy ra của một sự kiện. Nếu tôi biết hôm nay trời có mây, xác suất trời mưa sẽ khác so với khi tôi không có thông tin đó. Chúng ta cần một công cụ toán học để cập nhật xác suất của một biến cố $A$ khi biết rằng một biến cố $B$ khác đã xảy ra. Và một câu hỏi quan trọng khác: Khi nào thì việc biết $B$ xảy ra hoàn toàn không ảnh hưởng đến xác suất của $A$?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **Xác suất có điều kiện ($P(A|B)$)**: Đọc là "xác suất của A, biết rằng B đã xảy ra". Hãy tưởng tượng toàn bộ `sample space` $\Omega$ bị thu nhỏ lại chỉ còn là biến cố $B$. Xác suất có điều kiện của $A$ chính là tỷ lệ của phần $A$ nằm trong $B$ so với toàn bộ $B$.
* **Tính độc lập**: Hai biến cố $A$ và $B$ là độc lập nếu việc biết $B$ xảy ra không cung cấp bất kỳ thông tin nào về $A$ (và ngược lại). Tức là, $P(A|B) = P(A)$.

#### 3. Định nghĩa toán học:
* Xác suất có điều kiện của $A$ cho trước $B$ được định nghĩa là $P(A|B) = \frac{P(A \cap B)}{P(B)}$, với điều kiện $P(B) > 0$.
* Hai biến cố $A$ và $B$ được gọi là độc lập (`independent`) nếu $P(A \cap B) = P(A)P(B)$. Nếu $P(A) > 0$ và $P(B) > 0$, điều này tương đương với $P(A|B) = P(A)$ và $P(B|A) = P(B)$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Rút một lá bài từ bộ bài 52 lá.
    * $A$: "Lá bài là Vua (King)". $P(A) = 4/52 = 1/13$.
    * $B$: "Lá bài là hình người (J, Q, K)". $P(B) = 12/52 = 3/13$.
    * $P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A)}{P(B)} = \frac{4/52}{12/52} = 1/3$. Khi biết lá bài là hình người, xác suất nó là Vua tăng lên.
* **Phản ví dụ (về tính độc lập)**:
    * $A$: "Lá bài là Vua".
    * $C$: "Lá bài là cơ (Heart)". $P(C) = 13/52 = 1/4$.
    * $A \cap C$: "Lá bài là Vua cơ". $P(A \cap C) = 1/52$.
    * Ta kiểm tra: $P(A)P(C) = (1/13)(1/4) = 1/52$. Vì $P(A \cap C) = P(A)P(C)$, nên biến cố "là Vua" và "là cơ" là độc lập.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Trở lại với bản đồ, $P(A|B)$ là "tỷ lệ diện tích" mà vùng $A$ chiếm trong vùng $B$. Hai vùng $A$ và $B$ là độc lập nếu tỷ lệ diện tích của $A$ trong $B$ bằng đúng tỷ lệ diện tích của $A$ trong toàn bộ bản đồ $\Omega$. Tức là, việc "zoom" vào vùng $B$ không làm thay đổi tỷ lệ tương đối của $A$.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Thuật toán phân loại **Naive Bayes** hoạt động dựa trên một giả định "ngây thơ" (naive) nhưng mạnh mẽ về tính độc lập có điều kiện. Nó giả định rằng tất cả các đặc trưng (`features`) $X_1, X_2, ..., X_n$ là độc lập với nhau khi biết lớp (`class`) $Y$. Tức là $P(X_1, ..., X_n | Y) = \prod_{i=1}^n P(X_i | Y)$. Giả định này giúp đơn giản hóa việc tính toán một cách đáng kể và hoạt động hiệu quả trong nhiều bài toán thực tế như lọc thư rác.

---

### **Khái niệm 4: Định lý Bayes (`Bayes' Theorem`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong thực tế, chúng ta thường dễ dàng tính toán $P(\text{bằng chứng} | \text{giả thuyết})$. Ví dụ, xác suất một chuông báo cháy kêu, biết rằng có cháy thật. Tuy nhiên, cái chúng ta thực sự quan tâm lại là điều ngược lại: $P(\text{giả thuyết} | \text{bằng chứng})$. Ví dụ, xác suất có cháy thật, biết rằng chuông báo cháy đang kêu. Làm thế nào để "đảo ngược" xác suất có điều kiện một cách toán học?

#### 2. Khái niệm, Cách hiểu đơn giản:
Định lý Bayes là một công thức để cập nhật niềm tin của bạn về một giả thuyết khi có bằng chứng mới. Nó kết hợp **niềm tin ban đầu** của bạn về giả thuyết (`prior`) với **khả năng của bằng chứng** theo giả thuyết đó (`likelihood`) để tạo ra một **niềm tin đã được cập nhật** (`posterior`).
Công thức: **Niềm tin mới = (Niềm tin cũ * Sức mạnh của bằng chứng) / Hằng số chuẩn hóa.**

#### 3. Định nghĩa toán học:
Với hai biến cố $A$ và $B$ có $P(B)>0$, định lý Bayes phát biểu:
$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$
Trong đó:
* $P(A|B)$ là xác suất hậu nghiệm (`posterior`).
* $P(A)$ là xác suất tiên nghiệm (`prior`).
* $P(B|A)$ là khả năng (`likelihood`).
* $P(B)$ là bằng chứng (`evidence` hoặc `marginal likelihood`).

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Một căn bệnh hiếm gặp có tỷ lệ 1/1000 người mắc ($P(\text{Bệnh})=0.001$). Có một xét nghiệm với độ nhạy 99% ($P(\text{Dương tính}|\text{Bệnh})=0.99$) và tỷ lệ dương tính giả 5% ($P(\text{Dương tính}|\text{Không bệnh})=0.05$). Bạn có kết quả dương tính. Xác suất bạn thực sự bị bệnh là gì?
    * $P(\text{Bệnh}|\text{Dương tính}) = \frac{P(\text{Dương tính}|\text{Bệnh})P(\text{Bệnh})}{P(\text{Dương tính})}$
    * $P(\text{Dương tính}) = P(\text{Dương tính}|\text{Bệnh})P(\text{Bệnh}) + P(\text{Dương tính}|\text{Không bệnh})P(\text{Không bệnh}) = (0.99)(0.001) + (0.05)(0.999) \approx 0.05094$
    * $P(\text{Bệnh}|\text{Dương tính}) = \frac{0.99 \times 0.001}{0.05094} \approx 0.0194$.
    * Dù xét nghiệm dương tính, xác suất bạn bị bệnh chỉ gần 2%, do tỷ lệ bệnh ban đầu rất thấp.
* **Phản ví dụ**: Một sai lầm phổ biến là "lỗi của công tố viên" (`prosecutor's fallacy`), khi nhầm lẫn $P(A|B)$ với $P(B|A)$. Ví dụ, nhầm lẫn "xác suất tìm thấy ADN của nghi phạm tại hiện trường, biết rằng anh ta vô tội" (rất nhỏ) với "xác suất anh ta vô tội, biết rằng ADN của anh ta được tìm thấy tại hiện trường" (có thể không nhỏ).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Định lý Bayes mô tả cách chúng ta tái phân bổ "khối lượng niềm tin" trên `sample space` sau khi quan sát một sự kiện. Ban đầu, niềm tin được phân bổ theo xác suất `prior`. Khi biết biến cố $B$ xảy ra, chúng ta loại bỏ toàn bộ khối lượng niềm tin bên ngoài $B$, và sau đó "phóng to" khối lượng còn lại trong $B$ để tổng của nó lại bằng 1.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Định lý Bayes là nền tảng của toàn bộ lĩnh vực **Thống kê Bayes và Học máy Bayes** (`Bayesian Statistics and Machine Learning`). Thay vì tìm một giá trị duy nhất cho các tham số của mô hình (ví dụ, các trọng số trong mạng nơ-ron), phương pháp Bayes sẽ tìm ra cả một **phân phối xác suất hậu nghiệm** (`posterior distribution`) cho các tham số đó. Điều này cho phép mô hình không chỉ đưa ra dự đoán mà còn cho biết "độ chắc chắn" về dự đoán đó, một yếu tố cực kỳ quan trọng trong các ứng dụng đòi hỏi sự an toàn cao như xe tự lái hay y tế.