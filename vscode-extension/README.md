# PyLite Edu for Visual Studio Code

This extension adds support for PyLite (.pyl) files in Visual Studio Code. PyLite is a simplified version of Python designed for teaching children programming.

## Features

- Syntax highlighting for PyLite files (.pyl)
- Code completion for built-in functions and keywords
- Snippets for common code patterns
- Run PyLite files directly from VS Code
- Interactive mode support
- Error detection and friendly messages

## Installation

1. Install the extension from the VS Code Marketplace
2. Ensure you have PyLite installed on your system:
   ```bash
   pip install py-lite-edu
   ```

## Usage

### Syntax Highlighting
When you open a .pyl file, the extension will automatically provide syntax highlighting for:
- Keywords: `if`, `elif`, `else`, `for`, `while`, `def`, `return`, `class`, etc.
- Built-in functions: `print`, `input`, `len`, `str`, `int`, `float`, etc.
- Strings, numbers, and comments
- Operators and comparison symbols

### Code Completion
As you type in a .pyl file, you'll get auto-completion suggestions for:
- Built-in functions like `print()`, `input()`, `len()`, etc.
- Keywords like `if`, `for`, `def`, etc.

### Snippets
Type one of these prefixes and press Tab to insert a code snippet:
- `for` - For loop
- `while` - While loop
- `if` - If statement
- `ifelse` - If-else statement
- `def` - Function definition
- `class` - Class definition
- `try` - Try-except block
- `print` - Print statement
- `input` - Input statement

### Running PyLite Files
Use the command palette (Ctrl+Shift+P) to run PyLite files:
- `PyLite: Run File` - Executes the current file
- `PyLite: Run Interactive` - Starts interactive mode

## Configuration

You can configure the path to the PyLite executable in your VS Code settings:

```json
{
  "pylite.path": "pylite"
}
```

## Requirements

- VS Code version 1.60.0 or higher
- PyLite installed on your system

## Contributing

Contributions are welcome! Please submit issues and pull requests to the main PyLite repository.

## License

MIT License
