import Footer from "./footer/footer";
import Header from "./header/header";
import Photoghrapy from "./photography/photoghrapy";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
export default function PhotoghraphyPage() {
  const { isLogin } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  const date = new Date();
  useEffect(() => {
    axios
      .get("https://sulimanhakimi.github.io/json-files/photography.json")
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
      {isLogin ? (
        <>
          <div className=" bg-slate-100">
            <Header />

            <div className="flex justify-between items-center">
              <Link
                to="/CreatePage"
                className="rounded-md m-6 tablet:ml-12 laptop:ml-10 mobile:ml-24 flex justify-center items-center border-2 border-slate-200  hover:bg-slate-300 py-3 px-6 w-fit"
              >
                <button id="createCom">
                  <AiOutlinePlus />
                </button>
              </Link>
              <p className="pr-20 cursor-pointer text-lg font-semibold">{`Date: ${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}</p>
            </div>
            <div className="grid bg-slate-100 desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
            {isLoding ? (
              <>
                <div className="flex justify-center items-center">
                  <p className="text-2xl">Loding</p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
            </div>
            <Footer />
          </div>
        </>
      ) : (
        <div className=" bg-slate-100">
          <Header />

          <div className="grid bg-slate-100 desktop:grid-cols-4 min-h-screen justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
            {isLoding ? (
              <>
                <div className="flex justify-center items-center">
                  <p className="text-2xl">Loding</p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
