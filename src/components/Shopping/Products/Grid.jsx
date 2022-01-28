import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "../../../Redux/Shopping/shoppingActions";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { setProducts } from "../../../Redux/Shopping/shoppingReducers";
import axios from "axios";

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

function Grid({ addToCart, loadCurrentItem }) {
  const [products, setProducts] = useState([]);

  const url = "https://localhost:44362/api/Items";

  React.useEffect(() => {
    axios.get(url).then((json) => setProducts(json.data));
  }, [url]);

  return (
    <div className=" w-full mx-20">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8">
        {products && (
          <div className="grid grid-cols-1 gap-y-20 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
            {products.map((prod) => (
              <div key={prod.id} className=" relative">
                <Link to={`/product/${prod.id}`}>
                  <div className="w-full min-h-96  bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden hover:opacity-75 lg:h-96 md:h-96 sm:h-96">
                    <button
                      className="h-24 w-24"
                      onClick={() => loadCurrentItem(products)}
                    >
                      CLICK
                    </button>
                    <img
                      src={prod.image}
                      alt={prod.href}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                </Link>
                <div className="mt-4 flex flex-row  ">
                  <div className="flex flex-col relative">
                    <h3 className="pb-2 text-sm font-bold  text-gray-700 w-48 lg:w-44 md:w-56 sm:96 text-ellipsis whitespace-nowrap overflow-hidden">
                      {prod.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-900 bottom-0 absolute">
                      ${prod.price}
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(prod.id)}
                    type="submit"
                    className="w-44 h-12 bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  >
                    <p className="w-24 ">Add to bag</p>
                    <ShoppingBagIcon className="h-4 w-4 " color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    // <div className="mx-16 max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full md:max-w-6xl lg:px-8">
    //   <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-y-6 md:gap-y-14 gap-y-20 gap-x-6  ">
    //     {product.map((item) => (
    //       <div key={item.key} className="group relative">
    //         <div className="bg-gray-200 w-full min-h-96 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-96 md:h-full sm:h-full">
    //           <img
    //             src={item.image}
    //             alt=""
    //             className="object-center object-contain h-full w-full lg:h-full lg:w-full "
    //           />
    //         </div>
    //         <div className="mt-4 flex justify-between px-2">
    //           <h3 className="text-sm w-56 lg:text-xl md:text-sm font-medium text-gray-700 lg:w-48 md:w-56 text-ellipsis whitespace-nowrap overflow-hidden ">
    //             {item.name}
    //           </h3>

    //           <p className="text-md font-medium text-gray-900 lg:w-12  text-ellipsis  ">
    //             {item.price}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     products: state.shop.products,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Grid);
