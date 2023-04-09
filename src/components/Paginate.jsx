import React, { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';

const Paginate = ({ totalProducts, productLimit, setOffset, neighbourNumbers }) => {
  const products = [];
  const [current, setCurrent] = useState(1);
  const totalPerPage = Math.ceil(totalProducts / productLimit);
  const maxNumPage = Math.min(Math.max(neighbourNumbers * 2 + 2, neighbourNumbers + current + 1), totalPerPage + 1);
  const minNumPage = Math.min(Math.max(maxNumPage - (neighbourNumbers * 2 + 1), 1), Math.max(current - neighbourNumbers, 1));
  for (let i = minNumPage; i < maxNumPage; i++) {
    products.push(
      <button
        key={`Paginador-${i}`}
        onClick={() => {
          setCurrent(i);
          setOffset((i - 1) * totalPerPage);
        }}
        href="#"
        aria-current="page"
        className={`${getActiveClass(i)} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
      >
        {i}
      </button>
    );
  }
  function getActiveClass(i) {
    return i === current ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50';
  }
  const previousPage = () => {
    if (current > 1) {
      setCurrent(current - 1);
      setOffset((current - 2) * productLimit);
    }
  };
  const nextPage = () => {
    if (current < totalPerPage) {
      setCurrent(current + 1);
      setOffset(current * productLimit);
    }
  };
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{productLimit * (current - 1) + 1}</span> to{' '}
            <span className="font-medium">{current * productLimit < totalProducts ? current * totalPerPage : totalProducts}</span> of <span className="font-medium">{totalProducts}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => previousPage()}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {products}
            <button
              onClick={() => nextPage()}
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Paginate;
