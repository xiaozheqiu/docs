import Image from 'next/image';
import React from 'react';

const MAX_PORTRAIT_HEIGHT = 480;
const MAX_LANDSCAPE_WIDTH = 720;

const calculateImageDimension = ({ naturalHeight, naturalWidth }) => {
  // If layout is other than fill, onLoadingComplete will return small size for naturalHeight and naturalWidth
  if (naturalHeight === 0 || naturalWidth === 0) return { height: 0, width: 0, layout: 'fill' };

  if (naturalHeight > naturalWidth) {
    if (naturalHeight <= MAX_PORTRAIT_HEIGHT) {
      return {
        height: naturalHeight,
        width: naturalWidth > MAX_LANDSCAPE_WIDTH ? MAX_LANDSCAPE_WIDTH : naturalWidth,
        layout: 'intrinsic',
      };
    } else {
      return {
        height: MAX_PORTRAIT_HEIGHT,
        width: Math.floor((MAX_PORTRAIT_HEIGHT / naturalHeight) * naturalWidth),
        layout: 'intrinsic',
      };
    }
  } else {
    if (naturalWidth <= MAX_LANDSCAPE_WIDTH) {
      return {
        height: naturalHeight > MAX_PORTRAIT_HEIGHT ? MAX_PORTRAIT_HEIGHT : naturalHeight,
        width: naturalWidth,
        layout: 'intrinsic',
      };
    } else {
      // Resize using max width if larger than threshold
      return {
        height: Math.floor((MAX_LANDSCAPE_WIDTH / naturalWidth) * naturalHeight),
        width: MAX_LANDSCAPE_WIDTH,
        layout: 'intrinsic',
      };
    }
  }
};

export const NextImage = (props) => {
  //natural Width and naturalHeight for handling old cases
  const { src, alt, naturalWidth, naturalHeight, layout: _, ...rest } = props;
  // const [naturalDimension, setNaturalDimension] = React.useState({ naturalWidth, naturalHeight });
  const dimension = React.useMemo(
    () => calculateImageDimension({ naturalWidth, naturalHeight }),
    [naturalWidth, naturalHeight]
  );

  return (
    <Image src={src} alt={alt} {...rest} width={dimension.width} height={dimension.height} layout={dimension.layout} />
  );
};
