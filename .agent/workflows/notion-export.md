---
description: 如何將開發計畫複製到 Notion
---

要在開發過程中將最新的實作計畫（Implementation Plan）備份到 Notion，請按照以下步驟操作：

1. **執行匯出指令**：
   在終端機輸入：
   ```bash
   node scripts/export_plan.js
   ```

2. **複製內容**：
   指令執行後，螢幕上會顯示計畫內容。請手動選取並複製 `--- 複製以下內容到 Notion ---` 之後的所有文字。

3. **貼上至 Notion**：
   開啟您的 Notion 頁面，直接貼上即可。

> [!TIP]
> 每次我在規劃新功能並更新 `implementation_plan.md` 後，您都可以執行此指令來保持 Notion 同步。
