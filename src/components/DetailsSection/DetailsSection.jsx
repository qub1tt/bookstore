import React, { useState, useEffect } from "react";

export default function DetailsSection(props) {
  return (
    <section className="pt-12 pb-32">
      <div className="flex items-center gap-12 ">
        <div className="w-3/4	">
          <img
            className=" border border-solid"
            src={props.mproductDetail.img}
            alt="book"
            style={{ border: "1px solid black" }}
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl">{props.mproductDetail.name}</h2>
          <p className="py-4 px-0">
            <strong>Tác giả: </strong>
            {props.nameAuthor}
          </p>
          <p className="pb-4 px-0">
            <strong>Nhà xuất bản: </strong> {props.namePublisher}
          </p>
          <p className="pb-4 px-0">
            <strong>Thể loại: </strong> {props.nameCategory}
          </p>

          <p className="pb-4 px-0">
            <strong>Ngày phát hành: </strong>{" "}
            {new Date(props.mproductDetail.release_date).toDateString(
              "yyyy-MM-dd"
            )}
          </p>

          <strong>Mô tả: </strong>

          <p className="py-4 px-0 leading-7 h-500 overflow-auto mb-10">
            {props.mproductDetail.describe}
          </p>

          <h3 className="text-2xl	pt-4 text-primary-color-bright">
            <strong>Giá: </strong>
            {props.mproductDetail.price}
          </h3>

          <a className="inline-block py-4 px-8 bg-primary-color-bright text-white no-underline mt-8 shadow-md transition duration-200 ease-in border-none font-chivo-mono text-base">
            Add To Cart
          </a>
        </div>
      </div>
    </section>
  );
}
