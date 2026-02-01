import os
import sys

def convert_md_to_html_to_pdf(md_path, pdf_path):
    """使用 markdown + pdfkit 轉換"""
    try:
        import markdown
        import pdfkit
        
        # 讀取 Markdown 檔案
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # 轉換為 HTML
        html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code', 'nl2br'])
        
        # 添加 CSS 樣式支援中文
        html_with_style = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: "Microsoft YaHei", "微軟正黑體", "Noto Sans CJK TC", Arial, sans-serif;
                    line-height: 1.8;
                    padding: 40px;
                    max-width: 900px;
                    margin: 0 auto;
                    color: #333;
                }}
                h1 {{
                    color: #1a1a1a;
                    border-bottom: 3px solid #0066cc;
                    padding-bottom: 10px;
                    margin-top: 30px;
                }}
                h2 {{
                    color: #0066cc;
                    border-bottom: 2px solid #ddd;
                    padding-bottom: 8px;
                    margin-top: 25px;
                }}
                h3 {{
                    color: #333;
                    margin-top: 20px;
                }}
                code {{
                    background-color: #f4f4f4;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-family: "Consolas", "Courier New", monospace;
                }}
                pre {{
                    background-color: #f4f4f4;
                    padding: 15px;
                    border-radius: 5px;
                    overflow-x: auto;
                    border-left: 4px solid #0066cc;
                }}
                table {{
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }}
                th, td {{
                    border: 1px solid #ddd;
                    padding: 12px 8px;
                    text-align: left;
                }}
                th {{
                    background-color: #0066cc;
                    color: white;
                    font-weight: bold;
                }}
                tr:nth-child(even) {{
                    background-color: #f9f9f9;
                }}
                hr {{
                    border: none;
                    border-top: 2px solid #0066cc;
                    margin: 30px 0;
                }}
                ul, ol {{
                    margin: 10px 0;
                    padding-left: 30px;
                }}
                li {{
                    margin: 5px 0;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        """
        
        # 設定 pdfkit 選項
        options = {
            'encoding': 'UTF-8',
            'enable-local-file-access': None,
            'page-size': 'A4',
            'margin-top': '20mm',
            'margin-right': '20mm',
            'margin-bottom': '20mm',
            'margin-left': '20mm',
        }
        
        # 轉換為 PDF
        pdfkit.from_string(html_with_style, pdf_path, options=options)
        return True
    except ImportError as e:
        print(f"缺少必要的模組: {e}")
        return False
    except Exception as e:
        print(f"轉換錯誤: {e}")
        return False

def main():
    md_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\requirement_checklist.md"
    pdf_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\requirement_checklist.pdf"
    
    # 檢查檔案是否存在
    if not os.path.exists(md_path):
        print(f"錯誤: 找不到檔案 {md_path}")
        sys.exit(1)
    
    print(f"正在轉換: {md_path}")
    print(f"輸出至: {pdf_path}")
    
    # 使用 pdfkit
    print("\n使用 pdfkit 轉換...")
    if convert_md_to_html_to_pdf(md_path, pdf_path):
        print("✓ 轉換成功！")
        print(f"\nPDF 已保存至: {pdf_path}")
        sys.exit(0)
    else:
        print("\n✗ 轉換失敗。")
        print("請安裝以下工具：")
        print("  1. pip install pdfkit")
        print("  2. 下載並安裝 wkhtmltopdf: https://wkhtmltopdf.org/downloads.html")
        sys.exit(1)

if __name__ == "__main__":
    main()
