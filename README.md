# NT208 - Selling Books Website Project

## Giới thiệu đồ án:
"BookstoREe" là một ứng dụng web bán sách trực tuyến sử dụng công nghệ MERN stack (MongoDB, Express.js, React.js, Node.js), tích hợp với API Gemini để cung cấp tính năng chatbot hỗ trợ khách hàng.

Sơ đồ chức năng của web:

![Peach Yellow Grid Mind Map Brainstorm (1)](https://github.com/qub1tt/bookstore/assets/91910146/32cd1b36-d9fe-47ca-87ce-396fbb16bd0b)

## Mô tả các trang:
### 1. Đăng ký/Đăng nhập
![image]("https://hackmd.io/_uploads/HkVd73u4C.png")

![image](https://hackmd.io/_uploads/SyJYQ3uEA.png)

* **Mô tả:** Trang đăng nhập/đăng ký của người dùng
* **Chức năng:**
    * Đăng nhập, tích hợp đăng nhập bằng google nếu như đã tạo tài khoản.
    * Đăng ký tài khoản.
    * Quên mật khẩu: nhập mã OTP được gửi qua email để reset mật khẩu.
    * Tài khoản chưa xác thực sẽ được yêu cầu xác thực mới có thể sử dụng.


### 2. Trang chủ:
![image_2024-06-01_214857585](https://hackmd.io/_uploads/HJnJH3u4C.jpg)

![image_2024-06-01_215352124](https://hackmd.io/_uploads/r1ObL3uER.png)
* **Mô tả:** Gồm những thành phần chính:
    * Sidebar
    * Navbar
    * Mục sách gợi ý
    * Sách bán chạy
    * Sách yêu thích
    * Chatbot
* **Chức năng:**
    * Có thể thêm vào giỏ hàng khi bấm vào icon giỏ hàng
    
    ![image](https://hackmd.io/_uploads/r1A_UndVR.png)
    
    * Chatbot có khả năng tương tác trong phạm vi dữ liệu đã được cung cấp
    
    ![image](https://hackmd.io/_uploads/Hk-e9n_E0.png)


### 3. Trang tất cả sách:
![image](https://hackmd.io/_uploads/ryo0Dh_NC.png)
* **Mô tả:** Đây là trang người dùng có thể xem tất cả các sách có trong web.
* **Chức năng:** Có thể lựa chọn sắp xếp theo tùy chỉnh và nhấn vào icon giỏ hàng để đặt hàng

### 4. Trang thể loại sách:
![image](https://hackmd.io/_uploads/SkQIdnOER.png)
* **Mô tả:** Đây là trang người dùng có thể xem các thể loại sách.
* **Chức năng:** Có thể lựa chọn theo thể loại


### 5. Trang hồ sơ người dùng:
![image](https://hackmd.io/_uploads/ByL3u3dER.png)
* **Mô tả:** Trang quản lý thông tin tài khoản
* **Chức năng:**
    * Update thông tin tài khoản, upload avatar.
    * Thay đổi mật khẩu tài khoản.



### 6. Trang giỏ hàng:
![image](https://hackmd.io/_uploads/HyXMY2dV0.png)
* **Mô tả:** Trang quản lý giỏ hàng 
* **Chức năng:**
    * Có thể thay đổi số lượng mua hàng, xóa giỏ hàng.
    * Nhập đầy đủ thông tin sẽ thanh toán bằng PayPal.
    * Vào email để xác nhận thanh toán.


### 7. Trang đơn hàng:
![image](https://hackmd.io/_uploads/S1qDKh_VC.png)

* **Mô tả:** Trang quản lý đơn hàng
* **Chức năng:**
    * Hủy đơn hàng.
    * Xem tình trạng của đơn hàng.


## Cài đặt môi trường và sử  dụng:
### Các công nghệ sử dụng:
* ReactJS
* Axios
* Redux
* Tailwindcss

### Hướng dẫn cài đặt:
1. Cài Nodejs phiên bản mới nhất.
2. Clone repository này.
3. Thực hiện lệnh  `npm install --legacy-peer-deps` để cài đặt các module cần thiết cho Frontend.
4. Chạy lệnh `npm start` để khởi động web.
5. Sau khi đã khởi động Backend thì có thể sử dụng được web (Hướng dẫn cài đặt Backend ở repo BackEnd)

### Tài khoản để test:
* Tài khoản người dùng:
    username: 22520329@gm.uit.edu.vn
    password: 123456
    
    
    
* Tài khoản PayPal:
    username: sb-twek431005149@personal.example.com
    password: Cg6(?ctF
    
    
## Domain Deploy:
* Frontend: https://bookstoree-rho.vercel.app
* Backend: https://backend-bookstore-yf97.onrender.com
* Trang admin: https://admin-bookstore.vercel.app


## Danh sách thành viên nhóm 12
    1.  Nguyễn Hoàng Duy - 22520329
    2.  Lê Vũ Ca - 22520140
    3.  Nguyễn Nhật Quang - 22521203
    4.  Diệp Tấn Phát - 22521066
    5.  Nguyễn Ngọc Độ - 22520255


    



