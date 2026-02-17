import React, { FC, RefObject, ReactNode } from "react";
import styles from "./AboutWindow.module.css";
import Header from "../../Shared/Header/Header";

interface AboutWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
}

const AboutWindow: FC<AboutWindowProps> = ({ containerRef }) => (
	<section role="region" className={styles.AboutWindow}>
		<Header title="About Me" />
		<section id="content" className={styles.contentContainer}>
			<article className={styles.contentText}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odit!
			</article>
		</section>
	</section>
);

export default AboutWindow;
