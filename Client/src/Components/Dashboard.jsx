
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import { IconHome2 } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';
import { IconCash } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import Github from '../assets/img/github.jsx';
import { IconHelp } from '@tabler/icons-react';

const Dashboard = () => {
    return (
        <body className='font-gabarito flex'>
            <aside class="relative bg-sidebar h-screen w-80 hidden sm:block shadow-xl bg-sidebar bg-[#759f43] dark:bg-[#1a1a1a]">
                <div class="flex items-center justify-center mt-4 mb-2">
                    <span className='pr-2'>
                        <IconBookmarksFilled width={30} height={30} color='#ffffff' />
                    </span>
                    <span className=" font-semibold text-[36px] text-[#ffffff] dark:text-[#19240f]">
                        <Link activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500}>ApuntaDos</Link>
                    </span>
                </div>
                <nav class="text-white text-[18px] font-semibold p-6 space-y-3">
                    <a href="/Dashboard" class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHome2 stroke={2} />
                        <i class="fas fa-tachometer-alt "></i>
                        Panel principal
                    </a>
                    <a href="/Apuntes" class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconNotebook stroke={2} />
                        <i class="fas fa-sticky-note"></i>
                        Apuntes
                    </a>
                    <a href="/Balance" class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconCash stroke={2} />
                        <i class="fas fa-table "></i>
                        Balance
                    </a>
                </nav>
                <nav className='flex flex-col justify-center p-6 font-semibold mt-[400px] space-y-3 text-[18px]'>
                    <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 my-5" />
                    <a href="https://github.com/Panitou/apunta2-project" target='_blank' class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <Github className="w-5 h-5" color={'white'} />
                        <i className=""></i>
                        GitHub
                    </a>
                    <a href="/Apuntes" class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconSettings stroke={2} />
                        <i className=""></i>
                        Ajustes
                    </a>
                    <a href="/Balance" class="hover:bg-[#3d5223] bg-[#475f29] rounded-[15px] h-10 flex items-center justify-center px-6 active-nav-link text-white nav-item space-x-2">
                        <IconHelp stroke={2} />
                        <i className=""></i>
                        Soporte
                    </a>
                </nav>
            </aside>

            <div className="w-full h-screen overflow-x-hidden border-t flex flex-col bg-[#cfe2b4]">

                <main class="w-full flex-grow p-6">
                    <h1 class="text-3xl text-black pb-6">Tables</h1>

                    <div class="w-full mt-6">
                        <p class="text-xl pb-3 flex items-center">
                            <i class="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div class="bg-white overflow-auto">
                            <table class="min-w-full bg-white">
                                <thead class="bg-gray-800 text-white">
                                    <tr>
                                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                        <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700">
                                    <tr>
                                        <td class="w-1/3 text-left py-3 px-4">Lian</td>
                                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr class="bg-gray-200">
                                        <td class="w-1/3 text-left py-3 px-4">Emma</td>
                                        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr>
                                        <td class="w-1/3 text-left py-3 px-4">Oliver</td>
                                        <td class="w-1/3 text-left py-3 px-4">Williams</td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                    <tr class="bg-gray-200">
                                        <td class="w-1/3 text-left py-3 px-4">Isabella</td>
                                        <td class="w-1/3 text-left py-3 px-4">Brown</td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="pt-3 text-gray-600">
                            Source: <a class="underline" href="https://tailwindcomponents.com/component/striped-table">https://tailwindcomponents.com/component/striped-table</a>
                        </p>
                    </div>

                    <div class="w-full mt-12">
                        <p class="text-xl pb-3 flex items-center">
                            <i class="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div class="bg-white overflow-auto">
                            <table class="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Last Name</th>
                                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Phone</th>
                                        <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-grey-lighter">
                                        <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td class="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td class="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr class="hover:bg-grey-lighter">
                                        <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td class="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td class="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr class="hover:bg-grey-lighter">
                                        <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td class="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td class="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                    <tr class="hover:bg-grey-lighter">
                                        <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                                        <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                                        <td class="py-4 px-6 border-b border-grey-light">622322662</td>
                                        <td class="py-4 px-6 border-b border-grey-light">jonsmith@mail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="pt-3 text-gray-600">
                            Source: <a class="underline" href="https://tailwindcomponents.com/component/table">https://tailwindcomponents.com/component/table</a>
                        </p>
                    </div>

                    <div class="w-full mt-12">
                        <p class="text-xl pb-3 flex items-center">
                            <i class="fas fa-list mr-3"></i> Table Example
                        </p>
                        <div class="bg-white overflow-auto">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            User
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Rol
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Created at
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Vera Carpenter
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 21, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Blake Bowman
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 01, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Activo</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Dana Moore
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Jan 10, 2020
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Suspended</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-10 h-10">
                                                    <img class="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        Alonzo Cox
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                        </td>
                                        <td class="px-5 py-5 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                <span aria-hidden
                                                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <span class="relative">Inactive</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p class="pt-3 text-gray-600">
                            Source: <a class="underline" href="https://tailwindcomponents.com/component/table-responsive-with-filters">https://tailwindcomponents.com/component/table-responsive-with-filters</a>
                        </p>
                    </div>
                </main>

                <footer class="w-full bg-black text-right text-white p-4">
                    Built by <a target="_blank" href="https://davidgrzyb.com" class="underline">David Grzyb</a>.
                </footer>
            </div>



        </body >
    );
}

export default Dashboard