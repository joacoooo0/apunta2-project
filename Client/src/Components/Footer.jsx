import { IconBookmarksFilled } from '@tabler/icons-react';
import Sonriente from '../assets/img/sonriente.png'

const Footer = () => {
    return (
        <>
            <div className="bg-[#19240f] text-[#708770] font-gabarito justify-center ">
                <div className="lg:flex block py-10 items-center justify-center">
                    <div className='sm:flex block lg:justify-center justify-start lg:pl-[0px] pl-16'>
                        <div className=" pr-20">
                            <ul>
                                <h3 className="text-[13px] mb-4">TÉRMINOS Y POLÍTICAS</h3>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Sobre nosotros</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Testimonios</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">FAQ</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Actualizaciones</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className='sm:pt-[0px] pt-6'>
                            <ul>
                                <h3 className="text-[13px] mb-4">CONTACTO</h3>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Blog</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Documentación</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Repositorios</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Soporte</a>
                                </li>
                                <li className="mb-2 text-[19px]">
                                    <a href="">Guias</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="xl:pl-52 pl-16 lg:pr-[0px] pr-16 flex lg:justify-center justify-start items-center mt-10">
                        <div className='block xl:mr-5'>
                            <div className="flex mb-7 items-center">
                                <span className='pr-3'> <IconBookmarksFilled width={48} height={48} color='#708770' /></span>
                                <h2 className="lg:text-[34px] text-[25px]">ApuntaDos</h2>
                            </div>
                            <div className='lg:w-[500px] w-auto'>
                                <p className='text-pretty lg:text-[15px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                        <div className='invisible xl:visible xl:h-auto xl:w-auto w-[0px] h-[0px]'>
                            <img className='w-[200px]' src={Sonriente} alt="sonriente" />
                        </div>
                    </div>


                </div>
                <div className="block divide-y lg:justify-between w-auto divide-[#708770] pt-16 pb-32 pl-16 pr-16">
                    <div></div>
                    <div className='lg:flex block lg:justify-between items-center pt-10'>
                        <p className='flex justify-center'>
                            <span>Hecho en Peru ❤️‍🩹</span>
                        </p>
                        <p className='flex justify-center lg:pt-[0px] pt-10'>
                            <span className=''>@Joaquin</span>
                            <span className='pl-3'>@Angie</span>
                            <span className='pl-3'>@Alexander</span>
                            <span className='pl-3'>@Brayan</span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Footer