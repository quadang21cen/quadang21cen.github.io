---
sidebar_position: 1
---
# Chương 8: Không gian Metric (Metric Spaces)

*Phần này tổng quát hóa các khái niệm quen thuộc về khoảng cách, sự hội tụ và tính liên tục từ không gian Euclid $ \mathbb{R}^n $ sang các tập hợp trừu tượng hơn, chẳng hạn như không gian của các hàm số hoặc các dãy số.*

***

### **Định nghĩa Metric Space và các ví dụ**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một `metric` đơn giản là một hàm số đo "khoảng cách" giữa hai phần tử bất kỳ trong một tập hợp. Nó tuân theo những quy tắc rất trực quan mà chúng ta mặc định thừa nhận khi dùng thước kẻ: khoảng cách không bao giờ âm, khoảng cách từ một điểm đến chính nó là 0, đi từ A đến B cũng như từ B đến A, và đường thẳng luôn là đường ngắn nhất (bất đẳng thức tam giác). Một tập hợp được trang bị một "thước đo" như vậy được gọi là một `metric space`.

#### 2. Định nghĩa toán học:
Một **`metric space`** là một cặp $(X, d)$, trong đó $X$ là một tập hợp và $d: X \times X \to \mathbb{R}$ là một hàm `metric` thỏa mãn 4 tiên đề sau với mọi $x, y, z \in X$:
1.  **Non-negativity:** $d(x, y) \ge 0$
2.  **Identity:** $d(x, y) = 0 \iff x = y$
3.  **Symmetry:** $d(x, y) = d(y, x)$
4.  **Triangle Inequality:** $d(x, z) \le d(x, y) + d(y, z)$

**Các ví dụ:**
* **Không gian Euclid:** $X = \mathbb{R}^n$ với metric Euclid $d(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}$.
* **Không gian hàm liên tục:** $X = C[a, b]$ với metric supremum $d(f, g) = \max_{t \in [a,b]} |f(t) - g(t)|$.
* **Không gian dãy:** $X = \ell_p$ với metric $d(x, y) = (\sum_{i=1}^\infty |x_i - y_i|^p)^{1/p}$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Ý nghĩa hình học cốt lõi của một `metric` nằm ở **Bất đẳng thức tam giác**. Nó mã hóa khái niệm "đường thẳng là con đường ngắn nhất" vào một cấu trúc trừu tượng. Toàn bộ các khái niệm về "lân cận" (hình cầu mở), "ranh giới", và "sự gần gũi" đều được xây dựng dựa trên tiên đề nền tảng này. Việc có nhiều loại metric khác nhau (Euclid, Manhattan) trên cùng một tập hợp cho thấy "hình học" của không gian đó có thể thay đổi tùy thuộc vào cách ta định nghĩa "khoảng cách".

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
Khái niệm `metric` là trái tim của các thuật toán dựa trên "sự tương tự" hoặc "sự gần gũi".
* **K-Nearest Neighbors (KNN):** Thuật toán này phân loại một điểm dữ liệu mới dựa trên các điểm láng giềng gần nó nhất. Việc chọn `metric` nào (ví dụ: Euclidean distance cho dữ liệu ảnh, Hamming distance cho dữ liệu chuỗi) để đo "khoảng cách" giữa các điểm dữ liệu sẽ quyết định trực tiếp đến hiệu quả của mô hình.
* **Clustering (Phân cụm):** Các thuật toán như K-Means tìm cách nhóm các điểm dữ liệu vào các cụm sao cho khoảng cách giữa các điểm trong cùng một cụm là nhỏ nhất. Hàm khoảng cách `metric` chính là tiêu chuẩn để tối ưu hóa.

***

### **Các khái niệm Topo trong Metric Space**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một khi đã có "khoảng cách", chúng ta có thể định nghĩa các khái niệm về "không gian" xung quanh một điểm. Một **tập mở** là một tập hợp mà mỗi điểm bên trong nó đều có một "vùng an toàn" nhỏ xung quanh, không chạm vào biên. Ngược lại, một **tập đóng** là tập hợp đã bao gồm cả đường biên của chính nó. **Sự hội tụ** của một dãy điểm chỉ đơn giản là việc khoảng cách từ các điểm trong dãy đến một điểm giới hạn tiến dần về 0.

#### 2. Định nghĩa toán học:
Cho một `metric space` $(X, d)$:
* **Open ball (Quả cầu mở):** $B(x, r) = \{y \in X \mid d(x, y) < r\}$.
* **Open set (Tập mở):** Một tập $U \subseteq X$ là tập mở nếu với mọi $x \in U$, tồn tại $r > 0$ sao cho $B(x, r) \subseteq U$.
* **Closed set (Tập đóng):** Một tập $F \subseteq X$ là tập đóng nếu phần bù của nó, $X \setminus F$, là một tập mở.
* **Convergence (Hội tụ):** Một dãy $\{x_n\}$ hội tụ về $x$ nếu $\lim_{n \to \infty} d(x_n, x) = 0$.
* **Continuity (Tính liên tục):** Một hàm $f: (X, d_X) \to (Y, d_Y)$ là liên tục tại $x_0$ nếu với mọi $\epsilon > 0$, tồn tại $\delta > 0$ sao cho $d_X(x, x_0) < \delta \implies d_Y(f(x), f(x_0)) < \epsilon$.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Các khái niệm này tạo nên "cấu trúc topo" của không gian. Chúng cho phép ta nói về hình dạng, sự liên kết và các tính chất biến dạng của không gian mà không cần đến hệ tọa độ. Một tập mở giống như một vùng không có "da", trong khi một tập đóng thì có cả "da". Sự hội tụ mô tả hành vi của các điểm khi chúng tiến lại gần nhau vô hạn.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Loss Landscape (Bề mặt hàm mất mát):** Trong các mô hình học sâu, không gian của tất cả các trọng số có thể được xem như một `metric space`. Hàm mất mát (loss function) là một hàm trên không gian này. Quá trình training là một dãy các điểm (bộ trọng số) hội tụ về một điểm giới hạn (cực tiểu của hàm mất mát). Việc bề mặt hàm mất mát có nhiều "thung lũng" (tập mở chứa các điểm cực tiểu) ảnh hưởng đến sự ổn định của thuật toán tối ưu.

***

### **Dãy Cauchy và Không gian đầy đủ (Complete Metric Spaces)**

#### 1. Khái niệm, Cách hiểu đơn giản:
Một **dãy Cauchy** là một dãy mà các phần tử của nó ngày càng "túm tụm" lại gần nhau, đến mức khoảng cách giữa hai phần tử bất kỳ ở rất xa trong dãy có thể nhỏ tùy ý. Một không gian được gọi là **đầy đủ (complete)** nếu nó không có "lỗ hổng". Nghĩa là, mọi dãy Cauchy trong không gian đó đều chắc chắn sẽ hội tụ về một điểm nào đó *nằm ngay trong không gian đó*. Ví dụ, tập số hữu tỉ $\mathbb{Q}$ không đầy đủ vì có một dãy số hữu tỉ hội tụ về $\pi$, nhưng $\pi$ lại không phải số hữu tỉ (một "lỗ hổng").

#### 2. Định nghĩa toán học:
* **Dãy Cauchy:** Một dãy $\{x_n\}$ trong $(X, d)$ là một dãy Cauchy nếu với mọi $\epsilon > 0$, tồn tại một số tự nhiên $N$ sao cho với mọi $m, n > N$, ta có $d(x_m, x_n) < \epsilon$.
* **Complete Space:** Một `metric space` $(X, d)$ được gọi là `complete` nếu mọi dãy Cauchy trong $X$ đều hội tụ về một giới hạn nằm trong $X$.
* **Nguyên lý ánh xạ co (Contraction Mapping Principle):** Nếu $(X, d)$ là một `complete metric space` và $T: X \to X$ là một ánh xạ co (tức là $d(T(x), T(y)) \le k \cdot d(x, y)$ với $0 \le k < 1$), thì $T$ có một điểm bất động duy nhất.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Tính đầy đủ là một tính chất giải tích, không hoàn toàn là hình học. Nó đảm bảo rằng không gian của chúng ta "liền mạch". Các quá trình giới hạn, vốn là nền tảng của giải tích, sẽ luôn cho ra kết quả hợp lệ. Nếu không có tính đầy đủ, các phép toán như tích phân hay giải phương trình vi phân sẽ không được định nghĩa một cách chặt chẽ.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Chứng minh sự hội tụ của thuật toán:** Rất nhiều thuật toán tối ưu trong ML có thể được xem như việc áp dụng lặp đi lặp lại một ánh xạ $T$ lên một vector tham số. Nguyên lý ánh xạ co cung cấp một công cụ mạnh mẽ để chứng minh rằng một thuật toán chắc chắn sẽ hội tụ về một nghiệm duy nhất, ví dụ trong các bài toán về học tăng cường (Reinforcement Learning) với phương trình Bellman.

***

### **Tính Compact**

#### 1. Khái niệm, Cách hiểu đơn giản:
Tính `compact` là một sự tổng quát hóa trừu tượng của tính chất "đóng và bị chặn" trong không gian Euclid $\mathbb{R}^n$. Một tập `compact` là một tập hợp "nhỏ bé" về mặt topo. Nó không thể "chạy ra vô tận" (bị chặn) và nó cũng chứa tất cả các điểm biên của nó (đóng). Tính chất quan trọng nhất là: mọi dãy vô hạn các điểm trong một tập `compact` đều có một dãy con "tụ lại" tại một điểm nào đó cũng trong tập đó.

#### 2. Định nghĩa toán học:
* **Sequential Compactness:** Một `metric space` $(X, d)$ được gọi là `sequentially compact` nếu mọi dãy trong $X$ đều chứa một dãy con hội tụ.
* *Lưu ý:* Trong không gian metric, `compactness` (dựa trên phủ mở) và `sequential compactness` là tương đương.

#### 3. Ý nghĩa hình học, hoặc ý nghĩa nào đó:
Về mặt hình học, một tập `compact` là một tập mà bạn có thể "phủ" nó bằng một số hữu hạn các "mảnh vá" (quả cầu mở) nhỏ tùy ý. Nó không có cách nào "trốn thoát" ra ngoài. Đây là một dạng "hữu hạn" về mặt topo.

#### 4. Ứng dụng trong Machine Learning, Deep Learning, hoặc AI:
* **Sự tồn tại của nghiệm tối ưu:** Định lý Giá trị Cực trị (Extreme Value Theorem) phát biểu rằng một hàm liên tục trên một tập `compact` chắc chắn sẽ đạt được giá trị lớn nhất và nhỏ nhất. Trong ML, nếu chúng ta có thể giới hạn không gian tìm kiếm các tham số của mô hình vào một tập `compact`, và hàm mất mát là một hàm liên tục, thì chúng ta được đảm bảo rằng tồn tại một bộ tham số cho ra giá trị mất mát nhỏ nhất toàn cục (global minimum).