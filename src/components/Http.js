import React, { useState } from "react";
import axios from "axios";
import Dues from "./Dues";

const Http = () => {
  const [allData, setallData] = useState({});
  const getData = async () => {
    const response = await axios("http://localhost:5000/").catch((err) =>
      console.log(err)
    );
    const Data = response.data;

    return Data;
  };

  getData().then((d) => {
    setallData(d);
  });
  console.log(allData);

  return (
    <>
      <Dues Data={allData} />
    </>
  );
};
export { Http };
