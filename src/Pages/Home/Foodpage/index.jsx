import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Navbar/Footer";
import { foodapi } from "../../../Api/foodapi/foodapi";
import Dishescard from "../../../dishescard";

function Foodpage() {
  const [dishes, setdishes] = useState([]);
  const [query, setquery] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const dishes = await foodapi();
        // console.log({dishes})
        setdishes(dishes);
      } catch (err) {
        return err;
      }
    })();
  }, []);
  console.log({ dishes });

  return (
    <div>
      <Navbar setquery={setquery} query={query}/>
      {/* <nav className="mt-64">
        <input
          type="text" placeholder="search items  "
          onChange={(e) => setquery(e.target.value.toLowerCase())}
        />
      </nav> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {dishes
          .filter((food) => food.name.toLowerCase().includes(query))
          .map((food) => (
            <Dishescard key={food.id} food={food} query={query} />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Foodpage;
