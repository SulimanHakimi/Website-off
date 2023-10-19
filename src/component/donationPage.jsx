import React, { useEffect, useState } from "react";
import Header from "./header";
import Donation from "./donation";
import Footer from "./footer";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DonationPage() {
  const [donationData, setDonationData] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4001/donationData")
      .then((res) => {
        setLoding(false);
        setDonationData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
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
        <div className="bg-slate-100">
          <Header />
          <div className="grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
            {donationData.map((item) => (
             <Link to="*">
              <Donation
                img={item.imgSrc}
                donationPrice={item.donationPrice}
                discription={item.discription}
                key={item.id}
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
