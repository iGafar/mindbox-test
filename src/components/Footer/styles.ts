import styled from 'styled-components';
import Button from '../ui/Button';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
		gap: 10px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled(Button)<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? '#007bff' : 'transparent')};
`;
