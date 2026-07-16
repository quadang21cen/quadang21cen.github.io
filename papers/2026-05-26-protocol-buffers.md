---
slug: protocol-buffers
title: Simple Explanation - Protocol Buffers
authors: [quachdang]
tags: [computer-science]
date: 2026-05-26
---

Khi kiến trúc Microservices lên ngôi, hàng trăm service giao tiếp với nhau mỗi giây, mỗi ms đều được tính toán kĩ lưỡng, hệ thống cần phải truyền tải dữ liệu giữa các service với nhau một cách hiệu quả nhất, thì việc chọn loại định dạng dữ liệu để truyền tải dữ liệu trở nên quan trọng hơn bao giờ hết.



<!-- truncate -->

JSON (JavaScript Object Notation) từ lâu đã là tiêu chuẩn vàng vì tính dễ đọc. Tuy nhiên, khi hệ thống phình to, JSON bộc lộ rõ điểm yếu chí mạng: nó quá nặng và chậm. Để truyền tải một con số `1` nhỏ bé, JSON bắt bạn phải gửi đi một loạt các ký tự dư thừa như dấu ngoặc nhọn, dấu ngoặc kép, dấu hai chấm và tên trường (field name) dưới dạng text thuần (plain text). Với máy tính, việc phải đọc chuỗi string, tìm dấu `:`, và parse text thành số là một quá trình cực kỳ lãng phí tài nguyên.

Đó là lúc Google Protocol Buffers (Protobuf) xuất hiện như một vị cứu tinh. Protobuf tước bỏ mọi sự màu mè của thế giới loài người, biên dịch dữ liệu thành luồng nhị phân (binary) tinh gọn nhất để máy tính "hiểu" nhau ngay lập tức.

---

## 1. Đi Sâu Vào Cơ Chế Nén

Sức mạnh nén dữ liệu của Protobuf dựa trên ba phần cốt lõi: Varints, ZigZag Encoding và Cấu trúc Key-Length-Value.

### A. Thuật toán Varints (Variable-Length Quantized Integers)

Trong các kiểu dữ liệu truyền thống như `Int32` hay `Int64`, máy tính luôn cấp phát một lượng bộ nhớ cố định (4 bytes hoặc 8 bytes) bất kể con số bên trong nhỏ đến mức nào.
Giả sử bạn muốn lưu số `1` bằng kiểu `Int32`, máy tính sẽ lưu dưới dạng nhị phân 32-bit như sau:

```text
00000000 00000000 00000000 00000001

```

Bạn có thể thấy chúng ta đang lãng phí tới 3 bytes (24 số `0` vô nghĩa) chỉ để lưu một giá trị cực nhỏ. **Varints** ra đời để giải quyết sự lãng phí này: số càng nhỏ, dung lượng càng ít. Varints có thể co giãn từ 1 byte cho đến 5 bytes (đối với Int32).

**Cách Varints hoạt động:**
Nó sử dụng bit ngoài cùng bên trái của mỗi byte — gọi là **MSB (Most Significant Bit)** — làm "biển chỉ đường".

* Nếu $\text{MSB} = 1$: Báo cho máy tính biết "Khoan dừng lại, dữ liệu vẫn còn ở byte tiếp theo".
* Nếu $\text{MSB} = 0$: Báo hiệu "Đây là byte cuối cùng của con số này rồi, tổng hợp lại đi".

Bảy bit còn lại (từ bit 0 đến bit 6) trong mỗi byte mới thực sự dùng để lưu trữ dữ liệu (payload). Ví dụ, số `1` trong Varints chỉ tốn đúng 1 byte:

```text
00000001
^
MSB = 0 (Byte cuối cùng, không cần đọc thêm)

```

### B. Thuật toán ZigZag Encoding (Xử lý số âm)

Varints rất tuyệt vời với số dương, nhưng nó sẽ phá sản hoàn toàn nếu gặp số âm. Tại sao?

Máy tính biểu diễn số âm bằng hệ thống **Bù 2 (Two's complement)**. Trong hệ thống này, bit đầu tiên luôn là `1`. Ví dụ, số `-1` ở kiểu Int32 được biểu diễn toàn bit `1`:

```text
11111111 11111111 11111111 11111111

```

Nếu đưa chuỗi này qua Varints, thuật toán sẽ nhầm tưởng đây là một số nguyên dương khổng lồ và kéo dài nó ra tới tận 5 bytes (hoặc 10 bytes với kiểu 64-bit), làm mất hoàn toàn ý nghĩa của việc nén.

Để xử lý, Protobuf sử dụng **ZigZag Encoding**. Thuật toán này sẽ "bẻ thẳng" dải số nguyên (cả âm và dương) thành các số dương không dấu, bằng cách đan xen chúng vào nhau theo quy luật:

* $0 \rightarrow 0$
* $-1 \rightarrow 1$
* $1 \rightarrow 2$
* $-2 \rightarrow 3$
* $2 \rightarrow 4$

Những số âm có giá trị tuyệt đối nhỏ sẽ được ánh xạ thành những số dương nhỏ, từ đó có thể dùng Varints để nén xuống 1 byte. Công thức toán học (sử dụng phép dịch bit) để tạo ra ZigZag cho hệ 32-bit là:

$$ \text{ZigZag}(n) = (n \ll 1) \oplus (n \gg 31) $$

*(Trong đó `<<` là dịch trái, `>>` là dịch phải có dấu, và `^` / $\oplus$ là phép XOR)*.

### C. Cấu trúc Key-Length-Value (Thay thế cho JSON)

Trong JSON, mọi dữ liệu đều đi kèm một cái "nhãn" text, ví dụ: `"first_name": "Dang"`. Việc lặp lại chữ `first_name` hàng triệu lần qua mạng là một thảm họa băng thông.

Protobuf loại bỏ hoàn toàn tên thuộc tính. Khi bạn viết file `.proto`, bạn phải gán cho mỗi trường một con số định danh gọi là **Field Number** (hay Tag):

```protobuf
message User {
  int32 id = 1; // Field Number là 1
}

```

Khi nén thành nhị phân, Protobuf chỉ gửi đi dữ liệu theo cấu trúc tuần tự, mở đầu bằng một **Key**. Máy tính đọc Key này sẽ biết ngay mình đang đối mặt với trường số mấy, và phải đọc nó như thế nào nhờ vào **Wire Type** (kiểu dây chuyền). Ví dụ: Wire Type `0` là Varint, `2` là chuỗi (String/Bytes) có độ dài xác định.

Protobuf gộp Field Number và Wire Type thành một byte duy nhất (Key) bằng công thức:

$$ \text{Key} = (\text{Field Number} \ll 3) \ | \ \text{Wire Type} $$

Máy tính cứ thế mà đọc luồng nhị phân: Gặp Key $\rightarrow$ Xem độ dài (Length, nếu có) $\rightarrow$ Đọc giá trị (Value) $\rightarrow$ Đi tới Key tiếp theo. Không cần tốn CPU để dò tìm dấu `"` hay `:` như JSON.

---

## 2. Ví dụ Minh Họa Trực Quan: Màn đối đầu giữa JSON và Protobuf

Hãy giả sử ứng dụng của bạn cần gửi một gói dữ liệu cực nhỏ: `id = 1` (Với định nghĩa Field Number của `id` là `1`).

### Nếu truyền bằng JSON

Bản tin sẽ trông như thế này: `{"id":1}`
Máy tính sẽ phải chuyển từng ký tự ASCII thành byte:

* `{` $\rightarrow$ 1 byte
* `"` $\rightarrow$ 1 byte
* `i` $\rightarrow$ 1 byte
* `d` $\rightarrow$ 1 byte
* `"` $\rightarrow$ 1 byte
* `:` $\rightarrow$ 1 byte
* `1` $\rightarrow$ 1 byte
* `}` $\rightarrow$ 1 byte

**Tổng cộng:** JSON tiêu tốn **8 bytes** (chưa kể nếu thêm khoảng trắng cho dễ nhìn thì sẽ còn tốn hơn).

### Nếu truyền bằng Protobuf

Máy tính không quan tâm chữ `"id"`, nó chỉ cần tính toán luồng bit.

1. **Tính Key:**
Field Number = `1`, Wire Type của Int32 là `0` (Varint).
$\text{Key} = (1 \ll 3) \ | \ 0 = 8_{10}$.
Số `8` chuyển thành byte nhị phân Varint là: `00001000`. (Mất **1 byte**).
2. **Tính Value:**
Giá trị là `1`. Số `1` theo Varint là: `00000001`. (Mất **1 byte**).

Luồng nhị phân thực tế truyền đi qua mạng chỉ đơn giản là 2 bytes:

```text
00001000 00000001
[  Key ] [ Value]

```

**Kết quả:** Protobuf chỉ tốn **2 bytes** để truyền tải cùng một thông tin, giảm dung lượng gấp 4 lần so với một chuỗi JSON siêu ngắn. Nếu chuỗi JSON có tên biến dài hơn như `"transaction_reference_id": 1`, sự chênh lệch có thể lên tới 10-20 lần.

---

## 3. Kết Luận

"Dưới nắp ca-pô", Protobuf thực chất là một nghệ thuật thao tác bit (bitwise manipulation). Nhờ loại bỏ các metadata thừa, sử dụng Varints nén linh hoạt và ZigZag để xử lý số âm, Protobuf mang lại lợi thế khổng lồ:

* **Dung lượng nhỏ hơn 3-10 lần** so với JSON/XML.
* **Tốc độ parse nhanh hơn 5-10 lần** do máy tính chỉ cần dùng các phép toán bit logic (`<<`, `>>`, `|`, `&`) được hỗ trợ cứng từ CPU, thay vì phải chạy vòng lặp xử lý chuỗi phức tạp.

**Khi nào NÊN dùng Protobuf?**

* Xây dựng giao tiếp nội bộ giữa các **Microservices** (thường kết hợp với gRPC).
* Các hệ thống **IoT** (Internet of Things) hoặc Mobile App hoạt động trong môi trường mạng chập chờn, băng thông hẹp.
* Hệ thống cần truyền tải lượng dữ liệu khổng lồ (như Streaming, Real-time analytics).

**Khi nào KHÔNG NÊN dùng?**

* Thiết kế **Public Web APIs** cho Frontend (RESTful API), vì trình duyệt hỗ trợ JSON native và cực kỳ tốt.
* Khi bạn cần con người có thể đọc và debug dữ liệu trực tiếp trên Network Tab mà không cần công cụ decode phức tạp (vì mã nhị phân là hoàn toàn vô nghĩa với mắt người).

Chọn JSON cho sự tiện lợi trong giao tiếp giữa người và hệ thống. Nhưng để các cỗ máy giao tiếp với nhau ở tốc độ cao nhất, Protobuf mới thực sự là kẻ làm chủ cuộc chơi.