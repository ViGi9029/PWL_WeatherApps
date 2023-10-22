// mengimpor komponen yang dibutuhkan di page ini
import Header from "../components/Header";
import Home from "../components/Home";

const HomePage = () => {
    return (
        <>
            {/* merender komponen header/navbar dan mengirimkan props title
            kedalam komponen tersebut agar judul disetiap navbar jadi dinamis */}
            <Header title="Welcome" />
            {/* merender komponen home */}
            <Home />
        </>
    );
};

export default HomePage;
