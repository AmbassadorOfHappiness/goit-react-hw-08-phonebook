import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';

const style = {
  activeLink: {
    color: 'rgb(200, 40, 158)',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeStyle={style.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
