import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('fuchsia-codesearch-copy.copyCsLink', () => {
		let editor = vscode.window.activeTextEditor!;
		const path = editor.document.uri.path;
		const lineNumber = editor.selection.active.line + 1;
		const folder = vscode.workspace.getWorkspaceFolder(editor.document.uri)?.uri.path;
		const len = folder!.length;
		const new_path = path.substring(len + 1);
		const text = "https://cs.opensource.google/fuchsia/fuchsia/+/main:" + new_path + ";l=" + lineNumber; 
		vscode.env.clipboard.writeText(text);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
