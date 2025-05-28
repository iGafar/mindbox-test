import { useTodos } from '../../context/TodoContext';
import Button from '../ui/Button';
import { ButtonsBlock, StyledButton, StyledFooter } from './styles';

export default function Footer() {
  const { filterStatus, activeTasksLength, filterTodos, removeCompletedTodos } =
    useTodos();

  return (
    <StyledFooter>
      <span>Незавершенные: {activeTasksLength}</span>

      <ButtonsBlock>
        <StyledButton
          $active={filterStatus === 'all'}
          size="small"
          btnType="text"
          onClick={() => filterTodos('all')}
        >
          Все
        </StyledButton>
        <StyledButton
          $active={filterStatus === 'active'}
          size="small"
          btnType="text"
          onClick={() => filterTodos('active')}
        >
          Активные
        </StyledButton>
        <StyledButton
          $active={filterStatus === 'completed'}
          size="small"
          btnType="text"
          onClick={() => filterTodos('completed')}
        >
          Завершенные
        </StyledButton>
      </ButtonsBlock>

      <Button size="small" btnType="text" onClick={removeCompletedTodos}>
        Удалить завершенные
      </Button>
    </StyledFooter>
  );
}
