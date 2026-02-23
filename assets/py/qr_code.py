import os
import segno
from urllib.request import urlopen

def generate_custom_qr(folder_name="assets/qr_codes"):
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"Created directory: {folder_name}")

    url = "https://drew-1618.github.io"
    
    qrcode = segno.make_qr(url, error='h')

    file_path = os.path.join(folder_name, "portfolio_website_qr.svg")

    qrcode.save(
        file_path,
        scale=15,
        dark="#1e2125",
        light="#f8f9fa",
        border=2
    )
    
    print(f"QR Code generated: {file_path}")

    

if __name__ == "__main__":
    generate_custom_qr()