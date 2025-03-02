// pages/select-vehicle.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const vehicles = [
  { type: 'EV Bike', range: 60 },
  { type: 'EV Car', range: 100 },
  { type: 'EV SUV', range: 120 },
];

const cityDistances: any = {
  1: 60, // Yapkashnagar
  2: 50, // Lihaspur
  3: 40, // Narmis City
  4: 30, // Shekharvati
  5: 20, // Nuravgram
};

export default function SelectVehicle() {
  const router = useRouter();
  const { cityId } = router.query;
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedVehicle) {
      const cityDistance = cityDistances[Number(cityId)];
      const vehicle = vehicles.find(v => v.type === selectedVehicle);
      if (vehicle) {
        const roundTripDistance = cityDistance * 2;
        if (vehicle.range >= roundTripDistance) {
          setResult(`Success! The fugitive was captured by Cop in ${cityId}`);
        } else {
          setResult('Failed to capture the fugitive.');
        }
      }
    }
  };

  return (
    <div>
      <h1>Select a Vehicle</h1>
      <select onChange={(e) => setSelectedVehicle(e.target.value)} value={selectedVehicle || ''}>
        <option value="">Select a Vehicle</option>
        {vehicles?.map(v => (
          <option key={v.type} value={v.type}>{v.type} - Range: {v.range} km</option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>

      {result && <p>{result}</p>}
    </div>
  );
}
