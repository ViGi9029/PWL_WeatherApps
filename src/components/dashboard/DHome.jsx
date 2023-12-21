import DHeader from "./DHeader";
import { axiosInstance } from "../../utils/axios.js";
import DForecast from "./DForecast";
import { useEffect, useState } from "react";
import DForecastDaysList from "./DForecastDaysList";
import { Image } from "@chakra-ui/react";

const DHome = () => {
    const [query, setQuery] = useState("Yogyakarta");
    const [currentForecast, setCurrentForecast] = useState([]);
    const [forecastDays, setForecastDays] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    const favHome = JSON.parse(localStorage.getItem("favHome")) || [];

    console.log("favHome", favHome);

    const forecast = async (query) => {
        try {
            const response = await axiosInstance.get("/forecast.json", {
                params: {
                    q: query,
                    days: 7,
                },
            });

            const { forecast, ...others } = response.data;
            setCurrentForecast(others);
            setForecastDays(forecast.forecastday);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        forecast(query);
    }, [query]);

    const handleClickFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const data = {
            location: currentForecast.location,
            current: currentForecast.current,
        };

        if (
            !favorites.some((item) => item.location.name === data.location.name)
        ) {
            favorites.push(data);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Berhasilt ditambahkan");
        } else {
            alert("Sudah ada di favorit");
        }
    };

    return (
        <>
            <DHeader setQuery={setQuery} />
            <div className="container h-screen w-full mt-[-141px] mx-auto">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    <div className="relative mt-48">
                        <span
                            onClick={handleClickFavorite}
                            className={`absolute -right-60 cursor-pointer text-white drop-shadow hover:text-red-500`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                dataslot="icon"
                                className="w-10"
                            >
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </span>
                        <DForecast forecast={currentForecast} />
                    </div>
                    <div>
                        <DForecastDaysList data={forecastDays} />
                    </div>
                    {favHome.length > 0 && (
                        <>
                            <span className="border-b-2 w-1/2 border-color-primary" />
                            <div>
                                <h1 className="text-3xl text-center font-bold mb-5">
                                    Favorit
                                </h1>
                                <div className="w-full">
                                    <div className="max-w-6xl container">
                                        <div className="flex justify-center items-center bg-color-accent rounded-md shadow text-[#333]">
                                            {favHome?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center text-center py-4 px-5 border-r border-r-color-secondary"
                                                >
                                                    <h2 className="font-semibold text-lg">
                                                        {item.location.name}
                                                    </h2>
                                                    <Image
                                                        src={
                                                            item.current
                                                                ?.condition.icon
                                                        }
                                                    />
                                                    <strong>96°C</strong>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default DHome;
