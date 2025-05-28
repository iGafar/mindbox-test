import { useState, type FormEvent } from 'react';
import { useTodos } from '../../context/TodoContext';
import { Form, InputWrapper } from './styles';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function TodoAdd() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          type="text"
          value={text}
          onChange={value => setText(value)}
          placeholder="Добавьте задачу"
        />
        <Button size="large" type="submit">
          Добавить
        </Button>
      </InputWrapper>
    </Form>
  );
}
