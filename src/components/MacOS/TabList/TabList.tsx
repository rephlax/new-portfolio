import React, { FC } from 'react';
import styles from './TabList.module.css';

interface TabListProps {}

const TabList: FC<TabListProps> = () => (
  <div className={styles.TabList}>
    TabList Component
  </div>
);

export default TabList;
