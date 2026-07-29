import type { TidalLocation } from "../types";

export const locations: TidalLocation[] = [
  {
    id: "dadaepo",
    name: "\uB2E4\uB300\uD3EC",
    markerStatus: "safe",
    schedule: {
      safe: "07:00 - 10:20",
      caution: "10:20 - 11:00",
      danger: "11:00 - 17:00"
    },
    nextHighTide: "11:00",
    position: {
      top: "76%",
      left: "25%"
    }
  },
  {
    id: "eulsukdo",
    name: "\uC744\uC219\uB3C4",
    markerStatus: "caution",
    schedule: {
      safe: "07:00 - 10:20",
      caution: "10:20 - 11:00",
      danger: "11:00 - 17:00"
    },
    nextHighTide: "11:00",
    position: {
      top: "62%",
      left: "38%"
    }
  },
  {
    id: "myeongji",
    name: "\uBA85\uC9C0",
    markerStatus: "danger",
    schedule: {
      safe: "07:00 - 10:20",
      caution: "10:20 - 11:00",
      danger: "11:00 - 17:00"
    },
    nextHighTide: "11:00",
    position: {
      top: "69%",
      left: "49%"
    }
  }
];
