
export default function Photoghrapy(pop) {
  return (
    <>
      <div className="pb-8">
        <div className=" w-72 hover:opacity-70 shadow-xl flex flex-col overflow-hidden rounded-lg cursor-pointer">
          <img className="w-72 h-48 object-cover" src={pop.img} alt="" />
          <div className="p-2">
            <div className="flex justify-between">
              <h2 className="font-bold  text-gray-600">{`Province: ${pop.place}`}</h2>
              <h2 className="font-bold text-gray-600">{`PHG: ${pop.namePhotographar}`}</h2>
            </div>
            <p className="text-left line-clamp-3 dark:text-white my-2 font-semibold">
              {pop.discription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
