import { NavLink, Link } from 'react-router-dom'

import React from 'react'

export const Pagination = ({ length = 10, currentPage, onPageChange }) => {

    const arr = Array.from({ length }, (_, i) => i + 1);

    const handlePageChange = (page) => {
        if (typeof page === 'number') {
            onPageChange(page + 1);
        } else {
            onPageChange(page);
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${currentPage <= 1 && 'disabled'}`}>
                    <a className="page-link" onClick={() => handlePageChange(currentPage - 2)} disabled>Previous</a>
                </li>
                {
                    arr.map((i) =>
                        <li key={i} className={`page-item ${currentPage === i && 'active'}`}>
                            <a className="page-link" onClick={() => handlePageChange(i - 1)}>{i}</a>
                        </li>
                    )
                }
                <li className={`page-item ${currentPage === length && 'disabled'}`}>
                    <a className="page-link" tabindex="-1" onClick={() => handlePageChange(currentPage)}>Next</a>
                </li>

            </ul>
        </nav>
    )
}
