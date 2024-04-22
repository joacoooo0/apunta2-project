const Content = () => {
    return (
        <>
            <div id="" className="flex flex-grow font-gabarito pl-24 py-36">
                <div className="flex flex-col justify-center items-start">
                    <div className="w-[800px]">
                        <h1 className=" font-bold text-white text-[80px] text-pretty leading-tight">
                            Consigue los mejores
                            apuntes universitarios
                        </h1>
                    </div>
                    <div className="w-[800px]">
                        <h4 className=" font-normal text-white text-[40px] text-pretty leading-snug">
                            Compra apuntes de diferentes personas y universidades, y vende y gana una comisión por cada venta.
                        </h4>
                    </div>
                    <div className="mt-4 flex justify-center items-center bg-[#709441] w-[200px] h-[64px] rounded-[20px]">
                        <button className="text-white text-[25px]"> Ver Apuntes</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pl-72">
                    <img className="w-[512px] h-[512px]" src="./public/gato-siames.png" alt="image-gato-siames" />
                </div>
            </div>
        </>

    )
}
export default Content