
import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';

import { Link } from 'react-scroll';

import { useEffect, useState } from "react"


const Nav = () => {


    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="text-white md:flex justify-center px-24 py-10">
            <div className="font-gabarito w-[1533px] h-[80px] md:flex items-center justify-between">
                <div className=' md:flex justify-center items-center'>
                    <span className='pr-2'>
                        <IconBookmarksFilled width={48} height={48} color='#a6c977' />
                    </span>
                    <span className="text-[#19240f] font-semibold text-[30px] dark:text-[#a6c977]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav className='text-[#19240f] dark:text-[#a6c977]'>
                    <ul className="md:flex md:items-center justify-center ">
                        <li>
                            <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>
                                <span className="text-[20px] ">Inicio</span>
                            </Link>
                        </li>
                        <li className='pl-[33px]'>
                            <Link activeClass="active" to="Nosotros" spy={true} smooth={true} offset={-100} duration={500}>
                                <span className="text-[20px]">Nosotros</span>
                            </Link>
                        </li>
                        <li className="pl-[33px]">
                            <Link activeClass="active" to="Soporte" spy={true} smooth={true} offset={-100} duration={500}>
                                <span className="text-[20px]">Soporte</span>
                            </Link>
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
        </div>
    );
}
export default Nav
