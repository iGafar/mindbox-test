import { type ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

export default function Input({
  value = '',
  onChange,
  placeholder = 'Введите текст...',
  type = 'text',
  disabled = false,
}: InputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
  };

  return (
    <StyledInput
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}
