import React, { FC, useState } from "react";
import styles from "./NavOptionsButton.module.css";
import { motion, hover } from "motion/react";
import { useTheme } from "src/context/ThemeContext";
interface NavOptionsButtonProps {
	img: string;
	hoverTitle: string;
	link?: string;
	isThemeToggle?: boolean;
}

const textVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -5,
		transition: { duration: 0.3 },
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 },
	},
};

const NavOptionsButton: FC<NavOptionsButtonProps> = ({
	img,
	hoverTitle,
	link,
	isThemeToggle = false,
}) => {
	const { toggleTheme } = useTheme();
	if (isThemeToggle) {
		return (
			<motion.button
				className={styles.NavOptionsButton}
				initial="hidden"
				whileHover="visible"
				whileTap={{ scale: 0.95 }}
				onClick={() => toggleTheme(!toggleTheme)}
			>
				<img src={img} className={styles.logo} />
				<motion.span className={styles.hoverTitle} variants={textVariants}>
					{hoverTitle}
				</motion.span>
			</motion.button>
		);
	}
	return (
		<motion.a
			className={styles.NavOptionsButton}
			initial="hidden"
			whileHover="visible"
			whileTap={{ scale: 0.95 }}
			href={link}
		>
			<img src={img} className={styles.logo} />
			<motion.span className={styles.hoverTitle} variants={textVariants}>
				{hoverTitle}
			</motion.span>
		</motion.a>
	);
};
// On hover add a function call that will handle the title showing. title will be a span under that is hidden originally and is absolute that will then have an animation maybe in opacity to 1 on hover.
export default NavOptionsButton;
