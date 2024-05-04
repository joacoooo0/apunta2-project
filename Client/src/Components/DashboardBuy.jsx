import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconSunFilled } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';

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
            <div>
                <nav class="dark:bg-[#2c3f1a] bg-[#cfe2b4]">
                    <div class="flex flex-wrap justify-between items-center mx-3 p-3">
                        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <IconBookmarksFilled className='dark:text-white text-[#19240f]' width={30} height={30} />
                            <span class="self-center text-[25px] font-semibold whitespace-nowrap text-[#19240f] dark:text-[#ffffff] text">Apuntados</span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[12px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                <IconSunFilled width={15} height={15} color='white' />
                            </button>
                            <a href="#" class="flex justify-center items-center text-[18px] font-semibold text-white dark:text-[#ffffff] hover:bg-[#49692b] bg-[#759f43] w-[150px] h-[30px] rounded-[10px] ">Cerrar Sesión</a>
                        </div>
                    </div>
                </nav>
                <hr className='border-[#9dad88]' />
                <hr className='border-[#9dad88]' />
            </div>

            <div className='flex'>
                <div className='dark:bg-[#2c3f1a] bg-[#cfe2b4] w-[300px] h-[850px] border-l-0 border-t-0 border-b-0 border-r-2 border-[#9dad88]'>
                    <ul className=''>
                        <li className='flex flex-col mx-3 px-3 py-6 font-normal text-white text-[19px] space-y-3'>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex' href=""><IconHome className='mr-3' stroke={2} /> Panel Principal</a>
                            </div>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex' href=""><IconCash className='mr-3' stroke={2} /> Balance</a>
                            </div>
                            <div className='hover:bg-[#405c26] h-10 flex items-center p-3 rounded-[9px]'>
                                <a className='flex' href=""><IconNotebook className='mr-3' stroke={2} /> Apuntes</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className=' dark:bg-[#2c3f1a] bg-[#cfe2b4] w-full min-h-full'>

                </div>
            </div>

        </div>

    );
}

export default DashboardBuy