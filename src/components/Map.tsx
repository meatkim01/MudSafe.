import type { TidalLocation } from "../types";
import { Marker } from "./Marker";

type MapProps = {
  locations: TidalLocation[];
  selectedLocation: TidalLocation;
  onSelectLocation: (location: TidalLocation) => void;
};

export function Map({
  locations,
  selectedLocation,
  onSelectLocation
}: MapProps) {
  return (
    <section className="rounded-[2rem] bg-white p-4 shadow-xl shadow-sky-900/10">
      <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100 sm:min-h-[460px]">
        <svg
          viewBox="0 0 720 520"
          aria-label="Busan simplified map"
          className="absolute inset-0 h-full w-full"
          role="img"
        >
          <rect width="720" height="520" fill="transparent" />
          <path
            d="M438 43 C500 70 552 105 584 154 C616 204 606 248 632 289 C657 330 704 360 692 402 C680 444 624 448 577 467 C531 486 492 523 439 506 C386 489 366 443 321 425 C276 407 224 416 181 388 C138 360 123 311 93 276 C63 241 17 223 27 179 C37 135 91 123 136 100 C181 77 218 42 270 35 C322 28 376 16 438 43 Z"
            fill="#ffffff"
            stroke="#7dd3fc"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d="M76 332 C122 304 170 307 217 331 C258 352 292 356 333 333 C379 307 418 308 457 342 C500 379 545 385 600 366"
            fill="none"
            stroke="#bae6fd"
            strokeLinecap="round"
            strokeWidth="14"
          />
          <path
            d="M126 390 C184 419 247 425 310 401 C362 381 403 384 455 420"
            fill="none"
            stroke="#67e8f9"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <path
            d="M481 137 C519 160 544 190 551 229 C558 267 536 300 550 337"
            fill="none"
            stroke="#e0f2fe"
            strokeLinecap="round"
            strokeWidth="10"
          />
          <path
            d="M97 430 C144 455 198 464 253 454"
            fill="none"
            opacity="0.35"
            stroke="#0284c7"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <text
            x="472"
            y="246"
            fill="#0c4a6e"
            fontSize="24"
            fontWeight="700"
            opacity="0.7"
          >
            BUSAN
          </text>
        </svg>

        <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ocean-900 shadow-sm">
          {"\uBD80\uC0B0 \uC5F0\uC548"}
        </div>

        {locations.map((location) => (
          <Marker
            key={location.id}
            location={location}
            isSelected={location.id === selectedLocation.id}
            onSelect={onSelectLocation}
          />
        ))}
      </div>
    </section>
  );
}
