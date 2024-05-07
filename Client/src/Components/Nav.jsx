import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconBaselineDensityMedium } from '@tabler/icons-react';
import { useState, useEffect } from "react"
import { Link } from 'react-scroll';
import { useAuth } from '../Context/AuthContext';

const Nav = () => {

    const { isAuthenticated } = useAuth()


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

        <div className="text-white flex justify-center px-12 md:px-24 py-10 bg-[#cfe2b4] dark:bg-[#1a1a1a]">
            <div className="font-gabarito w-full flex md:justify-between items-center" >
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
                                    <span className="text-[20px] hover:font-semibold hover:text-[21px]">Quiero vender</span>
                                </Link>
                            </button>
                        </li>
                        <li className="pl-[33px]">
                            <button>
                                <Link onClick={() => setShowNav(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                    <span className="text-[20px] hover:font-semibold hover:text-[21px]">Quiero comprar</span>
                                </Link>
                            </button>
                        </li>
                        <li>
                            <div>
                                <a href="/login">
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
                                <a href="/register">
                                    <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[15px] md:w-[140px] md:h-[50px] sm:rounded-[15px] sm:ml-5 hover:shadow-lg dark:shadow-[#a6c977] text-white">
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

            </div >

            <div className="flex justify-center items-center font-gabarito relative">
                <button className="flex justify-center items-center bg-[#759f43] rounded-[15px] w-[50px] h-[50px] md:rounded-[15px] ml-5 hover:shadow-lg dark:shadow-[#a6c977] lg:hidden" onClick={toggleNav}>
                    <IconBaselineDensityMedium width={20} height={20} color='white' />
                </button>
                {isAuthenticated ? (
                    showNav && (
                        <div className="absolute top-[65px] right-0 w-[170px] bg-[#759f43] p-3 rounded-[20px] shadow-lg z-10 ">
                            <ul className='flex flex-col justify-center items-center'>
                                <li className='bg-[#2c3f1a] rounded-[15px] w-[130px] h-[35px] mb-2 flex justify-center items-center'>
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero vender</span>
                                    </Link>
                                </li>
                                <li className="bg-[#2c3f1a] rounded-[15px] w-[130px] h-[35px] mb-2 flex justify-center items-center">
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero comprar</span>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <a href="/dashboard" className='flex justify-center items-center'>
                                        <button className="flex justify-center items-center bg-[#2c3f1a] rounded-[15px] w-[120px] h-[35px] sm:rounded-[15px] lg:ml-10 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                            <span className='mr-2'>
                                                <IconUserFilled width={17} height={17} color='white' />
                                            </span>
                                            <span className='md:text-[16px]'>Dashboard</span>
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <div>
                                        <button className="flex justify-center items-center bg-[#2c3f1a] rounded-[15px] w-[90px] h-[35px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                            <IconSunFilled width={16} height={16} color='white' />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                ) : (
                    showNav && (
                        <div className="absolute top-[65px] right-0 w-[170px] bg-[#759f43] p-3 rounded-[20px] shadow-lg z-10 ">
                            <ul className='flex flex-col justify-center items-center'>
                                <li className='bg-[#2c3f1a] rounded-[15px] w-[130px] h-[35px] mb-2 flex justify-center items-center'>
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero vender</span>
                                    </Link>
                                </li>
                                <li className="bg-[#2c3f1a] rounded-[15px] w-[130px] h-[35px] mb-2 flex justify-center items-center">
                                    <Link onClick={() => setShowNav(false)} activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                        <span className="text-[16px]">Quiero comprar</span>
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <a href="/login" className='flex justify-center items-center'>
                                        <button className="flex justify-center items-center bg-[#2c3f1a] rounded-[15px] w-[120px] h-[35px] sm:rounded-[15px] lg:ml-10 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                            <span className='mr-2'>
                                                <IconUserFilled width={17} height={17} color='white' />
                                            </span>
                                            <span className='md:text-[16px]'>Login</span>
                                        </button>
                                    </a>
                                </li>
                                <li className='mb-2'>
                                    <a href="/register" className='flex justify-center items-center'>
                                        <button className="flex justify-center items-center bg-[#2c3f1a] rounded-[15px] w-[120px] h-[35px] sm:rounded-[15px] lg:ml-5 hover:shadow-lg dark:shadow-[#a6c977] text-white">
                                            <span className='mr-2'>
                                                <IconUserFilled width={16} height={16} color='white' />
                                            </span>
                                            <span className='md:text-[16px]'>Register</span>
                                        </button>
                                    </a>
                                </li>
                                <li>
                                    <div>
                                        <button className="flex justify-center items-center bg-[#2c3f1a] rounded-[15px] w-[90px] h-[35px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                            <IconSunFilled width={16} height={16} color='white' />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                )}
            </div>
        </div >
    );
}

export default Nav;
