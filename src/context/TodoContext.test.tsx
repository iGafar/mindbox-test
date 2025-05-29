import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoProvider, { useTodos } from './TodoContext.tsx';

const TestComponent = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    removeCompletedTodos,
    searchTodos,
  } = useTodos();

  return (
    <div>
      <button onClick={() => addTodo('New Todo')}>Add Todo</button>
      <button onClick={() => removeCompletedTodos()}>Remove Completed</button>
      <input
        type="text"
        onChange={e => searchTodos(e.target.value)}
        placeholder="Search Todos"
      />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

describe('TodoProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a new todo', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('should toggle todo completion status', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const toggleButton = screen.getByText('Toggle');
    fireEvent.click(toggleButton);
    expect(toggleButton.closest('li')?.querySelector('span')).toHaveTextContent(
      'New Todo',
    );
  });

  test('should remove a todo', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });

  test('should remove completed todos', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const toggleButton = screen.getByText('Toggle');
    fireEvent.click(toggleButton);
    fireEvent.click(screen.getByText('Remove Completed'));
    expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
  });

  test('should filter todos based on search query', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>,
    );

    fireEvent.click(screen.getByText('Add Todo'));
    fireEvent.change(screen.getByPlaceholderText('Search Todos'), {
      target: { value: 'New' },
    });
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
});
