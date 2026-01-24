import React, { FC, RefObject } from "react";
import styles from "./AboutWindow.module.css";

interface AboutWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
}

const AboutWindow: FC<AboutWindowProps> = ({ containerRef }) => (
	<div className={styles.AboutWindow}>AboutWindow Component</div>
);

export default AboutWindow;
