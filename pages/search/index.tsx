import React from 'react';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/404');
  });
  return null;
};

export default Index;
