import Gato from '../assets/img/gato-siames.png'

const Content = () => {
    return (
        <div className=" font-gabarito px-24 pt-28 pb-36 justify-between">
            <div className="inline-flex justify-between items-start w-full">
                <div className='w-[800px]'>
                    <h1 className="font-extrabold text-[#19240f] text-[80px] text-pretty leading-tight dark:text-[#a6c977]">
                        Consigue los mejores apuntes universitarios
                    </h1>
                    <h4 className="font-normal text-[#19240f] text-[40px] text-pretty leading-snug dark:text-white">
                        Compra apuntes de diferentes personas y universidades, y vende y gana una comisión por cada venta.
                    </h4>
                    <div className="mt-4 flex justify-center items-center bg-[#759f43] w-[200px] h-[64px] rounded-[20px] hover:shadow-lg dark:shadow-[#a6c977]">
                        <button className="text-white font-semibold text-[25px]">Ver Apuntes</button>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <img className="w-[512px] h-[512px]" src={Gato} alt="image-gato-siames" />
                </div>
            </div>

        </div>
    );
}
export default Content