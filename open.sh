#!/data/data/com.termux/files/usr/bin/bash
# Ek tap / ek command se Shortmeshi preview kholo:
#   server band ho to chalu karta hai, phir browser (Chrome) me khol deta hai.
set -u

DIR="$(cd "$(dirname "$0")" && pwd)"
URL="http://127.0.0.1:4173/"
LOG="/data/data/com.termux/files/usr/tmp/shortmeshi-preview.log"
cd "$DIR" || exit 1

# Server already chal raha hai?
if ! curl -s -o /dev/null --max-time 2 "$URL"; then
  echo "Server start ho raha hai..."
  setsid nohup npx vite preview --port 4173 --strictPort --host 0.0.0.0 \
    >"$LOG" 2>&1 < /dev/null &
  for _ in $(seq 1 80); do
    curl -s -o /dev/null --max-time 1 "$URL" && break
    sleep 0.25
  done
fi

if curl -s -o /dev/null --max-time 2 "$URL"; then
  echo "Server chalu: $URL"
  termux-wake-lock 2>/dev/null || true
  termux-open-url "$URL"
else
  echo "Server start nahi hua. Log dekho: $LOG"
  exit 1
fi
