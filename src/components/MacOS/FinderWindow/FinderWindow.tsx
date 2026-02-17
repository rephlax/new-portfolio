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
		<section>
			<div id="sidebar">
				<a>Projects</a>
				<a>Skills</a>
				<a>About</a>
				<a>Contact Me</a>
			</div>
			<div id="content"></div>
		</section>
	</section>
);

export default FinderWindow;
