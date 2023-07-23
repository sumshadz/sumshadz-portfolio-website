import React from 'react';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';
import {AiFillThunderbolt} from "react-icons/ai"
import Image from 'next/image';
import profileImg from "../public/assets/profileImg.jpg"

const About = () => {
    return (
        <section
            id="about"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
        >
            <SectionTitle title="About me" titleNo="01" />
            <div className="flex flex-col lgl:flex-row gap-16">
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                    <p>{`I am a Tech enthusiast and a software developer with experience as a Programmer Analyst Intern @Amazon. Have also worked as a React.js Developer Intern @Fydo (`}<a href="#experience"><span className='text-textGreen'>Experiences</span></a>{`). Proficient in React.js, JavaScript, TypeScript, C++, Java, OOP and AWS. Strong expertise in developing, optimizing, and troubleshooting software solutions. Completed Bachelor's in Information Technology from Odisha University of Technology and Research, Bhubaneswar. Passionate about pushing boundaries and exploring new technologies. Excited to connect with professionals and contribute to innovative projects. Also, I'm interested in dance and music. Let's connect and together, we can create remarkable solutions that shape the future of technology.`}</p>

                    <ul className="max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            React.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            Java
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            C++
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            AWS
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            Typescript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            JavaScript
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            Object Oriented Programming
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            SQL
                        </li>
                    </ul>
                </div>
                <div className="w-full lgl:w-1/3 h-80 relative group">
                    <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                        <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                            <Image
                            className="rounded-lg h-full object-cover"
                            src={profileImg}
                            alt="profileImg"
                            />
                            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                        </div>
                    </div>
                    <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>
        </section>
    )
}

export default About