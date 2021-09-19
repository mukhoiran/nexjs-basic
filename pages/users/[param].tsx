import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const { param } = router.query;

  return (
    <div>
      <p>
        User detail
        {' '}
        { param }
      </p>
    </div>
  );
}
