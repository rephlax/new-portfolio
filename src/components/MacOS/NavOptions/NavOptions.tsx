import React, { FC } from "react";
import styles from "./NavOptions.module.css";
import NavOptionsButton from "./NavOptionsButton/NavOptionsButton";

interface NavOptionsProps {}

const NavOptions: FC<NavOptionsProps> = () => (
	<div className={styles.NavOptions}>
		<NavOptionsButton img="linkedIn" hoverTitle="test" link="test" />
		<NavOptionsButton img="Github" hoverTitle="GitHub" link="GitHub" />
		<NavOptionsButton
			img="toggleDark"
			hoverTitle="DarkMode"
			link="#"
			isThemeToggle={true}
		/>
	</div>
);

export default NavOptions;
