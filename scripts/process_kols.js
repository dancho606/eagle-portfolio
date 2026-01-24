import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/source_img/KOL';
const outputDir = 'public/images/KOL';
const size = '800x800';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all images from input directory
const images = fs.readdirSync(inputDir).filter(file =>
    /\.(jpg|jpeg|png|webp|jfif|avif)$/i.test(file)
);

if (images.length === 0) {
    console.log('❌ 沒有找到任何圖片，請將照片放入 public/images/raw_kols/ 資料夾。');
    process.exit(0);
}

console.log(`🚀 開始處理 ${images.length} 張照片...`);

images.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(outputDir, `${fileName}.webp`);

    try {
        // Magick command to crop to center square, resize, and convert to webp
        // ^ means "minimum dimension" resize, then -gravity center -extent crops it to square
        const command = `magick "${inputPath}" -resize ${size}^ -gravity center -extent ${size} -quality 85 "${outputPath}"`;

        execSync(command);
        console.log(`[${index + 1}/${images.length}] ✅ 已優化: ${fileName}.webp`);
    } catch (error) {
        console.error(`[${index + 1}/${images.length}] ❌ 處理失敗 ${file}:`, error.message);
    }
});

console.log('\n✨ 所有 KOL 照片處理完畢！您現在可以在 config.json 中使用 /images/kols/檔名.webp 了。');
