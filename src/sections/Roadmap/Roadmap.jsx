import React from "react";
import { Paragraph, Steps, Title } from "../../components";

export const Roadmap = () => {
	return (
		<div className="roadmap">
			<Title
				variant="h2"
				text="development roadmap"
				title_class="roadmap__title"
				animation={{ bottom: true }}
			/>

			<Paragraph
				paragraph_class="roadmap__paragraph"
				text="Together we will build a feathered world where we will be able to live free. And the first step is to build the arena where your parrots will fight with the others in the solo, team, tournament, or battle royal modes. Let’s make a big noise around and win some crypto from each victory! Our parrots were born to fight, so don’t let them wait to show who is the real champion here. "
			/>

			<Steps />
		</div>
	);
};
