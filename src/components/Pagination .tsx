import  { useState } from "react";

const Pagination = ({ data, itemsPerPage}: {data: string[] , itemsPerPage: number}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Handle page change
    const handlePageChange = (pageNumber: any) => {
      setCurrentPage(pageNumber);
    };
  
    // Function to generate pagination numbers
    const getPaginationNumbers = () => {
      const pages = [];
  
      // Always show the first 4 pages
      for (let i = 1; i <= 4; i++) {
        pages.push(i);
      }
  
      // Show ellipsis if there are more than 5 pages
      if (totalPages > 5) {
        pages.push("...");
      }
  
      // Always show the last page
      if (totalPages > 5) {
        pages.push(totalPages);
      }
  
      return pages;
    };

  return (
    <div className="flex items-center justify-center gap-2 my-8">
      {getPaginationNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-4 py-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 cursor-pointer rounded-full ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : " hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;