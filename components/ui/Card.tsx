"use client";
import { cn } from "@/utils/cn";
import { FaArrowCircleRight } from 'react-icons/fa';

export function Card({ img, title, description, iconLists, link }: { img: string; title: string; description: string; iconLists: string[]; link: string; }) {
    return (
        <div className="max-w-md w-full group mb-12">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-[35rem] rounded-md shadow-xl max-w-md mx-auto flex flex-col justify-between p-6 bg-gray-800"
                )}
            >
                <div className="relative w-full h-[65%] mb-6">
                    <img
                        src={img}
                        alt="Project Image"
                        className="object-cover w-full h-full rounded-md"
                    />
                </div>
                <div className="text content mb-4">
                    <h1 className="font-bold text-xl md:text-2xl text-white mb-2">
                        {title}
                    </h1>
                    <p className="font-normal text-sm text-gray-400 mb-4">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className='flex items-center'>
                        {iconLists.map((icon, index) => (
                            <div key={`${icon}-${index}`} className='border border-white/[0.2] rounded-full bg-black w-10 h-10 flex justify-center items-center mr-2'>
                                {/* <img src={icon} alt="Technology Icon" className='p-1 max-w-full max-h-full' /> */
                                    <i className={`${icon} text-white text-lg`}></i>}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center'>
                        <a href={link} target="_blank" rel="noopener noreferrer" className='flex text-sm text-purple items-center'>
                            Learn More
                            <FaArrowCircleRight className="ml-2" color='#CBACF9' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
