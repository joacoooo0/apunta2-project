
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { useAuth } from '../Context/AuthContext.jsx';
import { useEffect, useState } from "react";
import { IconSunFilled } from '@tabler/icons-react';
import { IconLogout2 } from '@tabler/icons-react';
import { IconDashboard } from '@tabler/icons-react';

function DashboardBalance() {

    // Define el estado para el tema (claro u oscuro), inicializándolo según la preferencia del usuario
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

    // Usa el hook personalizado useAuth para obtener las funciones de logout y los datos del usuario
    const { logout, user } = useAuth();

    return (
        <body className='font-gabarito flex'>
            <aside className="overflow-x-hidden relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl bg-sidebar bg-[#759f43] dark:bg-[#1a1a1a]">
                <div className="flex items-center justify-center mt-4 mb-2">
                    <span className='pr-2'>
                        <IconBookmarksFilled className='dark:text-[#a6c977] text-white' width={30} height={30} />
                    </span>
                    <span className="font-semibold text-[36px] text-white dark:text-[#a6c977]">
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
                    <button type='button' className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2" disabled>
                        <IconHome2 stroke={2} />
                        <i className=""></i>
                        Inicio
                    </button>
                </nav>
            </aside>

            <div className="w-full h-screen overflow-x-hidden flex flex-col bg-[#cfe2b4] dark:bg-[#5a7e32] p-7">
                <div>
                    <div className='absolute right-0 bottom-0 m-6'>
                        <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[50px] md:h-[50px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977] dark:bg-[#1a1a1a]" onClick={handleChangeTheme}>
                            <IconSunFilled width={20} height={20} color='white' />
                        </button>

                    </div>
                    <div>
                        <h1 className='text-[60px] text-[#1a1a1a] font-bold'>BALANCE</h1>
                    </div>
                </div>
            </div>



        </body >
    );
}

export default DashboardBalance