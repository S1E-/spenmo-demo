import * as React from 'react';
import './style.scss';

import NavbarLayout from './components/navbar/layout';
import NavbarLinks from './components/navbar/links';

import Home from './pages/home';
import Favorites from './pages/favorites';

export default function App() {
  const [page, setPage] = React.useState('home');
  return (
    <main>
      <NavbarLayout onClick={() => setPage('home')}>
        <NavbarLinks onClick={() => setPage('fav')} title="favorites" />
      </NavbarLayout>
      {page === 'home' && <Home />}
      {page === 'fav' && <Favorites />}
    </main>
  );
}
