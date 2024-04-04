/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { Button, Checkbox, Label, TextInput, Alert } from "flowbite-react";
import { useUserContext } from "../../middleware/LoginSlice";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const { dispatch } = useUserContext();
  const [err, setErr] = useState();
  const [passAlert, setPassAlert] = useState({
    pesan: "",
    warna: "",
  });
  const [showAlert, setShowAlert] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setData((body) => ({
      ...body,
      [name]: value,
    }));
  }
  const passHandle = (e) => {
    const hasUpperCase = /[A-Z]/.test(data.password);
    const hasLowerCase = /[a-z]/.test(data.password);

    const validate =
      hasUpperCase && hasLowerCase
        ? setPassAlert({
            pesan: "Kata sandi mengandung huruf besar & kecil",
            warna: "green",
          })
        : setPassAlert({
            pesan: "Kata sandi harus mengandung huruf besar & kecil",
            warna: "red",
          });
  };
  const navigate = useNavigate();
  const LoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const log = await axios
        .post(
          "/api/login",
          {
            email: data.email,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => res.data)
        .catch((err) => {
          setErr(err.res.data.Message);
        });
      if (log) {
        dispatch({ type: "LOGIN", payload: log });
        navigate("/");
      }
    } catch (error) {
      if (error) {
        setErr(error.response?.data?.Message);
      }
    }
  };
  return (
    <>
      <div className="">
        {showAlert && (
          <Alert type="success" onClose={() => setShowAlert(false)}>
            {err}
          </Alert>
        )}
        <form
          className="mx-auto w-full flex max-w-md flex-col gap-6"
          onSubmit={(e) => LoginSubmit(e)}
        >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                className="text-stone-600"
                value="email"
              />
            </div>
            <TextInput
              id="email1"
              value={data.email}
              onChange={(e) => handleInput(e)}
              type="email"
              name="email"
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
            <TextInput
              id="password1"
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleInput(e), passHandle(e);
              }}
              required
            />
            {passAlert && (
              <p style={{ color: passAlert.warna }}>{passAlert.pesan}</p>
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 border-primary-800">
              <Checkbox
                id="remember"
                className="text-primary-600 border-primary-800"
              />
              <Label htmlFor="remember" className="text-stone-600">
                Ingat Saya
              </Label>
            </div>
            <div className="flex gap-2 text-sm text-stone-600">
              <p>Lupa kata sandi? </p>
              <Link to="/forgot-password" className="underline text-blue-700">
                Klik disini
              </Link>
            </div>
          </div>
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
            Masuk
          </Button>
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
