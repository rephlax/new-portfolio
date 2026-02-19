import React, { FC, type ReactNode } from "react";
import styles from "./ProjectsArea.module.css";

interface ProjectsAreaProps {
	children: ReactNode;
}

const ProjectsArea: FC<ProjectsAreaProps> = () => (
	<div className={styles.Container}>
		<h2 className={styles.Title}>Projects</h2>
		<section className={styles.ProjectsContainer}>
			{/* WILL MAKE PROJECT COMPONENTS TO HAVE A REUSABLE WAY TO IMPORT THEM ALL */}
		</section>
	</div>
);

export default ProjectsArea;
