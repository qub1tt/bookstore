# NT208 - Selling Books Website Project

## Giới thiệu đồ án:

"BookstoREe" là một ứng dụng web bán sách trực tuyến sử dụng công nghệ MERN stack (MongoDB, Express.js, React.js, Node.js), tích hợp với API Gemini để cung cấp tính năng chatbot hỗ trợ khách hàng.

Sơ đồ chức năng của web:

![Peach Yellow Grid Mind Map Brainstorm (1)](https://github.com/qub1tt/bookstore/assets/91910146/32cd1b36-d9fe-47ca-87ce-396fbb16bd0b)

## Mô tả các trang:

### 1. Đăng ký/Đăng nhập


![image](https://github.com/qub1tt/bookstore/assets/91910146/2b329c27-8e65-400c-ac9e-fd56da35d9eb)


![image](https://github.com/qub1tt/bookstore/assets/91910146/00fd526a-eb16-4b2e-b3c8-e5cdad1903a3)



- **Mô tả:** Trang đăng nhập/đăng ký của người dùng.
  
- **Chức năng:**
  - Đăng nhập, tích hợp đăng nhập bằng google nếu như đã tạo tài khoản.
  - Đăng ký tài khoản.
  - Quên mật khẩu: nhập mã OTP được gửi qua email để reset mật khẩu.
  - Tài khoản chưa xác thực sẽ được yêu cầu xác thực mới có thể sử dụng.

### 2. Trang chủ:
![image](https://github.com/qub1tt/bookstore/assets/91910146/05e69ef3-6b0e-4cec-a20c-64af1bfe81ca)


![image](https://github.com/qub1tt/bookstore/assets/91910146/2a10ab0e-766a-4f54-9ce0-7b378f4fab32)


![image](https://github.com/qub1tt/bookstore/assets/91910146/ad031e36-7785-4cb7-b661-a6c8f5fd1f9c)


- **Mô tả:** Gồm những thành phần chính:
  - Sidebar
  - Navbar
  - Mục sách gợi ý
  - Sách bán chạy
  - Sách yêu thích
  - Chatbot
  - Footer
    
- **Chức năng:**
  - Sử dụng sidebar để điều hướng sang các trang khác.
  - Thanh search tìm kiếm theo tên sách cần tìm.
    
    ![image](https://github.com/qub1tt/bookstore/assets/91910146/e0553690-0b39-40cc-bd32-c99a1ed9e8e7)
  - Icon giỏ hàng để điều hướng đến trang giỏ hàng.
  - Icon hồ sơ sẽ có hai lựa chọn điều hướng tới trang quản lý thông tin tài khoản hoặc là trang quản lý đơn hàng.
  - Có thể thêm vào giỏ hàng khi bấm vào icon giỏ hàng
    
     ![Screenshot 2024-06-01 215527](https://github.com/qub1tt/bookstore/assets/91910146/903f7b23-d48b-4cf7-a302-b11b5cd3a5dd)

  - Chatbot có khả năng tương tác trong phạm vi dữ liệu đã được cung cấp
    
    ![image](https://github.com/qub1tt/bookstore/assets/91910146/475760a8-0a85-4fe4-a9a5-9fe94a48f1c1)



### 3. Trang tất cả sách:

![Screenshot 2024-06-01 215740](https://github.com/qub1tt/bookstore/assets/91910146/2adba6ee-8afb-4508-85b8-c71223bc3afb)


- **Mô tả:** Đây là trang người dùng có thể xem tất cả các sách có trong web.
  
- **Chức năng:** Có thể lựa chọn sắp xếp theo tùy chỉnh và nhấn vào icon giỏ hàng để đặt hàng.

### 4. Trang thể loại sách:

![Screenshot 2024-06-01 215851](https://github.com/qub1tt/bookstore/assets/91910146/52a4b494-8115-4917-9606-8fc0e41ca33c)


- **Mô tả:** Đây là trang người dùng có thể xem các thể loại sách.
  
- **Chức năng:** Có thể lựa chọn theo thể loại.

### 5. Trang hồ sơ người dùng:

![Screenshot 2024-06-01 220444](https://github.com/qub1tt/bookstore/assets/91910146/abe6b80b-6629-44eb-92aa-8955fa54d9a9)

- **Mô tả:** Trang quản lý thông tin tài khoản.
  
- **Chức năng:**
  - Update thông tin tài khoản, upload avatar.
  - Thay đổi mật khẩu tài khoản.
    
### 6. Trang thông tin sách

![image](https://github.com/qub1tt/bookstore/assets/91910146/164aa7c0-735b-4116-99fb-97fa83c7c279)
![image](https://github.com/qub1tt/bookstore/assets/91910146/f202fdb1-470a-46e7-8515-26f37646b895)

- **Mô tả:** Trang thông tin của sách.
  
- **Chức năng:**
  - Tùy chỉnh số lượng thêm vào giỏ hàng.
  - Đánh giá sách khi đã đăng nhập.


### 7. Trang giỏ hàng:

![Screenshot 2024-06-01 220642](https://github.com/qub1tt/bookstore/assets/91910146/e516b4af-b56c-4917-9d11-32e00417a556)


- **Mô tả:** Trang quản lý giỏ hàng.
  
- **Chức năng:**
  - Có thể thay đổi số lượng mua hàng, xóa giỏ hàng.
  - Nhập đầy đủ thông tin sẽ thanh toán bằng PayPal.
  - Vào email để xác nhận thanh toán.

### 8. Trang đơn hàng:

![Screenshot 2024-06-01 220815](https://github.com/qub1tt/bookstore/assets/91910146/05e86606-61ca-4e73-8c42-569ec248ca0f)


- **Mô tả:** Trang quản lý đơn hàng.
  
- **Chức năng:**
  - Hủy đơn hàng.
  - Xem tình trạng của đơn hàng.

## Cài đặt môi trường và sử dụng:

### Repositories:
- Repositories BackEnd: https://github.com/qub1tt/Backend_NT208_Project
- Repositories FrontEnd: https://github.com/qub1tt/bookstore
- Repositories Admin: https://github.com/qub1tt/admin_bookstore


### Các công nghệ sử dụng:

- ReactJS
- Axios
- Redux/Redux Toolkit
- Tailwindcss

### Hướng dẫn cài đặt:
Khi muốn sử dụng trên local, vào file .env sửa REACT_APP_API thành "http://localhost:8080".

1. Cài Nodejs phiên bản mới nhất.
2. Clone repository này.
3. Thực hiện lệnh npm install --legacy-peer-deps để cài đặt các module cần thiết cho Frontend.
4. Chạy lệnh npm start để khởi động web.
5. Sau khi đã chạy backend thì có thể sử dụng được web (Hướng dẫn cài đặt backend ở repo BackEnd)

### Tài khoản để test:

- Tài khoản người dùng:
  - username: 22520329@gm.uit.edu.vn
  - password: 123456
    
- Tài khoản PayPal:
  - username: sb-twek431005149@personal.example.com
  - password: Cg6(?ctF

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
