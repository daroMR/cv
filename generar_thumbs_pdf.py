import os
from pdf2image import convert_from_path

# Directorios
pdf_dir = 'galeria'
thumbs_dir = os.path.join(pdf_dir, 'thumbs')
os.makedirs(thumbs_dir, exist_ok=True)

# Recorre todos los archivos PDF en la carpeta galeria
for filename in os.listdir(pdf_dir):
    if filename.lower().endswith('.pdf'):
        pdf_path = os.path.join(pdf_dir, filename)
        thumb_name = os.path.splitext(filename)[0] + '.png'
        thumb_path = os.path.join(thumbs_dir, thumb_name)
        try:
            # Convierte la primera página del PDF a imagen
            pages = convert_from_path(pdf_path, dpi=150, first_page=1, last_page=1)
            if pages:
                pages[0].save(thumb_path, 'PNG')
                print(f"Miniatura creada: {thumb_path}")
            else:
                print(f"No se pudo generar miniatura para: {filename}")
        except Exception as e:
            print(f"Error con {filename}: {e}") 