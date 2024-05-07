
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { IconHelp } from '@tabler/icons-react';
import { useNotes } from '../Context/NotesContext.jsx';
import { useEffect } from 'react';
import Dashboard from './Dashboard.jsx';
import { useAuth } from '../Context/AuthContext.jsx';

import NoteCard from "./NoteCard.jsx";


function DashboardNotes() {

    const { logout, user } = useAuth()

    const { getNotes, notes } = useNotes()

    useEffect(() => {
        getNotes()
    }, [])

    if (notes.length === 0) return (
        <Dashboard />
    )

    return (
        <body className='font-gabarito flex'>
            <aside className="overflow-x-hidden relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl bg-sidebar bg-[#759f43] dark:bg-[#1a1a1a]">
                <div className="flex items-center justify-center mt-4 mb-2">
                    <span className='pr-2'>
                        <IconBookmarksFilled width={30} height={30} color='#ffffff' />
                    </span>
                    <span className=" font-semibold text-[36px] text-[#ffffff] dark:text-[#19240f]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav className="text-white text-[18px] font-semibold p-6 space-y-3">
                    <a href="/dashboard" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHome2 stroke={2} />
                        <i className="fas fa-tachometer-alt "></i>
                        Panel principal
                    </a>
                    <a href="/notes" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconNotebook stroke={2} />
                        <i className="fas fa-sticky-note"></i>
                        Apuntes
                    </a>
                    <a href="/dashboardbalance" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconCash stroke={2} />
                        <i className="fas fa-table "></i>
                        Balance
                    </a>

                </nav>
                <nav className='flex flex-col justify-center p-6 font-semibold mt-[340px] space-y-3 text-[18px]'>
                    <h2 className='font-semibold text-[16px] text-[#ffffff] dark:text-[#19240f]'>Bienvenido {user.username}</h2>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 my-5" />
                    <a href="https://github.com/Panitou/apunta2-project" target='_blank' className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <Github className="w-5 h-5" color={'white'} />
                        <i className=""></i>
                        GitHub
                    </a>
                    <a href="/Apuntes" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconSettings stroke={2} />
                        <i className=""></i>
                        Ajustes
                    </a>
                    <Link to='/' onClick={() => {
                        logout()
                    }} className='hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                        <IconHelp stroke={2} />
                        Cerrar Sesión
                    </Link>
                    <a href="/Balance" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHelp stroke={2} />
                        <i className=""></i>
                        Soporte
                    </a>
                </nav>
            </aside>

            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col bg-[#cfe2b4]">
                <div className='grid grid-cols-4 gap-3'>
                    {notes.map(note => (
                        <NoteCard note={note} key={note._id} />
                    ))}
                </div>

                <div>
                    <Link to="/add-notes" className='hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] w-40 h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2'>
                        Nueva tarea
                    </Link>
                </div>
            </div>



        </body >
    );
}

export default DashboardNotes