import fitz # PyMuPDF
import pymupdf4llm

pdf_path = "PYTHON BY WINHTUT 2023_Final.pdf"
doc = fitz.open(pdf_path)
print(f"Page count: {len(doc)}")
if len(doc) > 0:
    print(f"First page text snippet: {doc[0].get_text()[:200]}")

# Try to_markdown on just page 0
try:
    md_text = pymupdf4llm.to_markdown(pdf_path, pages=[0, 1, 2])
    print(f"MD Extract (pages 0-2) length: {len(md_text)}")
    if len(md_text) > 0:
        print(f"Snippet: {md_text[:200]}")
except Exception as e:
    print(f"Error: {e}")
