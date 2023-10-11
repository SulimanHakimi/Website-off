export default function Card(pop) {
  return (
    <div className="px-4 my-6 dark:bg-slate-950">
      <div className=" w-72 bg-gray-100 shadow-xl flex flex-col overflow-hidden rounded-lg cursor-pointer">
        <img
          className=""
          src={pop.img}
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold">Price ({pop.price})</h2>
          <p className=" text-left dark:text-white mt-2 font-semibold">
          {pop.discription}
          </p>
          <button className="hover:bg-black hover:text-emerald-600 px-4 py-2 rounded-2xl font-bold text-white mx-20 mt-8 mb-2 bg-emerald-600 ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
