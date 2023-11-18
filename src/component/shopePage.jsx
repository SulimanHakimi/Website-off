import Header from "./header/header";
import Card from "./shope/shopeCard";
import Footer from "./footer/footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Shope() {
  const [isLoding, setIsLoding] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sulimanhakimi.github.io/json-files/shop.json")
      .then((res) => {
        setData(res.data.shope);
        setIsLoding(false)
      })
      .then((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className="bg-slate-100">
        <Header />
        <div className=" grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {isLoding ? (
            <>
              <div className="flex justify-center items-center">
                <p className="text-2xl">Loding</p>
              </div>
            </>
          ) : (
            <>
              {" "}
              {data.map((item) => (
                <Link to="#">
                  <Card
                    price={item.price}
                    img={item.imgSrc}
                    key={item.id}
                    discription={item.discription}
                    nameOfPro={item.nameOfPro}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
