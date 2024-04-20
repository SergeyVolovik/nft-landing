import React from "react";
import { Button, ImgsBlock, TimeCounter, Title } from "../../components";

export const Home = () => {

	return (
		<header className="home">
			<Title
				variant="h1"
				title_class="home__title"
				text="Coming soon"
				animation={{ left: true, distance: "20px" }}
			/>

			<TimeCounter />

			<div className="home__inner">
				<Button
					btn_class="home__btn"
					href="https://platform.parrotsfightclub.com/"
				>
					<span>Connect metamask</span>
				</Button>
				<Button
					btn_class="home__btn-second"
					href="https://discord.com/invite/parrotsfightclub"
				>
					<span>Join discord</span>
				</Button>
			</div>

			<ImgsBlock />
		</header>
	);
};
