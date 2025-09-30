#!/bin/bash

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Compile TypeScript
echo "Compiling TypeScript..."
npx tsc

echo "Build complete!"
