#!/usr/bin/env python3
"""
Genera `gallery_index.json` en la carpeta `galeria/` con la lista de imágenes y PDFs.
Usa nombres URL-encoded para `orig` y `thumb` rutas, y proporciona `display` el nombre decodificado.

Uso:
  python galeria/generate_gallery_index.py

El archivo `gallery_index.json` resultante puede ser subido al host para evitar depender
del directory listing del servidor.
"""
import os
import json
from pathlib import Path
from urllib.parse import quote, unquote

GALLERY_DIR = Path(__file__).resolve().parent
OUT_FILE = GALLERY_DIR / 'gallery_index.json'
IMAGE_EXTS = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp', '.tiff', '.svg'}
PDF_EXTS = {'.pdf'}


def find_thumb_for(base_name, folder):
    # return relative thumb path (URL-encoded) if exists, else None
    candidates = [f'thumbs/prev_{base_name}.png', f'thumbs/prev_{base_name}.gif', f'thumbs/prev_{base_name}.svg', f'thumbs/prev_{base_name}.jpg']
    for c in candidates:
        p = folder / c
        if p.exists():
            return quote(c)
    return None


def build_index():
    items = sorted([p for p in GALLERY_DIR.iterdir() if p.is_file()])
    images = []
    pdfs = []
    for p in items:
        ext = p.suffix.lower()
        name = p.name
        display = unquote(name)
        if ext in IMAGE_EXTS:
            base = p.stem
            thumb = find_thumb_for(base, GALLERY_DIR)
            images.append({
                'name': name,
                'display': display,
                'orig': quote(name),
                'thumb': thumb
            })
        elif ext in PDF_EXTS:
            pdfs.append({
                'name': name,
                'display': display,
                'orig': quote(name)
            })
    data = {'images': images, 'pdfs': pdfs}
    with OUT_FILE.open('w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'Wrote {OUT_FILE} with {len(images)} images and {len(pdfs)} pdfs')


if __name__ == '__main__':
    build_index()
