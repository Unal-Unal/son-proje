// src/pages/SignUpPage.js

import React, { useEffect } from 'react'; // useState sildik (roles için gerek kalmadı)
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- REDUX IMPORTLARI ---
import { useDispatch, useSelector } from 'react-redux';
import { fetchRolesIfNeeded } from '../store/actions/clientActions';
// ------------------------

// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const SignUpPage = () => {
    // Redux Hooks
    const dispatch = useDispatch();
    // Rolleri Store'dan çekiyoruz
    const roles = useSelector((state) => state.client.roles);

    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            role_id: ''
        }
    });
    
    const navigate = useNavigate();
    const selectedRole = watch("role_id");

    // 1. Rolleri Redux Thunk ile Çekme
    useEffect(() => {
        // Bu fonksiyon store'da roller varsa istek atmaz, yoksa atar.
        dispatch(fetchRolesIfNeeded());
    }, [dispatch]);

    // 2. Roller Yüklendiğinde Varsayılan Değeri (Customer) Ayarlama
    useEffect(() => {
        if (roles && roles.length > 0) {
            const customerRole = roles.find(role => role.code === 'customer');
            if (customerRole) {
                // Sadece değer boşsa set et ki kullanıcı seçimini ezmeyelim
                // veya form ilk yüklendiğinde çalışsın
                 setValue('role_id', String(customerRole.id));
            }
        }
    }, [roles, setValue]);

    // 3. Form Submit İşlemi
    const onSubmit = (data) => {
        let formattedData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
        };

        const storeRole = roles.find(r => r.code === 'store');
        
        if (storeRole && data.role_id === String(storeRole.id)) {
            formattedData.store = {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.store_tax_no,
                bank_account: data.store_bank_account
            };
        }

        axiosInstance.post('/signup', formattedData)
            .then(res => {
                toast.success("Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekir!");
                setTimeout(() => {
                    navigate(-1); 
                }, 2000);
            })
            .catch(err => {
                console.error("Signup Error:", err);
                toast.error("Kayıt başarısız: " + (err.response?.data?.message || "Lütfen bilgileri kontrol edin."));
            });
    };

    return (
        <>
            <Header />
            <ToastContainer />

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
                
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-800">
                        Sign Up
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Join our marketplace today
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            
                            {/* --- NAME --- */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1">
                                    <input 
                                        type="text" 
                                        {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 characters" } })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                            </div>

                            {/* --- EMAIL --- */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                <div className="mt-1">
                                    <input 
                                        type="email" 
                                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* --- PASSWORD --- */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <div className="mt-1">
                                    <input 
                                        type="password" 
                                        {...register("password", { 
                                            required: "Password is required", 
                                            minLength: { value: 8, message: "Min 8 characters" },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                                                message: "Must define numbers, lower, upper and special chars"
                                            }
                                        })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                                </div>
                            </div>

                            {/* --- CONFIRM PASSWORD --- */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <div className="mt-1">
                                    <input 
                                        type="password" 
                                        {...register("confirmPassword", { 
                                            required: "Please confirm password",
                                            validate: (val) => {
                                                if (watch('password') != val) {
                                                    return "Your passwords do no match";
                                                }
                                            }
                                        })}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                                </div>
                            </div>

                            {/* --- ROLE SELECTION --- */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <div className="mt-1">
                                    <select
                                        {...register("role_id", { required: true })}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                    >
                                        {/* Roles boşsa Loading yazısı, doluysa map */}
                                        {roles.length === 0 ? (
                                            <option>Loading roles...</option>
                                        ) : (
                                            roles.map(role => (
                                                <option key={role.id} value={role.id}>{role.name}</option>
                                            ))
                                        )}
                                    </select>
                                </div>
                            </div>

                            {/* --- STORE SPECIFIC FIELDS --- */}
                            {roles.find(r => r.id == selectedRole)?.code === 'store' && (
                                <div className="space-y-6 border-t border-gray-200 pt-6 mt-6 animate-fade-in">
                                    <h4 className="text-lg font-bold text-slate-800">Store Details</h4>
                                    
                                    {/* Store Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Store Name</label>
                                        <input 
                                            type="text" 
                                            {...register("store_name", { required: "Store Name is required", minLength: { value: 3, message: "Min 3 chars" } })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        />
                                        {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                                    </div>

                                    {/* Store Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                                        <input 
                                            type="text" 
                                            placeholder="+905..."
                                            {...register("store_phone", { 
                                                required: "Store Phone is required",
                                                pattern: {
                                                    value: /^(\+90|0)?5\d{9}$/, 
                                                    message: "Invalid TR phone number"
                                                }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        />
                                        {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                                    </div>

                                    {/* Store Tax ID */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                                        <input 
                                            type="text" 
                                            placeholder="T1234V123456"
                                            {...register("store_tax_no", { 
                                                required: "Tax ID is required",
                                                pattern: {
                                                    value: /^T\d{4}V\d{6}$/, 
                                                    message: "Must match pattern TXXXXVXXXXXX"
                                                }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        />
                                        {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                                    </div>

                                    {/* Store IBAN */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Store Bank Account (IBAN)</label>
                                        <input 
                                            type="text" 
                                            placeholder="TR..."
                                            {...register("store_bank_account", { 
                                                required: "IBAN is required",
                                                pattern: {
                                                    value: /^TR\d{24}$/,
                                                    message: "Invalid TR IBAN format (TR + 24 digits)"
                                                }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                        />
                                        {errors.store_bank_account && <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>}
                                    </div>
                                </div>
                            )}


                            {/* --- SUBMIT BUTTON --- */}
                            <div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : null}
                                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default SignUpPage;