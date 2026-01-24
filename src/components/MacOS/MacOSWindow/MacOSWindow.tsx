import React, { FC, useRef, type ReactNode } from "react";
import styles from "./MacOSWindow.module.css";
import AboutWindow from "../AboutWindow/AboutWindow";
import FinderWindow from "../FinderWindow/FinderWindow";
import LightHouseWindow from "../LightHouseWindow/LightHouseWindow";
import NavOptions from "../NavOptions/NavOptions";

/* So I need this to be the main screen that will pass the useRef container prop down.
then i need to setup drag controls (post styling having the containers setup, one overall container hosting a vertical container to allow for the nav to be under, one more horizontal flex to separate the finder and the other two windows and then another vertical container on the left to host the 2 smaller windows.
.) 

*/

interface MacOSWindowProps {
	children?: ReactNode;
}

const MacOSWindow: FC<MacOSWindowProps> = () => {
	const macOSRef = useRef<HTMLDivElement>(null);
	return (
		<div className={styles.MacOSWindow} ref={macOSRef}>
			<div className={styles.MacOSWindowContainer}>
				<FinderWindow containerRef={macOSRef} />
				<div className={styles.MacOSSideWindowContainer}>
					<AboutWindow containerRef={macOSRef} />
					<LightHouseWindow containerRef={macOSRef} />
				</div>
			</div>
			<NavOptions />
		</div>
	);
};

export default MacOSWindow;
