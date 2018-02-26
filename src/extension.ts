"use strict";
import * as vscode from "vscode";
import * as fs from "fs";
import { getSettingsPath, getSettings } from "./settingsFile";

const formatOnSaveKey = "editor.formatOnSave";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "toggle-format-on-save" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "toggle-format-on-save.toggle",
    () => {
      const settingsFilePath = getSettingsPath();
      fs.readFile(settingsFilePath, "utf8", function(err, settingsJson) {
        if (err) {
          vscode.window.showInformationMessage(
            "Unable to toggle Format on Save."
          );
        }

        const userSettings = getSettings(settingsJson);
        let updatedValue = true;
        if (formatOnSaveKey in userSettings) {
          updatedValue = !userSettings[formatOnSaveKey];
        }

        userSettings[formatOnSaveKey] = updatedValue;

        fs.writeFile(
          settingsFilePath,
          JSON.stringify(userSettings, null, 4),
          function(err) {
            if (err) {
              vscode.window.showInformationMessage(
                "Unable to toggle Format on Save."
              );
            }
          }
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
