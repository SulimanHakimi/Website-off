import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";

export default function CreateCard() {
  const [inputData, setInputData] = useState({
    id: "",
    imgSrc: "",
    place: "",
    discription: "",
    namePhotographar: "",
  });
  const Data = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const dataPost = () => {
    // axios
    //   .post("http://localhost:4000/photographyData", inputData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
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
              type="url"
              name="imgsrc"
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
              onChange={Data}
              name="namePhotographar"
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
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            onClick={dataPost}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
