
import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';

import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <>
            <div className="md:flex justify-center px-24 py-10">
                <div className="font-gabarito text-white w-[1533px] h-[80px] md:flex items-center justify-between">

                    <div className='md:flex justify-center items-center'>
                        <span className='pr-2'> <IconBookmarksFilled width={48} height={48} color='white' /></span>
                        <span className="font-semibold text-[30px]">
                            <Link activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500} >ApuntaDos</Link>
                        </span>
                    </div>
                    <div >
                        <nav >
                            <ul className="md:flex md:items-center justify-center ">
                                <li >
                                    <button>
                                        <Link activeClass="active"
                                            to="/"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500} >
                                            <span className="text-[20px]">Inicio</span>
                                        </Link>
                                    </button>
                                </li>
                                <li className='pl-[33px]'>
                                    <button>
                                        <Link activeClass="active"
                                            to="Nosotros"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500} >
                                            <span className="text-[20px]">Nosotros</span>
                                        </Link>
                                    </button>
                                </li>
                                <li className="pl-[33px]">
                                    <button>
                                        <Link activeClass="active"
                                            to="Soporte"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500} >
                                            <span className="text-[20px]">Soporte</span>
                                        </Link>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >
                <div>
                    <a href="/LoginPage">
                        <button className="flex justify-center items-center bg-[#709441] w-[80px] h-[80px] rounded-[20px] ml-10">
                            <IconUserFilled width={48} height={48} color='white' />
                        </button>
                    </a>
                </div>
                <div>
                    <a >
                        <button className="flex justify-center items-center bg-[#709441] w-[80px] h-[80px] rounded-[20px] ml-5">
                            <IconSunFilled width={48} height={48} color='white' />
                        </button>
                    </a>

                </div>
            </div >
        </>
    )
}
export default Nav
