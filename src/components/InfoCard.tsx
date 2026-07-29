import { useEffect, useState } from "react";
import type { TidalLocation } from "../types";
import {
  getCurrentSafetyStatus,
  statusLabels,
  statusMessages,
  statusStyles
} from "../utils/status";

type InfoCardProps = {
  location: TidalLocation;
};

export function InfoCard({ location }: InfoCardProps) {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const currentStatus = getCurrentSafetyStatus(location.schedule, currentTime);
  const styles = statusStyles[currentStatus];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-xl shadow-sky-900/10">
      <div className="mb-6 rounded-2xl bg-slate-950 px-5 py-4 text-white shadow-lg shadow-slate-950/10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
          현재 시간
        </p>
        <time className="mt-1 block text-3xl font-bold tabular-nums">
          {currentTime.toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}
        </time>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean-600">
            선택 위치
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            {location.name}
          </h2>
        </div>
        <span
          className={`rounded-full px-5 py-3 text-xl font-bold ring-1 ${styles.badge}`}
        >
          {statusLabels[currentStatus]}
        </span>
      </div>

      <dl className="mt-6 grid gap-3">
        <InfoRow label="안전 이용 시간" value={location.schedule.safe} />
        <InfoRow label="주의 시간" value={location.schedule.caution} />
        <InfoRow label="위험 시간" value={location.schedule.danger} />
        <InfoRow label="다음 만조 시간" value={location.nextHighTide} />
      </dl>

      <div className="mt-6 rounded-2xl bg-ocean-50 p-4 text-sm leading-6 text-ocean-900 ring-1 ring-ocean-100">
        {statusMessages[currentStatus]}
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 px-4 py-3">
      <dt className="text-sm font-medium text-slate-500">{label}</dt>
      <dd className="text-sm font-bold text-slate-900">{value}</dd>
    </div>
  );
}
