import React from 'react';
import Fast from '../../../../components/SVG/Fast';
import Intuitive from '../../../../components/SVG/Intuitive';
import Responsive from '../../../../../img/Scalable.svg';
import InView from '../../../../components/InView/InView';

function AnimatedCards() {
    return (
        <section className="my-8">
            <div>
                When dealing with frontend tasks, I pay special attention on
                these three important items:
            </div>
            <InView>
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                    {Array.from(cardItems).map(([key, value], index) => {
                        return (
                            <div
                                key={`${key}-${index}`}
                                className="relative vertical-card flex flex-col grow-0 shrink-1 basis-1/3 hover:grow-1 hover:shrink-0 hover:basis-1/2 transition-all p-8 shadow overflow-hidden bg-white h-96 min-h-[24rem]"
                            >
                                <h3 className="anton vertical uppercase absolute left-4 top-6 z-10 text-xl gradient-text-1">
                                    {key}
                                </h3>
                                <div
                                    className="absolute w-full h-full top-0 left-0 my-auto flex flex-col justify-center"
                                    id="animated-cards-figure-container"
                                >
                                    {key === 'Fast' && (
                                        <Fast className="w-3/4 mx-auto" />
                                    )}
                                    {key === 'Intuitive' && (
                                        <Intuitive className="w-3/4 max-w-[320px] mx-auto" />
                                    )}
                                    {key === 'Responsive' && (
                                        <img
                                            src={Responsive}
                                            alt="Responsive Figure"
                                            className="w-3/4 mx-auto"
                                        />
                                    )}
                                </div>
                                <div className="vertical-content opacity-1 md:opacity-0 mt-auto z-10 bg-opacity-40 p-2 transition-all">
                                    <div className="drop-shadow-sm dark-color">
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </InView>
        </section>
    );
}

const cardItems = new Map(
    Object.entries({
        Fast: {
            description:
                "A fast page is a swift voyage through the digital landscape, where content materializes instantaneously, and user experience becomes a seamless dance with efficiency. It's the epitome of speed, ensuring a frictionless journey for every click.",
        },
        Intuitive: {
            description:
                'UX is an intuitive compass, effortlessly guiding users through a seamless navigation experience. Every click feels like second nature, turning interaction into an instinctive and gratifying exploration.',
        },
        Responsive: {
            description:
                'The product should be a marvel of responsiveness and cross-browser compatibility, adapting seamlessly to any device or browser. A universal experience where user satisfaction knows no bounds.',
        },
    })
);

export default AnimatedCards;
