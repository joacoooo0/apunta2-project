import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import { useEffect, useState } from "react"
import { Link } from 'react-scroll';

const Nav = () => {
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="text-white flex justify-center px-12 md:px-24 py-10">
            <div className="font-gabarito w-full md:w-[1533px] md:h-[80px] flex items-center justify-between">
                <div className='flex justify-center items-center mr-5'>
                    <span className='pr-2'>
                        <IconBookmarksFilled width={48} height={48} color='#a6c977' />
                    </span>
                    <span className="text-[#19240f] font-semibold text-[30px] dark:text-[#a6c977]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav className='text-[#19240f] dark:text-[#a6c977] ml-5 '>
                    <ul className={`flex items-center ${menuOpen ? 'flex-col md:flex-row' : 'hidden'} md:flex`}>
                        <li>
                            <button>
                                <Link onClick={() => setMenuOpen(false)} activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px] ">Inicio</span>
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
                    </ul>
                </nav>
            </div>
            <div>
                <a href="/LoginPage">
                    <button className="flex justify-center items-center bg-[#759f43] w-[80px] h-[80px] rounded-[20px] ml-10 hover:shadow-lg dark:shadow-[#a6c977]">
                        <IconUserFilled width={48} height={48} color='white' />
                    </button>
                </a>
            </div>
            <div>
                <button className="flex justify-center items-center bg-[#759f43] w-[80px] h-[80px] rounded-[20px] ml-5 hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                    <IconSunFilled width={48} height={48} color='white' />
                </button>
            </div>
            <div>
                <button className="flex justify-center items-center bg-[#759f43] w-[80px] h-[80px] rounded-[20px] ml-5 hover:shadow-lg dark:shadow-[#a6c977] md:hidden" onClick={toggleMenu}>
                    <IconBaselineDensityMedium width={48} height={48} color='white' />
                </button>
            </div>
        </div>
    );
}

export default Nav;
