// pages/select-city.tsx

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';

const citySchema = z.object({
  cityId: z.string().min(1, 'City selection is required')
});

export default function SelectCity() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(citySchema),
  });

  const cities = [
    { id: 1, name: 'Yapkashnagar', distance: 60 },
    { id: 2, name: 'Lihaspur', distance: 50 },
    { id: 3, name: 'Narmis City', distance: 40 },
    { id: 4, name: 'Shekharvati', distance: 30 },
    { id: 5, name: 'Nuravgram', distance: 20 },
  ];

  const onSubmit = (data: { cityId: string }) => {
    router.push(`/select-vehicle?cityId=${data.cityId}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Select a City</h1>
      <select {...register('cityId')}>
        <option value="">Select City</option>
        {cities?.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>
      {errors.cityId && <p>{errors.cityId.message}</p>}
      <button type="submit">Next</button>
    </form>
  );
}
