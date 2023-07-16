import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import weatherApp from "../public/assets/weatherApp.png";
import sortingVisualizer from "../public/assets/sortingVisualizer.png";
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbBrandGithub } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Project = () => {
  return (
	<section 
	id="project"
	className="max-w-containerSmall mx-auto lgl:px-10 py-24"
	>
		<SectionTitle title="Projects"titleNo="03"/>
		<div className="w-full flex flex-col items-center justify-between gap-16 mt-10">
			{/* Project one */}
		<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
			<div className="flex flex-col xl:flex-row gap-6">
				<a
				className="w-full xl:w-1/2 h-auto relative group" 
				href=""
				target="_blank"
				>
				<div>
					<Image
					className="w-full h-full object-contain"
					src={weatherApp}
					alt="project1"
					/>
				</div>
				</a>
				<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
				<p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
				<h3 className="text-2xl font-bold">Weather App</h3>
				<p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
				My React.js weather app displays real-time temperature, humidity, pressure, and more for any location. It offers a user-friendly interface and seamless navigation. 
				</p>
				<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
					<li>HTML5</li>
					<li>CSS3</li>
					<li>React.js</li>
				</ul>
				<div className="text-2xl flex gap-4">
					<a className="hover:text-textGreen duration-300" href="https://github.com/sumanshadangi/weather-app">
						<TbBrandGithub/>
					</a>
					{/* <a className="hover:text-textGreen duration-300" href="">
						<AiOutlineYoutube/>
					</a>
					<a className="hover:text-textGreen duration-300" href="">
						<RxOpenInNewWindow/>
					</a> */}
				</div>
			</div>
			</div>
		</div>
		{/* Project two */}
		<div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
			<div className="flex flex-col xl:flex-row-reverse gap-6">
				<a
				className="w-full xl:w-1/2 h-auto relative group" 
				href=""
				target="_blank"
				>
				<div>
					<Image
					className="w-full h-full object-contain"
					src={sortingVisualizer}
					alt="project1"
					/>
				</div>
				</a>
				<div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
				<p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
				<h3 className="text-2xl font-bold">Sorting visualizer</h3>
				<p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
				Built a sorting visualizer that showcases different sorting algorithms through visual representations. It supports sorting algorithms such as Merge Sort and Quick Sort. Users have the flexibility to customize the array size and adjust the speed of the sorting animation.
				</p>
				<ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
					<li>Next.js</li>
					<li>Tailwind CSS</li>
					<li>Framer motion</li>
					<li>Typescript</li>
				</ul>
				<div className="text-2xl flex gap-4">
					<a className="hover:text-textGreen duration-300" href="https://github.com/sumshadz/Sorting-Visualizer">
						<TbBrandGithub/>
					</a>
					{/* <a className="hover:text-textGreen duration-300" href="">
						<AiOutlineYoutube/>
					</a> */}
					<a className="hover:text-textGreen duration-300" href="https://sorting-visualizer-sumshadz.vercel.app/">
						<RxOpenInNewWindow/>
					</a>
				</div>
			</div>
			</div>
		</div>
		{/* Project three */}
		</div>
	</section>
  )
}

export default Project