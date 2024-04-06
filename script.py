from PIL import Image
import os

def scale_images(input_folder, output_folder, target_width, target_height):
    # Tạo thư mục đầu ra nếu nó chưa tồn tại
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Lặp qua tất cả các file trong thư mục đầu vào
    for filename in os.listdir(input_folder):
        # Đường dẫn đầy đủ đến file ảnh đầu vào
        input_path = os.path.join(input_folder, filename)

        # Đường dẫn đầy đủ đến file ảnh đầu ra
        output_path = os.path.join(output_folder, filename)

        try:
            # Mở ảnh
            image = Image.open(input_path)
            
            # Scale ảnh về kích thước mong muốn
            scaled_image = image.resize((target_width, target_height))

            # Lưu ảnh đã scale vào thư mục đầu ra
            scaled_image.save(output_path)
            
            print(f"{filename} scaled successfully!")
        except Exception as e:
            print(f"Error scaling {filename}: {str(e)}")

# Thay đổi các thông số sau để phù hợp với nhu cầu của bạn
input_folder = r"src\assets\khoahoc"
output_folder = r"src\assets\khoahoc"
target_width = 1535
target_height = 2435

# Gọi hàm scale_images để thực hiện việc scale ảnh
scale_images(input_folder, output_folder, target_width, target_height)