import Footer from "./footer";
import Header from "./header";
import img from "../assets/img/recite_7368082.png";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen flex laptop:flex-row bg-cover bg-center font-bold text-lime-800">
        
        <div className="w-1/2 h-screen flex justify-center items-center ">
          <img src={img} className="h-72 w-72 mb-20 bg-amber-700 rounded-full border border-spacing-9 border-amber-900 p-2" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
