import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id="testimonials">
            <h1 className='heading'>
                A small selection of {''}
                <span className='text-purple'> Testimonies</span>
            </h1>
            <div className='flex flex-col items-center max-lg:mt-10'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'

                />
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-10">
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div
                            key={id}
                            className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm md:w-40 md:h-40 w-32 h-32"
                        >
                            <img
                                src={nameImg}
                                alt={name}
                                className="object-contain w-auto h-auto max-w-full max-h-full"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Clients