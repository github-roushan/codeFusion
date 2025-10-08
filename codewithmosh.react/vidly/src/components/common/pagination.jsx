import React from 'react';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(itemsCount / pageSize);
    const pages = Array.from({length: totalPages}, (_, i) => i+1);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li key="prev" className="page-item">
                    <a className="page-link" href="#">Prev</a>
                </li>
                {pages.map(page => 
                    <li key={page} className={page === currentPage ? 'page-item active': 'page-item'}>
                        <a className="page-link" href="#" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                )}
                <li key="next" className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;