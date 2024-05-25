import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/dashboard');
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });

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
                <div className="flex flex-col justify-center md:w-[500px] w-[300px] h-[750px] bg-[#cfe2b4] rounded-[20px] md:px-20 px-8 py-20">
                    <div className='block items-center justify-center text-center mb-3'>
                        <h3 className='font-semibold text-[40px]'>Register</h3>
                        <p className='font-normal'>Regístrate para poder acceder a los diversos apuntes y resúmenes que tenemos para ti</p>
                    </div>
                    <div>
                        {Array.isArray(registerErrors) && registerErrors.map((error, i) => (
                            <div className='bg-red-500 p-2 text-white' key={i}>
                                {error}
                            </div>
                        ))}
                        <form onSubmit={onSubmit}>
                            <div className='mb-3 mt-1'>
                                <input
                                    type="text"
                                    {...register("nombres", { required: true })}
                                    autoComplete="current-nombres"
                                    className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm  rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nombres"
                                />
                                {errors.nombres && <p className='text-red-500 text-[13px]'>Nombres es requerido</p>}
                            </div>

                            <div className='mb-3 mt-1'>
                                <input
                                    type="text"
                                    {...register("apellidos", { required: true })}
                                    autoComplete="current-apellidos"
                                    className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm  rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Apellidos"
                                />
                                {errors.apellidos && <p className='text-red-500 text-[13px]'>Apellidos es requerido</p>}
                            </div>

                            <div className="max-w-sm mx-auto mt-1 mb-3">
                                <select
                                    {...register("carreraUni", { required: true })}
                                    className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm mt-1 rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option selected="">Elige una carrera</option>
                                    <option value="Ingenieria de Sistemas">Ingenieria de Sistemas</option>
                                    <option value="Medicina">Medicina</option>
                                    <option value="Arquitectura">Arquitectura</option>
                                    <option value="Diseño Gráfico">Diseño Gráfico</option>
                                </select>
                                {errors.carrera && <p className='text-red-500 text-[13px]'>Carrera es requerida</p>}
                            </div>

                            <section className='sm:flex items-center justify-center sm:space-x-2'>
                                <div className="w-[150px] mt-1 mb-3">
                                    <select
                                        {...register("ciclo", { required: true })}
                                        className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Ciclo</option>
                                        <option value="I">1</option>
                                        <option value="II">2</option>
                                        <option value="III">3</option>
                                        <option value="IV">4</option>
                                        <option value="V">5</option>
                                        <option value="VI">6</option>
                                        <option value="VII">7</option>
                                        <option value="VIII">8</option>
                                        <option value="IX">9</option>
                                        <option value="X">10</option>
                                    </select>
                                    {errors.ciclo && <p className='text-red-500 text-[13px]'>Falta ciclo</p>}
                                </div>
                                <div className='mb-3 mt-1'>
                                    <input
                                        type="text"
                                        {...register("edad", { required: true })}
                                        autoComplete="current-edad"
                                        className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm  rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[200px] w-full"
                                        placeholder="Edad"
                                    />
                                    {errors.edad && <p className='text-red-500 text-[13px]'>Edad es requerido</p>}
                                </div>
                            </section>

                            <div className='mb-3 mt-1'>
                                <input
                                    type="text"
                                    {...register("username", { required: true })}
                                    autoComplete="current-username"
                                    className="bg-gray-50 border border-gray-300 text-[#19240f] text-sm  rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Username"
                                />
                                {errors.username && <p className='text-red-500 text-[13px]'>Username es requerido</p>}
                            </div>

                            <div className='mb-3 mt-1'>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    autoComplete="current-email"
                                    className="bg-gray-50 border  border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Correo Electrónico"
                                />
                                {errors.email && <p className='text-red-500 text-[13px]'>Correo Electrónico es requerido</p>}
                            </div>


                            <div className='mb-3 mt-1'>
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    autoComplete="current-password"
                                    className="bg-gray-50 border  border-gray-300 text-[#19240f] text-sm rounded-[15px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Contraseña"
                                />
                                {errors.password && <p className='text-red-500 text-[13px]'>Contraseña es requerida</p>}
                            </div>

                            <div>
                                <fieldset className='flex items-center justify-center space-x-6'>
                                    <div className="flex items-center">
                                        <input id="option-1" type="radio" {...register("mode", { required: true })} value="comprar" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-[#cfe2b4] dark:focus:ring-[#759f43] dark:focus:bg-[#759f43] dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Quiero Comprar
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input id="option-2" type="radio" {...register("mode", { required: true })} value="vender" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-[#cfe2b4] dark:focus:ring-[#759f43] dark:focus:bg-[#759f43] dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Quiero Vender
                                        </label>
                                    </div>
                                </fieldset>
                                {errors.intent && <p className='text-red-500 text-[13px]'>Selecciona una opción</p>}
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <button type="submit" className="text-white bg-[#759f43] hover:bg-[#a6c977] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#a6c977] dark:hover:bg-[#759f43] dark:focus:ring-[#759f43]">Register</button>
                            </div>
                        </form>
                    </div>


                    {/* <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-3 bg-[#19240f] border-0 dark:bg-gray-700" />
                        <span className="text-[13px] px-3 font-medium text-gray-900 dark:text-white dark:bg-gray-900">O</span>
                        <hr className="w-full h-px my-3 bg-[#19240f] border-0 dark:bg-gray-700" />
                    </div>
                    <div className='flex justify-between mt-3'>
                        <button type="button" className="justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 w-1/2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                            </svg>
                            Google
                        </button>
                        <button type="button" className="justify-center text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2 w-1/2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            Github
                        </button>
                    </div> */}
                    <div className='flex items-center justify-center mt-3'>
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
export default RegisterPage