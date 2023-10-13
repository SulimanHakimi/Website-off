import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Photoghrapy from "./photoghrapy";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PhotoghraphyPage() {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/photographyData")
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
        <div className="flex h-screen justify-center items-center">
          loding....
        </div>
      ) : (
        <>
          <Header />
          <div className="grid bg-slate-100 desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
            {data.map((item) => (
              <Link to={`*`}>
                <Photoghrapy
                  img={item.imgSrc}
                  key={data.id}
                  place={item.place}
                  discription={item.discription}
                  namePhotographar={item.namePhotographar}
                />
              </Link>
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
