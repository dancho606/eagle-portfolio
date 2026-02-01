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
        try:
            # 嘗試使用 Windows 的微軟正黑體
            pdfmetrics.registerFont(TTFont('MSYaHei', 'MSJH.TTC', subfontIndex=0))
            pdfmetrics.registerFont(TTFont('MSYaHei-Bold', 'MSJHBD.TTC', subfontIndex=0))
            font_name = 'MSYaHei'
            font_bold = 'MSYaHei-Bold'
        except:
            # 如果找不到，使用預設字體
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
                text = line[3:].strip()
                story.append(Paragraph(text, h2_style))
                story.append(Spacer(1, 8))
            
            elif line.startswith('### '):
                text = line[4:].strip()
                story.append(Paragraph(text, h3_style))
                story.append(Spacer(1, 6))
            
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
                    # 創建表格
                    t = Table(table_data)
                    t.setStyle(TableStyle([
                        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0066cc')),
                        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
                        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                        ('FONTNAME', (0, 0), (-1, 0), font_bold),
                        ('FONTSIZE', (0, 0), (-1, 0), 11),
                        ('FONTNAME', (0, 1), (-1, -1), font_name),
                        ('FONTSIZE', (0, 1), (-1, -1), 10),
                        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                        ('BACKGROUND', (0, 1), (-1, -1), colors.white),
                        ('GRID', (0, 0), (-1, -1), 1, colors.HexColor('#dddddd')),
                        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f9f9f9')])
                    ]))
                    story.append(t)
                    story.append(Spacer(1, 12))
                continue
            
            # 處理普通段落
            else:
                # 處理粗體
                text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
                # 處理斜體
                text = re.sub(r'\*(.*?)\*', r'<i>\1</i>', text)
                # 處理連結
                text = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2">\1</a>', text)
                
                if text:
                    story.append(Paragraph(text, normal_style))
                    story.append(Spacer(1, 6))
            
            i += 1
        
        # 生成 PDF
        doc.build(story)
        return True
        
    except ImportError as e:
        print(f"缺少必要的模組: {e}")
        return False
    except Exception as e:
        print(f"轉換錯誤: {e}")
        import traceback
        traceback.print_exc()
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
    print()
    
    # 使用 reportlab
    print("使用 reportlab 轉換...")
    if convert_md_to_pdf_reportlab(md_path, pdf_path):
        print("✓ 轉換成功！")
        print(f"\nPDF 已保存至: {pdf_path}")
        sys.exit(0)
    else:
        print("\n✗ 轉換失敗。")
        print("請執行: pip install reportlab")
        sys.exit(1)

if __name__ == "__main__":
    main()
