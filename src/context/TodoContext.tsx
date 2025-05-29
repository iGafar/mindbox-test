import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useContext,
} from 'react';
import type { TodoContextType, Todo, ShowType } from './TodoContext.types';
import debounce from '../helpers/debounce';

// eslint-disable-next-line
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]'),
  );
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<ShowType>('all');
  const activeTasksLength = todos.filter(el => !el.completed).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {
    const newFilteredTodos = todos.filter(todo => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        filterStatus === 'all' ||
        todo.completed === (filterStatus === 'completed');
      return matchesSearch && matchesStatus;
    });
    setFilteredTodos(newFilteredTodos);
  }, [searchQuery, filterStatus, todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(el => el.id !== id));
  };

  const removeCompletedTodos = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filterTodos = (showCompleted: ShowType) => {
    setFilterStatus(showCompleted);
  };

  // Для проекта с таким маленьким количеством данных debounce не нужен, но в коммерческих проектах может пригодиться, особенно если при изменении поисковой строки идет запрос на сервер
  const searchTodos = debounce((value: string) => {
    setSearchQuery(value);
  }, 300);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        filterStatus,
        activeTasksLength,
        addTodo,
        toggleTodo,
        removeTodo,
        removeCompletedTodos,
        filterTodos,
        searchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// eslint-disable-next-line
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('Контекст не может использоваться без провайдера');
  }

  return context;
};
