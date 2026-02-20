import React, { FC, type ReactNode } from "react";
import styles from "./Skill.module.css";

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
}) => <div className={styles.Skill}>Skill Component</div>;

export default Skill;
