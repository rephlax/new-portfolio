import React, { FC } from 'react';
import styles from './LightHouseWindow.module.css';

interface LightHouseWindowProps {}

const LightHouseWindow: FC<LightHouseWindowProps> = () => (
  <div className={styles.LightHouseWindow}>
    LightHouseWindow Component
  </div>
);

export default LightHouseWindow;
