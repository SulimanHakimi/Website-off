import axios from "axios";
import { Link } from "react-router-dom";
export default function Photoghrapy(pop) {
  const onDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:2000/photoghraphy/${id}`)
      .then((res) => console.log("succes"))
      .then((err) => console.log(err));
  };
 

  return (
    <>
      <div className="pb-8 overflow-hidden">
        <div className=" w-72 shadow-xl flex flex-col overflow-hidden rounded-lg cursor-pointer">
          <img
            className="w-72 h-48 object-cover hover:scale-95 rounded-lg"
            src={pop.img}
            alt=""
          />
          <div className="p-2">
            <div className="flex justify-between ">
              <h2 className="font-bold  text-gray-600">{`Province: ${pop.place}`}</h2>
              <h2 className="font-bold text-gray-600 ">{`PG: ${pop.namePhotographar}`}</h2>
            </div>
            <p className="text-left line-clamp-3 dark:text-white my-2 font-semibold">
              {pop.discription}
            </p>
          </div>
          <div className="w-full  mb-2 flex justify-around">
            <Link to="/editPage">
              <button className="bg-green-700 hover:shadow-2xl  hover:shadow-green-900 hover:text-black text-white px-5 py-2 rounded-md">
                Edit
              </button>
            </Link>
            <button
              onClick={(e) => onDelete(e, pop.id)}
              className="bg-red-800 hover:shadow-2xl hover:shadow-red-900 hover:text-black text-white px-5 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
