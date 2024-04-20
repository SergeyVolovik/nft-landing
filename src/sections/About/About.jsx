import React from "react";
import { Paragraph, RuleBlock, Title } from "../../components";

export const About = () => {
	return (
		<div className="about">
			<Title
				variant="h2"
				text="welcome to the club"
				title_class="about__title"
				animation={{ bottom: true }}
			/>

			<Paragraph
				paragraph_class="about__paragraph"
				text="Once upon a time, parrots and people lived in peace. But that all changed when the people started cutting down the rainforest. Only the parrots, who were able to fight, could stop the invaders. Over time, the people were defeated, but the desire to fight was still strong. To avoid another war, the Parrots’ Secret Government decided to establish a tournament to let the bravest parrots fight and carve their names in the ages! And so the Parrots' Fight Club was born. There are only three simple rules in the club. It is highly recommended to read them carefully and remember them well to avoid awkward situations and decrease the chances to leave the club with a broken beak. We are decent parrots, not some dirty roosters! Remember that!"
			/>

			<RuleBlock />
		</div>
	);
};
