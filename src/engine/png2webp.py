import os
from PIL import Image

INPUT_FOLDERS = [
    
    "src/assets/img/gallery/raw",
    "src/assets/img/id/raw",
    "src/assets/img/projects/raw",
]

WEBP_QUALITY = 85

def convert_png_to_webp():
    for raw_folder in INPUT_FOLDERS:
        if not os.path.isdir(raw_folder):
            print(f"⚠️ Folder tidak ditemukan: {raw_folder}")
            continue

        # parent folder = tanpa "raw"
        output_folder = os.path.dirname(raw_folder)

        for filename in os.listdir(raw_folder):
            if not filename.lower().endswith(".png"):
                continue

            input_path = os.path.join(raw_folder, filename)
            name = os.path.splitext(filename)[0]
            output_path = os.path.join(output_folder, f"{name}.webp")

            try:
                with Image.open(input_path) as img:
                    img = img.convert("RGBA")
                    img.save(
                        output_path,
                        "WEBP",
                        quality=WEBP_QUALITY,
                        method=6
                    )

                print(f"✅ {input_path} → {output_path}")

            except Exception as e:
                print(f"❌ Gagal {input_path}: {e}")

if __name__ == "__main__":
    convert_png_to_webp()
