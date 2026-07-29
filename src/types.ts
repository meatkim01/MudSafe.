export type SafetyStatus = "safe" | "caution" | "danger";

export type TidalLocation = {
  id: string;
  name: string;
  markerStatus: SafetyStatus;
  schedule: Record<SafetyStatus, string>;
  nextHighTide: string;
  position: {
    top: string;
    left: string;
  };
};
