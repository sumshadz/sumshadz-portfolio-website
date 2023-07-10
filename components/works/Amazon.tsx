
import React from 'react'
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Amazon = () => {
  return (
	<motion.div
	initial={{opacity: 0}}
	animate={{opacity: 1}}
	transition={{delay: 0.1}}
	className="w-full"
	>
     <h3 className="flex gap-1 font-medium text-xl font-titleFont">Programmer Analyst Intern <span className="text-textGreen tracking-wide"> @Amazon</span></h3>
	 <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Jun 2023</p>
	 <ul className="mt-6 flex-col gap-3">
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			{`Interned for 6 months as a Programmer Analyst, gaining valuable experience in developing, optimizing, and troubleshooting software solutions.`}
		</li>
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			{`I worked on various AWS services including S3, SQS, Ddb, CloudWatch, and AppConfig. I used Java SDK to interact with these services and AWS CDK to create AWS resources.`} 
		</li>
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			Improved skills in Java and TypeScript throughout the internship. Actively participated in code reviews to enhance code quality.
		</li>
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			Migrated configurations to AWS AppConfig for improved configuration management and eliminated dedicated deployments for configuration changes in the main service.
		</li>
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			{`Used Java, Spring, and OOPs to derive project code for accounting data for Amazon's transportation needs. Also added validations to prevent messages from being sent to DLQ.`}
		</li>
		<li className="text-base flex gap-2 text-textDark">
			<span className="text-textGreen mt-1"><TiArrowForward/></span>
			Automated AWS alarm creation for SQSs using AWS CDK and typescript to avoid manual creation of alarms.
		</li>
	 </ul>
	</motion.div>
  )
}

export default Amazon