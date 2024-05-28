import { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';

import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { IconSunFilled } from '@tabler/icons-react';
import { IconLogout2 } from '@tabler/icons-react';
import { IconDashboard } from '@tabler/icons-react';



function Ajustes() {
    // Define el estado del tema (oscuro o claro) usando useState y detecta la preferencia del sistema
    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

    useEffect(() => {
        // Selecciona el elemento "html" del documento y alterna la clase "dark"
        // Si el valor de "theme" es "dark", se añade la clase "dark", si no, se elimina
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    // Función para cambiar el tema entre claro y oscuro
    const handleChangeTheme = () => {
        // Cambia el estado "theme" al valor opuesto: si es "light", cambia a "dark"; si es "dark", cambia a "light"
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };
    const { logout, user } = useAuth()

    return (
        <body className='font-gabarito flex'>
            <aside className="overflow-x-hidden relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl bg-sidebar bg-[#759f43] dark:bg-[#1a1a1a]">
                <div className="flex items-center justify-center mt-4 mb-2">
                    <span className='pr-2'>
                        <IconBookmarksFilled className='dark:text-[#a6c977] text-white' width={30} height={30} />
                    </span>
                    <span className=" font-semibold text-[36px] text-white dark:text-[#a6c977]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav className="text-white text-[18px] font-semibold p-6 space-y-3">
                    <a href="/dashboard" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconDashboard stroke={2} />
                        <i className="fas fa-tachometer-alt "></i>
                        Dashboard
                    </a>
                    <a href="/notes" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconNotebook stroke={2} />
                        <i className="fas fa-sticky-note"></i>
                        Apuntes
                    </a>
                    <a href="/balance" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconCash stroke={2} />
                        <i className="fas fa-table "></i>
                        Balance
                    </a>
                </nav>
                <nav className='flex flex-col justify-center p-6 font-semibold mt-[340px] space-y-3 text-[18px]'>
                    <h2 className='font-semibold text-[16px] text-[#ffffff] dark:text-[#ffffff]'>Bienvenido {user.username}</h2>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 my-5" />
                    <a href="https://github.com/Panitou/apunta2-project" target='_blank' className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <Github className="w-5 h-5" color={'white'} />
                        <i className=""></i>
                        GitHub
                    </a>
                    <a href='/ajustes' className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2" disabled>
                        <IconSettings stroke={2} />
                        <i className=""></i>
                        Ajustes
                    </a>
                    <Link to='/' onClick={() => {
                        logout()
                    }} className='hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                        <IconLogout2 stroke={2} />
                        <i className=""></i>
                        Cerrar Sesión
                    </Link>
                    <a href="/" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2" >
                        <IconHome2 stroke={2} />
                        <i className=""></i>
                        Inicio
                    </a>
                </nav>
            </aside>

            <div className="w-full h-screen overflow-x-hidden flex bg-[#cfe2b4] dark:bg-[#5a7e32]">
                <div>
                    <div className='absolute right-0 bottom-0 m-6'>
                        <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[50px] md:h-[50px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977] dark:bg-[#1a1a1a]" onClick={handleChangeTheme}>
                            <IconSunFilled width={20} height={20} color='white' />
                        </button>
                    </div>
                </div>
                <main className="grid grid-flow-col  gap-5 p-6">

                    <div className='grid grid-rows-2 gap-2'>
                        <a href="#" className="h-48 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>


                        <div className="max-w-sm h-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>


                        <div className="max-w-sm h-52 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                                See our guideline
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </a>
                        </div>
                    </div>



                    <div className="max-w-sm max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src="" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>


                </main>

            </div>
        </body >
    );
}

export default Ajustes