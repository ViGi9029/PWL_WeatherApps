import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="max-w-md h-60 mx-auto flex justify-center">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <Link
                    to="/login"
                    className="w-full py-4 text-center bg-white rounded-lg font-semibold uppercase shadow-md hover:bg-gray-100"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="px-20 py-4 text-center bg-white rounded-lg font-semibold uppercase shadow-md hover:bg-gray-100"
                >
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Home;
