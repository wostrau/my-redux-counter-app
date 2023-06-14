import React from 'react';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated
  );

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
