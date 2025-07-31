import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const Signup = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                    .then((userData) => {
                        // setUser should be removed or defined
                        console.log("User data after signup:", userData);
                        return userData
                    })
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            console.log("Redirecting to login...");
            navigate('/login');
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{ backgroundImage: "url('/signup.jpg')" }} // replace with your actual path
        >
            <div className="w-full max-w-md bg-white/30 backdrop-blur-sm shadow-lg rounded-xl p-10 border border-white/20">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold text-black">Sign up to create account</h2>
                <p className="mt-2 text-center text-black text-sm">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-black underline hover:font-bold "
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-200 mt-6 text-center">{error}</p>}

                <form onSubmit={handleSubmit(Signup)} className="mt-6">
                    <div className='space-y-5'>
                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email:"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password:"
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full h-10 hover:bg-red-600 duration-300">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup