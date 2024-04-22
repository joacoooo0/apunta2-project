
import { IconSunFilled } from '@tabler/icons-react';
import { IconUserFilled } from '@tabler/icons-react';
import { IconBookmarksFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className="md:flex justify-center">
                <div className="font-gabarito text-white bg-[#5a7834] w-[1533px] h-[64px] pl-[30px] pr-[30px] rounded-[20px] md:flex items-center justify-between">

                    <div className='md:flex justify-center items-center'>
                        <span className='pr-2'> <IconBookmarksFilled width={48} height={48} color='white' /></span>
                        <span className="font-semibold text-[30px]">
                            <Link to="/">ApuntaDos</Link>
                        </span>
                    </div>
                    <div >
                        <nav >
                            <ul className="md:flex md:items-center justify-center">
                                <li >
                                    <Link to="/Soporte"><span className="text-[20px]">Soporte</span></Link>
                                </li>
                                <li className="pl-[33px]">
                                    <Link to="/Nosotros"><span className="text-[20px]">Nosotros</span></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >
                <div>
                    <Link to="/LoginPage">
                        <button>
                            <div className="flex justify-center items-center bg-[#5a7834] w-[64px] h-[64px] rounded-[20px] ml-5">
                                <IconUserFilled width={48} height={48} color='white' />
                            </div>
                        </button>
                    </Link>
                </div>
                <div>
                    <button>
                        <div className="flex justify-center items-center bg-[#5a7834] w-[64px] h-[64px] rounded-[20px] ml-5">
                            <IconSunFilled width={48} height={48} color='white' />
                        </div>
                    </button>
                </div>
            </div >
        </>
    )
}
export default Nav
