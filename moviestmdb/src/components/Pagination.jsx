import React from 'react';
import '../App.css'
import Pagination from 'react-bootstrap/Pagination';

const PaginationButton = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className='d-flex justify-content-center'>
      <ul className="pagination">
        <Pagination>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
          </li>
          {pages.map((page) => (
            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              <Pagination.Item onClick={() => handleClick(page)}>{currentPage}</Pagination.Item>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <Pagination.Next  onClick={() => handleClick(currentPage + 1)} />
          </li>
        </Pagination>
        {/* <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage - 1)}>&laquo;</button>
        </li>
        {pages.map((page) => (
          <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handleClick(page)}>{page}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handleClick(currentPage + 1)}>&raquo;</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default PaginationButton;
