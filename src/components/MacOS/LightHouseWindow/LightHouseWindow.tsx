import React, { FC, RefObject, ReactNode } from "react";
import styles from "./LightHouseWindow.module.css";

interface LightHouseWindowProps {
	containerRef: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
}

interface Category {
	name: string;
	score: number;
}

const categories: Category[] = [
	{ name: "performance", score: 0 },
	{ name: "Accessibility", score: 0 },
	{ name: "Best Practices", score: 0 },
	{ name: "SEO", score: 0 },
];

const LightHouseWindow: FC<LightHouseWindowProps> = ({ containerRef }) => (
	<div className={styles.LightHouseWindow}>
		<header id="topbar"></header>
		<section id="content">
			<div id="scoreChart"></div>
			<div id="scoreDescriptions">
				<ul>
					{categories.map((cat) => (
						<li key={cat.name}>
							<section className="styles.scoreDesc">
								<h3 className="styles.scoreTitle">{cat.name}</h3>
								<p className="styles.scoreNumber">{cat.score}</p>
							</section>
						</li>
					))}
				</ul>
			</div>
		</section>
	</div>
);

export default LightHouseWindow;
