import fs from 'fs';
import path from 'path';

// 此腳本讀取 implementation_plan.md 並輸出適合手動複製的格式
const planPath = 'C:\\Users\\danch\\.gemini\\antigravity\\brain\\8d8ff010-e4a7-4864-83a3-80f1a2a5875d\\implementation_plan.md';

if (fs.existsSync(planPath)) {
    const content = fs.readFileSync(planPath, 'utf8');
    console.log('--- 複製以下內容到 Notion ---');
    console.log(content);
    console.log('----------------------------');
} else {
    console.error('找不到實作計畫文件。');
}
