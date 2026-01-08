import React, { FC } from 'react';
import styles from './NavOptions.module.css';

interface NavOptionsProps {}

const NavOptions: FC<NavOptionsProps> = () => (
  <div className={styles.NavOptions}>
    NavOptions Component
  </div>
);

export default NavOptions;
