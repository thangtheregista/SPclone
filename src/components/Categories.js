import React from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem.js";
import { RiShirtFill } from "react-icons/ri";

function Categories({ categories, fetchProductsByCategory }) {
  return (
    <div className="sortbar ss-grid__full-width hide-on-mobile">
      <p className="sortbar--label">Sắp xếp theo</p>
      <div className="sortbar__option">
        {categories.map((category) => {
          return (
            <p
              key={category.id}
              onClick={() => {
                fetchProductsByCategory(category.slug);
              }}
              className="sortbar__option--item"
            >
              {category.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
