

function EmailConfirm() {

    return (
        <>
            <div className="overflow-x-hidden flex justify-center items-center w-screen h-screen bg-[#759f43] text-[#19240f] font-gabarito">
                <a href="/">
                    <button type="button" className="my-5 mx-5 top-0 left-0 fixed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-14 h-14 flex items-center justify-center dark:bg-[#a6c977]">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                        <span className="sr-only">Icon description</span>
                    </button>
                </a>
                <div className="flex flex-col justify-center md:w-[500px] w-[300px] h-[400px] bg-[#cfe2b4] rounded-[20px] md:px-20 px-8 py-20">

                    <div className='block items-center justify-center text-pretty mb-3'>
                        <h3 className='font-semibold text-[20px]'>Confirmación de correo</h3>
                        <p className='font-normal'>Ingresa tu correo electronico con el que te registraste para poder verificarlo y puedas cambiar tu contraseña</p>
                    </div>

                    <input
                        type="email"
                        autoComplete='current-email'
                        className=" bg-gray-50 border border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Correo electronico" />

                    <button type="submit" className=" mt-3 w-full text-white bg-[#759f43] hover:bg-[#6d943f] focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Verificar correo
                    </button>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-3 bg-[#19240f] border-0 dark:bg-gray-700" />
                        <span className="text-[13px] px-3 font-medium text-gray-900 dark:text-white dark:bg-gray-900">O</span>
                        <hr className="w-full h-px my-3 bg-[#19240f] border-0 dark:bg-gray-700" />
                    </div>
                    <div className='block items-center justify-center text-pretty'>
                        <div className='flex items-center'>
                            <p className='text-[15px]'>¿Ya tienes cuenta?</p>
                            <a href="/login">
                                <button className='text-left font-bold ml-2 text-[15px]'>
                                    Login
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmailConfirm