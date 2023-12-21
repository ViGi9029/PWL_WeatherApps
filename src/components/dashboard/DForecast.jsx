import { Image, Heading, Spinner } from "@chakra-ui/react";

const DForecast = ({ forecast }) => {
    return (
        <div className="w-[450px] bg-color-accent rounded-lg font-roboto text-[#333] py-2 shadow">
            {!forecast ? (
                <Spinner />
            ) : (
                <>
                    <div className="flex justify-between mx-8 items-center">
                        <div className="font-roboto mt-2">
                            <Heading size="md">
                                {forecast?.location?.name},{" "}
                                {forecast?.location?.country}
                            </Heading>
                            <Heading size="sm">
                                {forecast?.current?.condition?.text}
                            </Heading>
                        </div>
                        <Image
                            width="28%"
                            src={forecast?.current?.condition?.icon}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                            className="blur hover:blur-none transition-all duration-300"
                        />
                    </div>
                    <div className="mx-8 mb-8 flex justify-between items-start">
                        <div className="w-full text-[55px] font-bold my-auto">
                            <h1>{forecast?.current?.temp_c}°C</h1>
                        </div>
                        <div className="w-full">
                            <label className="font-semibold">Details</label>
                            <div className="flex justify-between">
                                <span>Feels like</span>
                                <span className="font-semibold">
                                    {forecast?.current?.feelslike_c}°C
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Wind</span>
                                <span className="font-semibold">
                                    {forecast?.current?.wind_mph} m/h
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Humidity</span>
                                <span className="font-semibold">
                                    {forecast?.current?.humidity}%
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Pressure</span>
                                <span className="font-semibold">
                                    {forecast?.current?.pressure_in}hPa
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DForecast;
