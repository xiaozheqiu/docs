import { IconArrowRight } from '@aksara-ui/icons';
import { Box, Heading, theme, Text } from '@aksara-ui/react';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Anchor, Card } from './components';
import { ProductBadge } from '../badge';
import Image from 'next/image';
import { Tutorials } from 'contentlayer/generated';
import { NextImage } from 'components/image/NextImage';

interface TutorialCardProps {
  tutorial: Tutorials;
  index?: number;
}

export const TutorialCard: React.FC<TutorialCardProps> = ({ tutorial, index }) => {
  const { title, imgSpot, id } = tutorial;
  return (
    <Card key={title} index={index} display={'flex'} flexDirection={'column'}>
      <Box position={'relative'}>
        <NextImage src={imgSpot} alt={title} naturalHeight={540} naturalWidth={1032} />
      </Box>
      <CardContent>
        <Box minHeight="120px">
          <ProductBadge>
            <Box mr={8} display="flex">
              <Image
                width={16}
                height={16}
                layout="fixed"
                src="/assets/images/products/icon/kata-platform-icon.svg"
                alt="Kata Platform"
              />
            </Box>
            <Text fontSize={12} fontWeight={600} color={theme.colors.greydark02}>
              Kata Platform
            </Text>
          </ProductBadge>
          <Heading scale={700} fontSize={20} color={theme.colors.greydark02} overflow="hidden">
            {title}
          </Heading>
        </Box>
        <Link href={`/tutorials/${id}`} passHref>
          <Anchor alignItems={'end'}>
            查看详情 <IconArrowRight width={14} />
          </Anchor>
        </Link>
      </CardContent>
    </Card>
  );
};

const CardContent = styled(Box)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
