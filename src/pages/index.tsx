// pages/index.tsx

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Fugitive Capture Game!</h1>
      <p>Choose your city and vehicle to capture the fugitive.</p>
      <Link href="/select-city">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default HomePage;
