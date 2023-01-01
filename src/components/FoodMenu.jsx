import React, { useState } from "react";
import { data } from "../assets/data";

const FoodMenu = () => {
  const [food, setFood] = useState(data);

  //filter gategory
  const filterCategory = (category) =>{
    setFood( data.filter( item =>{
      return item.category === category
    })
    )
  }
  //filter price
  const filterPrice = (price) =>{
    setFood( data.filter( item =>{
      return item.price === price
    })
    )
  }

  return (
    <div className="max-w-[1600px] p-4">
      {/* section title */}
      <h1 className="text-3xl font-bold  border-l-4 border-yellow-400">
        <span className="pl-4">Top Rated </span>
        <span className="text-yellow-400 ">Meals</span>
      </h1>
      {/* filter row */}
      <div className="my-4">
        <div>
          <p className="text-2xl py-2 font-bold">Filter type : </p>
          <div>
            <button onClick={() => setFood(data) } className="main-btn" type="button">
              All
            </button>
            <button onClick={() =>filterCategory('burger') } className="main-btn" type="button">
              Burgers
            </button>
            <button onClick={() => filterCategory('pizza') } className="main-btn" type="button">
              Pizza
            </button>
            <button onClick={() => filterCategory('salad') } className="main-btn" type="button">
              Extra
            </button>
            <button onClick={() => filterCategory('chicken') } className="main-btn" type="button">
              Chickens
            </button>
          </div>
        </div>
        <div>
          <p className="text-2xl py-2 font-bold">Filter Price : </p>
          <div>
            <button onClick={() => filterPrice('$')} className="main-btn" type="button">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="main-btn" type="button">
              $$
            </button>
            <button onClick={() => filterPrice('$$')} className="main-btn" type="button">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="main-btn" type="button">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Food display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 rounded-xl  ">
        {food.map((item, index) => (
          <div key={item.id} className="shadow-xl overflow-hidden duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] hover:scale-110 rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-yellow-500 text-white p-1 rounded-full ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
