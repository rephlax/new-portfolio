import React, { FC, RefObject, ReactNode } from "react";
import styles from "./FinderWindow.module.css";
import Header from "../../Shared/Header/Header";

interface FinderWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
}

const FinderWindow: FC<FinderWindowProps> = ({ containerRef }) => (
	<section role="region" className={styles.FinderWindow}>
		<Header title="Explore" />
		<div>FinderWindow Component</div>
	</section>
);

export default FinderWindow;
