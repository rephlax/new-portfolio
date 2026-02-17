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
			<div id="content">
				<div id="default-window">
					<img />
					<p>Hi! I'm Luke</p>
				</div>
				{/* ADD A CONDITIONAL THAT WILL RENDER THE DIFFERENT SCREENS IF THE BUTTON IS PUSHED, IF NOT SHOW A PICTURE OF ME WITH A HEADLINE OF MYSELF */}
			</div>
		</section>
	</section>
);

export default FinderWindow;
