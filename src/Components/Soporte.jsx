import Friend from '../assets/img/mejor-amigo.png'

const Soporte = () => {
    return (
        <>
            <div className="text-[#272727] font-gabarito py-24">

                <div className="mt-10 md:flex px-72">
                    <div className="mr-10">
                        <div className="mr-10 bg-[#cfe2b4] px-7 py-7 rounded-3xl">

                            <h1 id="Soporte" className="text-[96px] font-bold leading-tight">24 Horas de soporte</h1>
                            <p className="leading-normal">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            <div className="mt-4 flex justify-center items-center bg-[#759f43] w-[200px] h-[64px] rounded-[20px]">
                                <button className="text-[white] text-[25px]">Contacto</button>
                            </div>
                        </div>

                    </div>
                    <img className="w-[600px]" src={Friend} alt="mejor-amigo" />

                </div>

            </div>
        </>
    )
}
export default Soporte