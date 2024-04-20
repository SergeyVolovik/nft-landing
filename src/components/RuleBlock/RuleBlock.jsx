import React from "react";
import { Paragraph, Title } from "..";

// images
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";

export const RuleBlock = () => {
	const imgs_block = [
		{
			img: first,
			number: "01",
			text: "First rule of the Parrots’ Fight Club: you do never talk about Fight Club. No, we are serious, keep your beak closed! People think that we are cute and funny. They believe that aliens and reptilians rule the world. Let it be!",
			animation: { right: true, distance: "20px" },
		},
		{
			img: second,
			number: "02",
			text: "Second rule of the Parrots’ Fight Club: you must be polite with other members of the Fight Club. Our community respects people and parrots of any kind. So shut up your beak and be a gentle parrot!",
			animation: {
				left: true,
				distance: "20px",
			},
		},
		{
			img: third,
			number: "03",
			text: "Third rule of the Parrots’ Fight Club: there are no other rules in the Fight Club. Do whatever you want. Fight whomever you want to fight. We are here to have some fun. Let’s celebrate and break someone’s beak!",
			animation: {
				right: true,
				distance: "20px",
			},
		},
	];

	return (
		<div className="rule">
			{imgs_block.map((img, i) => (
				<div key={i} className="rule__inner">
					<div className="rule__inner-item">
						<img
							className="rule__inner-item-img"
							src={img.img}
							alt="Rule Parrots' Fight Club"
						/>
						<div className="rule__inner-item-shadow" />
					</div>

					<div className="rule__block">
						<Title
							variant="h2"
							title_class="rule__title"
							animation={img.animation}
						>
							<span className="rule__title-span">rule</span>{" "}
							<span className="rule__title-stroke">
								{img.number}
							</span>
						</Title>
						<Paragraph
							paragraph_class="rule__paragraph"
							text={img.text}
						/>
					</div>
				</div>
			))}
		</div>
	);
};
