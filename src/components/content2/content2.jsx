import React, { useState } from "react";
import "./content2.css";
import BestSeller from "./BestSeller";
import CategoryList from "./CategoryList";

const Content2 = () => {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [bookId, setBookId] = useState("66333909ee037e1ef7ae8161");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "daily") {
      setBookId("66333909ee037e1ef7ae8161"); 
    } else if (event.target.value === "monthly") {
      setBookId("66336837a5708bd447a48f5d"); 
    } else if (event.target.value === "yearly") {
      setBookId("66336a20a5708bd447a48f62"); 
    }
  };

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
            <select
              id="content2_left_above_right_dropdown"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="daily">Trong ngày</option>
              <option value="monthly">Trong tháng</option>
              <option value="yearly">Trong năm</option>
            </select>
          </div>
        </div>

        <BestSeller bookId={bookId} />
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
