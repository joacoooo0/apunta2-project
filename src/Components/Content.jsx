const Content = () => {
    return (
        <>
            <div id="" className="flex flex-grow font-gabarito pl-24 pt-28 pb-36">
                <div className="flex flex-col justify-center items-start">
                    <div className="w-[800px]">
                        <h1 className=" font-extrabold text-[#19240f] text-[80px] text-pretty leading-tight dark:text-[#a6c977]">
                            Consigue los mejores
                            apuntes universitarios
                        </h1>
                    </div>
                    <div className="w-[800px]">
                        <h4 className=" font-normal text-[#19240f] text-[40px] text-pretty leading-snug dark:text-white">
                            Compra apuntes de diferentes personas y universidades, y vende y gana una comisión por cada venta.
                        </h4>
                    </div>
                    <div className="mt-4 flex justify-center items-center bg-[#5a7e32] w-[200px] h-[64px] rounded-[20px] hover:shadow-lg">
                        <button className="text-white text-[25px] "> Ver Apuntes</button>
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