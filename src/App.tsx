import { useState } from "react";
import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { Legend } from "./components/Legend";
import { Map } from "./components/Map";
import { locations } from "./data/locations";
import type { TidalLocation } from "./types";

function App() {
  const [selectedLocation, setSelectedLocation] = useState<TidalLocation>(
    locations[0]
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-ocean-50 via-white to-sky-100">
      <Header />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 lg:grid-cols-[1.45fr_0.9fr] lg:items-start lg:py-12">
        <Map
          locations={locations}
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
        />
        <div className="grid gap-6">
          <InfoCard location={selectedLocation} />
          <Legend />
        </div>
      </div>
    </main>
  );
}

export default App;
