import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { AuthAction, authActions } from '../store/auth-slice';

const Header = () => {
  const isAuth = useSelector<RootState, boolean>(
    (state) => state.auth.isAuthenticated
  );

  const dispatch = useDispatch<Dispatch<AuthAction>>();

  const logoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
