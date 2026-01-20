import React, { FC } from "react";
import styles from "./NavOptions.module.css";
import NavOptionsButton from "./NavOptionsButton/NavOptionsButton";

interface NavOptionsProps {}

const NavOptions: FC<NavOptionsProps> = () => (
	<div className={styles.NavOptions}>
		<NavOptionsButton img="test" hoverTitle="test" link="test" />
	</div>
);

export default NavOptions;
