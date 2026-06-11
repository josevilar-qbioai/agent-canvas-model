#!/bin/bash
# Run this to test the canvas locally (ES6 modules require a server)
# Usage: bash serve.sh [port]
PORT=${1:-8080}
echo "Canvas available at: http://localhost:$PORT/canvas_cloud_v4.html"
echo "Press Ctrl+C to stop."
python3 -m http.server $PORT
