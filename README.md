# toggle-format-on-save README

Provides a command to toggle Format on Save (`editor.formatOnSave`) inside VS Code.

**Important**: Backup your `settings.json` file. Since there currently isn't a VS Code API for editing setting-files, it is done manually. This means the extension will parse the whole file, toggle `editor.formatOnSave`, and save the settings file.

### Thanks to

[vscode-togglecodelens](https://github.com/cmlewis89/vscode-togglecodelens)
