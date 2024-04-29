import Gato from '../assets/img/gato-siames.png'

const Content = () => {
    return (
        <div className="font-gabarito px-12 py-20 md:px-24 md:py-36">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className='flex flex-col justify-center w-full'>
                    <h1 className="font-extrabold text-[#19240f] text-[40px] sm:text-[80px] text-pretty leading-tight dark:text-[#a6c977]">
                        Consigue los mejores apuntes universitarios
                    </h1>
                    <h4 className="font-normal text-[#19240f] text-[20px] sm:text-[40px] text-pretty leading-snug dark:text-white">
                        Compra apuntes de diferentes personas y universidades, y vende y gana una comisión por cada venta.
                    </h4>
                    <div className="mt-4 flex justify-center items-center bg-[#759f43] w-[150px] h-[50px]  sm:w-[250px] sm:h-[64px] rounded-[15px] sm:rounded-[20px] hover:shadow-lg
                     dark:shadow-[#a6c977]">
                        <button className="text-white font-semibold text-[17px] sm:text-[25px]">Ver Apuntes</button>
                    </div>
                </div>

                <div className="invisible lg:visible flex justify-center items-center w-[0px] h-[0px] md:h-[545px] lg:w-full">
                    <img className="max-w-full h-auto" src={Gato} alt="image-gato-siames" />
                </div>
            </div>
        </div>
    );
}

export default Content;