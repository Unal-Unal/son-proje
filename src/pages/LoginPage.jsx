import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../store/actions/clientActions'; // Thunk importu
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Yönlendirme Mantığı: Varsa önceki sayfa, yoksa ana sayfa
    // location.state?.from, React Router'da korumalı rotalardan gelirken set edilir.
    const from = location.state?.pathname || "/";

    const onSubmit = (data) => {
        const credentials = {
            email: data.email,
            password: data.password
        };

        // Thunk Action'ı çağırıyoruz
        // İkinci parametre: "rememberMe" (checkbox değeri)
        dispatch(loginUser(credentials, data.rememberMe))
            .then(() => {
                toast.success("Giriş başarılı! Yönlendiriliyorsunuz...");
                // Biraz bekleyip yönlendir (UX için)
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500);
            })
            .catch((err) => {
                console.error("Login Error:", err);
                // Kullanıcı sayfada kalır ve hata mesajı görür
                toast.error("Giriş başarısız: " + (err.response?.data?.message || "E-posta veya şifre hatalı."));
            });
    };

    return (
        <>
            <Header />
            <ToastContainer />
            
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
                
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-800">
                        Log In
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Welcome back to our marketplace
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            
                            {/* --- EMAIL --- */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { 
                                            required: "Email is required", 
                                            // Sadece email validasyonu istendi
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
                                        })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* --- PASSWORD --- */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        type="password"
                                        {...register("password", { required: "Password is required" })} 
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                                </div>
                            </div>

                            {/* --- REMEMBER ME --- */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        {...register("rememberMe")}
                                        className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-sky-600 hover:text-sky-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            {/* --- SUBMIT BUTTON --- */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 transition-colors"
                                >
                                    {isSubmitting ? 'Logging in...' : 'Log In'}
                                </button>
                            </div>
                        </form>

                        {/* Test Kullanıcıları Bilgisi (Geliştirme aşaması için) */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Test Accounts (Pass: 123456)
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2 text-xs text-center text-gray-400">
                                <p>customer@commerce.com</p>
                                <p>store@commerce.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;