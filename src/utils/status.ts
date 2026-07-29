import type { SafetyStatus } from "../types";

export const statusLabels: Record<SafetyStatus, string> = {
  safe: "안전",
  caution: "주의",
  danger: "위험"
};

export const statusMessages: Record<SafetyStatus, string> = {
  safe: "현재는 갯벌 이용이 가능한 시간입니다.",
  caution: "곧 밀물이 시작됩니다. 안전한 곳으로 이동하세요.",
  danger: "현재는 출입 금지 시간입니다. 갯벌에 들어가지 마세요."
};

export const statusStyles: Record<
  SafetyStatus,
  { dot: string; badge: string; ring: string }
> = {
  safe: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    ring: "ring-emerald-300"
  },
  caution: {
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    ring: "ring-amber-300"
  },
  danger: {
    dot: "bg-rose-500",
    badge: "bg-rose-50 text-rose-700 ring-rose-200",
    ring: "ring-rose-300"
  }
};

const minutesInDay = 24 * 60;

export function getCurrentSafetyStatus(
  schedule: Record<SafetyStatus, string>,
  currentDate = new Date()
): SafetyStatus {
  const currentMinutes =
    currentDate.getHours() * 60 + currentDate.getMinutes();

  const matchedStatus = (Object.keys(schedule) as SafetyStatus[]).find(
    (status) => isTimeInRange(currentMinutes, schedule[status])
  );

  return matchedStatus ?? "danger";
}

function isTimeInRange(currentMinutes: number, range: string) {
  const [start, end] = range.split(" - ").map(parseTime);

  if (start <= end) {
    return currentMinutes >= start && currentMinutes < end;
  }

  return currentMinutes >= start || currentMinutes < end % minutesInDay;
}

function parseTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}
