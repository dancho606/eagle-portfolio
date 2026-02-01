import os
import subprocess
import sys

def convert_md_to_pdf_with_pandoc(md_path, pdf_path):
    """使用 pandoc 轉換 MD 到 PDF"""
    try:
        subprocess.run(['pandoc', md_path, '-o', pdf_path, '--pdf-engine=xelatex', '-V', 'CJKmainfont=Microsoft YaHei'], check=True)
        return True
    except FileNotFoundError:
        return False
    except subprocess.CalledProcessError:
        return False

def convert_md_to_pdf_with_markdown(md_path, pdf_path):
    """使用 markdown 和 pdfkit 轉換"""
    try:
        import markdown
        from weasyprint import HTML, CSS
        
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
                    font-family: "Microsoft YaHei", "微軟正黑體", Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }}
                h1, h2, h3, h4, h5, h6 {{
                    color: #333;
                    margin-top: 20px;
                }}
                code {{
                    background-color: #f4f4f4;
                    padding: 2px 5px;
                    border-radius: 3px;
                }}
                pre {{
                    background-color: #f4f4f4;
                    padding: 10px;
                    border-radius: 5px;
                    overflow-x: auto;
                }}
                table {{
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                }}
                th, td {{
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }}
                th {{
                    background-color: #f2f2f2;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        """
        
        # 轉換為 PDF
        HTML(string=html_with_style).write_pdf(pdf_path)
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
    
    # 先嘗試使用 pandoc
    print("\n嘗試使用 pandoc...")
    if convert_md_to_pdf_with_pandoc(md_path, pdf_path):
        print("✓ 使用 pandoc 轉換成功！")
        sys.exit(0)
    
    # 如果 pandoc 失敗，嘗試使用 weasyprint
    print("pandoc 不可用，嘗試使用 weasyprint...")
    if convert_md_to_pdf_with_markdown(md_path, pdf_path):
        print("✓ 使用 weasyprint 轉換成功！")
        sys.exit(0)
    
    print("\n✗ 轉換失敗。請安裝以下其中一個工具：")
    print("  1. pandoc + xelatex")
    print("  2. pip install markdown weasyprint")
    sys.exit(1)

if __name__ == "__main__":
    main()
