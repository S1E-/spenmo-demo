import * as React from 'react';
import './button.scss';

type Props = {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
  customStyle?: any;
  isLoading?: boolean;
};

export function Button({
  label,
  onClick = () => {},
  type = 'button',
  disabled = false,
  customStyle = {},
  isLoading = false,
}: Props) {
  return (
    <button
      style={customStyle}
      disabled={disabled}
      type={type}
      className="buttonContainer"
      onClick={onClick}
    >
      {isLoading ? <div className="loader" /> : label}
    </button>
  );
}
