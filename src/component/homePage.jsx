import Footer from "./footer";
import Header from "./header";
import MainContent from "./main";

export default function Homepage() {
  return (
    <>
      <div className=" flex  flex-col h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
