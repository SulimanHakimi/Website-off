import Header from "./header/header";
import Donation from "./donation/donation";
import Footer from "./footer/footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DonationPage() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://sulimanhakimi.github.io/json-files/donation.json")
      .then((res) => {
        setData(res.data.donationData);
        setIsLoding(false);
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
          {isLoding ? (
            <>
              <div className="flex justify-center items-center">
                <p className="text-2xl">Loding</p>
              </div>
            </>
          ) : (
            <>
              {" "}
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
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
