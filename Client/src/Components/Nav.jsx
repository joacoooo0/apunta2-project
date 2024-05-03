import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import { useState, useEffect } from "react"
import { Link } from 'react-scroll';

const Nav = () => {
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    const [showNav, setShowNav] = useState(false);

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
                <div className='flex items-center sm:pr-5'>
                    <span className='pr-2'>
                        <IconBookmarksFilled width={30} height={30} color='#a6c977' />
                    </span>
                    <span className="text-[#19240f] font-semibold text-[25px] dark:text-[#a6c977]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav></nav>
                <nav className='text-[#19240f] dark:text-[#a6c977] ml-5'>
                    <ul className="hidden lg:flex items-center">
                        <li className='pl-[33px]'>
                            <button>
                                <Link onClick={() => setShowNav(false)} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px]">Quiero vender</span>
                                </Link>
                            </button>
                        </li>
                        <li className="pl-[33px]">
                            <button>
                                <Link onClick={() => setShowNav(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px]">Quiero comprar</span>
                                </Link>
                            </button>
                        </li>
                        <li>
                            <div>
                                <a href="/LoginPage">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[15px] md:w-[120px] md:h-[50px] sm:rounded-[15px] sm:ml-10 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                        <span className='mr-2'>
                                            <IconUserFilled width={20} height={20} color='white' />
                                        </span>
                                        <span className='md:text-[20px]'>Login</span>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="/RegisterPage">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[15px] md:w-[120px] md:h-[50px] sm:rounded-[15px] sm:ml-5 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                        <span className='mr-2'>
                                            <IconUserFilled width={20} height={20} color='white' />
                                        </span>
                                        <span className='md:text-[20px]'>Register</span>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[50px] md:h-[50px] sm:rounded-[15px] ml-5 hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                    <IconSunFilled width={20} height={20} color='white' />
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="flex justify-center font-gabarito relative">
                <button className="flex justify-center items-center bg-[#759f43] rounded-[15px] w-[50px] h-[50px] md:rounded-[15px] ml-5 hover:shadow-lg dark:shadow-[#a6c977] lg:hidden" onClick={toggleNav}>
                    <IconBaselineDensityMedium width={20} height={20} color='white' />
                </button>
                {showNav && (
                    <div className="absolute top-[65px] right-0  w-[150px] bg-[#759f43] p-3 rounded-[20px] shadow-lg z-10 transition-all duration-500">
                        <ul>
                            <li className=''>
                                <button>
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero vender</span>
                                    </Link>
                                </button>
                            </li>
                            <li className="">
                                <button>
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero comprar</span>
                                    </Link>
                                </button>
                            </li>
                            <li className="">
                                <a href="/LoginPage">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[10px] h-[10px] rounded-[15px] md:w-[120px] md:h-[50px] sm:rounded-[15px] lg:ml-10 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                        <span className='mr-2'>
                                            <IconUserFilled width={17} height={20} color='white' />
                                        </span>
                                        <span className='md:text-[16px]'>Login</span>
                                    </button>
                                </a>
                            </li>
                            <li>
                                <a href="/RegisterPage">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[15px] md:w-[120px] md:h-[50px] sm:rounded-[15px] lg:ml-5 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                        <span className='mr-2'>
                                            <IconUserFilled width={16} height={16} color='white' />
                                        </span>
                                        <span className='md:text-[16px]'>Register</span>
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>



        </div >
    );
}

export default Nav;
