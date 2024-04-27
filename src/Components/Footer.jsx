import { IconBookmarksFilled } from '@tabler/icons-react';
import Sonriente from '../assets/img/sonriente.png'

const Footer = () => {
    return (
        <>
            <div className="flex h-80 bg-[#19240f] text-white font-gabarito justify-center">
                <div className="my-10 flex items-center">
                    <div className="pr-20">
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
                    <div>
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

                    <div className="ml-52 flex justify-center items-center">
                        <div className='block'>
                            <div className="md:flex mb-7">
                                <span className='pr-3'> <IconBookmarksFilled width={48} height={48} color='white' /></span>
                                <h2 className="text-[34px]">ApuntaDos</h2>
                            </div>
                            <div className='w-[500px]'>
                                <p className='text-pretty '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>
                        <div>
                            <img className='w-[200px]' src={Sonriente} alt="sonriente" />
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}
export default Footer