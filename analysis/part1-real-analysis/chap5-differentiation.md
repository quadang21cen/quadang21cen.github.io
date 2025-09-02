---
sidebar_position: 5
---

# Chương 5: Phép tính vi phân (Differentiation)

Trong chương này, chúng ta sẽ định nghĩa một cách chặt chẽ khái niệm "tốc độ thay đổi tức thời" hay "độ dốc tại một điểm". Đây là chìa khóa để giải quyết vô số bài toán từ vật lý, kinh tế cho đến khoa học máy tính. Chúng ta sẽ khám phá các định lý nền tảng cho phép liên kết hành vi cục bộ (tại một điểm) với hành vi toàn cục (trên một khoảng) của hàm số.

***

### **Định nghĩa đạo hàm (derivative) và các quy tắc tính**

#### 1. Khái niệm, Cách hiểu đơn giản:
**Đạo hàm (derivative)** của một hàm số tại một điểm cho chúng ta biết hai điều tương đương:
1.  **Tốc độ thay đổi tức thời:** Nếu hàm số mô tả quãng đường theo thời gian, đạo hàm chính là vận tốc của bạn ngay tại một thời điểm cụ thể.
2.  **Độ dốc của đồ thị:** Nếu bạn đang đứng trên đồ thị của hàm số tại một điểm, đạo hàm chính là độ dốc của mặt đất ngay dưới chân bạn.
Về cơ bản, đạo hàm đo lường "mức độ dốc" hay "tốc độ thay đổi" của hàm số tại một điểm duy nhất.

#### 2. Định nghĩa toán học:
**Đạo hàm (derivative)** của hàm số $f$ tại điểm $c$, ký hiệu là $f'(c)$, được định nghĩa là giới hạn (nếu tồn tại):
$f'(c) = \lim_{h \to 0} \frac{f(c+h) - f(c)}{h}$
Một hàm số được gọi là **khả vi (differentiable)** tại $c$ nếu đạo hàm $f'(c)$ tồn tại.

**Các quy tắc tính đạo hàm cơ bản:**
* **Quy tắc tổng/hiệu:** $(f \pm g)' = f' \pm g'$
* **Quy tắc tích (Product Rule):** $(f \cdot g)' = f'g + fg'$
* **Quy tắc thương (Quotient Rule):** $(\frac{f}{g})' = \frac{f'g - fg'}{g^2}$
* **Quy tắc chuỗi (Chain Rule):** $(f(g(x)))' = f'(g(x)) \cdot g'(x)$

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

Ý nghĩa hình học của đạo hàm $f'(c)$ chính là **hệ số góc của đường tiếp tuyến** với đồ thị của hàm số $y=f(x)$ tại điểm $(c, f(c))$. Nó cho biết hướng và độ dốc của đồ thị tại chính xác điểm đó. Một đạo hàm dương nghĩa là hàm số đang đi lên (đồng biến), đạo hàm âm nghĩa là hàm số đang đi xuống (nghịch biến), và đạo hàm bằng không cho thấy một điểm "bằng phẳng" (điểm cực trị hoặc điểm uốn).

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Đây là khái niệm **quan trọng nhất** trong `deep learning`. Toàn bộ quá trình huấn luyện một mạng neural dựa vào **thuật toán lan truyền ngược (backpropagation)**, về bản chất là một cách hiệu quả để tính đạo hàm của hàm mất mát (`loss function`) theo từng trọng số trong mạng bằng cách áp dụng lặp đi lặp lại **Quy tắc chuỗi (Chain Rule)**. Đạo hàm này (trong không gian nhiều chiều gọi là **gradient**) chỉ ra hướng "dốc nhất" của hàm mất mát, và thuật toán **Gradient Descent** chỉ đơn giản là đi một bước nhỏ theo hướng ngược lại để giảm thiểu sai số của mô hình.

***

### **Định lý Rolle và Định lý giá trị trung bình (Mean Value Theorem)**

#### 1. Khái niệm, Cách hiểu đơn giản:
* **Định lý Rolle (Rolle's Theorem):** Nếu bạn bắt đầu và kết thúc một chuyến đi (trên một con đường trơn tru) tại cùng một độ cao, thì chắc chắn phải có ít nhất một khoảnh khắc trong chuyến đi mà bạn đang di chuyển trên một mặt phẳng hoàn toàn nằm ngang (độ dốc bằng 0).
* **Định lý giá trị trung bình (Mean Value Theorem - MVT):** Nếu bạn lái xe từ Hà Nội đến Hải Phòng với vận tốc trung bình là 100 km/h, thì chắc chắn phải có ít nhất một khoảnh khắc trong chuyến đi mà đồng hồ tốc độ của bạn chỉ chính xác 100 km/h. Định lý này liên kết "tốc độ thay đổi trung bình" trên cả một quãng đường với "tốc độ thay đổi tức thời" tại một thời điểm nào đó.

#### 2. Định nghĩa toán học:
* **Định lý Rolle:** Giả sử hàm số $f$ liên tục trên đoạn đóng $[a, b]$, khả vi trên khoảng mở $(a, b)$, và $f(a) = f(b)$. Khi đó, tồn tại ít nhất một điểm $c \in (a, b)$ sao cho $f'(c) = 0$.
* **Định lý giá trị trung bình (MVT):** Giả sử hàm số $f$ liên tục trên đoạn đóng $[a, b]$ và khả vi trên khoảng mở $(a, b)$. Khi đó, tồn tại ít nhất một điểm $c \in (a, b)$ sao cho:
    $f'(c) = \frac{f(b) - f(a)}{b - a}$

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:

* **Định lý Rolle:** Nếu một đường cong trơn tru có hai điểm đầu mút cùng độ cao, thì phải có ít nhất một điểm ở giữa mà tại đó đường tiếp tuyến nằm ngang.
* **Định lý giá trị trung bình (MVT):** Với một đường cong trơn tru bất kỳ, luôn tồn tại ít nhất một điểm trên đường cong mà tại đó đường tiếp tuyến **song song** với đường thẳng nối hai điểm đầu mút của đường cong (đường cát tuyến).

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
MVT là một công cụ lý thuyết cực kỳ quan trọng để chứng minh sự hội tụ của các thuật toán tối ưu hóa. Ví dụ, nó được dùng để chứng minh tốc độ hội tụ của `gradient descent`. Bằng cách áp dụng MVT cho hàm mất mát, các nhà nghiên cứu có thể đặt ra các giới hạn (bounds) về mức độ cải thiện của hàm mất mát sau mỗi bước cập nhật, từ đó chứng minh rằng thuật toán chắc chắn sẽ tiến gần đến điểm tối ưu.

***

### **Quy tắc L'Hôpital**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là một công cụ toán học để giải quyết các giới hạn "khó nhằn" có dạng không xác định như $\frac{0}{0}$ hoặc $\frac{\infty}{\infty}$. Hãy tưởng tượng tử số và mẫu số là hai tay đua cùng tiến về vạch đích 0 (hoặc cùng chạy ra vô cực). Ai thắng cuộc đua? Quy tắc L'Hôpital nói rằng, trong nhiều trường hợp, giới hạn của tỉ số giữa hai hàm số này bằng với giới hạn của tỉ số giữa **vận tốc** của chúng (tức là đạo hàm của chúng).

#### 2. Định nghĩa toán học:
Giả sử $\lim_{x \to c} f(x) = \lim_{x \to c} g(x) = 0$ (hoặc cả hai cùng tiến ra $\pm\infty$). Nếu giới hạn $\lim_{x \to c} \frac{f'(x)}{g'(x)}$ tồn tại, thì:
$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Khi hai đường cong $y=f(x)$ và $y=g(x)$ cùng đi qua gốc tọa độ $(0,0)$, tỉ lệ giữa chúng ở rất gần gốc tọa độ sẽ được xấp xỉ bằng tỉ lệ giữa độ dốc của chúng tại đó. Đường cong nào có tiếp tuyến "dốc hơn" (đạo hàm lớn hơn) sẽ "chiến thắng" trong cuộc đua tiến về 0.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Quy tắc L'Hôpital không được dùng trực tiếp trong các vòng lặp huấn luyện, nhưng nó là công cụ lý thuyết để phân tích hành vi của các hàm kích hoạt và hàm mất mát trong các trường hợp giới hạn. Ví dụ, để hiểu tại sao hàm `softmax` (dùng trong các bài toán phân loại nhiều lớp) hoạt động ổn định về mặt số học khi các giá trị đầu vào rất lớn, người ta phải phân tích các giới hạn có dạng $\frac{\infty}{\infty}$, và quy tắc này cung cấp nền tảng cho các phép biến đổi đó.

***

### **Định lý Taylor**

#### 1. Khái niệm, Cách hiểu đơn giản:
Đây là một trong những ý tưởng mạnh mẽ nhất trong toán học ứng dụng. Nó nói rằng hầu hết các hàm số "trơn tru" đều có thể được **xấp xỉ** tại một điểm bằng một đa thức. Đa thức này càng có nhiều số hạng thì xấp xỉ càng chính xác.
* Xấp xỉ bậc 0: là một hằng số.
* Xấp xỉ bậc 1: là một đường thẳng (đường tiếp tuyến).
* Xấp xỉ bậc 2: là một đường parabol ôm sát đường cong.
* ...và cứ thế.
Định lý Taylor cho chúng ta công thức để xây dựng "bản sao đa thức" này của một hàm số tại một điểm bất kỳ.

#### 2. Định nghĩa toán học:
Nếu hàm số $f$ có đạo hàm đến cấp $(n+1)$ trên một lân cận của điểm $a$, thì với mọi $x$ trong lân cận đó, ta có thể viết:
$f(x) = f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + R_n(x)$
trong đó $P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$ là **đa thức Taylor** bậc $n$ của $f$ tại $a$, và $R_n(x)$ là **phần dư**, biểu thị cho sai số của phép xấp xỉ.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Định lý Taylor cho phép chúng ta "phóng to" một cách vô hạn vào một điểm trên đồ thị. Ở mức độ phóng to đủ lớn, mọi đường cong trơn tru đều trông giống như một đường thẳng (xấp xỉ bậc 1). Nếu ta nhìn kỹ hơn, nó sẽ có độ cong của một parabol (xấp xỉ bậc 2), và cứ thế. Mỗi số hạng trong chuỗi Taylor thêm một mức độ chi tiết vào bức tranh xấp xỉ của chúng ta.

#### 4. Ứng dụng trong Machine Learning, Deep learning, hoặc AI …:
Định lý Taylor là nền tảng lý thuyết của hầu hết các thuật toán tối ưu hóa hiện đại.
* **Gradient Descent** về cơ bản là một phương pháp tối ưu hóa dựa trên **xấp xỉ Taylor bậc nhất**. Nó giả định rằng hàm mất mát tại vị trí hiện tại có thể được xấp xỉ bằng một mặt phẳng (đường thẳng trong 1D) và di chuyển theo hướng dốc nhất của mặt phẳng đó.
* Các phương pháp tối ưu hóa **bậc hai** như **phương pháp Newton** sử dụng **xấp xỉ Taylor bậc hai** (một mặt paraboloid) để mô hình hóa hàm mất mát. Điều này cho phép thuật toán "nhảy" thẳng đến gần điểm cực tiểu của paraboloid đó, giúp hội tụ nhanh hơn nhiều so với `gradient descent` trong nhiều trường hợp.