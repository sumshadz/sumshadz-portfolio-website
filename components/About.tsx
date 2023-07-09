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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati repellat fuga ad vero, ullam explicabo in sed! Autem sit corporis sed iusto nostrum dolor quia magni ipsa <span className="text-textGreen">minima officiis est ratione hic</span> rem harum sapiente tempore, in ea aut soluta cumque asperiores unde ex sint repellat? Minus numquam illum cum, similique ipsa distinctio amet officiis voluptates, corrupti commodi aut voluptatibus tempore earum, suscipit recusandae rerum quidem est odit nostrum!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam, doloremque ut fugit autem quaerat deleniti molestias eius officiis dolorem iste enim dolorum dolores quidem hic quae distinctio et pariatur <span className="text-textGreen">ab? Esse tempore molestiae, tempora et repellat dicta cumque porro similique eum, ex, recusandae illo?</span> Ratione eos eius optio. In.</p>

                    <ul className="max-w-[450] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            JavaScript (ES6+)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            HTML5
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            CSS3
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            Next.js
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-textGreen"><AiFillThunderbolt/></span>
                            React.js
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