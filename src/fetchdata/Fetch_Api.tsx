import React, { useEffect, useState } from "react";
const Fetch_Api = () => {
  const [data, setData] = useState<pokemon>();

  type pokemon = {
    count: number;
    next: string;
    previous: string;
    results: [
      {
        name: string;
        url: string;
      }
    ];
  };

  const fetch_api = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("There was a problem with the frtch operation ", error);
      });
  };
  useEffect(() => {
    fetch_api();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "820px",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            paddingBottom: "20px",
            fontSize: "30px",
            fontWeight: "bolder",
            color: "black",
          }}
        >
          <h1 className="text-center text-red-700 text-2xl font-extrabold pt-10">
            ข้อมูลจาก API
          </h1>
          {data ? (
            <div className=" text-green-700 text-xl font-bold text-center">
              <p>Count: {data.count}</p>
              <p>Next: {data.next}</p>
              {data?.results.map((pokemon, index) => (
                <div className="flex justify-center" key={index}>
                  <div>
                    <div className="flex  ">
                      ชื่อ :<p>{pokemon.name}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex ">
                      Url :<p>{pokemon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
};
export default Fetch_Api;
