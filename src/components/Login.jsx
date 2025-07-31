import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import authservice from "../appwrite/auth"
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.getCurrentUser()
                dispatch(authLogin(userData))
                navigate("/")
            } else {
                setError("Login failed. Please try again.")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
            className="min-h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center px-6"
            style={{ backgroundImage: "url('/login.jpg')" }} 
        >
            <div className="w-full max-w-md  backdrop-blur-sm shadow-xl rounded-xl p-10 border border-gray-800 md:mr-24">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold text-white">Sign in to your account</h2>
                <p className="mt-2 text-center text-white/80 text-sm">
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-white underline hover:text-white/70"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-200 mt-6 text-center">{error}</p>}

                <form onSubmit={handleSubmit(login)} className="mt-6">
                    <div className="space-y-5">
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
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full h-10 rounded-full">
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login