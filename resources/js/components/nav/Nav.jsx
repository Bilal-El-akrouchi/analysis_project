'use client';
import { Link } from '@inertiajs/react';
import logo from '../../../../public/logo/logo.svg';
import hamburger from '../../../../public/hmaburger.svg';
import './Nav.css';

export default function Nav() {
    return (
        <>
            <nav className="glassed sticky flex w-full items-center justify-around py-2 z-30 ">
                <div className="flex w-1/3 justify-around items-center">
                    <img src={hamburger} alt="logo" className="hmaburger cursor-pointer" />
                    <Link href="/article">Articles</Link>
                </div>
                <div>
                    <Link href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div className="flex w-1/3 justify-around">
                    <input className='w-[50%] ' type="search" id="q" name="q" placeholder="Rechercher…"></input>

                    <select name="tags" className='w-[50%] '>
                        <option value="null">par tag</option>
                        <option value="nationnal">nationnal</option>
                        <option value="internationnal">internationnal</option>
                        <option value="conflit">conflit</option>
                        <option value="nouvellesNormesNationnal">nouvelles normes nationnal</option>
                        <option value="nouvellesNormesInternationnal">nouvelles Normes Internationnal</option>
                    </select>
                </div>
            </nav>
        </>
    );
}
