import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 12px 24px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: #9ca3af;
  }
`;
