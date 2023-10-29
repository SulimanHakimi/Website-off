import React from "react";
import google from "./../assets/img/341350527_1184363148892088_4003333439020170582_n 2.png";
import meta from "./../assets/img/341350527_1184363148892088_4003333439020170582_n 3.png";
import apple from "./../assets/img/341350527_1184363148892088_4003333439020170582_n 4.png";

function LoginFigma() {
  return (
    <div className="flex justify-center h-screen items-center bg-[#D9D9D9]">
      <div className="w-[485px] flex flex-col justify-around p-20 bg-white h-[590px]">
        <div className="">
          <h1 className="font-bold text-2xl">Back to your digital life</h1>
          <p>Choose one of the option to go</p>
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            className="rounded-md w-84 my-3 px-4 py-3 focus:border-[#8AC0FF] focus:placeholder:font-bold "
            placeholder="get@ziontutorial.com"
          />
          <input
            type="password"
            className="rounded-md w-84 my-3 px-4 py-3 focus:border-[#8AC0FF] focus:placeholder:font-bold "
            placeholder="Password"
          />
        </div>
        <div className="flex justify-between items-center ">
          <p>Or continue with</p>
          <span className="h-[1px] w-48 bg-[#D9D9D9]"></span>
        </div>
        <div className="flex justify-between flex-row my-4">
          <button className="bg-[#F7F7F7] py-2 px-5">
            <img src={google} alt="" />
          </button>
          <button className="bg-[#F7F7F7] py-2 px-5">
            <img src={meta} alt="" />
          </button>
          <button className="bg-[#F7F7F7] py-2 px-5">
            <img src={apple} alt="" />
          </button>
        </div>
        <div className="w-full flex justify-center ">
          <button className="py-3 px-24 text-white bg-[#0366FF] rounded-md">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginFigma;
