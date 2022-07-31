import React from "react";
import { RiShirtFill } from "react-icons/ri";
import "./CategoryItem.css";
function CategoryItem() {
  return (
    <a className="categories-items" href="#">
      <div className="shirt-wrapper">
        <div className="shirt">
          <RiShirtFill />
        </div>
      </div>
      Thời Trang Nam
    </a>
  );
}

export default CategoryItem;
