import * as React from 'react';
import './errorMessage.scss';

type Props = { children: React.ReactNode };

export function ErrorMessage({ children }: Props) {
  return <div className="errorMessage">{children}</div>;
}
