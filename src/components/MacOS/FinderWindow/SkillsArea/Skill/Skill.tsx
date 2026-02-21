import React, { FC, type ReactNode } from "react";
import styles from "./Skill.module.css";
import { motion } from "motion/react";

interface SkillProps {
	children?: ReactNode;
	skillName: string;
	loadingBarPercentage: number; // THIS WILL BE USED TO CONTROL THE SKILL BAR COLOUR AND LENGTH.
	category: "primary" | "secondary" | "soft";
}

const Skill: FC<SkillProps> = ({
	skillName,
	loadingBarPercentage,
	category,
}) => (
	<div className={styles.Skill}>
		<p>{skillName}</p>
		{/* <div className={styles.progressBarTrack}>
			<motion.div
				className={styles.progressBarFill}
				// Initial state (before animation)
				initial={{ width: 0 }}
				// Target state (where it should end up)
				animate={{ width: `${loadingBarPercentage}%` }}
				// "Physics" of the movement
				transition={{ duration: 1.2, ease: "easeOut" }}
			/>
		</div>. I NEED TO GO THROUGH THIS AND FINE TUNE THIS, AS ITS AN EXTERNAL EXAMPLE */}
	</div>
);

export default Skill;
