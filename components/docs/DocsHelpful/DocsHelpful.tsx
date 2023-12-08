import React from 'react';
import { Text, Box, Button as ButtonAksara, theme } from '@aksara-ui/react';
import { IconLike, IconDislike } from '@aksara-ui/icons';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const DocsHelpful: React.FC = () => {
  const [reviewed, setReviewed] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setReviewed(false);
  }, [router]);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={64}>
      {!reviewed ? (
        <Box>
          <Text fontWeight={700} mr={12}>
            Was this helpful?
          </Text>
          <Button mr={12} onClick={() => setReviewed(true)} icon={IconLike} iconPosition="left">
            Yes
          </Button>
          <Button onClick={() => setReviewed(true)} icon={IconDislike} iconPosition="left">
            No
          </Button>
        </Box>
      ) : (
        <Text>Thank you for your feedback 🙌</Text>
      )}
    </Box>
  );
};

export default DocsHelpful;

const Button = styled(ButtonAksara)`
  background-color: ${theme.colors.greylight03};
  border-color: ${theme.colors.grey04};
  font-family: 'Inter';
`;
