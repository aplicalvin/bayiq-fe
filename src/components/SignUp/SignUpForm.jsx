// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Label, TextInput } from "flowbite-react";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleTermsAgreementChange = () => {
        setTermsAgreed(!termsAgreed);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && termsAgreed) {
            // Implement your sign-up logic here
            console.log("Sign-up successful!");
        } else {
            setPasswordsMatch(password === confirmPassword);
            if (!termsAgreed) {
                alert("Anda harus menyetujui aturan dan kebijakan privasi.");
            }
        }
    };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto w-full flex max-w-md flex-col gap-2"
                >
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="username"
                                className="text-stone-600"
                                value="Username"
                            />
                        </div>
                        <TextInput
                            id="username"
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                className="text-stone-600"
                                value="Email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="user@vidzi.my.id"
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="phoneNumber"
                                className="text-stone-600"
                                value="Nomor Telepon"
                            />
                        </div>
                        <TextInput
                            id="phoneNumber"
                            type="tel"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
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
                        <TextInput
                            id="password1"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="confirmPassword"
                                className="text-stone-600"
                                value="Konfirmasi Kata Sandi"
                            />
                        </div>
                        <TextInput
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        {!passwordsMatch && (
                            <p className="text-red-600 text-sm">
                                Kata sandi tidak cocok.
                            </p>
                        )}
                    </div>

                    <div className="flex items-center my-4 gap-2">
                        <Checkbox
                            id="termsAgreement"
                            checked={termsAgreed}
                            onChange={handleTermsAgreementChange}
                            className="text-primary-600 border-primary-800"
                        />
                        <Label
                            htmlFor="termsAgreement"
                            className="text-stone-600 text-xs lg:text-sm"
                        >
                            Saya menyetujui{" "}
                        </Label>
                        <Link
                            to="/privacy-policy"
                            className="underline text-blue-700 text-xs lg:text-sm"
                        >
                            Aturan dan Kebijakan Privasi
                        </Link>
                    </div>
                    <Link
                        type="submit"
                        to="/login"
                        className="bg-primary-600 hover:bg-primary-700 py-2 text-center rounded-lg text-white border-2 border-primary-700"
                    >
                        Buat Akun
                    </Link>
                    <div className="flex gap-2 w-fit mx-auto text-stone-800 text-sm">
                        <p>Sudah punya akun?</p>
                        <Link to="/login" className="underline text-blue-700">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUpForm;
