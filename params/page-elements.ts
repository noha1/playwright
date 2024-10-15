let paths: Array<{
	uri: string;
	h3: Array<string>;
	img?: string;
}> = [
	{
		uri: "/who-we-are",
		h3: ["team", "council", "our partners", "FAQ"],
	},
	{
		uri: "/who-we-are/team",
		h3: ["Jinsella"],
		img: "img.ded-image-portrait",
	},

	{
		uri: "/take-action",
		h3: [
			"Contribute to Database",
			"Start building an impact",
			"discord",
			"spread the word",
		],
	},
	{
		uri: "/what-we-do",
		h3: [
			"our why",
			"our impact",
			"vision, mission & values",
			"strategy & story",
			"featured articles",
		],
	},
	{
		uri: "/how-we-do-it",
		h3: ["database", "publications", "definitions", "treaty"],
	},
	{
		uri: "/data",
		h3: [
			"Search Universities",
			"Latest Actions",
			"Latest FOI Requests",
			"Financial Partnerships",
			"Research Partnerships",
			"Academic Partnerships",
		],
	},
];

export default paths;
