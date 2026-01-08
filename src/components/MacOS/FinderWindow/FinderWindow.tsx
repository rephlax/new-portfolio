import React, { FC } from 'react';
import styles from './FinderWindow.module.css';

interface FinderWindowProps {}

const FinderWindow: FC<FinderWindowProps> = () => (
  <div className={styles.FinderWindow}>
    FinderWindow Component
  </div>
);

export default FinderWindow;
