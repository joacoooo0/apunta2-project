import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconSunFilled } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { IconHelp } from '@tabler/icons-react';

import Github from '../assets/img/github';

import { useState, useEffect } from "react"

const DashboardBuy = () => {
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className='font-gabarito'>
            <div className=''>
                <nav class="dark:bg-[#2c3f1a] bg-[#cfe2b4] border-l-0 border-t-0 border-b-2 border-r-0 border-[#9dad88] border-opacity-25">
                    <div class="flex flex-wrap justify-between items-center mx-3 p-5  ">
                        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <IconBookmarksFilled className='dark:text-white text-[#19240f]' width={30} height={30} />
                            <span class="self-center text-[25px] font-semibold whitespace-nowrap text-[#19240f] dark:text-[#ffffff] text">Apuntados</span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[12px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                <IconSunFilled width={15} height={15} color='white' />
                            </button>
                            <a href="#" class="flex justify-center items-center text-[18px] font-semibold text-white dark:text-[#ffffff] hover:bg-[#628d3a] bg-[#759f43] w-[150px] h-[40px] rounded-[10px] ">Cerrar Sesión</a>
                        </div>
                    </div>
                </nav>

            </div>

            <div className='flex'>
                <div className='dark:bg-[#2c3f1a] bg-[#cfe2b4] w-[300px] border-l-0 border-t-0 border-b-0 border-r-2 border-[#9dad88] border-opacity-25'>
                    <ul className=''>
                        <li className='flex flex-col mx-3 px-3 py-6 font-normal text-white text-[19px] space-y-3'>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex items-center justify-center' href=""><IconHome className='mr-3' stroke={2} /> Panel Principal</a>
                            </div>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex items-center justify-center' href=""><IconCash className='mr-3' stroke={2} /> Balance</a>
                            </div>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex items-center justify-center' href=""><IconNotebook className='mr-3' stroke={2} /> Apuntes</a>
                            </div>
                        </li>
                    </ul>
                    <div className='pt-[448px]'>
                        <hr className='border-[#9dad88] border-opacity-25 mx-3' />
                        <hr className='border-[#9dad88] border-opacity-25 mx-3' />
                        <ul className=''>
                            <li className='flex flex-col mx-3 px-3 py-6 font-normal text-white text-[19px] space-y-3'>
                                <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                    <a className='flex items-center justify-center' href=""><Github className="mr-3 w-5 h-5" color={'white'} /> Github</a>
                                </div>
                                <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                    <a className='flex items-center justify-center' href=""><IconSettings className='mr-3' stroke={2} /> Ajustes</a>
                                </div>
                                <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                    <a className='flex items-center justify-center' href=""><IconHelp className='mr-3' stroke={2} /> Soporte</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full h-auto dark:bg-[#2c3f1a] bg-[#cfe2b4]'></div>
            </div>

        </div >

    );
}

export default DashboardBuy