

import React from 'react'

export const PageSize = ({ onSizeChange, currentSize }) => {

    
    const arr = Array.from({ length: 6 }, (_, i) => (i + 1) * 5);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                {
                    arr.map((i) =>
                        <li key={i} className={`page-item ${currentSize === i && 'active'}`} >
                            <a className="page-link" onClick={() => onSizeChange(i)}>{i}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}