import React, { FC, RefObject, ReactNode } from "react";
import styles from "./FinderWindow.module.css";

interface FinderWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
}

const FinderWindow: FC<FinderWindowProps> = ({ containerRef }) => (
	<div className={styles.FinderWindow}>FinderWindow Component</div>
);

export default FinderWindow;
