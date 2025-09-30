"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
// Built-in functions for autocomplete
const BUILTIN_FUNCTIONS = [
    'print', 'input', 'len', 'str', 'int', 'float', 'bool',
    'range', 'max', 'min', 'sum', 'abs', 'round', 'pow'
];
// Keywords for autocomplete
const KEYWORDS = [
    'if', 'elif', 'else', 'for', 'while', 'def', 'return',
    'class', 'import', 'from', 'and', 'or', 'not', 'True', 'False', 'None'
];
// Diagnostic collection for error reporting
let diagnosticCollection;
function activate(context) {
    console.log('PyLite extension activated');
    // Create diagnostic collection
    diagnosticCollection = vscode.languages.createDiagnosticCollection('pylite');
    context.subscriptions.push(diagnosticCollection);
    // Register command to run PyLite file
    let runCommand = vscode.commands.registerCommand('pylite.runFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'pylite') {
            runPyLiteFile(editor.document);
        }
        else {
            vscode.window.showErrorMessage('Please open a .pyl file to run');
        }
    });
    // Register command to run PyLite file in interactive mode
    let runInteractiveCommand = vscode.commands.registerCommand('pylite.runInteractive', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'pylite') {
            runPyLiteInteractive(editor.document);
        }
        else {
            vscode.window.showErrorMessage('Please open a .pyl file to run');
        }
    });
    // Register completion provider for built-in functions
    const completionProvider = vscode.languages.registerCompletionItemProvider('pylite', {
        provideCompletionItems(document, position) {
            // Get all built-in function completions
            const completions = BUILTIN_FUNCTIONS.map(func => {
                const item = new vscode.CompletionItem(func, vscode.CompletionItemKind.Function);
                item.detail = `${func}()`;
                item.insertText = new vscode.SnippetString(`${func}($1)`);
                return item;
            });
            // Add keyword completions
            const keywordCompletions = KEYWORDS.map(keyword => {
                const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);
                return item;
            });
            return [...completions, ...keywordCompletions];
        }
    }, ' ' // Trigger on space
    );
    // Register diagnostic provider for error checking
    const diagnosticProvider = vscode.languages.registerDocumentFormattingEditProvider('pylite', {
        provideDocumentFormattingEdits(document) {
            // For now, we'll just clear diagnostics
            // In a future version, we could integrate with pylite's error checking
            diagnosticCollection.clear();
            return [];
        }
    });
    context.subscriptions.push(runCommand);
    context.subscriptions.push(runInteractiveCommand);
    context.subscriptions.push(completionProvider);
    context.subscriptions.push(diagnosticProvider);
}
exports.activate = activate;
function deactivate() {
    if (diagnosticCollection) {
        diagnosticCollection.clear();
        diagnosticCollection.dispose();
    }
}
exports.deactivate = deactivate;
function runPyLiteFile(document) {
    if (document.isUntitled) {
        vscode.window.showErrorMessage('Please save the file before running');
        return;
    }
    const terminal = vscode.window.createTerminal('PyLite');
    terminal.show();
    const config = vscode.workspace.getConfiguration('pylite');
    const pylitePath = config.get('pylite.path', 'pylite');
    terminal.sendText(`${pylitePath} "${document.fileName}"`);
}
function runPyLiteInteractive(document) {
    if (document.isUntitled) {
        vscode.window.showErrorMessage('Please save the file before running');
        return;
    }
    const terminal = vscode.window.createTerminal('PyLite Interactive');
    terminal.show();
    const config = vscode.workspace.getConfiguration('pylite');
    const pylitePath = config.get('pylite.path', 'pylite');
    terminal.sendText(`${pylitePath}`);
}
//# sourceMappingURL=extension.js.map