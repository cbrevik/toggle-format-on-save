# Deprecation Notice

I no longer recommend using this extension, unless you want to globally turn on and off `Format on Save`.

[VS Code v1.28 now supports saving without formatters](https://code.visualstudio.com/updates/v1_28#_save-without-formatters):

> The new command Save without Formatting (`workbench.action.files.saveWithoutFormatting`) can be used to save a file without triggering any of the save participants (for example, formatters, remove trailing whitespace, final newline). The default keybinding is `⌘K S`. This is useful when editing files outside your normal projects, which may have different formatting conventions.

When saving individual files, using the new `Save without Formatting` command is easier than globally turning on and off `Format on Save`. I will still keep the extension available on Marketplace for those that want the global functionality.

# Toggle Format on Save

Provides a command to toggle Format on Save (`editor.formatOnSave`) inside VS Code.

![settings.json example](img/settings.png)

Open your Command Palette (`CMD`/`CTRL`+`SHIFT`+`P`) and type `Toggle Format on Save`, then hit `Enter`.

![Command Palette Toggle Format on Save](img/toggle.gif)

**Important**: Backup your `settings.json` file (`CMD`/`CTRL`+`,`), . Since there currently isn't a VS Code API for editing setting-files, it is done manually with `JSON.parse`. This means the extension will parse the whole file, toggle `editor.formatOnSave`, and save the settings file.

**Important**: You will get a warning if your `settings.json` is not valid JSON. VS Code allows this file to contain invalid syntax like comments, and hanging commas (the last field in an object should not have a comma after it). If you fix these issues manually, then the Toggle command should work fine.

![Invalid JSON syntax example](img/invalidsyntax.png)

### Thanks

The `settings.json` parsing code has been inspired by [vscode-softwrap](https://github.com/jsturtevant/vscode-softwrap) & [vscode-togglecodelens](https://github.com/cmlewis89/vscode-togglecodelens)
