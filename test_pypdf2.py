import PyPDF2

pdf_path = "PYTHON BY WINHTUT 2023_Final.pdf"
try:
    reader = PyPDF2.PdfReader(pdf_path)
    print(f"Page count (PyPDF2): {len(reader.pages)}")
    text = reader.pages[0].extract_text()
    print(f"Page 1 Text: {text[:200]}")
except Exception as e:
    print(f"PyPDF2 Error: {e}")
