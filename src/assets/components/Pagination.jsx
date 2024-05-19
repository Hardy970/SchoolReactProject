// Pagination.js
import React from 'react';
import '../css/Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">...</a></li>
        <li><a href="#">33</a></li>
      </ul>
    </div>
  );
}

export default Pagination;
