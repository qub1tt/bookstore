import os
from PIL import Image

def resize_image(input_path, output_path, target_size):
    """
    Resize an image to a target size.
    
    Args:
    - input_path (str): Path to the input image file.
    - output_path (str): Path to save the resized image.
    - target_size (tuple): Target size (width, height) in pixels.
    """
    try:
        image = Image.open(input_path)
        resized_image = image.resize(target_size, Image.LANCZOS)
        resized_image.save(output_path)
        print(f"Resized {input_path} successfully.")
    except Exception as e:
        print(f"Failed to resize {input_path}: {e}")

def resize_images_to_match_selected(selected_image_path, folder_path):
    """
    Resize all images in a folder to match the dimensions of a selected image.
    
    Args:
    - selected_image_path (str): Path to the selected image file.
    - folder_path (str): Path to the folder containing images.
    """
    try:
        selected_image = Image.open(selected_image_path)
        selected_image = selected_image.convert("RGBA")
        selected_size = selected_image.size
    except Exception as e:
        print(f"Failed to open the selected image: {e}")
        return
    
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                input_path = os.path.join(root, file)
                output_path = os.path.join(root, f"resized_{file}")
                resize_image(input_path, output_path, selected_size)

if __name__ == "__main__":
    selected_image_path = "src\\assets\\tamly\\cho-sua-nham-cay.png"
    folder_path = "src\\assets"
    resize_images_to_match_selected(selected_image_path, folder_path)
