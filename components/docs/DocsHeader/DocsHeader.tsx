import * as React from 'react';
import { Heading, Box, Text } from 'components/foundations';
import { Space } from 'components/Theme';

interface DocsHeaderProps {
  title: string;
  subtitle?: string;
  margin?: Space;
}

const DocsHeader: React.FC<DocsHeaderProps> = ({ title, subtitle, margin }) => {
  return (
    <Box as="header" mb={'xxl'} mt={'xxl'}>
      <Heading as="h1" fontSize={36} fontWeight={700}>
        {title}
      </Heading>
      <Text as="p" size={400} mt="sm">
        {subtitle}
      </Text>
    </Box>
  );
};

DocsHeader.defaultProps = {
  subtitle: undefined,
  margin: 'xl',
};

export default DocsHeader;
