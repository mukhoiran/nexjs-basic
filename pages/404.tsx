import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Oooops..........</h1>
      <h1 className="title-not-found">Page not found!</h1>
    </div>
  );
}
