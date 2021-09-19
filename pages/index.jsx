import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.png" width={200} height={200} alt="profile" />
      <h1 className="title">Welcome Anam</h1>
    </Layout>
  );
}
