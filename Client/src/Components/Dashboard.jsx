import { IconBookmarksFilled } from '@tabler/icons-react';
import { IconSunFilled } from '@tabler/icons-react';
import { useState, useEffect } from "react"
import { Link } from 'react-scroll';

const Dashboard = () => {
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <div>
                <nav class="dark:bg-[#1a1a1a] bg-[#cfe2b4] font-gabarito">
                    <div class="flex flex-wrap justify-between items-center mx-5 p-3">
                        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <IconBookmarksFilled width={30} height={30} color='#a6c977' />
                            <span class="self-center text-[25px] font-semibold whitespace-nowrap text-[#19240f] dark:text-[#a6c977] text">Apuntados</span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <button className="flex justify-center items-center bg-[#759f43] w-[40px] h-[40px] rounded-[12px] hover:shadow-lg dark:shadow-[#a6c977]" onClick={handleChangeTheme}>
                                <IconSunFilled width={15} height={15} color='white' />
                            </button>
                            <a href="#" class="text-[18px] font-semibold text-[#19240f] dark:text-[#a6c977] hover:underline">Cerrar Sesión</a>
                        </div>
                    </div>
                </nav>
                <hr className='border-[#9dad88]' />
            </div>
            <div className='flex'>
                <div className='bg-[#cfe2b4] w-[300px] h-[850px]'>

                </div>
                <div className=' bg-[#19240f] w-full min-h-full'>

                </div>
            </div>

        </div>

    );
}

export default Dashboard