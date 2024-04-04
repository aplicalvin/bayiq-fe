import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import axios from "axios";

function SignUpForm() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((body) => ({
      ...body,
      [name]: value,
    }));
  };
  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleTermsAgreementChange = () => {
    setTermsAgreed(!termsAgreed);
  };
  function validateUpperCaseLowerCase(str) {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    const hasUpperCase = upperCaseRegex.test(str);
    const hasLowerCase = lowerCaseRegex.test(str);

    return hasUpperCase && hasLowerCase;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        data.password === confirmPassword &&
        termsAgreed &&
        validateUpperCaseLowerCase(data.password)
      ) {
        axios
          .post("api/user", {
            username: data.username,
            email: data.email,
            password: data.password,
            nomor_telepon: data.phoneNumber,
          })
          .then(() => navigate("/login"))
          .catch((error) => console.error(error));
        // console.log("Sign-up successful!");
      } else {
        setPasswordsMatch(data.password === confirmPassword);
        if (!validateUpperCaseLowerCase(data.password)) {
          alert("password harus ada huruf besar dan kecil");
        }
        if (!termsAgreed) {
          alert("Anda harus menyetujui aturan dan kebijakan privasi.");
        }
      }
    } catch (error) {
      console.log(error);
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
              name="username"
              value={data.username}
              onChange={(e) => handleChange(e)}
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
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
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
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) => handleChange(e)}
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
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleConfirmPass(e)}
              required
            />
            {!passwordsMatch && (
              <p className="text-red-600 text-sm">Kata sandi tidak cocok.</p>
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
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Buat Akun
          </Button>
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
