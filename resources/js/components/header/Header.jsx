'use client';
import { useEffect, useRef } from 'react';
import une from '../../../../public/Une.svg';

import './Header.css';

export default function Header() {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fromRActiv');
                        entry.target.classList.remove('fromR');
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }, // déclenchement quand 10% visible
        );

        const elements = containerRef.current.querySelectorAll('.fromR');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={containerRef} className="flex w-full flex-col items-center justify-end gap-3 overflow-x-hidden pt-30">
                <div className="glassed flex h-[80%] w-[80%] items-start justify-around overflow-x-hidden p-7">
                    <div className="fromR flex w-1/2 flex-col gap-5">
                        <h1>A LA UNE</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque qu od iusto in consequuntur sequi deleniti excepturi! Iste
                            veritatis q uae eius suscipit! Explicabo temporibus natus assumenda molestiae a lias rerum eaque blanditiis!
                        </p>
                    </div>
                    {/* pas oublier de garder la classe une pour le dégrader sur les photo
           + src une remplacer par la photo voulue dans l'import */}
                    <img src={une} alt="image a la une" className="une fromR w-1/2" />
                </div>
                <div className="flex w-[80%] items-start justify-start">
                    <h5>File d'actus...</h5>
                </div>
                <div className="flex h-[20%] w-[80%] justify-between">
                    <div className="glassed bglassed hoverSpe effetdepuisladroite w-1/5 px-2">
                        <h5>00h00</h5>
                        <p>Lorem ipsum dolor sit amet<span> ....</span> </p>
                    </div>
                    <div className="glassed bglassed hoverSpe effetdepuisladroite w-1/5 px-2">
                        <h5>00h00</h5>
                        <p>Lorem ipsum dolor sit amet <span> ....</span> </p>
                    </div>
                    <div className="glassed bglassed hoverSpeBlacn effetdepuisladroite w-1/5 px-2">
                        <h5>00h00</h5>
                        <p>Lorem ipsum dolor sit amet.<span> ....</span> </p>
                    </div>
                    <div className="glassed bglassed hoverSpeBlacn effetdepuisladroite w-1/5 px-2">
                        <h5>00h00</h5>
                        <p>Lorem ipsum dolor sit amet <span> ....</span> </p>
                    </div>
                </div>
            </div>
        </>
    );
}
