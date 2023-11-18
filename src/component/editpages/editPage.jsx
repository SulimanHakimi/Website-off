import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
function EditPage() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center mt-10 mb-20 ">
          <div className="card flex p-3 gap-4 bg-gray-100 shadow-lg">
            <div className="relative h-14 flex justify-start items-end">
              <label htmlFor="imgsrc" className="font-bold absolute top-0">
                Image Source
              </label>
              <input
                type="text"
                name="imgSrc"
                className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
              />
            </div>
            <div className="relative h-14 flex justify-start items-end">
              <label htmlFor="place" className="font-bold absolute top-0">
                Place
              </label>
              <input
                type="text"
                name="place"
                className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
              />
            </div>
            <div className="relative h-14 flex justify-start items-end">
              <label
                htmlFor="namePhotographar"
                className="font-bold absolute top-0"
              >
                Photographar
              </label>
              <input
                type="text"
                name="namePhotographar"
                className="w-full h-8 focus:ring-transparent caret-blue-700 rounded-sm"
              />
            </div>
            <div className="relative h-36 flex justify-start items-end">
              <label htmlFor="discription" className="font-bold absolute top-0">
                Discription
              </label>
              <textarea
                name="discription"
                cols="43"
                rows="4"
                className="focus:ring-transparent caret-blue-700 rounded-sm resize-none	"
              ></textarea>
            </div>
            <Link
              to="/Photoghraphy"
              className="bg-slate-600 hover:bg-slate-700 text-center text-white font-bold py-2 px-4 rounded"
            >
              Change
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditPage;
