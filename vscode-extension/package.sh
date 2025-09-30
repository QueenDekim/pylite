#!/bin/bash

# Build the extension first
./build.sh

# Package the extension
echo "Packaging extension..."
npx @vscode/vsce package --allow-missing-repository

echo "Extension packaged successfully!"
echo "You can install it in VS Code by running:"
echo "code --install-extension pylite-language-support-{version}.vsix"
