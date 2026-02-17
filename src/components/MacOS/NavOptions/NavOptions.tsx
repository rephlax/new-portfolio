import React, { FC } from "react";
import styles from "./NavOptions.module.css";
import NavOptionsButton from "./NavOptionsButton/NavOptionsButton";

interface NavOptionsProps {
	children?: ReactNode;
}

const NavOptions: FC<NavOptionsProps> = () => (
	<header className={`${styles.NavOptions} ${styles.NavOptions}`}>
		<NavOptionsButton img="linkedIn" hoverTitle="test" link="test" />
		<NavOptionsButton img="Github" hoverTitle="GitHub" link="GitHub" />
		<NavOptionsButton
			img="toggleDark"
			hoverTitle="DarkMode"
			link="#"
			isThemeToggle={true}
		/>
	</header>
);

export default NavOptions;
