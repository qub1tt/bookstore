# Nhom12 - Selling Books Website

## Giới thiệu đồ án:

"BookstoREe" là một ứng dụng web bán sách trực tuyến sử dụng công nghệ MERN stack (MongoDB, Express.js, React.js, Node.js), tích hợp với API Gemini để cung cấp tính năng chatbot hỗ trợ khách hàng.

## Mô tả các trang:

### 1. Đăng ký/Đăng nhập


![Screenshot 2024-06-01 214248](https://github.com/qub1tt/bookstore/assets/91910146/47e82441-f874-4735-bb3c-2db953051fab)

![Screenshot 2024-06-01 214302](https://github.com/qub1tt/bookstore/assets/91910146/ee217c48-9996-4a93-b325-027343acdc25)


- **Mô tả:** Trang đăng nhập/đăng ký của người dùng
- **Chức năng:**
  - Đăng nhập, tích hợp đăng nhập bằng google nếu như đã tạo tài khoản.
  - Đăng ký tài khoản.
  - Quên mật khẩu: nhập mã OTP được gửi qua email để reset mật khẩu.
  - Tài khoản chưa xác thực sẽ được yêu cầu xác thực mới có thể sử dụng.

### 2. Trang chủ:

![Screenshot 2024-06-01 214633](https://github.com/qub1tt/bookstore/assets/91910146/a3b9f3ce-da73-494e-8dee-c08c79832ad1)

![Screenshot 2024-06-01 215304](https://github.com/qub1tt/bookstore/assets/91910146/b1784e58-e643-48bf-89a3-226ea3fc0eff)



- **Mô tả:** Gồm những thành phần chính:
  - Sidebar
  - Navbar
  - Mục sách gợi ý
  - Sách bán chạy
  - Sách yêu thích
  - Chatbot
- **Chức năng:**
  - Có thể thêm vào giỏ hàng khi bấm vào icon giỏ hàng
![Screenshot 2024-06-01 215527](https://github.com/qub1tt/bookstore/assets/91910146/903f7b23-d48b-4cf7-a302-b11b5cd3a5dd)

  - Chatbot có khả năng tương tác trong phạm vi dữ liệu đã được cung cấp
![Screenshot 2024-06-01 221032](https://github.com/qub1tt/bookstore/assets/91910146/3548288e-1e21-45de-a1c7-977220216a20)


### 3. Trang tất cả sách:

![Screenshot 2024-06-01 215740](https://github.com/qub1tt/bookstore/assets/91910146/2adba6ee-8afb-4508-85b8-c71223bc3afb)


- **Mô tả:** Đây là trang người dùng có thể xem tất cả các sách có trong web.
- **Chức năng:** Có thể lựa chọn sắp xếp theo tùy chỉnh và nhấn vào icon giỏ hàng để đặt hàng

### 4. Trang thể loại sách:

![Screenshot 2024-06-01 215851](https://github.com/qub1tt/bookstore/assets/91910146/52a4b494-8115-4917-9606-8fc0e41ca33c)


- **Mô tả:** Đây là trang người dùng có thể xem các thể loại sách.
- **Chức năng:** Có thể lựa chọn theo thể loại

### 5. Trang hồ sơ người dùng:

![Screenshot 2024-06-01 220444](https://github.com/qub1tt/bookstore/assets/91910146/abe6b80b-6629-44eb-92aa-8955fa54d9a9)

- **Mô tả:** Trang quản lý thông tin tài khoản
- **Chức năng:**
  - Update thông tin tài khoản, upload avatar.
  - Thay đổi mật khẩu tài khoản.

### 6. Trang giỏ hàng:

![Screenshot 2024-06-01 220642](https://github.com/qub1tt/bookstore/assets/91910146/e516b4af-b56c-4917-9d11-32e00417a556)


- **Mô tả:** Trang quản lý giỏ hàng
- **Chức năng:**
  - Có thể thay đổi số lượng mua hàng, xóa giỏ hàng.
  - Nhập đầy đủ thông tin sẽ thanh toán bằng PayPal.
  - Vào email để xác nhận thanh toán.

### 7. Trang đơn hàng:

![Screenshot 2024-06-01 220815](https://github.com/qub1tt/bookstore/assets/91910146/05e86606-61ca-4e73-8c42-569ec248ca0f)


- **Mô tả:** Trang quản lý đơn hàng
- **Chức năng:**
  - Hủy đơn hàng.
  - Xem tình trạng của đơn hàng.

## Cài đặt môi trường và sử dụng:

### Các công nghệ sử dụng:

- ReactJS
- Axios
- Redux
- Tailwindcss

### Hướng dẫn cài đặt:

1. Cài Nodejs phiên bản mới nhất.
2. Clone repository này.
3. Thực hiện lệnh npm install --legacy-peer-deps để cài đặt các module cần thiết cho Frontend.
4. Chạy lệnh npm start để khởi động web.
5. Sau khi đã chạy backend thì có thể sử dụng được web.

### Tài khoản để test:

- Tài khoản người dùng:
  username: 22520329@gm.uit.edu.vn
  password: 123456
- Tài khoản PayPal:
  username: sb-twek431005149@personal.example.com
  password: Cg6(?ctF

## Domain Deploy:

- Frontend: https://bookstoree-rho.vercel.app
- Backend: https://backend-bookstore-yf97.onrender.com
- Trang admin: https://admin-bookstore.vercel.app

## Danh sách thành viên nhóm 12

    1.  Nguyễn Hoàng Duy - 22520329
    2.  Lê Vũ Ca - 22520140
    3.  Nguyễn Nhật Quang - 22521203
    4.  Diệp Tấn Phát - 22521066
    5.  Nguyễn Ngọc Độ - 22520255
