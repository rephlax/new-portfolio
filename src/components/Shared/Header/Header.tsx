import type { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import TopBarButtons from "./TopBarButtons/TopBarButtons";

interface HeaderProps {
	children?: ReactNode;
	title: string;
}

const Header: FC<HeaderProps> = ({ title, children }) => (
	<header className={styles.headerContainer}>
		<TopBarButtons className={styles.headerButtons} />
		<h1>{title}</h1>
	</header>
);

export default Header;
