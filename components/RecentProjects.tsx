import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaArrowCircleRight, FaLocationArrow } from 'react-icons/fa'
import { FaArrowPointer, FaArrowRotateRight } from 'react-icons/fa6'

const RecentProjects = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className='heading'>
                A small selection of {''}
                <span className='text-purple'> Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[500px] w-[80vw]'>
                        <PinContainer title={title} href={link}>
                            <div className='relative flex items-center justify-center overflow-hidden lg:h-[30vh] mb-10 sm:w-[500px] w-[80vw] h-[40vh]'>
                                <div className='relative wifull h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt='bg-img' />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className='z-10 absolute bottom-0' />
                            </div>
                            <div>
                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>
                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {iconLists.map((icon, index) => (
                                            <div key={icon} className='border border-white/[0.2] rounded-full 
                                            bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                                style={{ transform: 'translateX(-${5 * index * 2}px)' }}>
                                                <img src={icon} alt={icon} className='p-2' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='felx justify-center items-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Learn More
                                            <FaArrowCircleRight className="mt-1 ms-1" color='#CBACF9' />
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects