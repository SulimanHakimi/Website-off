import React, { useEffect, useState } from "react";
import Header from "./header";
import Card from "./shopeCard";
import Footer from "./footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Shope() {
  const [loding, setLoding] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/shopeData")
      .then((res) => {
        setData(res.data.data);
        setLoding(false);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  });
  return (
    <>
      {loding ? (
        <div className="h-screen flex justify-center items-center">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      ) : (
        <>
          <div className="bg-slate-100">
            <Header />
            <div className=" grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
              {data?.map((item) => (
                <Link to="*">
                  <Card
                    price={item.price}
                    img={item.imgSrc}
                    key={item.id}
                    discription={item.discription}
                    nameOfPro={item.nameOfPro}
                  />
                </Link>
              ))}
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
