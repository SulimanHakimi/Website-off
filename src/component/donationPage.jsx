import Header from "./header";
import Donation from "./donation";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DonationPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2002/donationData")
      .then((res) => {
        setData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  });
  console.log(data);
  return (
    <>
      <div className="bg-slate-100">
        <Header />
        <div className="grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
          {data.map((item) => (
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
    </>
  );
}
