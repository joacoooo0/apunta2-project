import Estrella from '../assets/img/estrella.png'

const Nosotros = () => {
    return (
        <>
            <div className="text-[#272727] font-gabarito py-24">
                <div className="sm:px-24 px-[26px]">
                    <div className=" bg-[#cfe2b4] w-full h-full rounded-3xl text-center">
                        <div className="px-7 py-7">
                            <h2 className='sm:text-[20px] text-[13px]'>UN POCO SOBRE NOSOTROS</h2>
                            <h1 id="Nosotros" className="sm:text-[60px] text-[45px] font-bold">Nosotros</h1>
                            <p className="leading-normal sm:text-[16px] text-[13px]" >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:flex px-60 pt-40">
                    <div className="">
                        <div className="mr-10 bg-[#cfe2b4] px-7 py-7 rounded-3xl">
                            <h2>UN POCO SOBRE EL PROYECTO</h2>
                            <h1 className="text-[60px] font-bold">¿Cómo surgió ApuntaDos?</h1>
                            <p className="leading-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            <p className="leading-normal">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        </div>
                    </div>
                    <img className="w-[600px]" src={Estrella} alt="estrella" />
                </div>
            </div>

        </>
    )
}
export default Nosotros