import type { TidalLocation } from "../types";
import { statusLabels, statusStyles } from "../utils/status";

type MarkerProps = {
  location: TidalLocation;
  isSelected: boolean;
  onSelect: (location: TidalLocation) => void;
};

export function Marker({ location, isSelected, onSelect }: MarkerProps) {
  const styles = statusStyles[location.markerStatus];

  return (
    <button
      type="button"
      aria-label={`${location.name} ${statusLabels[location.markerStatus]}`}
      onClick={() => onSelect(location)}
      className="absolute -translate-x-1/2 -translate-y-1/2 text-left"
      style={{ top: location.position.top, left: location.position.left }}
    >
      <span
        className={`flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg ring-2 transition hover:-translate-y-0.5 hover:shadow-xl ${
          isSelected ? styles.ring : "ring-white"
        }`}
      >
        <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
        {location.name}
      </span>
    </button>
  );
}
