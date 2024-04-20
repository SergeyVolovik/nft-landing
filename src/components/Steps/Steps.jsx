import React from "react";
import { Paragraph, Title } from "..";

const StepsInfo = () => {
	const steps_info = [
		{
			percent: "25%",
			text: "The Parrots’ Secret Government will give away half of the amount earned from the secondary sales on OpenSea as a special bonus for the fighters to keep them motivated and respect the community on this long way.",
			animation: { right: true, distance: "20px" },
		},
		{
			percent: "50%",
			text: "The Parrots’ Secret Government will giveaway to the community members a $10,000 reward as a special gift for the community to prepare their parrots for the tournament and other future events.",
			animation: { right: true, distance: "20px" },
		},
		{
			percent: "75%",
			text: "The Parrots’ Secret Government will gift 10 non-fungible tokens and some other unique traits to the parrots’ owners and community members to boost their parrots and increase the chances to win the competition.",
			animation: { right: true, distance: "20px" },
		},
		{
			percent: "100%",
			text: "The Parrots’ Secret Government will run a big tournament to define who is the Parrot Of The Year and reward the best fighter with the prize of $50,000 and an annual supply of fruits for better recovering.",
			animation: { right: true, distance: "20px" },
		},
	];

	return (
		<div className="steps__info">
			{steps_info.map((si, i) => (
				<div key={i} className="steps__info-block">
					<Title
						variant="h3"
						title_class="steps__info-block-title"
						animation={si.animation}
					>
						<span className="steps__info-block-title-stroke">
							{si.percent}{" "}
						</span>
						<span className="steps__info-block-title-gradient">
							{si.percent !== "after" ? "sales" : "party"}
						</span>
					</Title>
					<Paragraph
						paragraph_class="steps__info-block-paragraph"
						text={si.text}
					/>
				</div>
			))}
		</div>
	);
};

const StateDots = () => {
	const dots = [];

	for (let i = 0; i < 4; i++) {
		dots.push(
			<div key={i} className="steps__state">
				<div className="steps__state-dot" />
			</div>
		);
	}

	return <>{dots.map((d) => d)}</>;
};

export const Steps = () => {
	return (
		<div className="steps">
			<div className="steps__line" />
			<StateDots />
			<StepsInfo />
		</div>
	);
};
