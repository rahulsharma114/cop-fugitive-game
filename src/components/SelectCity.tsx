import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import '../styles/select-city.css';

interface CityOption {
  id: number;
  name: string;
  distance: number;
}

interface SelectCityProps {
  availableCities: CityOption[];
  onSubmit: (data: { cityId: number }) => void;
}

const SelectCity = ({ availableCities, onSubmit }: SelectCityProps) => {
  const router = useRouter();
  
  // Define the form schema using zod for validation
  const citySchema = z.object({
    cityId: z.string().min(1, 'City selection is required'),
  });

  // Use react-hook-form with zod validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(citySchema),
  });

  // Handle form submission
  const handleFormSubmit = (data: { cityId: string }) => {
    const cityId = Number(data.cityId); // Convert string to number
    console.log('form', cityId);
    onSubmit({ cityId }); // Pass the converted cityId
    router.push(`/select-vehicle?cityId=${cityId}`);
  };

  return (
    <div className="select-city">
      <h2>Select a City</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="cityId">Choose a City:</label>
          <select id="cityId" {...register('cityId')} defaultValue="">
            <option value="" disabled>Select a city</option>
            {availableCities?.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name} - Distance: {city.distance} km
              </option>
            ))}
          </select>
          {errors.cityId && <p className="error">{errors.cityId.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SelectCity;
