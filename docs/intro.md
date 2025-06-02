---
sidebar_position: 1
---

# AI nơi hội tụ giữa ba ngành, Toán học, Dữ Liệu, và Tính toán 💡

Thật vậy, hơn một nghìn tỉ tham số được cấu tạo từ nhiều triệu ma trận phức tạp khác nhau đã tạo nên một mô hình cực mạnh để lưu trữ lại toàn bộ kiến thức của con người. Để kiến tạo, vận hành, cũng như "dạy dỗ" những thực thể số khổng lồ này, không gì khác ngoài Toán học đóng vai trò là bộ não điều khiển và ngôn ngữ giao tiếp cốt lõi. Chính Đại số Tuyến tính đã cung cấp bộ khung vững chắc để tổ chức và thao tác trên hàng triệu ma trận đó, định nghĩa cách thông tin được mã hóa, biến đổi và luân chuyển qua từng tầng lớp phức tạp của mô hình. Song song đó, Giải tích, với những thuật toán tối ưu hóa mạnh mẽ dựa trên đạo hàm và gradient là chiếc la bàn thông thái, dẫn dắt quá trình "học" của mô hình, giúp nó tinh chỉnh từng tham số một trong không gian nghìn tỷ chiều đó để tìm ra cách biểu diễn tri thức một cách hiệu quả nhất từ kho dữ liệu khổng lồ. Nếu không có những nền tảng toán học này, ý tưởng về một AI có khả năng nắm bắt và xử lý lượng thông tin khổng lồ đến vậy sẽ mãi chỉ là khoa học viễn tưởng – một tập hợp số liệu ngẫu nhiên, hỗn độn thay vì một cỗ máy tri thức đang ngày càng tiệm cận đến khả năng hiểu và vận dụng kiến thức của con người.


## Giải tích: "Trái tim" của quá trình học máy ❤️
Khi chúng ta nói về "học" trong AI, đặc biệt là trong học máy (Machine Learning), chúng ta đang nói về quá trình tối ưu hóa. Máy tính cần tìm ra các tham số tốt nhất cho mô hình của mình để có thể đưa ra dự đoán chính xác nhất. Và Giải tích chính là công cụ không thể thiếu cho việc này.

- Đạo hàm và Gradient Descent: Hãy tưởng tượng bạn đang ở trên một ngọn núi và muốn đi xuống thung lũng (điểm thấp nhất). Bạn sẽ nhìn xung quanh xem hướng nào dốc nhất và đi theo hướng đó. Trong học máy, "ngọn núi" đó chính là hàm mất mát (loss function) – một hàm số đo lường mức độ sai lệch giữa dự đoán của mô hình và thực tế. "Thung lũng" là điểm mà hàm mất mát đạt giá trị nhỏ nhất, tức là mô hình dự đoán chính xác nhất. Đạo hàm cho chúng ta biết độ dốc (gradient) của hàm mất mát, và thuật toán Gradient Descent (và các biến thể của nó) sử dụng thông tin này để từ từ điều chỉnh các tham số của mô hình, từng bước "đi xuống" đến điểm tối ưu. Nếu không có giải tích, việc "học" của máy móc sẽ trở nên mò mẫm và kém hiệu quả.
- Chuỗi Taylor và Xấp xỉ hàm: Trong nhiều trường hợp, các hàm số mà AI phải làm việc rất phức tạp. Giải tích cung cấp các công cụ như khai triển Taylor để xấp xỉ các hàm phức tạp bằng những đa thức đơn giản hơn, giúp việc tính toán và phân tích trở nên dễ dàng hơn.

Có thể nói, giải tích chính là "trái tim" bơm máu cho quá trình học của các mô hình AI, giúp chúng tự điều chỉnh và cải thiện hiệu suất qua từng dữ liệu được nạp vào.

## Đại số Tuyến tính: "Bộ khung" cho dữ liệu và tính toán
Nếu giải tích là trái tim, thì Đại số Tuyến tính chính là "bộ khung" vững chắc, là ngôn ngữ để biểu diễn và thao tác với dữ liệu trong AI.

- Vector và Ma trận: Dữ liệu trong AI – dù là hình ảnh, âm thanh, văn bản hay các con số thống kê – đều thường được biểu diễn dưới dạng vector (một dãy số) hoặc ma trận (một bảng số). Ví dụ, một bức ảnh có thể được xem như một ma trận các pixel, mỗi pixel có giá trị màu riêng. Các từ trong một câu có thể được "vector hóa" thành các vector số học thể hiện ý nghĩa ngữ nghĩa của chúng (word embeddings) – một kỹ thuật cốt lõi trong xử lý ngôn ngữ tự nhiên và LLM.
- Phép toán trên Ma trận: Các phép toán như nhân ma trận, chuyển vị, tìm trị riêng, vector riêng đóng vai trò cực kỳ quan trọng. Trong các mạng nơ-ron nhân tạo (neural networks) – kiến trúc nền tảng của nhiều mô hình AI hiện đại và LLM – thông tin được truyền qua các lớp của mạng dưới dạng các phép nhân ma trận giữa dữ liệu đầu vào và các ma trận trọng số của mạng. Việc huấn luyện mạng nơ-ron thực chất là quá trình tìm ra các ma trận trọng số tối ưu này.
- Giảm chiều dữ liệu (Dimensionality Reduction): Dữ liệu trong thực tế thường có rất nhiều chiều, gây khó khăn cho việc xử lý và dễ dẫn đến hiện tượng "lời nguyền của số chiều" (curse of dimensionality). Các kỹ thuật của đại số tuyến tính như Phân tích thành phần chính (PCA) giúp giảm số chiều của dữ liệu mà vẫn giữ lại được những thông tin quan trọng nhất, giúp mô hình hoạt động hiệu quả hơn.

Không có đại số tuyến tính, việc biểu diễn dữ liệu một cách có cấu trúc và thực hiện các phép biến đổi phức tạp trên đó để AI có thể "hiểu" và xử lý sẽ là điều không tưởng. Đặc biệt với LLM, hàng tỷ tham số của mô hình được tổ chức và tính toán dựa trên các nguyên lý của đại số tuyến tính.

## Các "trụ cột" Toán học khác 📊🎲

Ngoài giải tích và đại số tuyến tính, AI còn dựa vào nhiều nhánh toán học quan trọng khác:
- Xác suất và Thống kê: AI hoạt động trong một thế giới đầy rẫy sự không chắc chắn. Lý thuyết xác suất cung cấp khuôn khổ để mô hình hóa sự không chắc chắn này. Thống kê giúp chúng ta thu thập, phân tích, diễn giải dữ liệu và đưa ra các kết luận có ý nghĩa, cũng như đánh giá hiệu suất của các mô hình AI. Từ các mô hình Bayes, đến việc tính toán độ tin cậy của dự đoán, hay các hàm kích hoạt (activation functions) trong mạng nơ-ron dựa trên phân phối xác suất, tất cả đều cho thấy vai trò không thể thiếu của lĩnh vực này. Đối với LLM, xác suất là nền tảng để dự đoán từ tiếp theo trong một chuỗi văn bản.
- Lý thuyết Thông tin (Information Theory): Các khái niệm như entropy hay KL divergence từ lý thuyết thông tin được sử dụng để đo lường sự không chắc chắn, lượng thông tin trong dữ liệu, và sự khác biệt giữa các phân phối xác suất – rất hữu ích trong việc huấn luyện và đánh giá mô hình.
- Tối ưu hóa (Optimization): Mặc dù đã đề cập trong phần giải tích (Gradient Descent), tối ưu hóa là một lĩnh vực rộng lớn hơn, bao gồm nhiều thuật toán và phương pháp khác nhau để tìm kiếm giải pháp tốt nhất cho một vấn đề với các ràng buộc cho trước. Đây là cốt lõi của việc huấn luyện hầu hết các mô hình AI.
