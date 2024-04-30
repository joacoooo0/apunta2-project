import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import { useState, useEffect } from "react"
import { Link } from 'react-scroll';

const Nav = () => {
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="text-white flex justify-center px-12 md:px-24 py-10">
            <div className="font-gabarito w-full flex md:justify-between items-center">
                <div className='flex items-center sm:mr-5'>
                    <span className='pr-2'>
                        <IconBookmarksFilled width={35} height={35} color='#a6c977' />
                    </span>
                    <span className="text-[#19240f] font-semibold text-[25px] sm:text-[30px] dark:text-[#a6c977]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav></nav>
                <nav className='text-[#19240f] dark:text-[#a6c977] ml-5'>
                    <ul className={`flex items-center ${menuOpen ? 'flex-col md:flex-row' : 'hidden'} md:flex`}>
                        <li>
                            <button>
                                <Link onClick={() => setMenuOpen(false)} activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px]">Inicio</span>
                                </Link>
                            </button>
                        </li>
                        <li className='pl-[33px]'>
                            <button>
                                <Link onClick={() => setMenuOpen(false)} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px]">Nosotros</span>
                                </Link>
                            </button>
                        </li>
                        <li className="pl-[33px]">
                            <button>
                                <Link onClick={() => setMenuOpen(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px]">Soporte</span>
                                </Link>
                            </button>
                        </li>
                        <li>
                            <div>
                                <a href="/LoginPage">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[15px] md:w-[60px] md:h-[60px] sm:rounded-[20px] sm:ml-10 hover:shadow-lg dark:shadow-[#a6c977]">
                                        <IconUserFilled width={35} height={35} color='white' />
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[60px] md:h-[60px] sm:rounded-[20px] ml-5 hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                    <IconSunFilled width={35} height={35} color='white' />
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <div>
                    <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[60px] md:h-[60px] md:rounded-[20px] ml-5 hover:shadow-lg dark:shadow-[#a6c977] md:hidden" onClick={toggleNav}>
                        <IconBaselineDensityMedium width={35} height={35} color='white' />
                    </button>
                </div>
            </div>

            {showNav && (
                <div className="top-0 left-0 bg-opacity-75 w-full h-full flex justify-center items-center font-gabarito font-semibold">
                    <div className="w-full md:max-w-sm h-full bg-[#cfe2b4] dark:bg-[#19240f] dark:text-[#a6c977] text-[#19240f] fixed top-0 right-0 pt-20 z-50 overflow-y-auto ">
                        <ul className="flex flex-col space-y-4 items-center">
                            <li>
                                <button>
                                    <Link onClick={() => { setMenuOpen(false); setShowNav(false) }} activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[20px]">Inicio</span>
                                    </Link>
                                </button>
                            </li>
                            <li className=''>
                                <button>
                                    <Link onClick={() => { setMenuOpen(false); setShowNav(false) }} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[20px]">Nosotros</span>
                                    </Link>
                                </button>
                            </li>
                            <li className="">
                                <button>
                                    <Link onClick={() => { setMenuOpen(false); setShowNav(false) }} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[20px]">Soporte</span>
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <div>
                                    <a href="/LoginPage">
                                        <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[60px] md:h-[60px] sm:rounded-[20px] hover:shadow-lg dark:shadow-[#a6c977]">
                                            <IconUserFilled width={35} height={35} color='white' />
                                        </button>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[60px] md:h-[60px] sm:rounded-[20px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                        <IconSunFilled width={35} height={35} color='white' />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
