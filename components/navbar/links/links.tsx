import * as React from 'react';
import './links.scss';

type Props = {
  title: string;
  onClick: () => void;
};

export function Links({ title, onClick }: Props) {
  return (
    <div className="navbarLinkContainer" tabIndex={0} onClick={onClick}>
      {title}
    </div>
  );
}
