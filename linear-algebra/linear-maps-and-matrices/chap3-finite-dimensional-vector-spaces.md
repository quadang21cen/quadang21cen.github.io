---
sidebar_position: 1
---
# Chương 3: Ánh xạ tuyến tính (Linear Maps)

*Khi đã có "sân khấu" là các `vector space`, chúng ta bắt đầu nghiên cứu các "diễn viên"—các `linear maps`. Đây là những hàm số đặc biệt, không phải là những hàm bất kỳ, mà là những hàm "tôn trọng" và bảo toàn cấu trúc đại số của không gian. Chúng là hiện thân của các phép biến đổi nền tảng như quay, co giãn, và chiếu. Chỉ sau khi hiểu rõ bản chất của chúng, chúng ta mới thấy rằng ma trận chỉ là một cách tiện lợi để "biểu diễn" các diễn viên này.*

***

### **Định nghĩa Ánh xạ tuyến tính (Linear Map)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã xây dựng các `vector space` với các quy tắc đại số (cộng `vector`, nhân vô hướng). Bây giờ, chúng ta muốn nghiên cứu các hàm số đi từ không gian này sang không gian khác. Nhưng không phải hàm số nào cũng hữu ích. Chúng ta cần những hàm số "tôn trọng" các quy tắc của `vector space`. Một hàm "tôn trọng" cấu trúc là một hàm mà "biến đổi rồi cộng" cũng giống như "cộng rồi biến đổi". Khái niệm `linear map` ra đời để định nghĩa chính xác lớp các hàm số "cư xử tốt" này.

#### 2. Khái niệm, Cách hiểu đơn giản:
Một `linear map` là một phép biến đổi "lịch sự" và "có cấu trúc". Nó không làm cong không gian. Nếu bạn vẽ một lưới các đường thẳng song song, sau khi qua phép biến đổi, chúng vẫn là các đường thẳng song song và cách đều. Quan trọng nhất, gốc tọa độ luôn được giữ nguyên vị trí. Hãy nghĩ về các phép biến đổi hình học cơ bản như quay, phản chiếu, hoặc co giãn đồng đều.

#### 3. Định nghĩa toán học:
Một **`linear map`** từ một `vector space` $V$ đến một `vector space` $W$ (trên cùng một `field` $F$) là một hàm $T: V \to W$ thỏa mãn hai điều kiện sau với mọi $u, v \in V$ và mọi vô hướng $\alpha \in F$:
1.  **Tính cộng tính (Additivity):** $T(u + v) = T(u) + T(v)$
2.  **Tính thuần nhất (Homogeneity):** $T(\alpha u) = \alpha T(u)$

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Phép biến đổi $T: \mathbb{R}^2 \to \mathbb{R}^2$ định nghĩa bởi $T(x, y) = (x-y, 2x)$ là một `linear map`.
    * Phép lấy đạo hàm $D: \mathcal{P}_3(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R})$ là một `linear map` vì $(p+q)' = p' + q'$ và $(\alpha p)' = \alpha p'$.
* **Phản ví dụ:**
    * Hàm $f: \mathbb{R} \to \mathbb{R}$ định nghĩa bởi $f(x) = x^2$ **không** phải là `linear map` vì $f(x+y) = (x+y)^2 \ne x^2 + y^2 = f(x) + f(y)$.
    * Hàm $g: \mathbb{R} \to \mathbb{R}$ định nghĩa bởi $g(x) = x+1$ **không** phải là `linear map` vì $g(0) = 1 \ne 0$. (Một hệ quả của định nghĩa là mọi `linear map` phải biến `vector` không thành `vector` không).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Linear map` là sự hiện thân đại số của các phép biến đổi hình học bảo toàn cấu trúc "phẳng" của không gian. Nó không thể biến một đường thẳng thành một đường cong. Nó bảo toàn gốc tọa độ, các đường thẳng song song, và tâm của các hình.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Linear Layers in Neural Networks:** Một lớp tuyến tính (fully-connected layer) trong một mạng neural, trước khi đi qua hàm kích hoạt phi tuyến (như ReLU hay sigmoid), chính là một `linear map` (chính xác hơn là một `affine map`, tức một `linear map` cộng với một `vector` dịch chuyển). Trọng số của lớp này chính là ma trận biểu diễn cho `linear map` đó. Quá trình học chính là đi tìm một chuỗi các `linear map` tối ưu.

***

### **Không gian các Ánh xạ tuyến tính $L(V, W)$**

#### 1. Động lực / Vấn đề cần giải quyết:
Khi đã có các đối tượng là `linear map`, một câu hỏi tự nhiên trong toán học là: liệu tập hợp tất cả các đối tượng này có tự nó tạo thành một cấu trúc thú vị hay không? Cụ thể, ta có thể "cộng" hai `linear map` với nhau hoặc "co giãn" một `linear map` không? Nếu có, cấu trúc đó là gì?

#### 2. Khái niệm, Cách hiểu đơn giản:
Tập hợp tất cả các `linear map` đi từ không gian $V$ đến không gian $W$ tự nó lại là một **`vector space`**. Điều này có nghĩa là chúng ta có thể coi các phép biến đổi như là các `vector` và thực hiện các phép toán đại số trên chúng. Việc "cộng" hai phép biến đổi $S$ và $T$ chỉ đơn giản là thực hiện từng phép biến đổi rồi cộng kết quả lại.

#### 3. Định nghĩa toán học:
Tập hợp tất cả các `linear map` từ $V$ đến $W$ được ký hiệu là $L(V, W)$. Với $S, T \in L(V, W)$, ta định nghĩa phép cộng và nhân vô hướng như sau:
* **Sum:** $(S+T)(v) = S(v) + T(v)$
* **Scalar Multiplication:** $(\alpha T)(v) = \alpha T(v)$
Với hai phép toán này, $L(V, W)$ là một `vector space`.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Không gian $L(\mathbb{R}^n, \mathbb{R}^m)$ chính là không gian của tất cả các ma trận $m \times n$. `Dimension` của nó là $m \cdot n$.
    * $L(\mathcal{P}_3(\mathbb{R}), \mathbb{R})$ là không gian của các "phép đo" tuyến tính trên các đa thức bậc 3, ví dụ như phép "lấy giá trị tại điểm $x=0$" hay phép "lấy tích phân từ 0 đến 1".
* **Phản ví dụ:** Khái niệm này không có phản ví dụ vì nó là một định nghĩa xây dựng.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là một bước trừu tượng hóa quan trọng. Chúng ta đang thực hiện "giải tích trên các hàm số" (hoặc "đại số trên các phép biến đổi"). Khả năng xem xét toàn bộ không gian của các phép biến đổi là một ý tưởng nền tảng của giải tích hàm và lý thuyết toán tử.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Searching in Function Space:** Nhiều bài toán ML có thể được phát biểu như việc tìm kiếm một hàm (mô hình) tối ưu trong một không gian hàm nào đó. Ví dụ, trong hồi quy tuyến tính, chúng ta đang tìm một `linear map` tối ưu trong không gian $L(\mathbb{R}^n, \mathbb{R})$. Các thuật toán tối ưu như Gradient Descent có thể được xem như là các bước đi trong không gian các hàm (hoặc không gian các tham số biểu diễn cho các hàm đó).

***

### **Hạt nhân (Kernel) và Ảnh (Image)**

#### 1. Động lực / Vấn đề cần giải quyết:
Một `linear map` $T: V \to W$ biến đổi không gian $V$. Chúng ta muốn hiểu hai điều cơ bản về sự biến đổi này:
1.  **Thông tin bị mất:** Có những `vector` nào trong $V$ bị "triệt tiêu", tức là bị biến thành `vector` không trong $W$? Tập hợp này cho biết những gì bị mất đi trong phép biến đổi.
2.  **Phạm vi đầu ra:** Tập hợp tất cả các `vector` có thể có ở đầu ra trong $W$ là gì? Nó có lấp đầy toàn bộ $W$ hay chỉ một phần của nó?

#### 2. Khái niệm, Cách hiểu đơn giản:
* **`Kernel`** (hay `null space`): Là "hố đen" của phép biến đổi. Nó là tập hợp tất cả các `vector` đầu vào bị hút về `vector` không ở đầu ra.
* **`Image`** (hay `range`): Là "vùng ảnh hưởng" của phép biến đổi. Nó là tập hợp tất cả các `vector` đầu ra mà bạn có thể tạo ra được.

#### 3. Định nghĩa toán học:
Cho một `linear map` $T: V \to W$.
* **`Kernel`** của $T$ được định nghĩa là:
    $$\ker(T) = \{v \in V \mid T(v) = 0\}$$
    $\ker(T)$ là một `subspace` của $V$.
* **`Image`** của $T$ được định nghĩa là:
    $$\text{im}(T) = \{T(v) \mid v \in V\}$$
    $\text{im}(T)$ là một `subspace` của $W$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Xét phép chiếu $P: \mathbb{R}^3 \to \mathbb{R}^3$ định nghĩa bởi $P(x, y, z) = (x, y, 0)$.
    * `Kernel` của $P$ là tập hợp $\{(0, 0, z) \mid z \in \mathbb{R}\}$, tức là toàn bộ trục z.
    * `Image` của $P$ là tập hợp $\{(x, y, 0) \mid x, y \in \mathbb{R}\}$, tức là toàn bộ mặt phẳng xy.
* **Phản ví dụ:**
    * Cho ví dụ trên, `vector` $(1, 2, 3)$ **không** thuộc `kernel` của $P$ vì $P(1, 2, 3) = (1, 2, 0) \ne (0, 0, 0)$.
    * `Vector` $(1, 2, 3)$ **không** thuộc `image` của $P$ vì không có đầu vào nào có thể tạo ra nó.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
`Kernel` đại diện cho sự "co lại" hay "mất chiều" của không gian. Một `kernel` khác không có nghĩa là phép biến đổi không phải là đơn ánh (nhiều đầu vào cho cùng một đầu ra). `Image` cho thấy không gian đầu ra bị "bóp méo" hay "thu nhỏ" như thế nào. Nếu `image` không phải là toàn bộ không gian đích, phép biến đổi không phải là toàn ánh.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Information Bottleneck:** `Kernel` của một phép biến đổi đặc trưng (feature transformation) đại diện cho những thông tin trong dữ liệu đầu vào bị loại bỏ. Trong các kiến trúc như Autoencoder, "cổ chai" (bottleneck layer) có số chiều thấp hơn đầu vào, buộc mô hình phải học cách nén thông tin, tức là tạo ra một `kernel` không tầm thường để loại bỏ những thông tin dư thừa.
* **Solvability of Linear Systems:** Hệ phương trình tuyến tính $Ax=b$ có nghiệm khi và chỉ khi `vector` $b$ nằm trong `image` (column space) của ma trận $A$.

***

### **Định lý Hạng-Số chiều Hạt nhân (Rank-Nullity Theorem)**

#### 1. Động lực / Vấn đề cần giải quyết:
Chúng ta đã xác định hai `subspace` quan trọng: `kernel` (thông tin bị mất) và `image` (thông tin được giữ lại). Một câu hỏi tự nhiên là: có mối liên hệ nào giữa "kích thước" của những gì bị mất và "kích thước" của những gì được giữ lại không?

#### 2. Khái niệm, Cách hiểu đơn giản:
Đây là một **định luật bảo toàn số chiều**. Nó nói rằng số chiều của không gian đầu vào bằng tổng của số chiều bị "triệt tiêu" (số chiều của `kernel`) và số chiều của không gian đầu ra thực tế (số chiều của `image`). Bạn không thể tạo ra hay phá hủy `dimension` một cách tùy tiện; số chiều chỉ có thể được "chuyển hóa" từ không gian đầu vào sang `kernel` hoặc `image`.

#### 3. Định nghĩa toán học:
**Rank-Nullity Theorem:** Cho $V$ là một `vector space` hữu hạn chiều và $T \in L(V, W)$. Khi đó, `image` của $T$ cũng hữu hạn chiều và ta có:
$$\dim(V) = \dim(\ker(T)) + \dim(\text{im}(T))$$
Số $\dim(\text{im}(T))$ được gọi là **`rank`** của $T$, và $\dim(\ker(T))$ được gọi là **`nullity`** của $T$.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Xét lại phép chiếu $P: \mathbb{R}^3 \to \mathbb{R}^3$ với $P(x, y, z) = (x, y, 0)$.
    * $\dim(\mathbb{R}^3) = 3$.
    * $\ker(P)$ là trục z, nên $\dim(\ker(P)) = 1$ (`nullity`).
    * $\text{im}(P)$ là mặt phẳng xy, nên $\dim(\text{im}(P)) = 2$ (`rank`).
    * Ta có $3 = 1 + 2$. Định lý được thỏa mãn.
* **Phản ví dụ:**
    * Định lý này chỉ áp dụng cho không gian nguồn $V$ hữu hạn chiều. Đối với các không gian vô hạn chiều (như không gian các hàm số), nó có thể không đúng.

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Định lý này là một công cụ định lượng mạnh mẽ để hiểu cấu trúc của các `linear map`. Nó cho biết rằng một `linear map` càng "triệt tiêu" nhiều (`kernel` càng lớn) thì không gian đầu ra của nó càng "nhỏ" (`image` càng nhỏ), và ngược lại, tuân theo một quy luật bảo toàn chặt chẽ.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Matrix Factorization and Compression:** Các kỹ thuật như SVD phân tích một ma trận (đại diện cho một `linear map`) thành các thành phần. `Rank` của ma trận cho biết số chiều "hiệu dụng" của dữ liệu. Các phương pháp xấp xỉ ma trận hạng thấp (low-rank approximation) dựa trên định lý này để nén dữ liệu bằng cách loại bỏ các chiều tương ứng với `kernel` (hoặc gần `kernel`) trong khi vẫn giữ lại các chiều quan trọng nhất trong `image`.

***

### **Không gian Vector đẳng cấu (Isomorphic Vector Spaces)**

#### 1. Động lực / Vấn đề cần giải quyết:
Ta thấy có nhiều `vector space` trông rất khác nhau: không gian các `vector` cột $\mathbb{R}^4$, không gian các đa thức bậc 3 $\mathcal{P}_3(\mathbb{R})$, không gian các ma trận $2 \times 2$. Tuy nhiên, chúng đều có "kích thước" là 4. Liệu chúng có thực sự khác nhau, hay chỉ là những "cách viết" khác nhau của cùng một cấu trúc cơ bản?

#### 2. Khái niệm, Cách hiểu đơn giản:
Hai `vector space` được gọi là **`isomorphic`** (đẳng cấu) nếu chúng "giống hệt nhau" về mặt cấu trúc đại số tuyến tính. Tồn tại một "phép dịch" hoàn hảo (một `linear map` song ánh) giữa chúng, cho phép ta đối chiếu 1-1 mọi `vector` và mọi phép toán mà không làm mất mát thông tin. Về cơ bản, chúng chỉ là những "bộ trang phục" khác nhau cho cùng một cơ thể.

#### 3. Định nghĩa toán học:
Một `linear map` $T: V \to W$ được gọi là một **`isomorphism`** nếu nó là song ánh (vừa là đơn ánh, vừa là toàn ánh).
Hai `vector space` $V$ và $W$ được gọi là **`isomorphic`** nếu tồn tại một `isomorphism` giữa chúng.
**Định lý phân loại:** Hai `vector space` hữu hạn chiều trên cùng một `field` là `isomorphic` khi và chỉ khi chúng có cùng `dimension`.

#### 4. Ví dụ và Phản ví dụ:
* **Ví dụ:**
    * Không gian $\mathcal{P}_3(\mathbb{R})$ là `isomorphic` với $\mathbb{R}^4$ qua ánh xạ $a+bx+cx^2+dx^3 \mapsto (a, b, c, d)$.
    * Không gian ma trận $M_{2 \times 2}(\mathbb{R})$ cũng `isomorphic` với $\mathbb{R}^4$.
* **Phản ví dụ:**
    * $\mathbb{R}^2$ không `isomorphic` với $\mathbb{R}^3$ vì chúng có `dimension` khác nhau.
    * Không gian các đa thức $\mathcal{P}(\mathbb{R})$ (vô hạn chiều) không `isomorphic` với $\mathbb{R}^n$ (hữu hạn chiều).

#### 5. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Đây là một định lý phân loại cực kỳ mạnh mẽ. Nó nói rằng, về mặt trừu tượng, chỉ có một loại `vector space` $n$-chiều duy nhất trên một `field` cho trước. Mọi không gian khác có cùng `dimension` chỉ là một cách "dán nhãn" khác cho các phần tử của $\mathbb{R}^n$. Điều này cho phép chúng ta nghiên cứu $\mathbb{R}^n$ và áp dụng các kết quả cho mọi không gian $n$-chiều khác.

#### 6. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Data Representation:** Nguyên lý này là nền tảng cho việc chúng ta có thể biểu diễn hầu hết mọi loại dữ liệu—hình ảnh, văn bản, âm thanh, các nước đi trong một ván cờ—dưới dạng các `vector` trong $\mathbb{R}^n$ để đưa vào các thuật toán học máy. Miễn là tồn tại một phép `isomorphism` (hoặc một phép nhúng hợp lý) từ không gian dữ liệu gốc vào $\mathbb{R}^n$, các thuật toán có thể hoạt động hiệu quả. Việc thiết kế các phép nhúng (`embedding`) tốt chính là một trong những nhiệm vụ cốt lõi của ML hiện đại.