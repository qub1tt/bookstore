import React, { useState } from "react";
import "./content2.css";
import BestSeller from "./BestSeller";
import CategoryList from "./CategoryList";

const Content2 = () => {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [bookId, setBookId] = useState("NjYzMzM5MDllZTAzN2UxZWY3YWU4MTYx");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "daily") {
      setBookId("NjYzMzM5MDllZTAzN2UxZWY3YWU4MTYx");
    } else if (event.target.value === "monthly") {
      setBookId("NjYzMzY4MzdhNTcwOGJkNDQ3YTQ4ZjVk");
    } else if (event.target.value === "yearly") {
      setBookId("NjYzMzZhMjBhNTcwOGJkNDQ3YTQ4ZjYy");
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
