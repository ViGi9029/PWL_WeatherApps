import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
        key: "9cff2bd904af4f1a95051351231910",
    },
});
