import markdown
import os
import sys

def generate_professional_html(md_path, html_path):
    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # 符號處理
        md_content = md_content.replace('✅', '<span class="status-icon success">✔</span>')
        md_content = md_content.replace('❌', '<span class="status-icon danger">✘</span>')
        
        # 轉換 Markdown
        html_body = markdown.markdown(md_content, extensions=['tables', 'fenced_code', 'nl2br'])
        
        # 專業 Paged.js 模板
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>雄鷹娛樂文創 - 報價單</title>
            <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');

                :root {{
                    --primary-color: #1a1a1a;
                    --accent-color: #0066cc;
                    --border-color: #e5e7eb;
                    --bg-gray: #f9fafb;
                }}

                @page {{
                    size: A4;
                    margin: 20mm;
                    @bottom-right {{
                        content: counter(page);
                        font-size: 10pt;
                        color: #999;
                    }}
                    @bottom-left {{
                        content: "雄鷹娛樂文創 - 後台管理系統報價單";
                        font-size: 9pt;
                        color: #ccc;
                    }}
                }}

                body {{
                    font-family: "Microsoft JhengHei", "Noto Sans TC", sans-serif;
                    font-size: 11pt;
                    line-height: 1.6;
                    color: #333;
                }}

                /* 標題樣式 */
                h1 {{
                    font-size: 24pt;
                    text-align: center;
                    border-bottom: 3px solid var(--primary-color);
                    padding-bottom: 10px;
                    margin-bottom: 30px;
                }}

                h2 {{
                    font-size: 16pt;
                    color: var(--accent-color);
                    border-left: 5px solid var(--accent-color);
                    padding-left: 10px;
                    margin-top: 30px;
                    background: linear-gradient(to right, #f0f7ff, transparent);
                }}

                h3 {{
                    font-size: 13pt;
                    color: #444;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                    margin-top: 20px;
                }}

                h4 {{
                    font-size: 12pt;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: #2c3e50;
                }}

                /* 表格樣式 */
                table {{
                    width: 100%;
                    border-collapse: collapse;
                    margin: 15px 0;
                    font-size: 10pt;
                    page-break-inside: auto;
                }}

                tr {{
                    page-break-inside: avoid;
                    page-break-after: auto;
                }}

                th, td {{
                    border: 1px solid var(--border-color);
                    padding: 8px 12px;
                    text-align: left;
                }}

                th {{
                    background-color: var(--bg-gray);
                    font-weight: bold;
                    color: #111;
                }}

                /* 符號樣式 */
                .status-icon {{
                    font-family: "Segoe UI Symbol", sans-serif;
                    font-weight: bold;
                    font-size: 1.2em;
                }}
                .success {{ color: #059669; }}
                .danger {{ color: #dc2626; }}

                /* 比較表特定樣式：第一個欄位靠左，其他置中 */
                table:has(th:nth-child(2)) td:not(:first-child),
                table:has(th:nth-child(2)) th:not(:first-child) {{
                    text-align: center;
                }}
                /* 費用表例外：全部靠左 */
                h4 + table td, h4 + table th {{
                    text-align: left !important;
                }}

                /* 引用區塊 */
                blockquote {{
                    border-left: 4px solid #f59e0b;
                    background-color: #fffbeb;
                    margin: 15px 0;
                    padding: 10px 15px;
                    font-size: 0.95em;
                    color: #92400e;
                }}

                ul {{
                    padding-left: 20px;
                }}
                
                li {{
                    margin-bottom: 4px;
                }}

                /* 代碼區塊 */
                pre {{
                    background: #f1f5f9;
                    padding: 15px;
                    border-radius: 6px;
                    border: 1px solid #e2e8f0;
                    white-space: pre-wrap;
                }}
            </style>
        </head>
        <body>
            {html_body}
        </body>
        </html>
        """
        
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        return True
        
    except Exception as e:
        print(f"錯誤: {e}")
        return False

if __name__ == "__main__":
    md_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單.md"
    html_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單_pro.html"
    
    print("正在生成專業排版檔案...")
    if generate_professional_html(md_path, html_path):
        print(f"成功！請開啟: {html_path}")
        print("注意：開啟後請等待 1-2 秒讓 Paged.js 排版，然後按 Ctrl+P 列印為 PDF")
    else:
        print("失敗")
