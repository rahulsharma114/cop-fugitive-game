// pages/select-vehicle.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface VehicleOption {
  name: string;
  range: number;
  count: number;
}

const SelectVehicle = () => {
  const router = useRouter();
  const { cityId } = router.query; // Get cityId from the URL query parameters

  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [vehicles, setVehicles] = useState<VehicleOption[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  useEffect(() => {
    if (cityId) {
      setSelectedCityId(Number(cityId)); // Set the selected city ID from the query
    }
  }, [cityId]);

  // Sample vehicle data based on city
  const allVehicles: Record<number, VehicleOption[]> = {
    1: [
      { name: 'EV Bike', range: 60, count: 2 },
      { name: 'EV Car', range: 100, count: 1 },
    ],
    2: [
      { name: 'EV Car', range: 100, count: 2 },
      { name: 'EV SUV', range: 120, count: 1 },
    ],
    // Add more cities with vehicle options as needed
  };

  // Sample city distances
  const cityDistances: Record<number, number> = {
    1: 60, // Yapkashnagar
    2: 50, // Lihaspur
    3: 40, // Narmis City
    4: 30, // Shekharvati
    5: 20, // Nuravgram
  };

  useEffect(() => {
    if (selectedCityId !== null) {
      setVehicles(allVehicles[selectedCityId] || []);
    }
  }, [selectedCityId]);

  // Handle form submission to determine the verdict
  const handleSubmit = () => {
    if (selectedVehicle && selectedCityId !== null) {
      const vehicle = vehicles.find((v) => v.name === selectedVehicle);
      const cityDistance = cityDistances[selectedCityId];
      if (vehicle) {
        const roundTripDistance = cityDistance * 2;
        if (vehicle.range >= roundTripDistance) {
          // Successful capture
          router.push(`/result?status=success&cop=Cop%20A&city=${selectedCityId}`);
        } else {
          // Failed capture
          router.push(`/result?status=failure&cop=Cop%20A&city=${selectedCityId}`);
        }
      }
    }
  };

  return (
    <div className="select-vehicle">
      <h2>Select a Vehicle</h2>

      {selectedCityId === null ? (
        <p>Loading...</p>
      ) : vehicles.length === 0 ? (
        <p>No vehicles available for the selected city.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div>
            <label htmlFor="vehicle">Choose a Vehicle:</label>
            <select
              id="vehicle"
              name="vehicle"
              value={selectedVehicle || ''}
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              <option value="" disabled>Select a vehicle</option>
              {vehicles.map((vehicle, index) => (
                <option key={index} value={vehicle.name}>
                  {vehicle.name} - Range: {vehicle.range} km
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SelectVehicle;
