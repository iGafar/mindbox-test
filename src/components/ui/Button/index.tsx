import {
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { StyledButton } from './styles';

export type BtnSize = 'small' | 'large';
export type BtnType = 'text' | 'default';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: BtnSize;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  btnType?: BtnType;
}

export default function Button({
  size,
  onClick,
  children,
  btnType = 'default',
  ...rest
}: IButtonProps) {
  return (
    <StyledButton $size={size} $btnType={btnType} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
}
