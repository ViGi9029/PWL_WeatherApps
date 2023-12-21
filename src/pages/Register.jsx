import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // tampilkan data yang diinputkan ke console
        const { name, email, username, password } = formik.values;
        const db = JSON.parse(localStorage.getItem("db"));

        if (db === null) {
            localStorage.setItem(
                "db",
                JSON.stringify([
                    {
                        name,
                        email,
                        username,
                        password,
                    },
                ])
            );
            navigate("/login");
        } else {
            if (db.some((item) => item.username === username)) {
                alert("Username sudah ada");
            } else if (db.some((item) => item.email === email)) {
                alert("Email sudah ada");
            } else {
                db.push({
                    name,
                    email,
                    username,
                    password,
                });
                localStorage.setItem("db", JSON.stringify(db));
                navigate("/login");
            }

            return;
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            username: "",
            password: "",
            confPassword: "",
        },
        onSubmit: handleRegister,
        validationSchema: yup.object().shape({
            name: yup.string().required("Nama is required").min(3),
            email: yup
                .string()
                .email("must be a valid email")
                .required("Email is required"),
            username: yup.string().required("Nama Pengguna is required").min(3),
            password: yup.string().min(8).required("Kata sandi is required"),
            confPassword: yup
                .string()
                .required("Konfirmasi kata sandi is required")
                .oneOf([yup.ref("password")], ["Your passwords do not match."]),
        }),
    });

    const handleForm = (e) => {
        const { target } = e;
        formik.setFieldValue(target.name, target.value);
    };

    return (
        <>
            <Header title="Register" />
            <div className="max-w-6xl mt-10 mx-auto">
                <div className="bg-color-accent mx-auto px-20 py-10 w-1/2 rounded-md">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="name" className="font-medium">
                                Nama
                            </label>
                            <div className="my-2">
                                <input
                                    onChange={handleForm}
                                    type="text"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="name"
                                    name="name"
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.name}
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <div className="my-2">
                                <input
                                    onChange={handleForm}
                                    type="email"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.email}
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="username" className="font-medium">
                                Nama Pengguna
                            </label>
                            <div className="my-2">
                                <input
                                    onChange={handleForm}
                                    type="text"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="username"
                                    name="username"
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
                                    onChange={handleForm}
                                    type="password"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="password"
                                    name="password"
                                    autoComplete="new-password"
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.password}
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="confPassword"
                                className="font-medium"
                            >
                                Konfirmasi Kata Sandi
                            </label>
                            <div className="my-2">
                                <input
                                    onChange={handleForm}
                                    type="password"
                                    className="w-full px-6 py-3 rounded-lg"
                                    id="confPassword"
                                    name="confPassword"
                                    autoComplete="new-password"
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {formik.errors.confPassword}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="my-2">
                                <button
                                    type="submit"
                                    className="px-4 py-1 text-lg bg-white  hover:bg-white/80 rounded-lg font-semibold"
                                >
                                    Daftar
                                </button>
                            </div>
                            <p className="font-medium">
                                Sudah punya akun?{" "}
                                <Link
                                    to="/login"
                                    className="font-bold hover:text-black/70"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
