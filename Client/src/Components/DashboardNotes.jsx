
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { useNotes } from '../Context/NotesContext.jsx';
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import { IconSunFilled } from '@tabler/icons-react';
import { IconLogout2 } from '@tabler/icons-react';
import NoteCard from "./NoteCard.jsx";
import { IconDashboard } from '@tabler/icons-react';


function DashboardNotes() {

    // Utiliza el hook useAuth para obtener las funciones logout y el usuario actual
    const { logout, user } = useAuth();

    // Utiliza el hook useNotes para obtener las funciones getNotes y el estado notes
    const { getNotes, notes } = useNotes();

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


    // Utiliza useEffect para obtener las notas cuando se monta el componente
    useEffect(() => {
        getNotes();
    }, []);



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

            <div className="w-full h-screen overflow-x-hidden flex flex-col bg-[#cfe2b4] dark:bg-[#5a7e32] p-7">
                <div className='flex justify-end'>
                    <button className="flex justify-center items-center bg-[#759f43] w-[60px] h-[60px] rounded-[15px] md:w-[50px] md:h-[50px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977] dark:bg-[#1a1a1a]" onClick={handleChangeTheme}>
                        <IconSunFilled width={20} height={20} color='white' />
                    </button>
                </div>
                <div className='flex space-x-5 items-center my-5'>
                    <div>
                        <Link to="/add-notes" className='hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] w-40 h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                            Nuevo apunte
                        </Link>
                    </div>
                    <div>
                        <button type='button' className='hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] w-50 h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2' disabled>
                            Limpiar búsqueda
                        </button>
                    </div>
                    <form className="w-[400px] mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="text-white block w-full p-4 ps-10 text-sm rounded-lg bg-[#475f29] dark:bg-[#cfe2b4] dark:placeholder-gray-400 dark:text-[#1a1a1a] dark:focus:ring-[#cfe2b4] dark:focus:border-[#cfe2b4]" placeholder="Busca tu apunte" required disabled />
                            <button type="submit" className="text-[#1a1a1a] absolute end-2.5 bottom-2.5 bg-white dark:text-white hover:bg-[#3d5223] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#475f29] dark:hover:bg-[#577431]" disabled>Buscar</button>
                        </div>
                    </form>

                </div>

                <div className='grid'>
                    <NoteCard notes={notes} />
                </div>
            </div>



        </body >
    );
}

export default DashboardNotes