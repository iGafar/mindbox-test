import type { Todo } from '../../context/TodoContext.types';
import { useTodos } from '../../context/TodoContext';
import { ListItem, ToggleButton, TodoText } from './styles';
import Button from '../ui/Button';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <ListItem>
      <ToggleButton
        onClick={() => toggleTodo(todo.id)}
        $completed={todo.completed}
      ></ToggleButton>
      <TodoText $completed={todo.completed}>{todo.title}</TodoText>
      <Button size="small" onClick={() => removeTodo(todo.id)}>
        Удалить
      </Button>
    </ListItem>
  );
}
