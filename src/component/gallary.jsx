import React from "react";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";
let data = [
  {
    id: "1",
    imgSrc:
      "https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_royal.jpg",
    price: "30$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"T-Shirt"
  },
  {
    id: "2",
    imgSrc:
      "https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false",
    price: "50$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"Shose"
  },
  {
    id: "3",
    imgSrc:
      "https://media.wired.com/photos/64daad6b4a854832b16fd3bc/master/w_2560%2Cc_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg",
    price: "700$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"Laptop"
  },
  {
    id: "4",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg/640px-Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg",
    price: "20$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"Cup"
  },
  {
    id: "5",
    imgSrc:
      "https://m.media-amazon.com/images/I/41Y7kUfmWwL._AC_UF1000,1000_QL80_.jpg",
    price: "10$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"Mouse"
  },
  {
    id: "6",
    imgSrc:
      "https://www.cnet.com/a/img/resize/209b985549508798cc16e8022ff79b8ce5ce2bc8/hub/2022/10/18/b643bc41-614e-4a5e-acaa-649281580f68/tcl-6-series-tv-r6-2022-6396.jpg?auto=webp&fit=crop&height=675&width=1200",
    price: "1100$",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?",
      nameOfPro:"TV"
  },
];
const Gallary = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className=" grid desktop:grid-cols-4 justify-items-center laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
        {data.map((item) => (
          <Card
            price={item.price}
            img={item.imgSrc}
            key={item.id}
            discription={item.discription}
            nameOfPro={item.nameOfPro}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallary;
