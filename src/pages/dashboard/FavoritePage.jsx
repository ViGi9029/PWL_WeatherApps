import { DeleteIcon } from "@chakra-ui/icons";
import DHeader from "../../components/dashboard/DHeader";

const FavoritePage = () => {
    const favoriteList = [
        {
            id: 1,
            city: "Yogyakarta",
            country: "Indonesia",
        },
        {
            id: 2,
            city: "Jakarta",
            country: "Indonesia",
        },
        {
            id: 3,
            city: "Bandung",
            country: "Indonesia",
        },
        {
            id: 4,
            city: "Surabaya",
            country: "Indonesia",
        },
    ];

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
                            {favoriteList.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center px-4 py-3 border-b border-b-color-primary"
                                >
                                    <h1>
                                        {item.city}, {item.country}
                                    </h1>
                                    <button className="text-red-500 p-1">
                                        <DeleteIcon />
                                    </button>
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
