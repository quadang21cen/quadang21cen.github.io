---
sidebar_position: 1
---
# Chương 1: Không gian Vector (Vector Spaces)

*Phần này xây dựng nền móng của toàn bộ môn học. Thay vì bắt đầu với ma trận và các cột số, chúng ta bắt đầu với đối tượng trung tâm và trừu tượng hơn: `vector space`. Điều này giúp chúng ta tập trung vào cấu trúc và các tính chất cơ bản, làm nền tảng để hiểu tại sao các phép toán ma trận lại hoạt động như chúng ta đã biết.*

***

### **Trường (Field)**

#### 1. Động lực / Vấn đề cần giải quyết:
Để nói về `vector`, chúng ta cần có khả năng "co giãn" chúng bằng các con số. Nhưng "các con số" này phải tuân theo những quy tắc đại số quen thuộc và nhất quán (cộng, trừ, nhân, chia). Khái niệm `field` ra đời để định nghĩa một cách chặt chẽ một hệ thống số "hoàn chỉnh", nơi các phép toán này hoạt động như mong đợi.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một `field` là một tập hợp các số mà bạn có thể thực hiện bốn phép toán cơ bản (+, -, *, /) một cách tự do (với ngoại lệ duy nhất là không thể chia cho 0) và chúng vẫn tuân theo các quy luật đại số thông thường như giao hoán, kết hợp. Tập hợp số thực $\mathbb{R}$ và số phức $\mathbb{C}$ là hai ví dụ điển hình nhất.

#### 3. Định nghĩa toán học:
Một **`field`** là một tập hợp $F$ được trang bị hai phép toán $+$ và $\cdot$ thỏa mãn các tiên đề về trường (`field axioms`), bao gồm tính giao hoán, kết hợp, tồn tại phần tử trung hòa (0 và 1), tồn tại phần tử nghịch đảo (cho phép cộng và phép nhân), và tính phân phối.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Tập số thực $(\mathbb{R}, +, \cdot)$ là một `field`.
    * Tập số phức $(\mathbb{C}, +, \cdot)$ là một `field`.
    * Tập số hữu tỉ $(\mathbb{Q}, +, \cdot)$ là một `field`.
* **Phản ví dụ:**
    * Tập số nguyên $(\mathbb{Z}, +, \cdot)$ **không** phải là một `field` vì hầu hết các phần tử không có nghịch đảo nhân (ví dụ, không tồn tại số nguyên $a$ sao cho $2 \cdot a = 1$).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Field` cung cấp bối cảnh cho các "vô hướng" (`scalars`) trong đại số tuyến tính. Việc chọn `field` nào ($\mathbb{R}$ hay $\mathbb{C}$) sẽ quyết định bản chất của không gian `vector`. Ví dụ, một số toán tử chỉ có `eigenvalue` trên trường số phức $\mathbb{C}$.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Hầu hết các mô hình học máy đều hoạt động trên các `vector` có thành phần là số thực. Do đó, trường số thực $\mathbb{R}$ là `field` nền tảng. Tất cả các trọng số, bias, và giá trị kích hoạt trong một mạng neural đều là các phần tử của `field` $\mathbb{R}$.

***

### **Không gian Vector (Vector Space)**

#### 1. Động lực / Vấn đề cần giải quyết:
Các `vector` hình học trong $\mathbb{R}^2$ và $\mathbb{R}^3$ có những tính chất đại số rất hữu ích (cộng các `vector`, nhân `vector` với một số). Tuy nhiên, nhiều đối tượng toán học khác, chẳng hạn như đa thức hoặc các hàm số, cũng có những tính chất tương tự. Khái niệm `vector space` ra đời để trừu tượng hóa những tính chất chung này, cho phép chúng ta áp dụng cùng một bộ công cụ và lý thuyết cho rất nhiều đối tượng khác nhau.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một `vector space` là một "sân chơi" chứa các đối tượng gọi là `vector`. Trong sân chơi này, có hai quy tắc cơ bản: bạn có thể "cộng" hai `vector` bất kỳ với nhau, và bạn có thể "co giãn" một `vector` bất kỳ bằng cách nhân nó với một số vô hướng (từ một `field`). Miễn là các quy tắc này tuân theo 8 tiên đề hợp lý, thì tập hợp đó là một `vector space`.

#### 3. Định nghĩa toán học:
Một **`vector space`** trên một `field` $F$ là một tập hợp $V$ cùng với hai phép toán (cộng `vector` và nhân vô hướng) thỏa mãn 8 tiên đề sau: giao hoán của phép cộng, kết hợp của phép cộng, tồn tại `vector` không, tồn tại `vector` đối, tính tương thích của phép nhân vô hướng, tính phân phối, ...

**Các ví dụ:**
* $\mathbb{R}^n$ là một `vector space` trên `field` $\mathbb{R}$.
* Không gian các đa thức bậc không quá $n$ với hệ số trong $F$, ký hiệu $\mathcal{P}_n(F)$, là một `vector space`.
* Không gian các hàm số liên tục từ $\mathbb{R}$ vào $\mathbb{R}$, ký hiệu $C(\mathbb{R})$, là một `vector space`.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:** Tập hợp tất cả các ma trận $m \times n$ với các phần tử thực là một `vector space`.
* **Phản ví dụ:** Tập hợp các `vector` trong $\mathbb{R}^2$ có các thành phần không âm **không** phải là một `vector space` vì nó không có `vector` đối (ví dụ, `vector` đối của $(1, 2)$ là $(-1, -2)$, không thuộc tập hợp).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Vector space` là cấu trúc đại số nền tảng của đại số tuyến tính. Nó là bối cảnh trừu tượng cho hình học Euclid. Mọi định lý về `vector space` đều có thể được áp dụng cho hình học, đa thức, hàm số, v.v.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Feature Spaces:** Mọi điểm dữ liệu trong ML thường được biểu diễn dưới dạng một `vector` đặc trưng. Tập hợp tất cả các `vector` đặc trưng khả dĩ tạo thành một `vector space`.
* **Word Embeddings:** Các kỹ thuật như Word2Vec hay GloVe biểu diễn mỗi từ trong một kho văn bản dưới dạng một `vector` trong không gian nhiều chiều. Trong không gian này, các từ có nghĩa tương tự sẽ nằm gần nhau, và các phép toán `vector` có thể thể hiện các quan hệ ngữ nghĩa (ví dụ: `vector('King') - vector('Man') + vector('Woman')` gần với `vector('Queen')`).

***

### **Không gian con (Subspaces)**

#### 1. Động lực / Vấn đề cần giải quyết:
Bên trong các `vector space` lớn, thường có những tập con nhỏ hơn mà bản thân chúng cũng là các `vector space`. Việc nghiên cứu các `subspace` này giúp chúng ta hiểu cấu trúc bên trong của không gian lớn. Ví dụ, một mặt phẳng đi qua gốc tọa độ là một `vector space` 2 chiều nằm bên trong không gian 3 chiều.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một `subspace` là một tập con của một `vector space` mà vẫn "đóng kín" với các phép toán. Điều này có nghĩa là nếu bạn lấy hai `vector` bất kỳ trong `subspace` và cộng chúng lại, kết quả vẫn nằm trong `subspace` đó. Tương tự, nếu bạn co giãn một `vector` bất kỳ trong `subspace`, nó cũng không "thoát ra" ngoài. Một cách trực quan, một `subspace` là một "lát cắt phẳng" đi qua `vector` không.

#### 3. Định nghĩa toán học:
Một tập con $U$ của một `vector space` $V$ được gọi là một **`subspace`** nếu $U$ cũng là một `vector space` với các phép toán kế thừa từ $V$. Điều này tương đương với việc kiểm tra ba điều kiện:
1.  **Chứa vector không:** $0 \in U$.
2.  **Đóng với phép cộng:** Nếu $u_1, u_2 \in U$, thì $u_1 + u_2 \in U$.
3.  **Đóng với phép nhân vô hướng:** Nếu $u \in U$ và $\alpha$ là một vô hướng, thì $\alpha u \in U$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^3$, một đường thẳng hoặc một mặt phẳng đi qua gốc tọa độ là một `subspace`.
    * Tập hợp các đa thức bậc không quá 2, $\mathcal{P}_2(\mathbb{R})$, là một `subspace` của không gian tất cả các đa thức $\mathcal{P}(\mathbb{R})$.
* **Phản ví dụ:**
    * Trong $\mathbb{R}^2$, một đường thẳng không đi qua gốc tọa độ **không** phải là một `subspace` vì nó không chứa `vector` không.
    * Góc phần tư thứ nhất trong $\mathbb{R}^2$ **không** phải là một `subspace` vì nó không đóng với phép nhân vô hướng (nhân $(1, 1)$ với $-1$ cho ra $(-1, -1)$ không thuộc góc phần tư).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Các `subspace` đại diện cho các cấu trúc "phẳng" và thấp chiều hơn bên trong một không gian lớn. Chúng là các đối tượng hình học cơ bản như đường thẳng, mặt phẳng, siêu phẳng đi qua gốc tọa độ.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Solution Space:** Tập hợp tất cả các nghiệm của một hệ phương trình tuyến tính thuần nhất $Ax = 0$ chính là `null space` của ma trận $A$, và nó là một `subspace`.
* **Manifold Hypothesis:** Giả thuyết này cho rằng dữ liệu trong thế giới thực, dù nằm trong không gian nhiều chiều, thực chất lại tập trung trên một `manifold` (một cấu trúc tương tự `subspace` nhưng có thể bị uốn cong) có số chiều thấp hơn nhiều. Các thuật toán giảm chiều như PCA cố gắng tìm ra một `subspace` tuyến tính xấp xỉ tốt nhất cho `manifold` này.

***

### **Tổ hợp Tuyến tính (Linear Combinations) và Bao Tuyến tính (Span)**

#### 1. Động lực / Vấn đề cần giải quyết:
Nếu chúng ta có một vài `vector` "xây dựng" cơ bản, chúng ta có thể tạo ra những `vector` nào khác từ chúng? Khái niệm `linear combination` và `span` ra đời để trả lời câu hỏi này một cách chính xác.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một **`linear combination`** là một "công thức" để trộn một tập hợp các `vector` ban đầu bằng cách co giãn chúng rồi cộng lại với nhau. **`Span`** của một tập hợp `vector` là tập hợp của *tất cả* các `vector` khả dĩ mà bạn có thể tạo ra bằng cách trộn chúng theo mọi "công thức" có thể.

#### 3. Định nghĩa toán học:
* Một **`linear combination`** của các `vector` $v_1, \dots, v_n$ trong $V$ là một `vector` có dạng:
    $$ \alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n $$
    với $\alpha_1, \dots, \alpha_n$ là các vô hướng.
* **`Span`** của một tập hợp các `vector` $S \subseteq V$ là tập hợp tất cả các `linear combination` của các phần tử trong $S$. `Span(S)` luôn là một `subspace` của $V$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, `span` của `vector` $(1, 0)$ là toàn bộ trục x.
    * `Span` của $(1, 0)$ và $(0, 1)$ là toàn bộ mặt phẳng $\mathbb{R}^2$.
* **Phản ví dụ:**
    * `Span` của $(1, 1)$ và $(2, 2)$ trong $\mathbb{R}^2$ **không** phải là toàn bộ $\mathbb{R}^2$, mà chỉ là đường thẳng $y=x$.
    * `Vector` $(3, 4)$ **không** nằm trong `span` của $(1, 0)$ và $(2, 0)$.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Span` của một tập hợp các `vector` là không gian con nhỏ nhất chứa tất cả các `vector` đó. Về mặt hình học, `span` của một `vector` khác không là một đường thẳng, `span` của hai `vector` không cùng phương là một mặt phẳng, và cứ thế tiếp tục.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Column Space:** `Span` của các cột của một ma trận $A$ được gọi là `column space`. `Vector` $b$ nằm trong `column space` của $A$ khi và chỉ khi hệ phương trình $Ax=b$ có nghiệm.
* **Generative Models:** Các mô hình sinh như GANs học một ánh xạ từ một không gian `latent` (thường là một không gian `vector` đơn giản) đến không gian dữ liệu phức tạp (ví dụ: không gian các hình ảnh). Hình ảnh được sinh ra chính là một `linear combination` (hoặc phi tuyến) phức tạp của các `vector` cơ sở trong không gian `latent` đó.

***

### **Sự phụ thuộc và Độc lập Tuyến tính (Linear Dependence and Independence)**

#### 1. Động lực / Vấn đề cần giải quyết:
Khi có một tập hợp các `vector` xây dựng, làm sao để biết liệu có `vector` nào "thừa" hay không? Một `vector` "thừa" là một `vector` có thể được tạo ra từ những `vector` còn lại. Khái niệm `linear independence` giúp chúng ta xác định một tập hợp `vector` "hiệu quả" nhất, không chứa bất kỳ sự dư thừa nào.

#### 2. Khái niệm, Cách hiểu đơn giản:
* Một tập hợp `vector` là **`linearly dependent`** nếu có ít nhất một `vector` trong đó là "đồ thừa", tức là nó có thể được biểu diễn như một `linear combination` của các `vector` khác.
* Một tập hợp `vector` là **`linearly independent`** nếu không có `vector` nào là "đồ thừa". Mọi `vector` trong tập đều đóng góp một "hướng" mới, độc nhất.

#### 3. Định nghĩa toán học:
Một tập hợp các `vector` $\{v_1, \dots, v_n\}$ được gọi là **`linearly independent`** nếu phương trình:
$$ \alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_n v_n = 0 $$
chỉ có một nghiệm duy nhất là $\alpha_1 = \alpha_2 = \dots = \alpha_n = 0$ (nghiệm tầm thường).
Nếu phương trình có một nghiệm khác không tầm thường, tập hợp đó được gọi là **`linearly dependent`**.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Trong $\mathbb{R}^2$, hai `vector` $\{(1, 0), (0, 1)\}$ là `linearly independent`.
    * Trong $\mathcal{P}_2(\mathbb{R})$, tập hợp $\{1, x, x^2\}$ là `linearly independent`.
* **Phản ví dụ:**
    * Trong $\mathbb{R}^2$, tập hợp $\{(1, 0), (2, 0)\}$ là `linearly dependent` vì $2 \cdot (1, 0) - 1 \cdot (2, 0) = 0$.
    * Bất kỳ tập hợp `vector` nào chứa `vector` không đều là `linearly dependent`.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Linear independence` là khái niệm cốt lõi để xây dựng nên "hệ tọa độ". Một tập hợp các `vector` độc lập tuyến tính tạo ra một khung sườn hiệu quả cho một không gian con. Nó là điều kiện cần và đủ (cùng với `span`) để tạo thành một `basis`.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Feature Selection và Multicollinearity:** Trong các mô hình hồi quy tuyến tính, nếu hai đặc trưng (hai cột của ma trận dữ liệu) gần như phụ thuộc tuyến tính (hiện tượng `multicollinearity`), các hệ số của mô hình sẽ trở nên rất không ổn định và khó diễn giải. Các kỹ thuật như PCA hoặc các phương pháp `regularization` giúp giải quyết vấn đề này bằng cách tìm ra một tập hợp các đặc trưng mới độc lập tuyến tính (hoặc gần như vậy).