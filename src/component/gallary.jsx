import React, { useEffect, useState } from "react";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";
import axios from "axios";

export default function Gallary() {
  const [loding, setLoding] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/shopeData")
      .then((res) => {
        setData(res.data.data);
        setLoding(false);
      })
      .catch((erorr) => console.log(erorr));
  });
  return (
    <>
      {loding ? (
        <div className="flex h-screen justify-center items-center">
          loding....
        </div>
      ) : (
        <>
          <div className="bg-slate-100">
            <Header />
            <div className=" grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
              {data?.map((item) => (
                <Card
                  price={item.price}
                  img={item.imgSrc}
                  key={item.id}
                  discription={item.discription}
                  nameOfPro={item.nameOfPro}
                />
              ))}
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
