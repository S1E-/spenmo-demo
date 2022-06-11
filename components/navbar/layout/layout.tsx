import * as React from 'react';
import './layout.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export function Layout({ children, onClick }: Props) {
  return (
    <div className="navBarcontainer">
      <div className="title" tabIndex={0} onClick={onClick}>
        OMDB
      </div>
      <div className="links">{children}</div>
    </div>
  );
}
