import time
import pyperclip
from pynput.keyboard import Controller, Key
import sys
import os
from opencc import OpenCC

keyboard = Controller()

# 設定日誌路徑
LOG_FILE = os.path.join(os.path.dirname(__file__), "whisper_tw_error.log")
WHISPER_LOG = r"C:\Users\danch\AppData\Roaming\whisperkey\app.log"

def log(msg):
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] {msg}\n")

log("Script started - Log tracking mode.")

# 初始化簡繁轉換器
try:
    cc = OpenCC('s2twp')
    log("OpenCC initialized.")
except Exception as e:
    log(f"OpenCC init error: {e}")
    sys.exit(1)

def tail_and_convert():
    # 確保日誌檔存在
    if not os.path.exists(WHISPER_LOG):
        log(f"Whisper log not found: {WHISPER_LOG}")
        time.sleep(2)
        return

    with open(WHISPER_LOG, "r", encoding="utf-8") as f:
        # 移到檔案最後面，只監聽新產生的日誌
        f.seek(0, 2)
        log("Started tailing app.log...")
        
        while True:
            line = f.readline()
            if not line:
                time.sleep(0.1)
                continue
            
            # 當偵測到 Whisper Key 寫入剪貼簿完成的紀錄時
            if "Copying text to clipboard" in line:
                log("Detected transcription completion in log.")
                
                # 暫停一小段時間確保剪貼簿已經有新內容
                time.sleep(0.3)
                
                try:
                    text = pyperclip.paste()
                    log(f"Clipboard read: {text}")
                    
                    if text:
                        # 轉換為繁體
                        tw_text = cc.convert(text)
                        log(f"Converted text: {tw_text}")
                        
                        # 寫回剪貼簿
                        pyperclip.copy(tw_text)
                        time.sleep(0.2)
                        
                        # 因為已經關閉 Whisper Key 的自動貼上，這裡由我們來送出 ctrl+v
                        log("Sending simulated ctrl+v with pynput...")
                        with keyboard.pressed(Key.ctrl):
                            keyboard.press('v')
                            keyboard.release('v')
                        log("ctrl+v sent.")
                    else:
                        log("Clipboard is empty.")
                except Exception as e:
                    log(f"Error during clipboard processing: {e}")

if __name__ == "__main__":
    try:
        tail_and_convert()
    except KeyboardInterrupt:
        log("Script stopped.")
    except Exception as e:
        log(f"Fatal error: {e}")
