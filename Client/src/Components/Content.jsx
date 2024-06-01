import Gato from '../assets/img/gato-siames.png'

import { IconShieldCheck } from '@tabler/icons-react';
import { IconMilitaryAward } from '@tabler/icons-react';
import Github from '../assets/img/github';



const Content = () => {
    return (
        <div className="overflow-x-hidden font-gabarito px-12 py-20 md:px-24 md:py-36 bg-[#cfe2b4] dark:bg-[#1a1a1a]">
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

                </div>

                <div className="invisible lg:visible flex justify-center items-center w-[0px] h-[0px] md:h-[545px] lg:w-full">
                    <img className="max-w-full h-auto" src={Gato} alt="image-gato-siames" />
                </div>
            </div>
        </div >
    );
}

export default Content;