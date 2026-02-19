import React, { FC, type ReactNode } from "react";
import styles from "./ProjectComponent.module.css";

interface ProjectComponentProps {
	children?: ReactNode;
	title?: string;
	image?: string;
	link?: string;
	description?: string;
	caseStudyLink?: string;
}

const ProjectComponent: FC<ProjectComponentProps> = ({
	title,
	image,
	link,
	description,
	caseStudyLink,
}) => {
	return (
		<article className={styles.ProjectComponent}>
			<figure className={styles.imageWrapper}>
				<img className={styles.image} src={image}></img>
			</figure>

			<div className={styles.textContent}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>

			<div className={styles.links}>
				<a href={link} className={styles.btnLink}>
					Live Demo
				</a>
			</div>

			{caseStudyLink && (
				<a href={caseStudyLink} className={styles.btnCaseStudy}>
					Case Study
				</a>
			)}
		</article>
	);
};

export default ProjectComponent;
