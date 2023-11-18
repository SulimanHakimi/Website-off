import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CreateCard() {
  const [inputData, setInputData] = useState({
    id: "",
    imgSrc: "",
    place: "",
    discription: "",
    namePhotographar: "",
  });
  const Data = (e) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dataPost = () => {
    axios
      .post("http://localhost:2000/photoghraphy", {
        id: "7",
        imgSrc: inputData.imgSrc,
        place: inputData.place,
        discription: inputData.discription,
        namePhotographar: inputData.namePhotographar,
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-slate-100">
      <Header />
      <div className="flex flex-col justify-center items-center mt-10 mb-20 ">
        <div className="card flex p-3 gap-4 bg-gray-100 shadow-lg">
          <div className="relative h-14 flex justify-start items-end">
            <label htmlFor="imgsrc" className="font-bold absolute top-0">
              Image Source
            </label>
            <input
              type="text"
              name="imgSrc"
              onChange={Data}
              className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
            />
          </div>
          <div className="relative h-14 flex justify-start items-end">
            <label htmlFor="place" className="font-bold absolute top-0">
              Place
            </label>
            <input
              type="text"
              name="place"
              onChange={Data}
              className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
            />
          </div>
          <div className="relative h-14 flex justify-start items-end">
            <label
              htmlFor="namePhotographar"
              className="font-bold absolute top-0"
            >
              Photographar
            </label>
            <input
              type="text"
              name="namePhotographar"
              onChange={Data}
              className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
            />
          </div>
          <div className="relative h-36 flex justify-start items-end">
            <label htmlFor="discription" className="font-bold absolute top-0">
              Discription
            </label>
            <textarea
              name="discription"
              cols="43"
              onChange={Data}
              rows="4"
              className="focus:ring-transparent caret-blue-700 rounded-sm resize-none	"
            ></textarea>
          </div>
          <Link
            onClick={dataPost}
            to="/Photoghraphy"
            className="bg-slate-600 hover:bg-slate-700 text-center text-white font-bold py-2 px-4 rounded"
          >
            Create
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
