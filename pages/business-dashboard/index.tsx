import React from 'react';
import { useRouter } from 'next/router';

const Index: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/business-dashboard/introduction/about');
  });
  return null;
};

export default Index;
