import { Box, theme, Text } from '@aksara-ui/react';
import { NextImage } from 'components/image/NextImage';
import React from 'react';

export const ImageWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={24} textAlign="center" position={'relative'} {...rest} />;
};

const CaptionWrapper = (props) => {
  const { className, ...rest } = props;
  return (
    <Box
      className={className}
      backgroundColor={theme.colors.greylight03}
      borderTop={`1px solid ${theme.colors.greylight04}`}
      color={theme.colors.greydark02}
      p={16}
      fontSize={14}
      lineHeight={'20px'}
      textAlign={'left'}
      {...rest}
    />
  );
};

const FigureWrapper = (props) => {
  const { className, ...rest } = props;
  return <Box className={className} marginY={16} border={`1px solid ${theme.colors.greylight04}`} {...rest} />;
};

export const FigureImage = (props) => {
  const { src, alt, caption, ...rest } = props;
  return (
    <FigureWrapper>
      <ImageWrapper marginY={0}>
        <NextImage src={src} alt={alt} {...rest} />
      </ImageWrapper>
      <CaptionWrapper>
        {caption && (
          <>
            <Text mr={5}>
              <strong>{caption.title}</strong>
            </Text>
            <Text>{caption.description}</Text>
          </>
        )}
      </CaptionWrapper>
    </FigureWrapper>
  );
};

const Components = {
  FigureImage,
  ImageWrapper,
  NextImage,
};

export default Components;
