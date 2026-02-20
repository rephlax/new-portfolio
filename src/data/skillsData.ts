export interface Skilldata {
	skillName: string;
	loadingBarPercentage: number;
	category: "primary" | "secondary" | "soft";
}

export const skills: Skilldata[] = [
	{ skillName: "React", loadingBarPercentage: 75, category: "primary" },
];
