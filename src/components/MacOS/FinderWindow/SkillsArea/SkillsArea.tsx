import React, { FC, type ReactNode } from "react";
import styles from "./SkillsArea.module.css";
import { skills } from "../../../../data/skillsData";
import Skill from "./Skill/Skill";

interface SkillsAreaProps {
	children?: ReactNode;
}

const primarySkills = skills.filter((skill) => skill.category === "primary");
const secondarySkills = skills.filter(
	(skill) => skill.category === "secondary",
);
const softSkills = skills.filter((skill) => skill.category === "soft");

const SkillsArea: FC<SkillsAreaProps> = () => (
	<section className={styles.SkillsArea}>
		<div id="primary">
			{primarySkills.map((skill) => (
				<Skill
					key={skill.skillName}
					skillName={skill.skillName}
					loadingBarPercentage={skill.loadingBarPercentage}
					category={skill.category}
				/>
			))}
		</div>
		<div id="secondary"></div>
		<div id="soft"></div>
	</section>
);
// STYLING CHOICE TO BE IN THE VOLUME SLIDER STYLE, SIMPLE PRIMARY HARD SKILLS, SECONDARY SKILLS AND SOFT SKILLS
// The way this will work is by using a data object that will pass the skills into the parent to then filter into an array to then map through in each section.
// EXAMPLE************
// export interface Skill {
//   name: string;
//   score: number; // 0 to 100
//   category: 'primary' | 'secondary' | 'soft';
// }

// export const skills: Skill[] = [
//   { name: "React", score: 90, category: "primary" },
//   { name: "TypeScript", score: 85, category: "primary" },
//   { name: "CSS/HTML", score: 95, category: "primary" },
//   { name: "Figma", score: 80, category: "secondary" },
//   { name: "Node.js", score: 60, category: "secondary" },
//   { name: "Teamwork", score: 100, category: "soft" },
// ];

// The filter example const primarySkills = skills.filter(s => s.category === 'primary'); and then this will be mapped through in each section.
export default SkillsArea;
