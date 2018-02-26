import { getEnvironment, EnvironmentType } from "./environment";

export const getSettingsPath = (): string => {
  switch (getEnvironment()) {
    case EnvironmentType.Linux:
      return process.env.HOME + "/.config/Code/User/settings.json";
    case EnvironmentType.Mac:
      return (
        process.env.HOME +
        "/Library/Application Support/Code/User/settings.json"
      );
    case EnvironmentType.Windows:
      return process.env.APPDATA + "\\Code\\User\\settings.json";
  }
};

export const getSettings = (settingsJson: string): any => {
  // there is a comment in the settings.json file.  remove it.
  return JSON.parse(settingsJson);
};
