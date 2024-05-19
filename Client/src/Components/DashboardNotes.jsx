
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { IconHelp } from '@tabler/icons-react';
import { useNotes } from '../Context/NotesContext.jsx';
import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import { IconSunFilled } from '@tabler/icons-react';

import NoteCard from "./NoteCard.jsx";


function DashboardNotes() {

    const { logout, user } = useAuth()

    const { getNotes, notes } = useNotes()

    const [theme, setTheme] = useState(() => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        getNotes()
    }, [])



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
                        <IconHome2 stroke={2} />
                        <i className="fas fa-tachometer-alt "></i>
                        Panel principal
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
                    <a href="/Apuntes" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconSettings stroke={2} />
                        <i className=""></i>
                        Ajustes
                    </a>
                    <Link to='/' onClick={() => {
                        logout()
                    }} className='hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                        <IconHelp stroke={2} />
                        <i className=""></i>
                        Cerrar Sesión
                    </Link>
                    <a href="/Balance" className="hover:bg-[#3d5223] bg-[#475f29] dark:bg-[#759f43] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHelp stroke={2} />
                        <i className=""></i>
                        Soporte
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
                        <Link to="#" className='hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] w-44 h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                            Modificar apunte
                        </Link>
                    </div>

                    <form className="w-[400px] mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="text-white block w-full p-4 ps-10 text-sm rounded-lg bg-[#475f29] dark:bg-[#cfe2b4] dark:placeholder-gray-400 dark:text-[#1a1a1a] dark:focus:ring-[#cfe2b4] dark:focus:border-[#cfe2b4]" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-[#1a1a1a] absolute end-2.5 bottom-2.5 bg-white dark:text-white hover:bg-[#3d5223] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#475f29] dark:hover:bg-[#577431]">Search</button>
                        </div>
                    </form>

                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
                    <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Apple MacBook Pro 17
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-b border-blue-400">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>
                                <td className="px-6 py-4">
                                    Phone
                                </td>
                                <td className="px-6 py-4">
                                    $799
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-blue-500 border-blue-40">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>
                                <td className="px-6 py-4">
                                    Wearables
                                </td>
                                <td className="px-6 py-4">
                                    $999
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    {notes.map(note => (
                        <NoteCard note={note} key={note._id} />
                    ))}
                </div>
            </div>



        </body >
    );
}

export default DashboardNotes