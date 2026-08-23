#!/usr/bin/env bash
PORTFILE="C:/Users/brode/AppData/Local/Temp/claude/C--eran-projects-mine-sessions-yad2/7b555789-0608-412c-a5bf-cb3149af7204/scratchpad/port.txt"
PORT=$(cat "$PORTFILE" 2>/dev/null)
if ! curl -s --max-time 3 "http://127.0.0.1:$PORT/status" >/dev/null 2>&1; then
  cd /c/eran/projects/playwright-server || cd "C:/eran/projects/playwright-server"
  node dist/pwhs.js down --all >/dev/null 2>&1
  PORT=$(node dist/pwhs.js up)
  echo "$PORT" > "$PORTFILE"
fi
echo "$PORT"
