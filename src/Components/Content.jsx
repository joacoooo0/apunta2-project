const Content = () => {
    return (
        <>
            <div className="flex flex-grow w-[1684px] h-[600px] font-gabarito">
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
                    <div className="mt-4 flex justify-center items-center bg-[#5a7834] w-[200px] h-[64px] rounded-[20px]">
                        <button className="text-white text-[25px]"> Ver Apuntes</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pl-72">
                    <img className="w-[512px] h-[512px]" src="./public/gato-siames.png" alt="" />
                </div>
            </div>
        </>

    )
}
export default Content