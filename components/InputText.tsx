import * as React from 'react';
import styled from 'styled-components';
import { theme } from '@aksara-ui/react';
import { Omit } from 'utility-types';
import SearchIcon from 'components/layout/Header/SearchIcon';
import CloseIcon from 'components/layout/Header/CloseIcon';

export interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  block?: boolean;
  clearable?: boolean;
  onClearButtonClick?: () => void;
}

interface IconProps {
  left?: boolean;
}

const Icon = styled('div')<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${(props) => (props.left ? 'auto' : '16px')};
  top: 0;
  bottom: 0;
  left: ${(props) => (props.left ? '16px' : 'auto')};
`;

const CloseButton = styled('button')`
  display: flex;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    path {
      fill: ${theme.colors.grey03};
    }
  }

  &:hover,
  &:focus {
    outline: none;

    svg {
      path {
        fill: ${theme.colors.grey05};
      }
    }
  }
`;

const Root = styled('div')<{ disabled?: boolean; block?: boolean }>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  position: relative;

  ${Icon} {
    path {
      fill: ${theme.colors.grey03};
    }
  }

  &:hover,
  &:focus,
  &:active {
    ${Icon} {
      path {
        fill: ${theme.colors.grey05};
      }
    }
  }
`;

const Input = styled('input')`
  display: inline-block;
  position: relative;
  padding: 8px 16px 8px 36px;
  height: 40px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.grey07};
  border: 1px solid ${theme.colors.grey03};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;

  ${Icon} {
    path {
      fill: ${theme.colors.grey03};
    }
  }

  &:not(:disabled):not(.disabled) {
    &::placeholder {
      color: ${theme.colors.grey03};
    }

    ${Icon} {
      path {
        fill: ${theme.colors.grey03};
      }
    }

    &:hover,
    &:focus,
    &:active {
      &::placeholder {
        color: ${theme.colors.grey05};
      }

      ${Icon} {
        path {
          fill: ${theme.colors.grey05};
        }
      }
    }

    &:hover {
      border-color: ${theme.colors.grey05};
    }

    &:focus,
    &:active {
      border-color: ${theme.colors.blue07};
      outline: none;
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${theme.colors.grey01};
    border-color: ${theme.colors.grey02};
    cursor: not-allowed;

    &::placeholder {
      color: ${theme.colors.grey03};
    }

    ${Icon} {
      path {
        fill: ${theme.colors.grey03};
      }
    }
  }
`;

function InputText(
  { className, style, block, clearable, onClearButtonClick, value, ...rest }: InputTextProps,
  ref: React.Ref<HTMLInputElement>
) {
  const renderIcon = () => {
    if (clearable) {
      return (
        <Icon
          onClick={() => {
            if (onClearButtonClick) {
              onClearButtonClick();
            }
          }}
        >
          <CloseButton>
            <CloseIcon height={16} width={16} />
          </CloseButton>
        </Icon>
      );
    }

    if (value) {
      return (
        <Icon
          onClick={() => {
            if (onClearButtonClick) {
              onClearButtonClick();
            }
          }}
        >
          <CloseButton>
            <CloseIcon height={16} width={16} />
          </CloseButton>
        </Icon>
      );
    }

    return (
      <Icon left>
        <SearchIcon height={16} width={16} />
      </Icon>
    );
  };

  return (
    <Root className={className} style={style} block={block}>
      <Input type="text" {...rest} ref={ref} />
      {renderIcon()}
    </Root>
  );
}

export default React.forwardRef(InputText);
