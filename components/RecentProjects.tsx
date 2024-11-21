import { projects } from '@/data';
import React from 'react';
import { Card } from './ui/Card'; // Importing custom Card component

const RecentProjects = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className='heading'>
                A glimpse of {''}
                <span className='text-purple'> My Projects</span>
            </h1>
            <div className='grid grid-cols-1 gap-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>                {projects.map(({ id, title, des, img, iconLists, link }) => (
                <Card
                    key={id}
                    img={img}
                    title={title}
                    description={des}
                    iconLists={iconLists}
                    link={link}
                />
            ))}
            </div>
        </div>
    );
};

export default RecentProjects;
