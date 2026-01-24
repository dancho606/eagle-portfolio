import fs from 'fs';
import path from 'path';

const configPath = 'src/data/config.json';
const imagesDir = 'public/images/KOL';
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.webp'));

console.log(`🔍 開始匹配 ${config.kols.length} 位 KOL 與 ${files.length} 個檔案...`);

const mapping = {
    "董湘鈴 Lena": "elna.webp",
    "黃菲菲 Amber": "Amber H .webp",
    "跟著Rhea慢生活": "跟著Lynn慢生活.webp",
    "蕭淑慎 Kitty": "蕭淑慎KittyHsiao.webp",
    "瑋哥 Wego": "瑋哥的故事.webp",
    "E小姐不購物會憂鬱": "Elena小姐不購物會憂鬱.webp",
    "水果姐姐 Mimi": "水果小姐姐Mimi.webp"
};

let updatedCount = 0;

config.kols = config.kols.map(kol => {
    let matchedFile = null;

    // 1. 手動對應優先
    if (mapping[kol.name]) {
        matchedFile = mapping[kol.name];
    } else {
        // 2. 嘗試完全包含匹配 (去除空白)
        const cleanName = kol.name.replace(/\s+/g, '');
        matchedFile = files.find(f => {
            const cleanFile = f.replace(/\s+/g, '').replace('.webp', '');
            return cleanFile.includes(cleanName) || cleanName.includes(cleanFile);
        });

        // 3. 嘗試關鍵字匹配 (取中文名或英文名)
        if (!matchedFile) {
            const parts = kol.name.split(' ');
            matchedFile = files.find(f => parts.some(p => p.length > 1 && f.includes(p)));
        }
    }

    if (matchedFile) {
        kol.image = `/images/KOL/${matchedFile}`;
        updatedCount++;
        console.log(`✅ [${kol.name}] -> ${matchedFile}`);
    } else {
        console.log(`⚠️ [${kol.name}] 未找到匹配照片`);
    }

    return kol;
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
console.log(`\n✨ 完成！已更新 ${updatedCount} 位 KOL 的照片路徑。`);
