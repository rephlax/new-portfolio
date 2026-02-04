import React, { FC } from "react";
import styles from "./TopBarButtons.module.css";

interface TopBarButtonsProps {
	onClose?: () => void;
	onMinimise?: () => void;
	onMaximise?: () => void;
}

const TopBarButtons: FC<TopBarButtonsProps> = ({
	onClose,
	onMaximise,
	onMinimise,
}) => (
	<div className={styles.TopBarButtons}>
		<button
			className={`${styles.closeButton} ${styles.dot}`}
			onClick={onClose}
			aria-label="close"
		></button>
		<button
			className={`${styles.minimiseButton} ${styles.dot}`}
			onClick={onMinimise}
			aria-label="minimise"
		></button>
		<button
			className={`${styles.maximiseButton} ${styles.dot}`}
			onClick={onMaximise}
			aria-label="maximise"
		></button>
	</div>
);

export default TopBarButtons;
