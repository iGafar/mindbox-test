export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type ShowType = 'all' | 'active' | 'completed';

export interface TodoContextType {
  todos: Todo[];
  filterStatus: ShowType;
  activeTasksLength: number;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  removeCompletedTodos: () => void;
  filterTodos: (showCompleted: ShowType) => void;
  searchTodos: (value: string) => void;
}
