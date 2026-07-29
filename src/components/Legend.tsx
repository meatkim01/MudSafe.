import { statusStyles } from "../utils/status";
import type { SafetyStatus } from "../types";

const legendItems: Array<{
  status: SafetyStatus;
  label: string;
  description: string;
}> = [
  { status: "safe", label: "안전", description: "이용 가능" },
  { status: "caution", label: "주의", description: "곧 밀물" },
  { status: "danger", label: "위험", description: "출입 금지" }
];

export function Legend() {
  return (
    <section className="rounded-[2rem] bg-white p-5 shadow-lg shadow-sky-900/10">
      <h2 className="text-lg font-bold text-slate-950">범례</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {legendItems.map((item) => (
          <div key={item.status} className="flex items-center gap-3">
            <span
              className={`h-4 w-4 rounded-full ${statusStyles[item.status].dot}`}
            />
            <span className="text-sm font-medium text-slate-600">
              <strong className="font-bold text-slate-900">{item.label}</strong>
              {" - "}
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
