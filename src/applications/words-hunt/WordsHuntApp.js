import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageSize } from '../prods/PageSize';
import { Pagination } from '../prods/Pagination';

export const WordsHuntApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page'), 10) || 1;
  const pageSize = parseInt(searchParams.get('size'), 10) || 10;

  const handlePageChange = (page) => {
    const updatedSearchParams = { ...Object.fromEntries(searchParams), page: page.toString() };
    setSearchParams(updatedSearchParams);
  };

  const handlePageSize = (size) => {
    const updatedSearchParams = { ...Object.fromEntries(searchParams), size: size.toString() };
    setSearchParams(updatedSearchParams);
  };

  return (
    <div>
      <h1>Current Page: {currentPage}</h1>
      <h1>Current PageSize: {pageSize}</h1>
      <Pagination length={23} currentPage={currentPage} onPageChange={handlePageChange} />
      <Pagination length={8} currentPage={pageSize} onPageChange={handlePageSize} />
      <PageSize currentSize={pageSize} onSizeChange={handlePageSize}/>
    </div>
  );
};
