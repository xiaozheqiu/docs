import React from 'react';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/kata-omnichat/introduction/what-is-kata-omnichat');
  });
  return null;
};

export default Index;
