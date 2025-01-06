// app/[city]/page.tsx

'use client'; // Zorg ervoor dat deze component een client-side component is

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CityRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect de gebruiker naar de homepagina
    router.push('/');
  }, [router]);

  return <div>Redirecting...</div>;
};

export default CityRedirect;
