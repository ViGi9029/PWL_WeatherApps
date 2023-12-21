import { DeleteIcon } from "@chakra-ui/icons";
import DHeader from "../../components/dashboard/DHeader";
import { useState } from "react";
import { useEffect } from "react";

const FavoritePage = () => {
    const [favoriteList, setFavoriteList] = useState([]);
    const [favoriteHome, setFavoriteHome] = useState([]);

    useEffect(() => {
        const favoriteList =
            JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoriteList(favoriteList);

        const favoriteHome = JSON.parse(localStorage.getItem("favHome")) || [];
        setFavoriteHome(favoriteHome);
    }, []);

    const handleClick = (name) => {
        if (confirm(`Yakin ingin menghapus ${name} dari favorit?`)) {
            const newFavoriteList = favoriteList.filter(
                (item) => item.location.name !== name
            );
            localStorage.setItem("favorites", JSON.stringify(newFavoriteList));
            setFavoriteList(newFavoriteList);
        }

        return;
    };

    const handleAddHome = (name) => {
        if (confirm(`Yakin ingin menambahkan ${name} ke home?`)) {
            const itemFavHome = favoriteList.find(
                (item) => item.location.name === name
            );
            const newFavoriteHome = [...favoriteHome, itemFavHome];

            localStorage.setItem("favHome", JSON.stringify(newFavoriteHome));
            alert("Berhasilt ditambahkan ke home");
        }

        return;
    };

    // console.log(favoriteList);

    return (
        <>
            <DHeader />
            <div className="w-full mt-[-101px]">
                <div className="container mt-[121px] mx-auto flex flex-col items-center">
                    <div className="w-1/3">
                        <h1 className="text-2xl font-semibold uppercase">
                            Favorit
                        </h1>
                        <div className="w-full bg-color-accent rounded mt-2 shadow">
                            {favoriteList.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center px-4 py-3 border-b border-b-color-primary"
                                >
                                    <h1>
                                        {item.location.name},{" "}
                                        {item.location.country}
                                    </h1>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() =>
                                                handleAddHome(
                                                    item.location.name
                                                )
                                            }
                                            className="text-green-500 text-3xl p-1"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleClick(item.location.name)
                                            }
                                            className="text-red-500 p-1"
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FavoritePage;
