---
sidebar_position: 4
---


# Chương 4: Giới hạn và Tính liên tục của Hàm số (Limits and Continuity of Functions)

Đây là chương học nơi các khái niệm về sự hội tụ mà chúng ta đã phát triển cho dãy số được áp dụng vào các hàm số. Chúng ta sẽ xây dựng nền tảng vững chắc để hiểu được hành vi của hàm số tại các điểm lân cận và trên toàn bộ một khoảng, đặt cơ sở cho phép tính vi phân và tích phân sau này.

***

### **Định nghĩa giới hạn của hàm số theo kiểu ϵ−δ**

#### 1. Khái niệm, Cách hiểu đơn giản:
Khái niệm giới hạn của hàm số trả lời câu hỏi: "Khi $x$ tiến đến rất gần một điểm $c$, thì giá trị $f(x)$ sẽ tiến đến đâu?". Định nghĩa $\epsilon-\delta$ (epsilon-delta) là một trò chơi "thách thức-phản hồi" chặt chẽ. Bạn thách thức tôi bằng cách đưa ra một "sai số mục tiêu" rất nhỏ $\epsilon$ cho đầu ra. Nhiệm vụ của tôi là phải tìm ra một "khoảng an toàn" $\delta$ cho đầu vào xung quanh $c$, sao cho bất kỳ giá trị $x$ nào tôi chọn trong khoảng an toàn đó (trừ chính $c$) đều sẽ cho ra kết quả $f(x)$ nằm trong sai số mục tiêu của bạn. Nếu tôi luôn thắng được trò chơi này, bất kể bạn chọn $\epsilon$ nhỏ đến đâu, thì giới hạn tồn tại.

#### 2. Định nghĩa toán học:
Ta nói **giới hạn của hàm số (limit of a function)** $f(x)$ khi $x$ tiến đến $c$ là $L$, ký hiệu $\lim_{x \to c} f(x) = L$, nếu:
Với mọi số thực $\epsilon > 0$, tồn tại một số thực $\delta > 0$ sao cho với mọi $x$, nếu $0 < |x-c| < \delta$ thì $|f(x)-L| < \epsilon$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Trên đồ thị của hàm số $y=f(x)$, định nghĩa này có nghĩa là: bạn vẽ một "dải ngang" hẹp có bề rộng $2\epsilon$ xung quanh đường thẳng $y=L$. Tôi phải tìm được một "dải dọc" có bề rộng $2\delta$ xung quanh đường thẳng $x=c$ sao cho phần đồ thị nằm trong dải dọc (trừ điểm tại $x=c$) phải bị "nhốt" hoàn toàn bên trong dải ngang của bạn.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Định nghĩa này là nền tảng lý thuyết cho sự ổn định của các mô hình. Nó đảm bảo rằng một sự thay đổi nhỏ trong dữ liệu đầu vào (trong phạm vi $\delta$) sẽ chỉ dẫn đến một sự thay đổi nhỏ và có thể kiểm soát được trong dự đoán của mô hình (trong phạm vi $\epsilon$). Nếu không có tính chất này, một thay đổi không đáng kể trong một pixel của ảnh có thể khiến mô hình phân loại sai từ "mèo" thành "chó", làm cho mô hình trở nên vô dụng trong thực tế.

***

### **Tính liên tục (continuity) và các tính chất**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một hàm số được gọi là **liên tục (continuous)** nếu bạn có thể vẽ đồ thị của nó mà không cần nhấc bút lên khỏi mặt giấy. Đồ thị của nó là một đường liền mạch, không có "lỗ hổng", "bước nhảy" hay các đường tiệm cận đứng.

#### 2. Định nghĩa toán học:
* Một hàm số $f$ được gọi là **liên tục tại điểm (continuous at a point)** $c$ nếu $\lim_{x \to c} f(x) = f(c)$.
* Một hàm số $f$ được gọi là **liên tục trên một tập hợp** nếu nó liên tục tại mọi điểm của tập hợp đó.
* **Các tính chất:** Nếu $f$ và $g$ là các hàm liên tục, thì tổng ($f+g$), hiệu ($f-g$), tích ($f \cdot g$), thương ($f/g$, với mẫu khác 0) và hợp thành ($f \circ g$) của chúng cũng là các hàm liên tục.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đồ thị của một hàm liên tục là một đường cong không bị đứt gãy. Điều này có nghĩa là những điểm đầu vào gần nhau sẽ được ánh xạ tới những điểm đầu ra cũng gần nhau. Nó thể hiện tính "trơn tru" và "dự đoán được" của hàm số.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Tính liên tục là một yêu cầu gần như bắt buộc đối với các hàm mất mát (`loss functions`) và các hàm kích hoạt (`activation functions`) trong `deep learning`. Các thuật toán tối ưu hóa như `gradient descent` hoạt động bằng cách thực hiện các bước nhỏ trên bề mặt của hàm mất mát. Nếu hàm mất mát không liên tục (có các bước nhảy), `gradient` có thể không xác định hoặc rất lớn, khiến quá trình học trở nên hỗn loạn và không hội tụ.

***

### **Các định lý trên tập compact: Extreme Value Theorem và Uniform Continuity**

#### 1. Khái niệm, Cách hiểu đơn giản:
Các định lý này mô tả những tính chất "tuyệt vời" của các hàm liên tục khi chúng được xác định trên một tập `compact` (một đoạn đóng và bị chặn như $[a, b]$).
* **Định lý giá trị cực trị (Extreme Value Theorem - EVT):** Nếu bạn vẽ một đường liền mạch trên một đoạn hữu hạn, đường cong đó chắc chắn phải có một điểm cao nhất (giá trị lớn nhất) và một điểm thấp nhất (giá trị nhỏ nhất).
* **Tính liên tục đều (Uniform continuity):** Hàm số không chỉ liên tục tại mọi điểm, mà "mức độ liên tục" của nó còn đồng đều trên toàn bộ đoạn. Điều này có nghĩa là không có nơi nào trên đồ thị mà nó đột ngột trở nên "dốc đứng vô hạn".

#### 2. Định nghĩa toán học:
* **Extreme Value Theorem:** Nếu $f$ là một hàm liên tục trên một tập `compact` $K$ (ví dụ, một đoạn đóng $[a, b]$), thì tồn tại các điểm $c, d \in K$ sao cho $f(c) \le f(x) \le f(d)$ với mọi $x \in K$.
* **Uniform Continuity:** Một hàm $f$ được gọi là **liên tục đều (uniformly continuous)** trên tập $A$ nếu với mọi $\epsilon > 0$, tồn tại một $\delta > 0$ sao cho với mọi $x, y \in A$, nếu $|x-y| < \delta$ thì $|f(x)-f(y)| < \epsilon$.
* **Định lý quan trọng:** Một hàm liên tục trên một tập `compact` thì liên tục đều trên tập đó.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
* **EVT:** Đồ thị của một hàm liên tục trên một đoạn $[a, b]$ phải có một "đỉnh" tuyệt đối và một "đáy" tuyệt đối. 
* **Uniform Continuity:** Trong trò chơi $\epsilon-\delta$, nếu hàm số là liên tục đều, bạn có thể tìm ra một giá trị $\delta$ "dùng chung" cho toàn bộ tập hợp, thay vì phải tìm một $\delta$ mới cho mỗi điểm khác nhau.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
* **EVT:** Đây là sự đảm bảo về mặt lý thuyết rằng quá trình tối ưu hóa là khả thi. Khi chúng ta giới hạn không gian tìm kiếm các trọng số của mô hình trong một tập `compact` (thông qua các kỹ thuật `regularization`), và hàm mất mát là liên tục, EVT đảm bảo rằng **chắc chắn tồn tại** một bộ trọng số cho ra giá trị mất mát nhỏ nhất.
* **Uniform Continuity:** Rất quan trọng trong các chứng minh lý thuyết của `machine learning`, đặc biệt là **Định lý xấp xỉ phổ quát (Universal Approximation Theorem)**. Định lý này nói rằng một mạng neural có thể xấp xỉ bất kỳ hàm liên tục nào trên một tập `compact`. Tính liên tục đều đảm bảo rằng chất lượng xấp xỉ này là đồng đều trên toàn bộ tập hợp đó.

***

### **Định lý giá trị trung gian (Intermediate Value Theorem)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Nếu một hàm số là liên tục trên một đoạn, và bạn biết giá trị của hàm tại hai đầu mút, thì hàm số đó phải nhận mọi giá trị nằm giữa hai giá trị đó. Nói cách khác, để đi từ một điểm thấp đến một điểm cao mà không nhấc bút, bạn phải đi qua tất cả các độ cao ở giữa.

#### 2. Định nghĩa toán học:
**Intermediate Value Theorem (IVT):** Nếu $f$ là một hàm liên tục trên đoạn đóng $[a, b]$, và $k$ là một số bất kỳ nằm giữa $f(a)$ và $f(b)$, thì tồn tại ít nhất một điểm $c \in [a, b]$ sao cho $f(c) = k$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Trên đồ thị, định lý này nói rằng nếu bạn vẽ một đường thẳng ngang $y=k$ bất kỳ nằm giữa hai điểm đầu mút $(a, f(a))$ và $(b, f(b))$, thì đường thẳng ngang đó chắc chắn sẽ cắt đồ thị của hàm số tại ít nhất một điểm.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
IVT là nền tảng của nhiều thuật toán tìm kiếm và tối ưu hóa. Ví dụ, khi điều chỉnh một siêu tham số (`hyperparameter`) như ngưỡng quyết định (`decision threshold`) trong một mô hình phân loại. Giả sử tại ngưỡng 0.2, độ nhạy (`recall`) cao hơn độ đặc hiệu (`specificity`), và tại ngưỡng 0.8 thì ngược lại. Vì các hàm này thường liên tục, IVT đảm bảo rằng **chắc chắn tồn tại** một ngưỡng ở giữa mà tại đó độ nhạy bằng với độ đặc hiệu. Điều này cho phép chúng ta tìm ra các điểm hoạt động cân bằng cho mô hình.