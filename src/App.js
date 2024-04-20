import React, { useEffect, Suspense, lazy } from "react";
import { Home, NavBar } from "./sections";

import p1 from "./sections/Carousel/img/1.png";
import p2 from "./sections/Carousel/img/2.png";
import p3 from "./sections/Carousel/img/3.png";
import p4 from "./sections/Carousel/img/4.png";
import p5 from "./sections/Carousel/img/5.png";
import p6 from "./sections/Carousel/img/6.png";
import p7 from "./sections/Carousel/img/7.png";
import p8 from "./sections/Carousel/img/8.png";
import p9 from "./sections/Carousel/img/9.png";
import p10 from "./sections/Carousel/img/10.png";

const About = lazy(() => import("./sections/About"));
const Strategy = lazy(() => import("./sections/Strategy"));
const Carousel = lazy(() => import("./sections/Carousel"));
const Roadmap = lazy(() => import("./sections/Roadmap"));
const VSBlock = lazy(() => import("./sections/VSBlock"));
const Team = lazy(() => import("./sections/Team"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Footer = lazy(() => import("./sections/Footer"));

const gallery1 = [p1, p2, p3, p4, p5];
const gallery2 = [p6, p7, p8, p9, p10];

export const App = () => {
	useEffect(() => {
		window.onbeforeunload = () => {
			window.scrollTo(0, 0);
		};
	});

	return (
		<>
			<NavBar />
			<Home />

			<Suspense fallback={null}>
				<About />
			</Suspense>
			<Suspense fallback={null}>
				<Strategy />
			</Suspense>
			<Suspense fallback={null}>
				<Carousel
					direction="left"
					duration={32000}
					gallery={gallery1}
				/>
			</Suspense>
			<Suspense fallback={null}>
				<Carousel
					direction="right"
					duration={30000}
					gallery={gallery2}
				/>
			</Suspense>
			<Suspense fallback={null}>
				<Roadmap />
			</Suspense>
			<Suspense fallback={null}>
				<VSBlock />
			</Suspense>
			<Suspense fallback={null}>
				<Team />
			</Suspense>
			<Suspense fallback={null}>
				<FAQ />
			</Suspense>
			<Suspense fallback={null}>
				<Footer />
			</Suspense>
		</>
	);
};
