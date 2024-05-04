import Gato from '../assets/img/gato-siames.png'

import { IconShieldCheck } from '@tabler/icons-react';
import { IconMilitaryAward } from '@tabler/icons-react';
import Github from '../assets/img/github';



const Content = () => {
    return (
        <div className="font-gabarito px-12 py-20 md:px-24 md:py-36">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className='flex flex-col justify-center w-full'>
                    <div className='sm:flex block'>
                        <span className='flex justify-start items-center w-[180px] dark:text-white text-[#19240f] mb-3'>
                            <IconShieldCheck stroke={2} />
                            <p className='ml-2'>Pagos protegidos</p>
                        </span>
                        <span className='flex justify-start items-center w-[200px] dark:text-white text-[#19240f] mb-3'>
                            <IconMilitaryAward stroke={2} />
                            <p className='ml-2'>Garantía de satisfacción</p>
                        </span>
                    </div>

                    <h1 className="font-extrabold text-[#19240f] text-[40px] sm:text-[80px] text-pretty leading-tight dark:text-[#a6c977]">
                        Consigue los mejores apuntes universitarios
                    </h1>
                    <h4 className="font-normal text-[#19240f] text-[20px] sm:text-[40px] text-pretty leading-snug dark:text-white">
                        Compra apuntes de diferentes personas y universidades, y vende y gana una comisión por cada venta.
                    </h4>
                    <div className='md:flex block'>
                        <a target='_blank' href='https://github.com/Panitou/apunta2-project' className="mt-4 flex justify-center items-center bg-[#759f43] w-[170px] h-[50px] sm:w-[170px] sm:h-[54px] rounded-[15px] sm:rounded-[15px] hover:shadow-lg dark:shadow-[#a6c977]">
                            <Github className="mr-2 w-5 h-5" color={'white'} />
                            <button className="text-white font-semibold text-[17px] sm:text-[20px]">GitHub</button>
                        </a>
                    </div>
                </div>

                <div className="invisible lg:visible flex justify-center items-center w-[0px] h-[0px] md:h-[545px] lg:w-full">
                    <img className="max-w-full h-auto" src={Gato} alt="image-gato-siames" />
                </div>
            </div>
        </div >
    );
}

export default Content;