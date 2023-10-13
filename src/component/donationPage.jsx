import React, { useEffect, useState } from "react";
import Header from "./header";
import Donation from "./donation";
import Footer from "./footer";
import axios from "axios";

export default function DonationPage() {
  const [donationData, setDonationData] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/donationData")
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
        <div className="flex h-screen justify-center items-center">
          <div className="flex items-center ">
          <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="bg-slate-100">
          <Header />
          <div className="grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
            {donationData.map((item) => (
              <Donation
                img={item.imgSrc}
                donationPrice={item.donationPrice}
                discription={item.discription}
                key={item.id}
              />
            ))}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}
