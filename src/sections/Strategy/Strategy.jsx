import React from "react";
import { Paragraph, Title } from "../../components";

const StrategySteps = () => {
	const strategy = [
		{
			title: "Marketing",
			text: "We invested about $175,000 in marketing activities and cooperate a lot with designers, copywriters, marketers, and influencers to make this project attractive and arouse interest in the community. ",
			animation: { left: true, distance: "20px" },
		},
		{
			title: "Community",
			text: "Our community means everything to us and we want to build the future together. All important decisions in our world will be made by joint voting. Why else do we need these beaks?",
			animation: { left: true, distance: "20px" },
		},
		{
			title: "Development",
			text: "The goal we will achieve together is to build an earn-to-play online game where all parrots will be able to fight and win crypto rewards as well as unique items to learn new skills and evolve.",
			animation: { left: true, distance: "20px" },
		},
		{
			title: "Conference",
			text: "We will organize a big party after all parrots will find their home. we will share the development plans, incredible ideas, and future vision of the project, but the first point is to get drunk!",
			animation: { left: true, distance: "20px" },
		},
		{
			title: "DEVELOPMENT OF P2E",
			text: "We developed a fun play-to-earn game in which you can challenge other Parrots owners and try to win massive cash prizes, through several game modes. You’ll be able to play a 1v1 mode, a team fight mode, and a battle royale. We also have prepared a tournament mode in full animation (so not exactly playable), which will be available right after the NFT sale ends. The first really playable mode will be released during Q1 2022. We obviously thought of creating a balanced system, to ensure no Parrot is stronger than another, regardless of mint cost. Skill is what will determine the winner! This mode won’t be turn-based, it’s gonna be live and every fighter will be able to interact in real-time, to destroy his enemies. Our team is already moving on to this first game mode and we expect a beta test to be released before launch. The game won’t require tryhard: there will be a limit of weekly fights to be registered on our ranking, every other game you’ll play will be for fun! This way, we make sure every player gets a shot at winning a cash prize.",
			animation: { left: true, distance: "20px" },
		},
		{
			title: "CASH PRIZES SYSTEM",
			text: "We will reward our players the best we can with an attractive and growing cash prize system. We guarantee that over $150,000 will be given throughout 2022, which corresponds to about $3,000 a week. Then, we will add 50% of our secondary market royalties each week to keep increasing the cash prizes, with no limit up! Therefore, the more volume we get on OpenSea, the more rewards players get!",
			animation: { left: true, distance: "20px" },
		},
	];

	return (
		<div className="strategy__block">
			{strategy.map((s, i) => (
				<div key={i} className="strategy__block-info">
					<Title
						variant="h3"
						title_class="strategy__block-info-title"
						text={s.title}
						animation={s.animation}
					/>
					<Paragraph
						paragraph_class="strategy__block-info-paragraph"
						text={s.text}
					/>
				</div>
			))}
		</div>
	);
};

export const Strategy = () => {
	return (
		<div className="strategy">
			<Title
				variant="h2"
				title_class="strategy__title"
				text="Our Feathered Strategy"
				animation={{ bottom: true }}
			/>

			<Paragraph
				paragraph_class="strategy__paragraph"
				text="We put a lot of effort into this project and we believe that our crypto community and investors appreciate all current achievements. Nevertheless, we still have a long way to go and we want to pass it together. We certainly hope you will join us sooner or later, but... Before that, we are happy to share our dreams and ideas that form our vision and strategy for this project."
			/>

			<StrategySteps />
		</div>
	);
};
