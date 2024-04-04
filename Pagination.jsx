
// Pagination.js
import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageNumber, setPageNumber] = useState(currentPage.toString());

  const handleInputChange = (e) => {
    setPageNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPage = parseInt(pageNumber);
    if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    } else {
      setPageNumber(currentPage.toString());
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pageNumber} onChange={handleInputChange} />
        <span>/ {totalPages}</span>
        <button type="submit">Go</button>
      </form>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
