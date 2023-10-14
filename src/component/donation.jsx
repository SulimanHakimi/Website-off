import React from "react";
import { Link } from "react-router-dom";
function Donation(pop) {
  return (
    <>
      <div className="px-4 my-6 dark:bg-slate-950">
        <div className=" w-72 hover:opacity-70 bg-gray-100 shadow-xl flex flex-col overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-72 h-48 object-center	 object-cover "
            src={pop.img}
            alt=""
          />
          <div className="p-2">
            <p className=" text-left line-clamp-4 dark:text-white  font-semibold">
              {pop.discription}
            </p>
            <Link>
              <button className="hover:bg-black hover:text-emerald-600 w-32 py-2 rounded-2xl font-bold text-white mx-16 mt-8 mb-2 bg-emerald-600">
                Donate {pop.donationPrice}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
