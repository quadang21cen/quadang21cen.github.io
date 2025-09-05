---
slug: markov-chains
title: Giới thiệu về Chuỗi Markov (Markov Chains)
authors: [dangquach]
tags: [motivation]
---
# Giới thiệu về Chuỗi Markov (Markov Chains)

Trong nhiều hiện tượng ngẫu nhiên của đời sống và khoa học, trạng thái của hệ thống ở một thời điểm thường phụ thuộc vào những gì đã xảy ra trong quá khứ. Tuy nhiên, có một lớp quá trình đặc biệt mà “tương lai chỉ phụ thuộc vào hiện tại, không cần biết quá khứ”. Lớp quá trình này được mô tả bằng Chuỗi Markov (Markov Chain).

Ý tưởng chính của chuỗi Markov rất đơn giản: nếu bạn biết trạng thái hiện tại, thì đó là tất cả thông tin cần thiết để dự đoán trạng thái kế tiếp. Ví dụ, khi dự báo thời tiết, xác suất ngày mai mưa hay nắng chỉ phụ thuộc vào thời tiết hôm nay, chứ không cần nhớ lại chuỗi thời tiết nhiều ngày trước.

Chuỗi Markov đóng vai trò nền tảng trong nhiều lĩnh vực: từ khoa học dữ liệu, trí tuệ nhân tạo, vật lý thống kê, tài chính định lượng cho đến thuật toán PageRank của Google. Nó vừa mang tính trực quan gần gũi, vừa có cơ sở toán học vững chắc để phân tích và mô hình hóa những hiện tượng phức tạp.

***

### **Khái niệm 1: Thuộc tính Markov (The Markov Property)**

#### 1. Động lực / Vấn đề cần giải quyết:
Làm thế nào chúng ta có thể mô hình hóa một quá trình ngẫu nhiên phức tạp mà không cần phải lưu trữ toàn bộ lịch sử của nó? Ví dụ, để dự đoán thời tiết ngày mai, liệu chúng ta có thực sự cần dữ liệu của 100 ngày qua, hay chỉ cần biết tình hình thời tiết của ngày hôm nay là đủ? Việc theo dõi toàn bộ lịch sử rất tốn kém và phức tạp. Chúng ta cần một giả định để đơn giản hóa mô hình mà vẫn giữ được sức mạnh dự báo. Thuộc tính Markov chính là giả định đó.

#### 2. Khái niệm, Cách hiểu đơn giản:
Thuộc tính Markov có thể được tóm gọn trong một câu: **"Tương lai chỉ phụ thuộc vào hiện tại, không phụ thuộc vào quá khứ."**
Đây là thuộc tính của một hệ thống "mất trí nhớ" (`memoryless`). Nếu một quá trình tuân theo thuộc tính Markov, thì để dự đoán trạng thái tiếp theo của nó, bạn chỉ cần biết trạng thái hiện tại là gì. Toàn bộ con đường đã dẫn bạn đến trạng thái hiện tại đều không còn quan trọng nữa.

#### 3. Định nghĩa toán học:
Cho một dãy các biến ngẫu nhiên $(X_0, X_1, X_2, \dots)$ nhận giá trị trong một không gian trạng thái. Dãy này có **thuộc tính Markov (Markov Property)** nếu:
$P(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j \mid X_n = i)$
với mọi $n$ và mọi trạng thái $i_0, \dots, i_{n-1}, i, j$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Có thuộc tính Markov):** Một người đi bộ ngẫu nhiên trên một đường thẳng. Tại mỗi bước, họ tung một đồng xu để quyết định đi sang trái hay sang phải. Vị trí tiếp theo của họ chỉ phụ thuộc vào vị trí hiện tại, không phụ thuộc vào chuỗi các bước đi trước đó đã đưa họ đến đây.
* **Phản ví dụ (Không có thuộc tính Markov):** Rút các lá bài từ một bộ bài **mà không hoàn lại**. Xác suất để rút được một lá Át ở lần tiếp theo phụ thuộc rất nhiều vào các lá bài đã được rút ra trước đó. Hệ thống này có "trí nhớ" về quá khứ.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Thuộc tính Markov là một phát biểu về **sự độc lập có điều kiện**. Nó nói rằng "tương lai" ($X_{n+1}$) và "quá khứ" ($X_0, \dots, X_{n-1}$) là độc lập với nhau, **khi biết "hiện tại" ($X_n$)**. Nó biến một chuỗi phụ thuộc lịch sử phức tạp thành một chuỗi các mối quan hệ đơn giản chỉ giữa các trạng thái kế tiếp nhau.

#### 6. Ứng dụng trong Machine Learning, Deep learning, hoặc AI:
Đây là giả định nền tảng của **Học tăng cường (Reinforcement Learning - RL)**. Toàn bộ lý thuyết về **Quy trình Quyết định Markov (Markov Decision Process - MDP)**, vốn là khung sườn toán học cho RL, đều được xây dựng dựa trên thuộc tính Markov. Trong RL, một `agent` (tác tử) ra quyết định hành động tiếp theo chỉ dựa trên `state` (trạng thái) hiện tại của môi trường, giúp đơn giản hóa bài toán học một `policy` (chính sách) tối ưu một cách triệt để.

***

### **Khái niệm 2: Chuỗi Markov và Ma trận chuyển (Transition Matrix)**

#### 1. Động lực / Vấn đề cần giải quyết:
Khi đã có thuộc tính "mất trí nhớ", làm thế nào để chúng ta mô tả toàn bộ hệ thống? Chúng ta cần một "bản đồ" và một "bộ quy tắc di chuyển". Bản đồ sẽ cho biết tất cả các "địa điểm" (trạng thái) mà hệ thống có thể ở. Bộ quy tắc sẽ cho biết xác suất để di chuyển từ một địa điểm này sang một địa điểm khác.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **Chuỗi Markov (Markov Chain)** là một mô hình toán học cho một "cuộc đi bộ ngẫu nhiên" giữa các **trạng thái (states)**. Tại mỗi bước, bạn nhìn vào trạng thái hiện tại của mình, rồi "tung một viên xúc xắc" đặc biệt dành riêng cho trạng thái đó để quyết định sẽ đi đến trạng thái nào tiếp theo.
**Ma trận chuyển (Transition Matrix)** chính là cuốn sổ tay ghi lại toàn bộ thông tin về các viên xúc xắc đó. Nó là một bảng cho biết xác suất chuyển từ mọi trạng thái này đến mọi trạng thái khác.

#### 3. Định nghĩa toán học:
Một **Chuỗi Markov thời gian rời rạc** được định nghĩa bởi:
1.  Một **không gian trạng thái (state space)** đếm được $S = \{s_1, s_2, \dots\}$.
2.  Một **ma trận chuyển (transition matrix)** $P$ có kích thước $|S| \times |S|$, trong đó phần tử $P_{ij}$ là xác suất chuyển từ trạng thái $s_i$ sang trạng thái $s_j$:
    $P_{ij} = P(X_{n+1} = s_j \mid X_n = s_i)$
    Các phần tử của ma trận $P$ phải thỏa mãn $P_{ij} \ge 0$ và tổng các phần tử trên mỗi hàng phải bằng 1 ($\sum_j P_{ij} = 1$).

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Mô hình thời tiết đơn giản với 2 trạng thái $S = \{\text{Nắng, Mưa}\}$. Ma trận chuyển có thể là:
    $P = \begin{pmatrix} 0.9 & 0.1 \\ 0.5 & 0.5 \end{pmatrix}$
    Hàng đầu tiên có nghĩa: nếu hôm nay Nắng, xác suất ngày mai Nắng là 90% và Mưa là 10%. Hàng thứ hai: nếu hôm nay Mưa, xác suất ngày mai Nắng là 50% và Mưa là 50%.
* **Phản ví dụ:** Một hệ thống mà xác suất chuyển thay đổi theo thời gian (ví dụ: vào mùa đông, xác suất từ Nắng sang Mưa cao hơn vào mùa hè). Đây không phải là một chuỗi Markov "thuần nhất theo thời gian" (time-homogeneous), loại chúng ta đang xét.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Một chuỗi Markov có thể được hình dung một cách hoàn hảo như một **đồ thị có hướng và có trọng số**.
* Mỗi **trạng thái** là một **đỉnh (node)**.
* Mỗi **xác suất chuyển** $P_{ij} > 0$ là một **cạnh có hướng (edge)** từ đỉnh $i$ đến đỉnh $j$, với trọng số là $P_{ij}$.
Ma trận chuyển $P$ chính là ma trận kề của đồ thị này.

#### 6. Ứng dụng trong Machine Learning, Deep learning, hoặc AI:
Các mô hình ngôn ngữ cơ bản như **N-gram models** trong **Xử lý Ngôn ngữ Tự nhiên (NLP)** chính là các chuỗi Markov. Một mô hình `bigram` (N=2) dự đoán từ tiếp theo chỉ dựa trên từ hiện tại. Ở đây, mỗi từ trong từ điển là một trạng thái, và ma trận chuyển khổng lồ sẽ lưu xác suất $P(\text{từ}_j \mid \text{từ}_i)$, được học từ một kho dữ liệu văn bản lớn. Đây là nền tảng cho các hệ thống gợi ý từ và kiểm tra ngữ pháp đơn giản.

***

### **Khái niệm 3: Phân phối dừng (Stationary Distribution)**

#### 1. Động lực / Vấn đề cần giải quyết:
Nếu chúng ta để chuỗi Markov chạy trong một thời gian rất dài (vô tận), liệu hệ thống có đạt đến một trạng thái cân bằng nào đó không? Tức là, sau rất nhiều bước, liệu xác suất để tìm thấy hệ thống ở một trạng thái cụ thể nào đó có ổn định và không thay đổi nữa không? Đây là câu hỏi về hành vi dài hạn.

#### 2. Khái niệm, Cách hiểu đơn giản:
Hãy tưởng tượng bạn thả một lượng lớn các hạt bụi vào một hệ thống các phòng thông nhau (các trạng thái). Các hạt di chuyển giữa các phòng theo xác suất cho trước. Ban đầu, tất cả các hạt có thể ở trong cùng một phòng. Nhưng sau một thời gian dài, chúng sẽ tự phân bố lại. **Phân phối dừng (Stationary Distribution)** là tỷ lệ phần trăm các hạt bụi trong mỗi phòng khi hệ thống đã đạt đến trạng thái **cân bằng động**. Tỷ lệ này không thay đổi nữa, mặc dù các hạt bụi riêng lẻ vẫn liên tục di chuyển.

#### 3. Định nghĩa toán học:
Một vector phân phối xác suất $\pi$ (là một vector hàng có các phần tử không âm và tổng bằng 1) được gọi là một **phân phối dừng (stationary distribution)** của một chuỗi Markov với ma trận chuyển $P$ nếu nó thỏa mãn phương trình:
$\pi P = \pi$
Điều này có nghĩa là, nếu xác suất ở các trạng thái được mô tả bởi $\pi$, thì sau một bước chuyển tiếp, phân phối xác suất mới vẫn là $\pi$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Với mô hình thời tiết ở trên, phân phối dừng $\pi = (\pi_{\text{Nắng}}, \pi_{\text{Mưa}})$ sẽ cho chúng ta biết, trong dài hạn, tỷ lệ ngày Nắng và ngày Mưa của vùng khí hậu này là bao nhiêu (ví dụ, có thể là 83.3% ngày Nắng và 16.7% ngày Mưa).
* **Phản ví dụ:** Một chuỗi Markov có các trạng thái tuần hoàn (ví dụ, luôn đi từ A -> B -> A) sẽ không bao giờ hội tụ về một phân phối dừng; nó sẽ dao động mãi mãi. Một chuỗi khác có các "bẫy" (các trạng thái không thể thoát ra) có thể có nhiều phân phối dừng khác nhau, tùy thuộc vào trạng thái bắt đầu.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Phương trình $\pi P = \pi$ cho thấy một mối liên hệ sâu sắc với đại số tuyến tính: **phân phối dừng $\pi$ chính là một vector riêng (eigenvector) bên trái của ma trận chuyển $P$, ứng với giá trị riêng (eigenvalue) bằng 1**. Việc tìm kiếm trạng thái cân bằng của một quá trình ngẫu nhiên động tương đương với việc giải một bài toán về vector riêng.

#### 6. Ứng dụng trong Machine Learning, Deep learning, hoặc AI:
Ứng dụng kinh điển và nổi tiếng nhất chính là thuật toán **PageRank** của Google. Toàn bộ mạng World Wide Web được xem như một chuỗi Markov khổng lồ, trong đó mỗi trang web là một trạng thái. Việc một người dùng click vào một liên kết để đi từ trang A đến trang B là một bước chuyển. **PageRank** của một trang web chính là thành phần tương ứng với trang đó trong **phân phối dừng** của chuỗi Markov này. Nó biểu thị xác suất để một người lướt web ngẫu nhiên sẽ dừng lại ở trang đó trong dài hạn, từ đó đo lường tầm quan trọng của trang web.