import Friend from '../assets/img/mejor-amigo.png'

const Soporte = () => {
    return (
        <div id="Soporte" className=" flex justify-center items-center sm:px-24 px-[26px] text-[#272727] font-gabarito py-12">
            <div className="lg:mr-10 bg-[#cfe2b4] h-auto max-w-full px-7 py-7 rounded-3xl">
                <h1 className="sm:text-left text-center sm:text-[60px] text-[50px] font-bold">24 Horas de soporte</h1>
                <p className="leading-normal text-pretty text-justify sm:text-[16px] text-[13px]">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                <div className="mt-4 flex justify-center items-center bg-[#759f43] w-[200px] h-[64px] rounded-[20px]">
                    <button className="text-[white] text-[25px]">Contacto</button>
                </div>
            </div>
            <div className='flex justify-center items-center invisible lg:visible lg:w-[3000px] lg:h-auto w-[0px] h-[0px]'>
                <img className="" src={Friend} alt="estrella" />
            </div>
        </div>
    )
}
export default Soporte