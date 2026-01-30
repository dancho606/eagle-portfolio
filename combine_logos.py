import os
from PIL import Image

def combine_images():
    source_dir = r'c:\Users\danch\.gemini\antigravity\scratch\eagle_portfolio\public\images\合作客戶'
    output_path = r'c:\Users\danch\.gemini\antigravity\scratch\eagle_portfolio\public\images\partners_combined.png'
    
    files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    files.sort()
    
    if not files:
        print("No images found.")
        return

    images = [Image.open(os.path.join(source_dir, f)) for f in files]
    
    # Resize images to a standard height while maintaining aspect ratio
    standard_height = 200
    resized_images = []
    for img in images:
        aspect_ratio = img.width / img.height
        new_width = int(standard_height * aspect_ratio)
        resized_images.append(img.resize((new_width, standard_height), Image.Resampling.LANCZOS))
    
    # Layout logic: Grid of roughly 6 columns
    cols = 6
    rows = (len(resized_images) + cols - 1) // cols
    
    # Calculate row widths and set a common max width
    row_widths = []
    for r in range(rows):
        row_width = sum(img.width for img in resized_images[r*cols : (r+1)*cols]) + (cols - 1) * 40 # 40px gap
        row_widths.append(row_width)
    
    max_width = max(row_widths)
    total_height = rows * standard_height + (rows - 1) * 60 # 60px vertical gap
    
    # Create background (Transparent)
    combined = Image.new('RGBA', (max_width, total_height), (0, 0, 0, 0))
    
    current_y = 0
    for r in range(rows):
        row_imgs = resized_images[r*cols : (r+1)*cols]
        current_x = (max_width - row_widths[r]) // 2 # Center the row
        for img in row_imgs:
            combined.paste(img, (current_x, current_y))
            current_x += img.width + 40
        current_y += standard_height + 60
        
    combined.save(output_path)
    print(f"Combined image saved to {output_path}")

if __name__ == "__main__":
    combine_images()
