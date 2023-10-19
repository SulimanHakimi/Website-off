import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Photoghrapy from "./photoghrapy";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function PhotoghraphyPage() {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/photographyData")
      .then((res) => {
        setData(res.data);
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
        <div className=" bg-slate-100">
          <Header />

          <Link
            to="/CreatePage"
            className="rounded-md m-6 tablet:ml-12 laptop:ml-10 mobile:ml-24 flex justify-center items-center border-2 border-slate-200  hover:bg-slate-300 py-3 px-6 w-fit"
          >
            <button id="createCom">
              <AiOutlinePlus />
            </button>
          </Link>

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
        </div>
      )}
    </>
  );
}
