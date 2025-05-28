import styled from 'styled-components';
import type { BtnSize, BtnType } from '.';

export const StyledButton = styled.button<{
  $size: BtnSize;
  $btnType: BtnType;
}>`
  padding: ${({ $size }) => ($size === 'large' ? '12px 24px' : '8px 16px')};
  font-size: ${({ $size }) => ($size === 'large' ? '16px' : '14px')};
  background-color: ${({ $btnType }) =>
    $btnType === 'default' ? '#007bff' : 'transparent'};
  color: ${({ $btnType }) => ($btnType === 'default' ? '#fff' : '#000')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
    background-color: #007bff;
    color: #fff;
  }

  &:active {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
