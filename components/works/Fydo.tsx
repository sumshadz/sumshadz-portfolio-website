import React from 'react';
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Fydo = () => {
	return (
		<motion.div
		initial={{opacity: 0}}
		animate={{opacity: 1}}
		transition={{delay: 0.1}}
		className="w-full"
		>
		 <h3 className="flex gap-1 font-medium text-xl font-titleFont">ReactJs Developer Intern <span className="text-textGreen tracking-wide"> @Fydo</span></h3>
		 <p className="text-sm mt-1 font-medium text-textDark">Sept 2021 - Sept 2022</p>
		 <ul className="mt-6 flex-col gap-3">
			<li className="text-base flex gap-2 text-textDark">
				<span className="text-textGreen mt-1"><TiArrowForward/></span>
				{`Developed and maintained responsive front-end for the company's admin dashboard using HTML5, CSS, React.js and Typescript. Used Axios to send HTTP requests to APIs.`}
			</li>
			<li className="text-base flex gap-2 text-textDark">
				<span className="text-textGreen mt-1"><TiArrowForward/></span>
				{`Worked with team to create responsive front-end of the company's website using Next.js and Tailwind CSS.`}
			</li>
			<li className="text-base flex gap-2 text-textDark">
				<span className="text-textGreen mt-1"><TiArrowForward/></span>
				{`Gained valuable experience in front-end development and demonstrated effective collaboration within an agile team environment.`}
			</li>
		 </ul>
		</motion.div>
	  )
}

export default Fydo