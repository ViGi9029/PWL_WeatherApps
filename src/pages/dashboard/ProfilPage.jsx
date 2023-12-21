import { EditIcon } from "@chakra-ui/icons";
import DHeader from "../../components/dashboard/DHeader";
import { FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";

const ProfilPage = () => {
    const uname = localStorage.getItem("username");
    const userData = JSON.parse(localStorage.getItem("db"));
    const user = userData.find((user) => user.username === uname);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const picRef = useRef(null);
    const [picture, setPicture] = useState(
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    );

    const handleChangePic = (e) => {
        const file = e.target.files[0];
        setPicture(URL.createObjectURL(file));
    };

    return (
        <>
            <DHeader />
            <div className="w-full mt-[-101px]">
                <div className="container mt-[121px] mx-auto flex flex-col items-center">
                    <div className="w-1/2">
                        <h1 className="text-2xl font-semibold uppercase">
                            Profil
                        </h1>
                        <div className="w-full bg-color-accent rounded mt-2 shadow">
                            <div className="grid grid-cols-2">
                                <div className="flex items-center flex-col gap-y-5 justify-center">
                                    <div className="w-52 h-52 rounded-full overflow-hidden shadow-md shadow-gray-5w-520">
                                        <Image
                                            className="w-full h-full object-cover"
                                            src={picture}
                                        />
                                    </div>
                                    <label
                                        htmlFor="picture"
                                        className="font-semibold text-gray-600 text-lg hover:cursor-pointer"
                                    >
                                        <EditIcon /> Ubah
                                    </label>
                                    <input
                                        type="file"
                                        id="picture"
                                        ref={picRef}
                                        onChange={handleChangePic}
                                        className="hidden"
                                    />
                                </div>
                                <div className="my-10 mr-5">
                                    <form className="flex flex-col gap-y-3">
                                        <FormControl>
                                            <FormLabel>Nama</FormLabel>
                                            <Input
                                                type="text"
                                                bg="white"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Email</FormLabel>
                                            <Input
                                                type="email"
                                                bg="white"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.email)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Nama Pengguna</FormLabel>
                                            <Input
                                                type="text"
                                                bg="white"
                                                value={uname}
                                                disabled
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Kata Sandi</FormLabel>
                                            <Input
                                                type="password"
                                                bg="white"
                                                autoComplete="password"
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>
                                                Konfirmasi Kata Sandi
                                            </FormLabel>
                                            <Input
                                                type="email"
                                                bg="white"
                                                autoComplete="confPass"
                                            />
                                        </FormControl>
                                        <FormControl className="mt-2 text-right">
                                            <button className="bg-emerald-500 py-2 px-4 font-semibold text-white rounded hover:bg-emerald-600">
                                                Simpan
                                            </button>
                                        </FormControl>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilPage;
