import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Amazon from './works/Amazon'
import Fydo from './works/Fydo';

const Experience = () => {
	const [workAmazon, setWorkAmazon] = useState(true);
	const [workFydo, setWorkFydo] = useState(false);

	const handleAmazon = () => {
		setWorkAmazon(true);
		setWorkFydo(false);
	}
	const handleFydo = () => {
		setWorkAmazon(false);
		setWorkFydo(true);
	}
  return (
	<section id="experience"
	className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4">
		<SectionTitle title="Where I worked" titleNo="02"/>
		<div className="w-full mt-10 flex flex-col md:flex-row gap-16">
			<ul className="md:w-32 flex flex-col">
				<li onClick={handleAmazon} 
				className={`${workAmazon?"border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
					Amazon
				</li>
				<li onClick={handleFydo} className={` ${workFydo?"border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
					Fydo
				</li>
			</ul>
			{workAmazon && <Amazon/>}
			{workFydo && <Fydo/>}
		</div>
	</section>
  )
}

export default Experience