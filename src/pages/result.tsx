// pages/result.tsx

import { useRouter } from 'next/router';

const Result = () => {
  const router = useRouter();
  const { status, cop, city } = router.query;

  return (
    <div>
      <h1>Mission Result</h1>
      {status === 'success' ? (
        <p>{cop} successfully captured the fugitive in {city}!</p>
      ) : (
        <p>{cop} failed to capture the fugitive in {city}. Better luck next time!</p>
      )}
    </div>
  );
};

export default Result;
