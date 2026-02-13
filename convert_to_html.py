import markdown
import os
import sys

def convert_md_to_html(md_path, html_path):
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # 處理勾選與叉號的顏色
        md_content = md_content.replace('✅', '<span class="check">✔</span>')
        md_content = md_content.replace('❌', '<span class="cross">✘</span>')
        
        html_content = markdown.markdown(md_content, extensions=['tables', 'fenced_code'])
        
        # 加入 CSS 樣式
        styled_html = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: "Microsoft JhengHei", "Heiti TC", sans-serif;
                    line-height: 1.6;
                    max-width: 210mm;
                    margin: 0 auto;
                    padding: 20mm;
                    color: #333;
                }}
                h1 {{ 
                    text-align: center; 
                    border-bottom: 2px solid #333; 
                    padding-bottom: 10px;
                }}
                h2 {{ 
                    color: #0066cc; 
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                    margin-top: 30px;
                }}
                table {{
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }}
                th, td {{
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }}
                th {{
                    background-color: #f3f4f6;
                    font-weight: bold;
                }}
                tr:nth-child(even) {{
                    background-color: #f9fafb;
                }}
                .check {{ color: green; font-weight: bold; }}
                .cross {{ color: red; font-weight: bold; }}
                blockquote {{
                    background: #f9f9f9;
                    border-left: 5px solid #ccc;
                    margin: 1.5em 10px;
                    padding: 0.5em 10px;
                    color: #555;
                }}
                /* 針對比較表的置中 */
                td:nth-child(n+2) {{
                    text-align: center;
                }}
                /* 但第一列（項目名稱）靠左 */
                td:first-child, th:first-child {{
                    text-align: left;
                }}
                /* 費用說明表格不用置中，還原 */
                h4 + table td {{
                    text-align: left;
                }}
            </style>
        </head>
        <body>
            {html_content}
        </body>
        </html>
        """
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(styled_html)
            
        return True
    except Exception as e:
        print(f"HTML 轉換錯誤: {e}")
        return False

if __name__ == "__main__":
    md_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單.md"
    html_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單.html"
    
    if convert_md_to_html(md_path, html_path):
        print(f"成功轉換為 HTML: {html_path}")
        print("請直接用瀏覽器開啟此 HTML 檔案，然後按 Ctrl+P 另存為 PDF。這是最穩定的方法。")
    else:
        print("轉換失敗")
