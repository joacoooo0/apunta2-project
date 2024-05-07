
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { IconHelp } from '@tabler/icons-react';
import { useAuth } from '../Context/AuthContext.jsx';

function Dashboard() {

    const { logout, user } = useAuth()

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
                    <a href="" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
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
                    <a href="" className="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHelp stroke={2} />
                        <i className=""></i>
                        Soporte
                    </a>
                </nav>
            </aside>

            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col bg-[#cfe2b4]">

                <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black pb-6">Tables</h1>

                    <div className="w-full mt-6">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                        <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr className="bg-gray-200">
                                        <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                        <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                        <td className="w-1/3 text-left py-3 px-4">Williams</td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr className="bg-gray-200">
                                        <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                        <td className="w-1/3 text-left py-3 px-4">Brown</td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/striped-table">https://tailwindcomponents.com/component/striped-table</a>
                        </p>
                    </div>

                    <div classclassName="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <table className="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-grey-lighter">
                                        <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr className="hover:bg-grey-lighter">
                                        <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr className="hover:bg-grey-lighter">
                                        <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr className="hover:bg-grey-lighter">
                                        <td className="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td className="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td className="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td className="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/table">https://tailwindcomponents.com/component/table</a>
                        </p>
                    </div>

                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div className="bg-white overflow-auto">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Rol
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created at
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Vera Carpenter
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jan 21, 2020
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span className="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Blake Bowman
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jan 01, 2020
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span className="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Dana Moore
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jan 10, 2020
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                <span className="relative">Suspended</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-5 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        Alonzo Cox
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td className="px-5 py-5 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                        </td>
                                        <td className="px-5 py-5 bg-white text-sm">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <span className="relative">Inactive</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="pt-3 text-gray-600">
                            Source: <a className="underline" href="https://tailwindcomponents.com/component/table-responsive-with-filters">https://tailwindcomponents.com/component/table-responsive-with-filters</a>
                        </p>
                    </div>
                </main>

                <footer className="w-full bg-black text-right text-white p-4">
                    Built by <a target="_blank" href="https://davidgrzyb.com" className="underline">David Grzyb</a>.
                </footer>
            </div>



        </body >
    );
}

export default Dashboard