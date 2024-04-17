import React, { useState } from 'react';

interface GenericTableProps {
  title: string;
  data: Record<string, string>[];
  itemsPerPage?: number;
}

const GenericTable: React.FC<GenericTableProps> = ({ title, data, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data) {
    return <div>No data available yet !</div>;
  }
  else if (data.length === 0) {
    return <div>No data available yet !</div>;
  }
  
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <table className="min-w-full table-auto divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {Object.values(item).map((value, valueIndex) => (
                <td key={valueIndex} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button onClick={handlePrevPage} disabled={currentPage === 1} className="mr-2 bg-slate-100 hover:bg-gray-200 text-gray-500 hover:text-black-500 font-bold py-2 px-4 rounded">
            Previous
          </button>)}
        <div className="mx-2 p-5">
          Page {currentPage} of {totalPages}
        </div>
        {(currentPage < totalPages && currentPage != totalPages) && (<button onClick={handleNextPage} disabled={currentPage === totalPages} className="ml-2 bg-slate-100 hover:bg-gray-200 text-gray-500 hover:text-black-500 font-bold py-2 px-4 rounded">
          Next
        </button>)}
      </div>

    </div>
  );
};

export default GenericTable;
