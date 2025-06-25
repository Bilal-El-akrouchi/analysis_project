'use client';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import hamburger from '../../../../public/hmaburger.svg';
import logo from '../../../../public/logo/logo.svg';
import './Nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const defiler = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <nav className="glassed sticky z-30 flex w-full items-center justify-around py-2">
                <div className="flex w-1/3 items-center justify-around">
                    <img
                        onClick={() => {
                            defiler();
                        }}
                        src={hamburger}
                        alt="logo"
                        className="hmaburger cursor-pointer"
                    />
                    <Link href="/article">Articles</Link>
                </div>
                <div>
                    <Link href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                </div>
                <div className="flex w-1/3 justify-around">
                    <input className="w-[50%]" type="search" id="q" name="q" placeholder="Rechercher…"></input>

                    <select name="tags" className="w-[50%]">
                        <option value="null">par tag</option>
                        <option value="nationnal">nationnal</option>
                        <option value="internationnal">internationnal</option>
                        <option value="conflit">conflit</option>
                        <option value="nouvellesNormesNationnal">nouvelles normes nationnal</option>
                        <option value="nouvellesNormesInternationnal">nouvelles Normes Internationnal</option>
                    </select>
                </div>
            </nav>
            <div
                className={
                    `glassed fixed top-0 left-0 z-50 h-full w-[60vw] transform transition-all duration-300 ease-in-out ` +
                    (isOpen ? 'translate-x-0' : '-translate-x-full')
                }
            >
                <div className="bg-bleu flex w-full justify-end p-5 text-white">
                    <button
                        onClick={() => {
                            defiler();
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="bg-bleu flex w-full flex-col items-center justify-start gap-10 pb-5 text-white md:flex-row md:gap-0">
                    <div className="flex w-1/5 flex-col items-center justify-center">
                        <Link href="login" className="flex w-1/5 flex-col items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="38"
                                fill="currentColor"
                                class="bi bi-person-circle"
                                viewBox="0 0 16 16"
                                className="mb-5 cursor-pointer"
                            >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path
                                    fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                />
                            </svg>
                            <div className="full cursor-pointer text-center whitespace-nowrap first-letter:uppercase">se connecter</div>
                        </Link>
                    </div>
                    <div className="flex w-1/5 flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            fill="currentColor"
                            class="bi bi-send-arrow-down"
                            viewBox="0 0 16 16"
                            className="mb-5 cursor-pointer"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"
                            />
                        </svg>
                        <div className="full cursor-pointer text-center first-letter:uppercase">newsletter</div>
                    </div>
                    <div className="flex w-1/5 flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="38"
                            height="38"
                            fill="currentColor"
                            class="bi bi-person-circle"
                            viewBox="0 0 16 16"
                            className="mb-5 cursor-pointer"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                        </svg>
                        <div className="full cursor-pointer text-center first-letter:uppercase">dashboard</div>
                    </div>
                </div>
            </div>
            <div
                className={
                    `fixed top-0 left-0 z-40 h-full w-[60vw] transform transition-all duration-300 ease-in-out ` +
                    (isOpen ? 'translate-x-0' : '-translate-x-full')
                }
            ></div>
        </>
    );
}
