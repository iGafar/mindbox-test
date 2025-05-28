import { useState } from 'react';
import { useTodos } from '../../context/TodoContext';
import Input from '../ui/Input';
import { SearchWrapper } from './styles';
import Button from '../ui/Button';

export default function TodoSearch() {
  const [value, setValue] = useState('');
  const { searchTodos } = useTodos();

  const handleSearchQuery = (value: string) => {
    setValue(value);
    searchTodos(value);
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        onChange={value => handleSearchQuery(value)}
        placeholder="Поиск..."
        value={value}
      />
      <Button size="large" onClick={() => handleSearchQuery('')}>
        Очистить
      </Button>
    </SearchWrapper>
  );
}
