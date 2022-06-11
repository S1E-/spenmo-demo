import * as React from 'react';
import './input.scss';

type Props = {
  type?: 'text' | 'number';
  placeholder?: string;
  customStyle: { [key: string]: string };
  onChange?: (e: any) => void;
  value: string;
};

export function Input({
  type = 'text',
  customStyle,
  onChange,
  placeholder,
  value,
}: Props) {
  return (
    <input
      placeholder={placeholder}
      className="input"
      value={value}
      style={customStyle}
      type={type}
      onChange={onChange}
    />
  );
}
