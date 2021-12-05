import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from '../Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';
const style = {
  activeLink: {
    color: 'rgb(231, 40, 158)',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeStyle={style.activeLink}
          >
            Contact
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
