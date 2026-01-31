import React, { FC, RefObject, ReactNode } from "react";
import styles from "./LightHouseWindow.module.css";

interface LightHouseWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
}

const LightHouseWindow: FC<LightHouseWindowProps> = ({ containerRef }) => (
	<div className={styles.LightHouseWindow}>
		<div id="topbar"></div>
		<div id="content"></div>
	</div>
);

export default LightHouseWindow;
