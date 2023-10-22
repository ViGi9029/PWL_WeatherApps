import Logo from "../assets/logo.png";
// Library ini membuat navigasi pada aplikasi web menjadi cepat dan SPA atau Single Page Application
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    // menerima props title dari parent component
    return (
        <header className="border-b-2 border-black  bg-color-primary">
            <div className="grid grid-cols-3 container mx-auto items-center">
                <Link to={"/"}>
                    <img src={Logo} alt="logo" />
                </Link>
                <h2 className="mx-auto font-medium text-4xl uppercase">
                    {title}
                </h2>
            </div>
        </header>
    );
};

export default Header;
