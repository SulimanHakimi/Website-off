import Footer from "./footer";
import Header from "./header";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen laptop:flex-row  bg-afg bg-cover bg-center font-bold text-lime-800"></div>
      <Footer />
    </>
  );
}
