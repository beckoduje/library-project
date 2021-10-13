import React, { useState, useContext , useEffect} from "react";
import Pagination from "react-js-pagination";

import { LibraryContext } from "../LibraryContext";

export default function Paginations(props) {
  const { searchedBooks } = useContext(LibraryContext);

  const [activePage, getActivePage] = useState(1);

   function searchPage(pageNumber){
    
    let url = new URL(window.location);
    let params = new URLSearchParams(document.location.search.substring(1));
    let pageQuery = params.get("page");
    
    if(!params.has('page')){
      url.searchParams.set('page', 0);
      window.history.pushState({}, '', url);
    }else if(params.has('page') && pageQuery !== `${pageNumber}` && pageNumber !== '0'){
       url.searchParams.set('page', pageNumber);
       window.history.pushState({}, '', url);
    }  
   }


  const handlePageChange = (pageNumber) => {
    getActivePage(pageNumber);
    props.setStartIndex((pageNumber - 1) * 10);
    searchPage(pageNumber);
    console.log(pageNumber)
  };

useEffect(()=>{
  searchPage('0');
},[])


  return (
    <div className="next-page">
      <Pagination
        firstPageText={<span className="first-page">First</span>}
        lastPageText={<span className="last-page">Last</span>}
        prevPageText={<i className="fas fa-arrow-alt-circle-left"></i>}
        nextPageText={<i className="fas fa-arrow-alt-circle-right"></i>}
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={
          !searchedBooks.totalItems ? 100 : searchedBooks.totalItems
        }
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
}