import React from "react";
import { Paragraph, Title } from "../../components";

import p1 from "./img/1.png";
import p2 from "./img/2.png";
import p3 from "./img/3.png";
import p4 from "./img/4.png";

const TeamImgs = () => {
	const team = [
		{
			title: "Flamingo Starr",
			text: "Chief Executive Parrot",
			img: p1,
		},
		{
			title: "Edgar Allan Crow",
			text: "Chief Technical Parrot",
			img: p2,
		},
		{
			title: "Duck Norris",
			text: "Chief Marketing Parrot",
			img: p3,
		},
		{
			title: "Kanye Nest",
			text: "Chief Visionary Parrot",
			img: p4,
		},
	];

	return (
		<div className="team__imgs">
			{team.map((t, i) => (
				<div key={i} className="team__imgs-card">
					<img
						className="team__imgs-card-img"
						src={t.img}
						alt="Parrot card"
					/>
					<Title
						variant="h3"
						title_class="team__imgs-card-title"
						text={t.title}
						animation={{ bottom: true }}
					/>
					<Paragraph
						paragraph_class="team__imgs-card-text"
						text={t.text}
					/>
				</div>
			))}
		</div>
	);
};

export const Team = () => {
	return (
		<div className="team">
			<Title
				variant="h2"
				title_class="team__title"
				text="Parrots’ Secret Government"
				animation={{ bottom: true }}
			/>

			<Paragraph
				paragraph_class="team__paragraph"
				text="Now, as you know all the plans we have, it is the right time to introduce our secret government to you. Maybe, it is no secret government anymore. Anyway, please meet the parrots that love nuts so much, so they failed the biggest challenge of No Nut November."
			/>

			<TeamImgs />
		</div>
	);
};
