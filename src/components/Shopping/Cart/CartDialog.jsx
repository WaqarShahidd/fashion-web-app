import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
} from "../../../Redux/Shopping/shoppingActions";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

function CartDialog({ cart, removeFromCart, adjustQty }) {
  const [open, setOpen] = useState(true);

  const [count, setCount] = useState(cart.qty);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItem(items);
    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice, totalItem, setTotalItem]);

  const onChange = (e) => {
    console.log(e.target.value);
    // adjustQty(cart.id, e.target.value);
  };
  let incrementCount = (e) => {
    setCount(e.target.value + 1);
    adjustQty(cart.id, e.target.value);
  };

  let decrementCount = (e) => {
    setCount(e.target.value - 1);
    adjustQty(cart.id, e.target.value);
  };

  return (
    <div className="w-screen max-w-md">
      <div className="h-screen flex flex-col bg-white shadow-xl overflow-y-scroll">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6 ">
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-bold text-gray-900">Shopping cart</h1>
          </div>

          <div className="mt-8">
            <div className="flow-root ">
              <ul className="-my-6  divide-y divide-gray-200 ">
                {cart.map((product) => (
                  <li key={product.id} className="py-6 flex">
                    <div className="flex w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">${product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className=" flex-row flex">
                          <button
                            className="h-6 w-6 mr-8 bg-gray-200"
                            onClick={() => onChange()}
                          >
                            -
                          </button>
                          <p className="text-gray-500 mr-8">{count}</p>
                          <button
                            className="h-6 w-6  bg-gray-200"
                            onClick={() => onChange}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t  border-gray-200 py-6 px-4 sm:px-6 w-full">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {totalPrice}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="."
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                className="text-indigo-600 font-medium hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartDialog);
