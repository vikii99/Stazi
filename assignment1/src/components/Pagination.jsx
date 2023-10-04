import React from "react";

function Pagination({ currentPage, onPageChange }) {
  const renderPageNumbers = () => {
    const startPage = 1;
    const endPage = 10;
    const pageNumbers = [];

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 mx-1 rounded`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-200 py-2 px-4 mx-1 rounded"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 10}
        className="bg-gray-200 py-2 px-4 mx-1 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
