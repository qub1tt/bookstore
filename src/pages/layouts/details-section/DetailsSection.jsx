import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookData } from "../../../util/BookData";
import { UserContext, CartContext } from "../../../App";

const DetailsSection = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  const user = useContext(UserContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, [id]);

  const handleAddToCart = () => {
    if (user) {
      //add to cart
      setCartItems([...cartItems, bookData]);
      alert(`The book ${bookData.book_name} is added to the cart`);
    } else {
      navigate("/login");
      alert("Please Login or Sign up first..");
    }
  };

  return (
    <section className="pt-32 pb-32">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-3/6	text-center">
            <img
              className="h-52 border border-solid"
              src={bookData.book_url}
              alt="book"
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-4xl">{bookData.book_name}</h2>
            <p className="py-4 px-0">{bookData.author_name}</p>
            <p className="py-4 px-0 leading-7">{bookData.book_description}</p>
            <p>
              <b>Language</b>: {bookData.language}
            </p>
            <p>
              <b>Book Length</b> : {bookData.print_length}
            </p>

            <h3 className="text-2xl	pt-4 text-primary-color-bright">
              &#8377;{bookData.price}
            </h3>

            <a
              onClick={handleAddToCart}
              className="inline-block py-4 px-8 bg-primary-color-bright text-white no-underline mt-8 shadow-md transition duration-200 ease-in border-none font-chivo-mono text-base"
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
