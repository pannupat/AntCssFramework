import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import logo from "./img/logo.png";
const Fetch_Api = () => {
  const [data, setData] = useState<RickandMorty>();

  type RickandMorty = {
    info: string;
    count: number;
    next: string;
    page: number;
    prev: string;
    results: [
      {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        image: string;
        orgin: [
          {
            name: string;
          }
        ];
      }
    ];
  };

  const getDataAxios = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getDataAxios();
  }, []);

  return (
    <motion.div
      title="General"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex  "
    >
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="bg-black"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            maxWidth: "1400px",
            marginTop: "20px",
            padding: "40px",
            border: "5px double green",
          }}
        >
          <div
            style={{
              paddingBottom: "20px",
              fontSize: "12px",
              fontWeight: "bolder",
            }}
          >
            {data ? (
              <div>
                <img className="flex items-center" src={logo} alt="" />
                <div className="grid grid-cols-2 lg:grid-cols-3  border-4 border-double gap-2 border-lime-400 p-20 rounded-3xl">
                  {data?.results.map((rickandmorty, index) => (
                    <div
                      className="flex  items-center justify-between "
                      key={index}
                    >
                      <div className="relative group w-[190px] h-[200px] lg:w-[370px] lg:h-[400px] overflow-hidden bg-white m-auto mt-36 p-2 drop-shadow-xl shadow-black border-4 border-double  border-lime-400">
                        <div className="absolute right-0 mr-5 mt-3 pr-4 px-4 py-1 bg-green-400 rounded-lg text-fuchsia-600 border-4 border-double border-lime-400">
                          {rickandmorty.status}
                        </div>
                        <img
                          className="rounded-md w-full h-full border-4 border-black border-double  "
                          src={rickandmorty.image}
                          alt=""
                        />
                        <div className="absolute w-full h-full shadow-2xl opacity-50 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-lime-900 w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                          <div className="absolute w-full flex place-content-center">
                            <p className="capitalize font-bold w-full mx-2 text-2xl text-center shadow-xl text-lime-400 mt-10 group-hover:text-fuchsia-600 bg-white px-3  py-2 rounded-md opacity-85">
                              {rickandmorty.name}
                            </p>
                          </div>
                          <div className="absolute   w-full p-24 mt-16  text-[25px] text-white">
                            <p>Species: {rickandmorty.species}</p>
                            <p>Type : {rickandmorty.type}</p>
                            <p>Gender : {rickandmorty.gender}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              data
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Fetch_Api;
