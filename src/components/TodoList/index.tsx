import { useTodos } from '../../context/TodoContext';
import TodoItem from '../TodoItem';
import {
  EmptyState,
  EmptySubtitle,
  EmptyTitle,
  List,
  ListWrapper,
} from './styles';

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>Задач нет</EmptyTitle>
        <EmptySubtitle>Добавьте задачку</EmptySubtitle>
      </EmptyState>
    );
  }

  return (
    <ListWrapper>
      <List data-testid="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </ListWrapper>
  );
}
