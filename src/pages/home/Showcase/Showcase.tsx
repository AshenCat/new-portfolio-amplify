import React from 'react';
import ClickableCards from './ShowcaseItems/ClickableCards';
import Separator from '../../../components/Separator/Separator';
import AnimatedCards from './ShowcaseItems/AnimatedCards';
import SortableCards from './ShowcaseItems/Sortable/SortableCards';

function Showcase() {
    return (
        <section className="p-4">
            <div className="page-container">
                <Separator n={9} baseVelocity={15} scrollerId="SHOWCASE">
                    <h3 className="text-center text-3xl font-semibold gradient-text-1">
                        Showcase
                    </h3>
                </Separator>
                <div className="flex flex-col gap-x-5 mt-12">
                    <AnimatedCards />
                    <ClickableCards />
                    <SortableCards />
                </div>
            </div>
        </section>
    );
}

export default Showcase;
