import React, { FC, RefObject } from "react";
import styles from "./FinderWindow.module.css";

interface FinderWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
}

const FinderWindow: FC<FinderWindowProps> = ({ containerRef }) => (
	<div className={styles.FinderWindow}>FinderWindow Component</div>
);

export default FinderWindow;
