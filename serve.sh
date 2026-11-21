#!/data/data/com.termux/files/usr/bin/bash
# Shortmeshi preview ko zinda rakhta hai: crash/exit ho to turant restart.
# Isse alag se chalao:  setsid nohup ~/Shortmeshi/serve.sh >/dev/null 2>&1 &
cd /data/data/com.termux/files/home/Shortmeshi || exit 1

termux-wake-lock 2>/dev/null || true
LOG="/data/data/com.termux/files/usr/tmp/shortmeshi-preview.log"
echo "--- $(date) supervisor start ---" >>"$LOG"

while true; do
  npx vite preview --port 4173 --strictPort --host 0.0.0.0 >>"$LOG" 2>&1
  echo "--- $(date) server exit, 2s me restart ---" >>"$LOG"
  sleep 2
done
