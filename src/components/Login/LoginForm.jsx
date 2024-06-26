// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom
import { Checkbox, Label, TextInput } from "flowbite-react";

function LoginForm() {
    return (
        <>
            <div className="">
                <form className="mx-auto w-full flex max-w-md flex-col gap-6">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                className="text-stone-600"
                                value="email / username"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="user@vidzi.my.id"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                className="text-stone-600"
                                value="Kata Sandi"
                            />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 border-primary-800">
                            <Checkbox
                                id="remember"
                                className="text-primary-600 border-primary-800"
                            />
                            <Label
                                htmlFor="remember"
                                className="text-stone-600"
                            >
                                Ingat Saya
                            </Label>
                        </div>
                        <div className="flex gap-2 text-sm text-stone-600">
                            <p>Lupa kata sandi? </p>
                            <Link
                                to="/forgot-password"
                                className="underline text-blue-700"
                            >
                                Klik disini
                            </Link>
                        </div>
                    </div>
                    <Link
                        to="/app/"
                        className="bg-primary-600 hover:bg-primary-700 py-2 text-center rounded-lg text-white border-2 border-primary-700"
                    >
                        Masuk
                    </Link>
                    <div className="flex gap-2 w-fit mx-auto text-stone-800 text-md">
                        <p>Belum punya akun?</p>
                        <Link to="/signup" className="underline text-blue-700">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
