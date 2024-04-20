import React, { useState } from "react";
import { Paragraph, Title } from "../../components";

const Accordion = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);
	const open_class = isOpen ? "open" : "";

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`faq__block-accordion ${open_class}`}>
			<Title
				variant="h3"
				title_class="faq__block-accordion-title"
				text={question}
				action={handleClick}
			/>
			<Paragraph
				paragraph_class="faq__block-accordion-paragraph"
				text={answer}
			/>
		</div>
	);
};

export const FAQ = () => {
	return (
		<div className="faq">
			<Title
				variant="h2"
				title_class="faq__title"
				text="Frequently asked questions"
				animation={{ bottom: true }}
			/>
			<Paragraph
				paragraph_class="faq__paragraph"
				text="We tried to describe everything in the best way possible, but if you have any questions regarding the project or you maybe want to clarify something then these answers on frequently asked questions are right for you.
"
			/>
			<div className="faq__block">
				<Accordion
					question="What is parrots' fight club?"
					answer="Parrots’ Fight Club is a collection of 5555 unique NFTs which grant you access to a play-to-earn game, in which the best fighters are rewarded each week with cash prizes over $3,000 while having fun! Only Parrots holders can play the game, and have real fun while earning cash prizes without having to farm on a point and click for hours! There’s more to come in our #roadmap channel!"
				/>
				<Accordion
					question="How many parrots are in the club?"
					answer="There are only 5,555 parrots in our fight club. We decided to limit access to the fight club to make each parrot unique and valuable. Probably we will have to join more parrots in the club within some time, but only in case if our community will beg us to do that."
				/>
				<Accordion
					question="What Is The Cost Of Each Parrot?"
					answer="Our main goal is to build a feathered community and grow the parrots’ world, so we decided to make this collection affordable for every crypto investor. Our sale offers you to mint each parrot for the basic price of 0.15 Ethers. The initial sale limit is only 3 parrots for the holder."
				/>
				<Accordion
					question="When Can I Mint My Parrot?"
					answer="You have a few options to buy a fighter for your collection. If you are a whitelisted investor you could join our presale that starts 13th of January. For other investors, the sale date starts 14th of January. The last chance to buy a parrot is a secondary sale that takes place on OpenSea."
				/>
				<Accordion
					question="When will parrots be revealed?"
					answer="Reveal will happen 24h after the public sale begins! Hopefully, you can mint one of our 55 legendary NFTs."
				/>
				<Accordion
					question="Where Can I Found My Parrot?"
					answer="Once you have minted your Parrot, you can access it on your profile page on our website. Another way to see it is through OpenSea’s website. No matter what option you chose, you’ll need to connect your MetaMask wallet to the website."
				/>
				<Accordion
					question="What Can I Do With My Parrot?"
					answer="First of all, you can battle against other parrots and earn cash prizes. Besides that, you can do whatever you want with the Parrots you minted, as you own them accordingly to intellectual property laws! You can also use them as an investment, but it would be such a waste not to play the best P2E game out there!"
				/>
				<Accordion
					question="What Is The Secondary Sale Royalty?"
					answer="Our secondary sale market is OpenSea, which takes 2,5% from each sale you made on it. Our club royalty from each sale is 10% that we will spend on project development. At least half of the royalties amount we will spend on the battle rewards, while the other half on the marketing activities to maintain the club’s growth."
				/>
				<Accordion
					question="What game nodes will be available?"
					answer="We’re already working on several game modes!  You’ll be able to play a 1v1 mode, a team fight mode, and a battle royale. We also have prepared a tournament mode in full animation (so not exactly playable), which will be available right after the NFT sale ends. Unlike other P2Es, Parrots’ Fight Club will be an actual game, and not a point-and-click farm! Gameplay is what matters to us, our priority is to make a fun game (and yet our rewards kick ass)."
				/>
				<Accordion
					question="WHEN WILL THESE GAME MODS BE AVAILABLE?"
					answer="Auto animated tournament mode: right after the sale ends. 1v1 and multiplayer team fight modes: Mid Q1 2022. Battle Royale mode: late Q2/early Q3 2022. The beta test version will be released between sale and launch! Before that, the first game mode will be available for you all to test and train your Parrots!"
				/>
				<Accordion
					question="HOW DO CASH PRIZES WORK?"
					answer="At least 150 000$ will be given throughout the year 2022, which corresponds to 3000$ a week. Then, we’ll reinject 50% of secondary market royalties into our cash prize bag, with no limit."
				/>
			</div>
		</div>
	);
};
