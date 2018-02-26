export enum EnvironmentType {
  Mac,
  Linux,
  Windows
}

export const getEnvironment = (): EnvironmentType => {
  if (process.platform === "win32") {
    return EnvironmentType.Windows;
  }

  if (process.platform === "darwin") {
    return EnvironmentType.Mac;
  }

  if (process.platform === "linux") {
    return EnvironmentType.Linux;
  }

  throw new RangeError("Environment was not detected properly.");
};
