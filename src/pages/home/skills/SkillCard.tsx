import React from 'react';
import { IconType } from 'react-icons/lib';

interface SkillCardProps {
    Icon: IconType;
    title: string;
    skillCardClassName: string;
}

function SkillCard({ Icon, title, skillCardClassName }: SkillCardProps) {
    return (
        <div
            className={`flex flex-col flex-1 grow-0 basis-[200px] mx-auto p-8 rounded bg-white shadow hover:shadow-lg hover:scale-105 my-2 ${
                skillCardClassName || ''
            } transition-all`}
        >
            <figure className="flex flex-col items-center transition-all">
                <Icon className="text-8xl" />
                <figcaption className="text-center">{title}</figcaption>
            </figure>
        </div>
    );
}

export default SkillCard;
