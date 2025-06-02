# Phương pháp Newton 

## ⚙️ Phương pháp Newton là gì?

Trong toán học và các lĩnh vực kỹ thuật, khoa học, tài chính..., chúng ta thường gặp bài toán tìm nghiệm của một phương trình phi tuyến:

$$
f(x) = 0
$$

Tuy nhiên, không phải lúc nào cũng có thể giải được phương trình này bằng các phương pháp đại số (như phân tích, đặt ẩn phụ, biến đổi). Nhiều phương trình không có nghiệm biểu diễn dưới dạng số hữu tỉ hay căn thức, ví dụ:

- $x^2−2=0$ (nghiệm là $\sqrt{2}$)
- $cos⁡(x)−x=0$
- $e^{−x}−x=0$  

Trong các trường hợp đó, ta cần dùng **phương pháp gần đúng (phương pháp số)** để tìm nghiệm **xấp xỉ** với độ chính xác mong muốn Một trong những phương pháp mạnh mẽ và phổ biến nhất để làm điều này là:
Phương pháp Newton (Newton-Raphson) là một **phương pháp số** để tìm **nghiệm gần đúng của phương trình phi tuyến** dạng: $f(x) = 0$

## ✅ Khi nào sử dụng phương pháp Newton?
- Khi bạn cần tìm nghiệm thực (hoặc gần đúng) của một **hàm phi tuyến**.
- Khi có thể **tính đạo hàm của hàm số** $f(x)$.
- Khi nghiệm không thể tìm bằng cách giải đại số thông thường.

## 🧠 Công thức lặp của Newton

Từ khai triển Taylor, ta có công thức lặp Newton:
$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

## 🔁 Cách sử dụng

1. Chọn **giá trị ban đầu** $x_0$ (gần với nghiệm).
2. Tính đạo hàm $f'(x)$.
3. Áp dụng công thức lặp nhiều lần cho đến khi hội tụ:
$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$

4. Dừng lại khi $|x_{n+1} - x_n|$ nhỏ hơn một ngưỡng nhất định (ví dụ $10^{-6}$).



## 📘 Ví dụ cụ thể

Giải phương trình:

$f(x) = x^2 - 2 = 0$

Ta biết nghiệm là $\sqrt{2} \approx 1.4142$

### 1. Đặt hàm và đạo hàm:

$f(x) = x^2 - 2 \\f'(x) = 2x$

### 2. Chọn giá trị ban đầu:

$x_0 = 1$

### 3. Áp dụng công thức Newton:

### Lặp 1:

$x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} = 1 - \frac{1^2 - 2}{2 \cdot 1} = 1 - \frac{-1}{2} = 1.5$

### Lặp 2:

$x_2 = 1.5 - \frac{1.5^2 - 2}{2 \cdot 1.5} = 1.5 - \frac{0.25}{3} = 1.4167$

### Lặp 3:

$x_3 = 1.4167 - \frac{1.4167^2 - 2}{2 \cdot 1.4167} \approx 1.4142$

→ Gần đúng với $\sqrt{2}$.

---

## ⚠️ Lưu ý

- Phương pháp Newton hội tụ rất nhanh **nếu** chọn được $x_0$ đủ gần nghiệm.
- Tuy nhiên, **nếu đạo hàm bằng 0** tại một điểm, hoặc $f'(x)$ gần bằng 0, phương pháp có thể bị **phân kỳ**.

---
