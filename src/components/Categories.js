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
        {/* <p className="sortbar__option--item sortbar__option--selected">
          Phổ biến
        </p> */}
        {/* <p className="sortbar__option--item">Mới nhất</p>
        <p className="sortbar__option--item">Bán chạy</p> */}
        {/* <div className="status-box navbar--button">
          <p className="status-box--placeholder">Giá</p>
          <i className="fas fa-chevron-down status-box--arrow-down"></i>
          <div className="status-box--menu navbar__subnav">
            <p>Giá: Thấp đến Cao</p>
            <p>Giá: Cao đến Thấp</p>
          </div>
        </div> */}
      </div>
    </div>
    // <div className="categories-container">
    //   <div className="categories-header">Danh mục</div>
    //   <ul className="categories-items-container">
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //     <li className="categories-columns">
    //       <CategoryItem />
    //       <CategoryItem />
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Categories;
