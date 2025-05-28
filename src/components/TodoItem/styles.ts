import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f3f4f6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const ToggleButton = styled.button<{ $completed: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${props => (props.$completed ? '#10b981' : '#d1d5db')};
  background: ${props => (props.$completed ? '#10b981' : 'transparent')};
  margin-right: 1rem;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => (props.$completed ? '#10b981' : '#6366f1')};
  }
`;

export const TodoText = styled.span<{ $completed: boolean }>`
  color: ${props => (props.$completed ? '#9ca3af' : '#1f2937')};
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
  transition: all 0.2s;
`;
