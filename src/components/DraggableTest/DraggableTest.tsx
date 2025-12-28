import React, { FC } from 'react';
import styles from './DraggableTest.module.css';

interface DraggableTestProps {}

const DraggableTest: FC<DraggableTestProps> = () => (
  <div className={styles.DraggableTest}>
    DraggableTest Component
  </div>
);

export default DraggableTest;
