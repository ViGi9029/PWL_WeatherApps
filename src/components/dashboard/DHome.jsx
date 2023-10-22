import DHeader from "./DHeader";
import DForecast from "./DForecast";
import DForecastDaysList from "./DForecastDaysList";
import { useState } from "react";

const DHome = () => {
    // membuat state yang akan digunakan sebagai kondisi untuk menampilkan informasi cuaca ketika tombol search ditekan
    const [showWeather, setShowWeather] = useState(false);

    // data dummy cuaca
    const forecast = {
        location: {
            name: "Yogyakarta",
            country: "Indonesia"
        },
        current: {
            temp_c: 32.8,
            feelslike_c: 38.4,
            wind_mph: 5.1,
            humidity: 43,
            pressure_in: 29.92,
            condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png"
            }
        },
        forecastDays: [
            {
                day: "Selasa",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 32
            },
            {
                day: "Rabu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 34
            },
            {
                day: "Kamis",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35
            },
            {
                day: "Jumat",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35
            },
            {
                day: "Sabtu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 35.1
            },
            {
                day: "Minggu",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                temp: 34.8
            },
        ]
    }

    // memisahkan data yang akan di kirimkan ke masing" komponen
    const { forecastDays, ...others } = forecast;

    return (
        <>
            {/* mengirimkan fungsi untuk meng set state showWeather ke komponen header dashboard */}
            <DHeader search={setShowWeather} />
            <div className="container h-screen w-full mt-[-141px] mx-auto">
                <div className="flex flex-col gap-y-10 justify-center items-center">
                    {/* membuat kondisi jika nilai dari show weather == true makan akan
                    merender komponen di bawah,jika tidak maka tidak ada yang akan dirender */}
                    {showWeather ? (
                        <>
                            <div className="mt-48">
                                {/* merender komponen ramalan cuaca hari ini */}
                                {/* forecast={others}, mengirimpkan data ke dalam komponen tersebut */}
                                <DForecast forecast={others} />
                            </div>
                            <div>
                                {/* merender komponen ramalan cuaca selama satu minggu kedepan */}
                                {/* forecastDays={forecastDays}, mengirimpkan data ke dalam komponen tersebut */}
                                <DForecastDaysList forecastDays={forecastDays} />
                            </div>
                            {/* <div>
                                <button type="button">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="70" 
                                        height="65" 
                                        viewBox="0 0 70 65" 
                                        fill="none"
                                    >
                                        
                                        <path d="M50.75 0C44.66 0 38.815 2.86921 35 7.40327C31.185 2.86921 25.34 0 19.25 0C8.47 0 0 8.57221 0 19.4823C0 32.8719 11.9 43.782 29.925 60.3597L35 65L40.075 60.3242C58.1 43.782 70 32.8719 70 19.4823C70 8.57221 61.53 0 50.75 0ZM35.35 55.0817L35 55.436L34.65 55.0817C17.99 39.8147 7 29.7193 7 19.4823C7 12.3978 12.25 7.08447 19.25 7.08447C24.64 7.08447 29.89 10.5913 31.745 15.4441H38.29C40.11 10.5913 45.36 7.08447 50.75 7.08447C57.75 7.08447 63 12.3978 63 19.4823C63 29.7193 52.01 39.8147 35.35 55.0817Z" fill="black"/>
                                    </svg>
                                </button>
                            </div> */}
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default DHome;
