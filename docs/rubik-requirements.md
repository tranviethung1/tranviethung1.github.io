# Yêu cầu Rubik F2L

## Mục tiêu

Trang web là mô phỏng Rubik 3×3 tương tác bằng Three.js, ưu tiên luyện F2L.

## Yêu cầu hiện tại

- Hiển thị Rubik 3×3 theo mẫu ảnh tham chiếu: màu phải tràn sát các cạnh ngoài của khối, không có viền sticker màu đen tại biên ngoài. Ngược lại, giữa các sticker trên cùng một mặt phải có khe hở nhỏ rõ ràng; các góc sticker bo/cắt mạnh để tạo các khoảng khuyết đặc trưng của speed-cube như ảnh tham chiếu. Cubie đặt khít, bề mặt sticker bóng nhẹ, ánh sáng và bóng đổ tự nhiên.
- Dùng bảng màu theo người dùng cung cấp: trắng `#FFFFFF`, đỏ `#B61A1A`, cam `#FF5900`, xanh lá `#21C925`, xanh dương `#0045AD`; vàng được làm dịu thành `#D9BD24` để không gây chói. Với orientation F2L, trắng ở mặt `D` (đáy) và vàng ở mặt `U` (trên).
- Dùng ánh sáng phòng trung tính, dịu và tỏa đều từ nhiều hướng để tất cả các mặt Rubik đều dễ nhìn, nhưng không chói hoặc bão hòa quá mức. Giữ màu sắc trung thực cùng bóng đổ mềm, nhẹ để thể hiện khối.
- Cho phép kéo để quan sát. Không xoay lớp Rubik bằng cách nhấp sticker/mặt màu.
- Xoay lớp Rubik bằng các phím `R`, `L`, `U`, `D`, `F`, `B`; giữ `Shift` để xoay ngược.
- Giao diện tối giản: không hiển thị khối thông tin kỹ thuật ở góc trên phải hoặc bảng hướng dẫn ở góc dưới trái. Các thao tác vẫn có thể thực hiện bằng chuột và bàn phím.
- Khối Rubik hiển thị ở 75.6% kích thước gốc (giảm thêm 10% từ mức 84%), với khoảng thở rõ ràng trong khung hình.
- Có nút `LUYỆN F2L`: khi bật, toàn bộ cubie có sticker vàng bị đổi thành đen để người luyện chỉ tập trung vào F2L; nhấn lại để hiện màu gốc.
- Có nút `XÁO TRỘN F2L`: tạo chuỗi ngẫu nhiên mới ở mỗi lần nhấn, gồm 5–9 macro F2L khác nhau liên tiếp để phá các cặp hiệu quả hơn, trong khi cross (dấu `+`) trắng hoàn chỉnh ở mặt dưới luôn được giữ nguyên. Xáo trộn không dùng nước `D`.
- Không hiển thị nút `HỌC GIẢI`, bảng hướng dẫn, dải công thức, hoặc bất kỳ thao tác playback công thức nào.
- Mọi corner F2L chưa giải đều có thể được nhấp chọn mà không làm xoay khối, kể cả corner bị xoắn ngay đúng slot; corner được viền cam nổi bật, đồng thời edge cùng cặp F2L (theo màu gốc của corner) được viền xanh dương để người dùng dễ xác định cạnh còn thiếu. Khi chọn, đánh dấu `X` màu hồng trực tiếp trên các sticker màu cạnh của cặp: cả hai màu chung không-trắng/không-vàng của corner, và sticker tương ứng trên edge (ví dụ: cặp xanh lá–cam–trắng được đánh dấu trên sticker xanh lá và cam của corner, cùng sticker xanh lá hoặc cam của edge). Không đánh dấu sticker trắng/vàng. Sticker màu nóng (đỏ/cam) của cặp được chọn dùng dấu `X` xám `#9CA3AF`; sticker màu lạnh (xanh lá/xanh dương) dùng dấu `X` đỏ `#E11D48`; nét cọ mảnh và hơi không đều như được vẽ bằng tay, thay vì hai đường thẳng hình học. Có biểu tượng bánh răng ở góc phải để mở/đóng bảng `CÀI ĐẶT`. Bảng này chứa công tắc `HIỆN X BỊ CHE` (mặc định tắt để dấu bị Rubik che tự ẩn; bật để dấu `X` hiển thị xuyên qua khối) và thanh `TỐC ĐỘ XÁO TRỘN` với ba mức: chậm, nhanh, rất nhanh; mặc định là rất nhanh. Trạng thái cho biết cặp đang được chọn.
- `XÁO TRỘN F2L` chỉ tạo các chuỗi xáo trộn F2L mẫu, duy trì white cross ở đáy. Không gắn `solution`, `activeCase`, hoặc tuyên bố xác minh giải cho trạng thái xáo trộn.

## Quy tắc cập nhật

Mỗi khi yêu cầu người dùng thay đổi, cập nhật tài liệu này trong cùng thay đổi với mã nguồn. Đồng thời kiểm tra lại các yêu cầu cũ có còn đúng hay không và loại bỏ hoặc điều chỉnh yêu cầu đã bị thay thế.
