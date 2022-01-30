import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../../Redux/Shopping/shoppingActions";
import { ShoppingBagIcon, SearchIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useDispatch } from "react-redux";
// const product = [
//   {
//     id: 1,
//     name: "Hoodie",
//     image:
//       "https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     price: "$350",
//   },
//   {
//     id: 2,
//     name: "White Joggers",
//     image:
//       "https://cdn.discordapp.com/attachments/610915006296621086/932348179930812436/pexels-photo-5788986.png",
//     price: "$350",
//   },
//   {
//     id: 3,
//     name: "Unisex Hoodie",
//     image:
//       "https://cdn.discordapp.com/attachments/610915006296621086/932350713558880306/pexels-monstera-6311606.jpg",
//     price: "$350",
//   },
//   {
//     id: 4,
//     name: "Gucci Bag",
//     image:
//       "https://i.insider.com/5be349299e8c535fc73a56bf?width=1000&format=jpeg&auto=webp",
//     price: "$350 ",
//   },
// ];

function Grid({ catalogId, categoryId }) {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = `https://fashionstore.technologiasolutions.com/api/Items/Class?catalog=${catalogId}&caegory=${categoryId}`;

  React.useEffect(() => {
    axios.get(url).then((json) => setProducts(json.data));
    setloading(false);
  }, [url]);

  return (
    <div className="w-full mx-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8 ">
        <div className="flex flex-row w-full justify-center items-center mb-12 ">
          <input
            className="border-b-2 w-full h-12"
            type="text"
            placeholder="SEARCH PRODUCTS..."
            onChange={(event) => {
              event.preventDefault();
              setSearchTerm(event.target.value);
            }}
          />
          <SearchIcon className="flex-shrink-0  h-6 w-6 text-gray-600 group-hover:text-gray-500" />
        </div>
        {products && (
          <div className="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
            {products
              .filter((val) => {
                return val.name
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase());
              })
              .map((prod) => (
                <div key={prod.id} className=" relative">
                  <Link to={`/product/${prod.id}`}>
                    <div className="w-full min-h-96  bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden hover:opacity-75 lg:h-96 md:h-96 sm:h-96">
                      <img
                        src={prod.image}
                        alt={prod.href}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 flex flex-row justify-between ">
                    <div className="flex flex-col relative">
                      <h3 className="pb-2 text-sm font-bold  text-gray-700 w-48 lg:w-44 md:w-56 sm:96 text-ellipsis whitespace-nowrap overflow-hidden">
                        {prod.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-900 bottom-0 absolute">
                        ${prod.price}
                      </p>
                    </div>
                    <button
                      onClick={() => addProduct(prod)}
                      type="submit"
                      className="h-12 w-20 lg:w-20 lg:h-12 md:w-20 md:h-10  bg-slate-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                    >
                      <ShoppingBagIcon
                        className="h-10 w-10 lg:h-20 lg:w-20 md:h-6 md:w-6 sm:h-11 sm:w-11"
                        color="white"
                      />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Grid;
