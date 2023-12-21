import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
const DHeader = ({ setQuery }) => {
    const [q, setQ] = useState("");
    const navigate = useNavigate();

    const username = localStorage.getItem("username");

    const handleLogout = () => {
        localStorage.removeItem("username");
        navigate("/");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(q);
    };

    return (
        <header className="border-b-2 border-black bg-color-primary">
            <div className="container mx-auto flex items-center justify-between">
                <Link to={"/dashboard"}>
                    <img src={Logo} alt="logo" />
                </Link>
                <form onSubmit={handleSearch} className="flex gap-x-4">
                    <input
                        type="text"
                        placeholder="Cari kota..."
                        className="w-80 px-4 py-2 rounded-md"
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-white rounded-full p-2 shadow-lg"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="#000000"
                            viewBox="0 0 256 256"
                        >
                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                    </button>
                </form>
                <div>
                    <Menu>
                        <MenuButton className="font-semibold hover:opacity-70">
                            <div className="flex gap-x-2 items-center">
                                <Avatar
                                    name="Andreas Sibua"
                                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                                    size="sm"
                                />
                                {username} <ChevronDownIcon />
                            </div>
                        </MenuButton>
                        <MenuList className="flex flex-col justify-center">
                            <Link
                                to="/profil"
                                className="px-3 py-1 hover:bg-slate-100"
                            >
                                Profil
                            </Link>
                            <Link
                                to="/favorit"
                                className="px-3 py-1 hover:bg-slate-100"
                            >
                                Favorit
                            </Link>
                            <button
                                className="px-3 py-1 hover:bg-slate-100 text-left"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default DHeader;
