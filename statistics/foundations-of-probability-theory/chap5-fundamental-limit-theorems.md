---
sidebar_position: 5
---
# Chương 5: Các Định lý Giới hạn Cơ bản (Fundamental Limit Theorems)

Chào mừng các bạn đến với chương 5, có thể xem là đỉnh cao của toàn bộ lý thuyết xác suất và là viên gạch nền tảng quan trọng nhất kết nối lý thuyết với thực hành thống kê. Cho đến nay, chúng ta đã nghiên cứu các biến ngẫu nhiên đơn lẻ hoặc các nhóm nhỏ. Chương này sẽ khám phá điều kỳ diệu xảy ra khi chúng ta xem xét hành vi của một số lượng rất lớn các biến ngẫu nhiên cộng lại. Kết quả của nó vừa đẹp đẽ về mặt toán học, vừa mạnh mẽ một cách đáng kinh ngạc trong ứng dụng.

---

### **Khái niệm 1: Sự hội tụ của dãy các biến ngẫu nhiên (`Convergence of Random Variables`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Trong giải tích, ta biết một dãy số hội tụ về một giới hạn. Nhưng một dãy các *biến ngẫu nhiên* thì sao? Mỗi phần tử trong dãy không phải là một số cố định mà là cả một phân phối. "Hội tụ" ở đây nghĩa là gì? Có phải là các giá trị của chúng tiến lại gần nhau? Hay là các phân phối của chúng trở nên giống nhau? Chúng ta cần định nghĩa các loại hội tụ khác nhau để mô tả chính xác các hành vi tiệm cận này, vốn là nền tảng để nói về các định lý giới hạn.

#### 2. Khái niệm, Cách hiểu đơn giản:
Có nhiều "hương vị" hội tụ, hai loại chính là:
* **Hội tụ theo xác suất (`Convergence in Probability`)**: Dãy $X_n$ hội tụ về $X$ nếu xác suất để $X_n$ và $X$ cách xa nhau một khoảng nhỏ tùy ý sẽ tiến về 0 khi $n$ lớn dần. Giống như việc "đoán sai" trở nên ngày càng khó xảy ra.
* **Hội tụ theo phân phối (`Convergence in Distribution`)**: Dãy $X_n$ hội tụ về $X$ nếu hàm phân phối tích lũy (CDF) của $X_n$ tiến đến CDF của $X$ tại mọi điểm liên tục. Điều này có nghĩa là "hình dạng" của phân phối $X_n$ ngày càng giống hình dạng của phân phối $X$, dù các giá trị thực tế của chúng có thể không gần nhau.

#### 3. Định nghĩa toán học:
Cho dãy biến ngẫu nhiên $X_1, X_2, ...$ và biến ngẫu nhiên $X$.
* Dãy $X_n$ **hội tụ theo xác suất** về $X$, ký hiệu $X_n \xrightarrow{P} X$, nếu với mọi $\epsilon > 0$, ta có $\lim_{n \to \infty} P(|X_n - X| > \epsilon) = 0$.
* Dãy $X_n$ **hội tụ theo phân phối** về $X$, ký hiệu $X_n \xrightarrow{D} X$, nếu $\lim_{n \to \infty} F_{X_n}(x) = F_X(x)$ tại mọi điểm $x$ mà tại đó $F_X(x)$ liên tục.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ (Hội tụ theo xác suất)**: Gọi $X_n$ là biến ngẫu nhiên có $P(X_n=1/n)=1$. Khi $n \to \infty$, $X_n$ hội tụ theo xác suất về 0.
* **Ví dụ (Hội tụ theo phân phối)**: Gọi $X_n$ là biến ngẫu nhiên có phân phối đều trên $[0, 1/n]$. CDF của $X_n$ là một đường thẳng dốc từ 0 đến 1 trên đoạn $[0, 1/n]$. Khi $n \to \infty$, CDF này tiến đến một hàm bậc thang nhảy từ 0 lên 1 tại $x=0$. Đây chính là CDF của một biến ngẫu nhiên $X$ luôn bằng 0. Vậy $X_n \xrightarrow{D} 0$.
* **Phản ví dụ**: Hội tụ theo phân phối yếu hơn hội tụ theo xác suất. Xét một đồng xu cân bằng, tung ở mỗi bước $n$. Đặt $X_n$ là kết quả (0 hoặc 1). Đặt $X$ là kết quả của một lần tung khác. Thì $X_n$ có cùng phân phối với $X$ (Bernoulli(0.5)), nên $X_n$ hội tụ theo phân phối về $X$. Tuy nhiên, $P(|X_n - X|=1) = P(X_n=1, X=0) + P(X_n=0, X=1) = 1/4 + 1/4 = 1/2$. Xác suất này không tiến về 0, do đó $X_n$ không hội tụ theo xác suất về $X$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* Hội tụ theo xác suất có nghĩa là khối lượng xác suất của sự kiện "$X_n$ và $X$ ở xa nhau" bị "ép" về 0 khi $n$ tăng.
* Hội tụ theo phân phối có nghĩa là đồ thị của hàm CDF của $X_n$ ngày càng khớp với đồ thị CDF của $X$.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
**Tính nhất quán (`Consistency`)** của một công cụ ước lượng trong thống kê chính là một dạng hội tụ theo xác suất. Ta nói một ước lượng $\hat{\theta}_n$ (tính từ $n$ mẫu) cho tham số $\theta$ là nhất quán nếu $\hat{\theta}_n \xrightarrow{P} \theta$ khi $n \to \infty$. Điều này có nghĩa là khi chúng ta có thêm dữ liệu, ước lượng của chúng ta chắc chắn sẽ tiến gần đến giá trị thật của tham số.

---

### **Khái niệm 2: Luật số lớn (`Law of Large Numbers - LLN`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Đây là một trong những câu hỏi nền tảng nhất: Tại sao chúng ta có thể tin tưởng vào việc lấy trung bình mẫu để ước tính giá trị trung bình thật? Khi tung một đồng xu nhiều lần, tại sao tỷ lệ mặt sấp lại có xu hướng tiến về 0.5? Luật số lớn cung cấp lời giải thích toán học chặt chẽ cho trực giác này, kết nối thế giới lý thuyết của "kỳ vọng" với thế giới thực nghiệm của "trung bình".

#### 2. Khái niệm, Cách hiểu đơn giản:
Luật số lớn khẳng định rằng nếu bạn thực hiện lặp đi lặp lại một thí nghiệm độc lập nhiều lần, thì **trung bình cộng** của các kết quả sẽ tiến rất gần đến **giá trị kỳ vọng** của thí nghiệm đó. Sự biến động ngẫu nhiên trong các kết quả riêng lẻ sẽ "triệt tiêu" lẫn nhau khi số lượng mẫu đủ lớn, để lại một giá trị ổn định.

#### 3. Định nghĩa toán học:
Giả sử $X_1, X_2, ..., X_n$ là một dãy các biến ngẫu nhiên độc lập và cùng phân phối (`i.i.d. - independent and identically distributed`) với kỳ vọng hữu hạn $E[X_i] = \mu$. Gọi $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$ là trung bình mẫu.
* **Luật số lớn yếu (`Weak Law of Large Numbers - WLLN`)**: khẳng định rằng trung bình mẫu hội tụ theo xác suất về kỳ vọng:
    $\bar{X}_n \xrightarrow{P} \mu$.
* **Luật số lớn mạnh (`Strong Law of Large Numbers - SLLN`)**: khẳng định rằng trung bình mẫu hội tụ "hầu chắc chắn" về kỳ vọng, một dạng hội tụ mạnh hơn.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Trong ngành bảo hiểm, công ty không thể biết chắc một khách hàng cụ thể có gặp tai nạn hay không. Nhưng bằng cách bán bảo hiểm cho hàng triệu khách hàng (lấy mẫu lớn), luật số lớn đảm bảo rằng tổng số tiền bồi thường trung bình mỗi người sẽ rất gần với kỳ vọng lý thuyết, giúp công ty định giá phí bảo hiểm một cách chính xác.
* **Phản ví dụ**: Luật số lớn không áp dụng cho các phân phối không có kỳ vọng hữu hạn. Nếu bạn lấy mẫu từ phân phối Cauchy và tính trung bình mẫu $\bar{X}_n$, giá trị này sẽ không hội tụ về một số nào cả. $\bar{X}_n$ sẽ tiếp tục dao động một cách hoang dã ngay cả khi $n$ rất lớn.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Hãy tưởng tượng phân phối của $\bar{X}_n$. Khi $n$ nhỏ, phân phối này có thể trải rộng. Khi $n$ tăng lên, luật số lớn cho thấy rằng phân phối này sẽ ngày càng "co lại" và tập trung khối lượng của nó thành một đỉnh nhọn duy nhất ngay tại điểm $\mu$. 

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Toàn bộ quá trình huấn luyện các mô hình học máy dựa trên nguyên tắc tối thiểu hóa hàm mất mát trên một tập dữ liệu lớn là một ứng dụng của LLN. Hàm mất mát trung bình trên tập huấn luyện (`training loss`) được xem là một trung bình mẫu. LLN đảm bảo rằng khi tập dữ liệu đủ lớn, `training loss` này sẽ là một ước lượng tốt cho "rủi ro kỳ vọng" (`expected risk`), tức là mất mát trung bình thực sự trên toàn bộ phân phối dữ liệu.

---

### **Khái niệm 3: Định lý Giới hạn Trung tâm (`Central Limit Theorem - CLT`)**

#### 1. Động lực / Vấn đề cần giải quyết:
Luật số lớn cho chúng ta biết trung bình mẫu hội tụ về đâu. Nhưng nó không cho biết *hình dạng* phân phối của trung bình mẫu trông như thế nào khi $n$ lớn, và tốc độ hội tụ ra sao. Điều gì sẽ xảy ra nếu ta cộng rất nhiều biến ngẫu nhiên nhỏ, độc lập lại với nhau, bất kể phân phối ban đầu của chúng là gì (tung xúc xắc, thời gian chờ xe buýt, v.v.)? Liệu có một hình dạng phân phối phổ quát nào xuất hiện không?

#### 2. Khái niệm, Cách hiểu đơn giản:
Định lý Giới hạn Trung tâm (CLT) là một trong những kết quả đáng kinh ngạc nhất của toán học. Nó nói rằng, tổng (hoặc trung bình) của một số lượng lớn các biến ngẫu nhiên độc lập, cùng phân phối sẽ có phân phối **xấp xỉ một phân phối chuẩn (hình chuông)**, bất kể phân phối gốc của từng biến là gì. Dù bạn cộng các biến từ phân phối đều, phân phối Bernoulli, hay một phân phối kỳ dị nào đó, kết quả cuối cùng vẫn sẽ tiệm cận hình chuông Gauss.

#### 3. Định nghĩa toán học:
Giả sử $X_1, X_2, ..., X_n$ là một dãy các biến ngẫu nhiên `i.i.d.` có kỳ vọng $\mu$ và phương sai $\sigma^2$ hữu hạn. Xét biến ngẫu nhiên được chuẩn hóa:
$Z_n = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}}$
Định lý Giới hạn Trung tâm khẳng định rằng $Z_n$ hội tụ theo phân phối về một biến ngẫu nhiên chuẩn tắc $Z \sim N(0, 1)$:
$Z_n \xrightarrow{D} N(0, 1)$ khi $n \to \infty$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ**: Chiều cao của con người được quyết định bởi tổng hợp của rất nhiều yếu tố di truyền và môi trường nhỏ, độc lập. Theo CLT, không có gì ngạc nhiên khi phân phối chiều cao trong một quần thể lớn lại có hình dạng rất giống phân phối chuẩn.
* **Phản ví dụ**: CLT đòi hỏi các biến ngẫu nhiên phải có phương sai hữu hạn. Nếu bạn cộng các biến ngẫu nhiên từ phân phối Cauchy (phương sai vô hạn), tổng của chúng sẽ không tiến tới phân phối chuẩn. Thay vào đó, nó vẫn sẽ là một phân phối Cauchy.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
CLT giải thích tại sao phân phối chuẩn lại phổ biến đến vậy trong tự nhiên và khoa học. Nó là "điểm hút" (`attractor`) trong thế giới của các phân phối xác suất. Bất cứ khi nào một hiện tượng là kết quả của sự cộng gộp của nhiều yếu tố ngẫu nhiên nhỏ, phân phối chuẩn gần như chắc chắn sẽ xuất hiện.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
CLT là nền tảng của phần lớn các phương pháp thống kê suy luận cổ điển, như **kiểm định giả thuyết** và **khoảng tin cậy**. Ví dụ, khi chúng ta tính khoảng tin cậy cho giá trị trung bình của một tổng thể, chúng ta thường dựa vào giả định rằng trung bình mẫu $\bar{X}_n$ tuân theo phân phối chuẩn (nhờ CLT), ngay cả khi chúng ta không biết phân phối của dữ liệu gốc. Điều này cho phép chúng ta sử dụng các phân vị của phân phối chuẩn để xây dựng khoảng tin cậy.