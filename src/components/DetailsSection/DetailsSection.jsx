import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookData } from "../../util/BookData";
import logo from "./../../assets/tamly/nhancach.png";

export default function DetailsSection() {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  const [formattedDescription, setFormattedDescription] = useState("");
  useEffect(() => {
    let newData = BookData.filter((book) => book.id === parseInt(id));
    setBookData(newData[0]);
  }, []);

  useEffect(() => {
    if (bookData.book_description) {
      // Thay thế \n\n bằng <br/> để tạo dòng mới
      const formattedDescription = bookData.book_description.replace(
        /\n\n/g,
        "<br/>"
      );
      setFormattedDescription(formattedDescription);
    }
  }, [bookData]);
  console.log(bookData.book_image);
  return (
    <section className="pt-32 pb-32">
      <div>
        <div className="flex items-center gap-32">
          <div className="w-3/6	text-center">
            <img
              className="h-3/5 border border-solid"
              src={bookData.book_image}
              alt="book"
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-4xl">{bookData.book_name}</h2>
            <p className="py-4 px-0">
              <strong>Tác giả: </strong>
              {bookData.author_name}
            </p>
            <strong>Mô tả: </strong>
            <p
              className="py-4 px-0 leading-7"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            ></p>
            <p>
              <b>Language</b>: {bookData.language}
            </p>
            <p>
              <b>Book Length</b> : {bookData.print_length}
            </p>

            <h3 className="text-2xl	pt-4 text-primary-color-bright">
              {bookData.price}
            </h3>

            <a className="inline-block py-4 px-8 bg-primary-color-bright text-white no-underline mt-8 shadow-md transition duration-200 ease-in border-none font-chivo-mono text-base">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
