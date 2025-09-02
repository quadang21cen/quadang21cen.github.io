---
sidebar_position: 1
---

# Phần 1: Các khái niệm cơ bản của đại số tuyến tính
## **1. Không gian vector** (vector space)
Hãy tưởng tượng **Không gian vector** là một "vũ trụ" hay một "sân chơi" mà các `vector` "sinh sống". Đây không phải là một không gian trống rỗng, mà là một sân chơi có luật lệ rõ ràng.

Luật chơi rất cơ bản, chỉ yêu cầu hai điều:
1. Nếu bạn lấy hai "cư dân" bất kỳ (hai vector) trong sân chơi này và **cộng** chúng lại với nhau, kết quả phải là một cư dân hợp lệ của sân chơi đó (không bị "rơi" ra ngoài).
2. Nếu bạn lấy một "cư dân" bất kỳ và **co giãn** nó (nhân với một con số), kết quả cũng phải là một cư dân hợp lệ của sân chơi.

Bất kỳ một tập hợp các đối tượng nào (dù là mũi tên, ma trận, đa thức, hay hàm số) cùng với hai phép toán "cộng" và "nhân với một số" mà tuân thủ các luật lệ cơ bản này, thì tập hợp đó tạo thành một Không gian vector. Điều này cho phép chúng ta sử dụng bộ công cụ mạnh mẽ của Đại số tuyến tính để phân tích chúng.



## **2. Span (Bao tuyến tính) là gì?**

Hãy tưởng tượng bạn đang ở gốc tọa độ $(0,0)$ và bạn có một bộ các "hướng di chuyển" cơ bản, đó chính là các vector của bạn. Ví dụ, bạn có vector $v_1$ chỉ hướng "đi về phía Đông".

**Span** của vector $v_1$ là **tất cả những nơi bạn có thể đến được** nếu bạn chỉ được phép đi theo hướng của $v_1$. Bạn có thể đi 3 bước theo hướng $v_1$, 5.2 bước theo hướng $v_1$, hoặc thậm chí đi lùi -2 bước theo hướng $v_1$. Kết quả là bạn có thể đến được bất kỳ điểm nào trên đường thẳng chứa vector $v_1$. Đường thẳng đó chính là "span" của $v_1$.

Bây giờ, nếu bạn có thêm một hướng nữa, ví dụ vector $v_2$ chỉ hướng "đi về phía Bắc" (không cùng phương với $v_1$). Span của $v_1$,$v_2$ là tất cả những nơi bạn có thể đến bằng cách kết hợp hai hướng đi này (ví dụ: đi 3 bước Đông rồi 2 bước Bắc). Bằng cách này, bạn có thể đến được **mọi điểm** trên toàn bộ mặt phẳng. Mặt phẳng đó chính là "span" của hai vector $v_1$ và $v_2$.

**Tóm lại:** Span của một tập hợp vector là toàn bộ không gian (đường thẳng, mặt phẳng, hoặc không gian nhiều chiều hơn) được "tạo ra" hay "phủ đầy" bởi tất cả các tổ hợp có thể có của các vector đó.

## **3. Vector Cơ sở là gì?**

Hãy tưởng tượng bạn có một hộp bút màu. Một **cơ sở** của thế giới màu sắc này chính là tập hợp các màu gốc (như Đỏ, Vàng, Xanh dương). Tại sao? Vì nó thỏa mãn hai điều kiện rất đặc biệt:
1. **Tạo ra mọi thứ:** Từ chỉ ba màu này, bằng cách pha trộn (tổ hợp tuyến tính), bạn có thể tạo ra mọi màu sắc khác (xanh lá, tím, cam...). Tập hợp này "sinh ra" toàn bộ không gian màu sắc.

2. **Không thừa thãi:** Bạn không thể dùng màu Vàng và Xanh dương để tạo ra màu Đỏ. Mỗi màu trong bộ màu gốc là độc nhất và không thể được tạo ra từ những màu còn lại. Đây là bộ màu tối giản nhất có thể.

> **Vector Cơ sở** là một tập các vector **"vừa đủ"** để biểu diễn **mọi** vector **khác** trong không gian thông qua **kết hợp tuyến tính duy nhất**.
>