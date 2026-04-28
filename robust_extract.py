import fitz

pdf_path = "PYTHON BY WINHTUT 2023_Final.pdf"
doc = fitz.open(pdf_path)
print(f"Page count: {len(doc)}")

with open("python_curriculum_raw.txt", "w", encoding="utf-8") as out:
    for i in range(len(doc)):
        try:
            page = doc[i]
            text = page.get_text()
            out.write(f"\n--- PAGE {i+1} ---\n")
            out.write(text)
            if i % 50 == 0:
                print(f"Processed {i} pages...")
        except Exception as e:
            print(f"Error on page {i}: {e}")

print("Extraction complete. check python_curriculum_raw.txt")
