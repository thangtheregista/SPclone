import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from "./Items";
import DailyDiscover from './DailyDiscover';
import "./PaginatedItems.css"
export default function PaginatedItems({ handleAddToCart, itemsPerPage, products }) {
    
const items = products;

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
      console.log(items)
    }, [itemOffset, itemsPerPage, products]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <DailyDiscover 
          currentItems={currentItems}  
          handleAddToCart={handleAddToCart}           
          products={products}
         />
        <ReactPaginate
          className='paginate'
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }