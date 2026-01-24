import React, { FC, RefObject } from "react";
import styles from "./LightHouseWindow.module.css";

interface LightHouseWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
}

const LightHouseWindow: FC<LightHouseWindowProps> = ({ containerRef }) => (
	<div className={styles.LightHouseWindow}>LightHouseWindow Component</div>
);

export default LightHouseWindow;
