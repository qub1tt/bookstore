import React from "react";
import "./content2.css";
import BestSeller from "./BestSeller";
import CategoryList from "./CategoryList";

const Content2 = () => {
  const bookId = "66332e02947ee52ee7b691f9"
  return (
    <div className="content2">
      <div className="content2_left">
        <div className="content2_left_above">
          <div className="content2_left_above_left">
            <span>
              <strong>Best seller</strong>{" "}
            </span>
          </div>

          <div className="content2_left_above_right">
            <select id="content2_left_above_right_dropdown">
              <option value="date">Trong ngày</option>
              <option value="month">Trong tháng</option>
              <option value="year">Trong năm</option>
            </select>
          </div>
        </div>


        <BestSeller bookId={bookId}/>


      </div>

      <div className="content2_right">
        <div className="content2_right_above">
          <div className="content2_right_above_left">
            <span>
              <strong>Thể loại</strong>{" "}
            </span>
          </div>
        </div>

        <CategoryList />

      </div>
    </div>
  );
};

export default Content2;