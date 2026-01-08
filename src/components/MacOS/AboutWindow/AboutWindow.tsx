import React, { FC } from 'react';
import styles from './AboutWindow.module.css';

interface AboutWindowProps {}

const AboutWindow: FC<AboutWindowProps> = () => (
  <div className={styles.AboutWindow}>
    AboutWindow Component
  </div>
);

export default AboutWindow;
