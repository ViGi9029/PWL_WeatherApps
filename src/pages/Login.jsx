import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();

    const handleLogin = () => {
        const { username, password } = formik.values;
        const db = JSON.parse(localStorage.getItem("db"));

        if (
            db.find(
                (item) =>
                    item.username === username && item.password === password
            )
        ) {
            localStorage.setItem("username", username);
            alert("Login Berhasil");
            navigate("/dashboard");
        } else {
            setErrorMessage("username atau password salah");
        }
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: yup.object({
            username: yup.string().required("Username is required"),
            password: yup.string().required("Password is required"),
        }),
        onSubmit: handleLogin,
    });

    const handleForm = (e) => {
        const { target } = e;
        formik.setFieldValue(target.id, target.value);
    };

    useEffect(() => {
        if (localStorage.getItem("username")) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <>
            <Header title="Login" />
            <div className="max-w-6xl mt-10 mx-auto">
                <div className="bg-color-accent mx-auto p-10 w-1/2 rounded-md">
                    {errorMessage && (
                        <Alert
                            status="error"
                            variant="left-accent"
                            className="rounded mb-6"
                        >
                            <AlertIcon />
                            {errorMessage}
                        </Alert>
                    )}
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="username" className="font-medium">
                                Nama Pengguna
                            </label>
                            <div className="my-2">
                                <input
                                    type="text"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="username"
                                    onChange={handleForm}
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.username}
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="font-medium">
                                Kata Sandi
                            </label>
                            <div className="my-2">
                                <input
                                    type="password"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="password"
                                    onChange={handleForm}
                                    autoComplete="password"
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.password}
                                </p>
                            </div>
                        </div>
                        <div className="mb-5 flex flex-col justify-center items-center">
                            <div className="my-2">
                                <button
                                    type="submit"
                                    className="px-4 py-1 text-lg bg-white  hover:bg-white/80 rounded-lg font-semibold"
                                >
                                    Login
                                </button>
                            </div>
                            <p className="font-medium">
                                Belum punya akun?{" "}
                                <Link
                                    to="/register"
                                    className="font-bold hover:text-black/70"
                                >
                                    Daftar disini
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
