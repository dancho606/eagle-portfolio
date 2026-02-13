import os
import sys
import re

def convert_md_to_pdf_reportlab(md_path, pdf_path):
    """使用 reportlab 直接生成 PDF"""
    try:
        from reportlab.lib.pagesizes import A4
        from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
        from reportlab.lib.units import mm
        from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
        from reportlab.lib import colors
        from reportlab.pdfbase import pdfmetrics
        from reportlab.pdfbase.ttfonts import TTFont
        from reportlab.lib.enums import TA_LEFT, TA_CENTER
        
        # 註冊中文字體
        font_registered = False
        # 常見的 Windows 字體路徑
        possible_font_paths = [
            'C:\\Windows\\Fonts\\msjh.ttc',
            'C:\\Windows\\Fonts\\msjhl.ttc',
            'msjh.ttc',
            'MSJH.TTC'
        ]
        
        for path in possible_font_paths:
            try:
                pdfmetrics.registerFont(TTFont('MSYaHei', path, subfontIndex=0))
                # 嘗試註冊粗體，如果找不到就用一般的
                try:
                    pdfmetrics.registerFont(TTFont('MSYaHei-Bold', 'C:\\Windows\\Fonts\\msjhbd.ttc' if 'Windows' in path else 'msjhbd.ttc', subfontIndex=0))
                except:
                    pdfmetrics.registerFont(TTFont('MSYaHei-Bold', path, subfontIndex=0))
                
                font_name = 'MSYaHei'
                font_bold = 'MSYaHei-Bold'
                font_registered = True
                print(f"成功註冊字體: {path}")
                break
            except:
                continue
        
        if not font_registered:
            print("警告: 找不到中文字體，將使用預設字體 (可能會造成亂碼)")
            font_name = 'Helvetica'
            font_bold = 'Helvetica-Bold'
        
        # 讀取 Markdown 檔案
        with open(md_path, 'r', encoding='utf-8') as f:
            md_content = f.read()
        
        # 創建 PDF
        doc = SimpleDocTemplate(
            pdf_path,
            pagesize=A4,
            rightMargin=20*mm,
            leftMargin=20*mm,
            topMargin=20*mm,
            bottomMargin=20*mm
        )
        
        # 定義樣式
        styles = getSampleStyleSheet()
        
        # 標題樣式
        title_style = ParagraphStyle(
            'CustomTitle',
            parent=styles['Heading1'],
            fontName=font_bold,
            fontSize=24,
            textColor=colors.HexColor('#1a1a1a'),
            spaceAfter=12,
            alignment=TA_CENTER
        )
        
        h2_style = ParagraphStyle(
            'CustomH2',
            parent=styles['Heading2'],
            fontName=font_bold,
            fontSize=16,
            textColor=colors.HexColor('#0066cc'),
            spaceAfter=10,
            spaceBefore=15
        )
        
        h3_style = ParagraphStyle(
            'CustomH3',
            parent=styles['Heading3'],
            fontName=font_bold,
            fontSize=14,
            textColor=colors.HexColor('#333333'),
            spaceAfter=8,
            spaceBefore=12
        )
        
        normal_style = ParagraphStyle(
            'CustomNormal',
            parent=styles['Normal'],
            fontName=font_name,
            fontSize=11,
            leading=18,
            textColor=colors.HexColor('#333333')
        )
        
        # 解析 Markdown 內容
        story = []
        lines = md_content.split('\n')
        i = 0
        
        while i < len(lines):
            line = lines[i].strip()
            
            # 跳過空行
            if not line or line == '\r':
                i += 1
                continue
            
            # 處理標題
            if line.startswith('# '):
                text = line[2:].strip()
                story.append(Paragraph(text, title_style))
                story.append(Spacer(1, 12))
            
            elif line.startswith('## '):
                # 如果不是第一個大標題，且故事中已有內容，考慮換頁或留白
                if story:
                    story.append(Spacer(1, 10))
                text = line[3:].strip()
                story.append(Paragraph(text, h2_style))
                story.append(Spacer(1, 8))
            
            elif line.startswith('### '):
                text = line[4:].strip()
                story.append(Paragraph(text, h3_style))
                story.append(Spacer(1, 6))
            
            # 處理清單 (簡單處理)
            elif line.startswith('- ') or line.startswith('* '):
                text = line[2:].strip()
                # 處理粗體
                text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
                story.append(Paragraph(f"• {text}", normal_style))
                # story.append(Spacer(1, 2))
            
            # 處理分隔線
            elif line.startswith('---'):
                story.append(Spacer(1, 12))
            
            # 處理表格
            elif line.startswith('|'):
                table_data = []
                while i < len(lines) and lines[i].strip().startswith('|'):
                    row = [cell.strip() for cell in lines[i].split('|')[1:-1]]
                    # 跳過分隔行
                    if not all(set(cell.replace('-', '').replace(':', '').strip()) == set() for cell in row):
                        table_data.append(row)
                    i += 1
                
                if table_data:
                    processed_table_data = []
                    is_comparison_table = any("版" in str(cell) for cell in table_data[0])
                    
                    for row_idx, row in enumerate(table_data):
                        processed_row = []
                        for cell_idx, cell in enumerate(row):
                            cell_style = h3_style if row_idx == 0 else normal_style
                            
                            # 特別處理勾選與叉號符號
                            cell_text = cell
                            if cell == '✅' or '✅' in cell:
                                cell_text = cell.replace('✅', '<font color="green">✔</font>')
                            elif cell == '❌' or '❌' in cell:
                                cell_text = cell.replace('❌', '<font color="red">✘</font>')
                            
                            cell_text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', cell_text)
                            cell_text = cell_text.replace('<br>', '<br/>')
                            
                            # 比較表的數據列置中
                            current_style = cell_style
                            if is_comparison_table and cell_idx > 0 and row_idx > 0:
                                current_style = ParagraphStyle('Center', parent=cell_style, alignment=TA_CENTER)
                            elif is_comparison_table and cell_idx > 0 and row_idx == 0:
                                current_style = ParagraphStyle('CenterBold', parent=h3_style, alignment=TA_CENTER)
                                
                            processed_row.append(Paragraph(cell_text, current_style))
                        processed_table_data.append(processed_row)
                    
                    # 根據欄位數量調整寬度
                    num_cols = len(table_data[0])
                    if num_cols == 4 and is_comparison_table:
                        col_widths = [60*mm, 35*mm, 35*mm, 40*mm]
                    elif num_cols == 3:
                        col_widths = [60*mm, 80*mm, 30*mm]
                    elif num_cols == 2:
                        col_widths = [85*mm, 85*mm]
                    else:
                        col_widths = [170/num_cols * mm] * num_cols
                    
                    t = Table(processed_table_data, colWidths=col_widths, repeatRows=1)
                    t.setStyle(TableStyle([
                        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f3f4f6')),
                        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#111827')),
                        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
                        ('FONTNAME', (0, 0), (-1, 0), font_bold),
                        ('FONTSIZE', (0, 0), (-1, 0), 10),
                        ('FONTNAME', (0, 1), (-1, -1), font_name),
                        ('FONTSIZE', (0, 1), (-1, -1), 9),
                        ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
                        ('TOPPADDING', (0, 0), (-1, -1), 4),
                        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#e5e7eb')),
                    ]))
                    story.append(t)
                    story.append(Spacer(1, 10))
                continue
            
            # 處理引言 (QUOTE)
            elif line.startswith('> '):
                text = line[2:].strip()
                text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
                quote_style = ParagraphStyle(
                    'Quote',
                    parent=normal_style,
                    leftIndent=10,
                    textColor=colors.HexColor('#666666'),
                    fontName=font_name
                )
                story.append(Paragraph(text, quote_style))
                story.append(Spacer(1, 6))

            # 處理普通段落
            else:
                text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
                text = re.sub(r'\*(.*?)\*', r'<i>\1</i>', text)
                text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', text)
                
                if text:
                    story.append(Paragraph(text, normal_style))
                    story.append(Spacer(1, 6))
            
            i += 1
        
        # 生成 PDF
        doc.build(story)
        return True
        
    except Exception as e:
        print(f"轉換錯誤: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    md_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單.md"
    pdf_path = r"G:\我的雲端硬碟\AI公司\00專案\雄鷹網站\後台版\後台管理系統_報價單.pdf"
    
    if not os.path.exists(md_path):
        print(f"錯誤: 找不到檔案 {md_path}")
        sys.exit(1)
    
    print(f"正在轉換: {md_path}")
    if convert_md_to_pdf_reportlab(md_path, pdf_path):
        print("✓ 轉換成功！")
        sys.exit(0)
    else:
        print("\n✗ 轉換失敗。")
        sys.exit(1)

if __name__ == "__main__":
    main()
