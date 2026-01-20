import React, { FC } from "react";
import styles from "./NavOptionsButton.module.css";
import { motion, Variants, hover } from "motion";

interface NavOptionsButtonProps {
	img: string;
	hoverTtitle: string;
	link: string;
}

const NavOptionsButton: FC<NavOptionsButtonProps> = ({
	img,
	hoverTitle,
	link,
}) => {
	function handleTitleHover() {}

	return (
		<motion.a className={styles.NavOptionsButton}>
			<img src={img} className={styles.logo} />
			<motion.span className={styles.hoverTitle}>{hoverTitle}</motion.span>
		</motion.a>
	);
};
// On hover add a function call that will handle the title showing. title will be a span under that is hidden originally and is absolute that will then have an animation maybe in opacity to 1 on hover.
export default NavOptionsButton;
