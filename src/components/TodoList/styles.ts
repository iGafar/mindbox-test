import styled from 'styled-components';

export const ListWrapper = styled.div`
  flex: 1;
  overflow: auto;
`;

export const List = styled.ul`
  margin-bottom: 1rem;
  list-style: none;
  padding: 0;
`;

export const EmptyState = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  flex: 1;
`;

export const EmptyTitle = styled.p`
  font-size: 1.125rem;
`;

export const EmptySubtitle = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;
