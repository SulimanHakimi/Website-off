import Footer from "./footer/footer";
import Header from "./header/header";
import Loding from "./loding/loding";
import Photoghrapy from "./photography/photoghrapy";

import axios from "axios";
import { useEffect, useState } from "react";
export default function PhotoghraphyPage() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://sulimanhakimi.github.io/appData/photography.json")
      .then((res) => {
        setData(res.data.photoghraphy);
        setIsLoding(false);
      })
      .then((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div className=" bg-slate-100">
        <Header />

        {isLoding ? (
        <Loding/>
        ) : (
          <>
            <div className="grid bg-slate-100 desktop:grid-cols-4 ml-10 mt-10  min-h-screen laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
              {data.map((item) => (
                <Photoghrapy
                  img={item.imgSrc}
                  id={item.id}
                  key={item.id}
                  place={item.place}
                  discription={item.discription}
                  namePhotographar={item.namePhotographar}
                />
              ))}
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
