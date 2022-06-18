import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BootProcess } from '../components/BootLoader';

const Home: NextPage = () => {
  const router = useRouter();

  return <BootProcess onBooted={() => router.push('/bin/bash')} />;
};

export default Home;
