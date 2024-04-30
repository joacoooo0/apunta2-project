import Gato from '../assets/img/gato-siames.png'

const LoginPage = () => {
    return (
        <>

            <div className="overflow-x-hidden flex justify-center items-center w-screen h-screen bg-[#759f43] text-[#19240f] font-gabarito">
                <a href="/">
                    <button type="button" className="my-5 mx-5 top-0 left-0 fixed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-14 h-14 flex items-center justify-center dark:bg-[#a6c977]">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                        <span class="sr-only">Icon description</span>
                    </button>
                </a>
                <div className="flex-col items-center md:w-[500px] w-[300px] h-[700px] bg-[#cfe2b4] rounded-[20px] md:px-20 px-8 py-20">
                    <div className='flex md:justify-center justify-start'>
                        <img className='md:w-[150px] md:h-[150px] w-[80px] h-[80px]' src={Gato} alt="gato-siames-login" />
                    </div>
                    <div className='block items-center justify-center text-pretty'>
                        <h3 className='font-semibold text-[20px]'>Login</h3>
                        <p className='font-normal'>Inicia sesión para poder acceder a los diversos apuntes y resúmenes que tenemos para ti</p>
                    </div>
                    <div class="mb-3 mt-6">
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Correo electronico" required />
                    </div>
                    <div class="">
                        <input type="password" id="email" class="bg-gray-50 border border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contraseña" required />
                    </div>
                    <div className='mt-3'>
                        <button type="button" class="w-full text-white bg-[#759f43] hover:bg-[#6d943f] focus:ring-4 focus:ring-blue-300 font-medium rounded-[15px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ingresar</button>
                    </div>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-full h-px my-3 bg-[#19240f] border-0 dark:bg-gray-700" />
                        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-[#cfe2b4] left-1/2 dark:text-white dark:bg-gray-900">o</span>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <button type="button" className="flex justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-1/2">
                            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Google
                        </button>
                        <button type="button" className="flex justify-center items-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2 w-1/2">
                            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                            </svg>
                            <p>Github</p>
                        </button>
                    </div>
                    <div className='block items-center justify-center text-pretty'>
                        <button className='font-bold text-[15px]'>
                            ¿Olvidaste tu contraseña?
                        </button>
                        <div className='flex items-center'>
                            <p className='text-[15px]'>¿Aún no tienes cuenta?</p>
                            <a href="/RegisterPage">
                                <button className='text-left font-bold ml-2 text-[15px]'>
                                    Regístrate
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage