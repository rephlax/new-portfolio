import React, { FC } from "react";
import styles from "./MacOSWindow.module.css";
import AboutWindow from "../AboutWindow/AboutWindow";
import FinderWindow from "../FinderWindow/FinderWindow";
import LightHouseWindow from "../LightHouseWindow/LightHouseWindow";
import NavOptions from "../NavOptions/NavOptions";

interface MacOSWindowProps {}

const MacOSWindow: FC<MacOSWindowProps> = () => (
	<div className={styles.MacOSWindow}>MacOSWindow Component</div>
);

export default MacOSWindow;
