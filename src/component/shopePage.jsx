import Header from "./header";
import Card from "./shopeCard";
import Footer from "./footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Shope() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2001/shope")
      .then((res) => {
        setData(res.data);
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
        </div>
        <Footer />
      </div>
    </>
  );
}
