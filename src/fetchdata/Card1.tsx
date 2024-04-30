import Card from "react-animated-3d-card";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./img/logo.png";

const Card1 = () => {
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
        origin: {
          name: string;
        };
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
    <div>
      {data ? (
        <div
          className="App"
          style={{
            padding: "100px",
            // display: "flex",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            overflow: "auto",
            backgroundImage: `url("https://wallpaperaccess.com/full/6863349.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          {data?.results.map((rickandmorty, index) => (
            <div key={index}>
              <Card
                cursorPointer={false}
                shineStrength={0.75}
                style={{
                  background:
                    "linear-gradient(to right, #4a045e, #4a045e, #4a045e)",
                  width: "300px",
                  height: "400px",
                  cursor: "pointer",
                  border: "4px double #8ff322",
                }}
                onClick={() => setData(data)}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    position: "relative",
                  }}
                ></div>
                <div>
                  <label
                    style={{
                      color: "#8ff320",
                      position: "absolute",
                      bottom: "60px",
                      left: "25px",
                      opacity: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Gender:{rickandmorty.gender}
                  </label>

                  <label
                    style={{
                      color: "#8ff322",
                      position: "absolute",
                      bottom: "60px",
                      right: "25px",
                      opacity: 2,
                      fontWeight: "bold",
                    }}
                  >
                    {rickandmorty.species}
                  </label>
                </div>

                <div className="mb-8 ">
                  <img
                    style={{
                      color: "white",
                      position: "absolute",
                      bottom: "90px",
                      left: "8px",
                      opacity: 1,
                      fontSize: "16px",
                      border: "4px solid #8ff322 ",
                    }}
                    className="object-cover  w-[275px] h-[240px] rounded-xl"
                    src={rickandmorty.image}
                    alt=""
                  />
                  <label
                    style={{
                      color: "#b738e5",
                      position: "absolute",
                      top: "266px",
                      right: "10px",
                      opacity: 2,
                      backgroundColor: "white",
                      padding: "0px 4px",
                      border: "2px solid #8ff322",
                      borderRadius: "10px 0px 0px 10px",
                      fontWeight: "bolder",
                    }}
                  >
                    {rickandmorty.origin.name}
                  </label>
                </div>
                <div className="absolute -top-10 left-0 w-full flex justify-center ">
                  <img className="w-80 " src={logo} alt="" />
                </div>

                <label
                  style={{
                    color: "white",
                    position: "absolute",
                    bottom: "27px",
                    left: "25px",
                    opacity: 1,
                    fontSize: "16px",
                    fontWeight: "bolder",
                  }}
                >
                  {rickandmorty.name}
                </label>
                <label
                  style={{
                    color: "#3fc7d9",
                    position: "absolute",
                    bottom: "20px",
                    right: "15px",
                    opacity: 1,
                    fontSize: "15px",
                    backgroundColor: "white",
                    padding: "0px 2px",
                    fontWeight: "bolder",
                    border: "4px double #8ff322",
                    borderRadius: "10px",
                  }}
                >
                  {rickandmorty.status}
                </label>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        data
      )}
    </div>
  );
};
export default Card1;
