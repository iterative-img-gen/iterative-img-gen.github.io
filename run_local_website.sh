#!/bin/bash

# Configuration
PORT=8080

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting local web server...${NC}"

# Find and kill any process using the specified port
PID=$(lsof -ti:$PORT)
if [ ! -z "$PID" ]; then
    echo -e "${YELLOW}Found existing server on port $PORT (PID: $PID)${NC}"
    kill -9 $PID
    echo -e "${GREEN}Killed existing server${NC}"
    sleep 1
else
    echo -e "${YELLOW}No existing server found on port $PORT${NC}"
fi

# Start the Python HTTP server
echo -e "${GREEN}Starting HTTP server on port $PORT...${NC}"
echo -e "${GREEN}Visit: http://localhost:$PORT${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
echo ""

# Try Python 3 first, fall back to Python 2 if needed
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo -e "${RED}Error: Python is not installed${NC}"
    exit 1
fi

