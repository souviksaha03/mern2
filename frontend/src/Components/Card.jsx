import React from "react";

const Card = ({ item }) => {
  
  if (!item) {
    console.warn("Card skipped rendering: 'item' prop is missing.");
    return null; 
  }

  const handleDownload = () => {
    
    window.location.href = `http://localhost:4001/book/download/${item._id}`;
  };

 
  const handleBuy = () => {
  alert("This is a paid book. Redirecting to payment...");
  window.location.href = "/payment"; 
};


  return (
    <div className="max-w-xs bg-red-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-300 p-4">
      
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          // Use item.image with a safe fallback
          src={item.image || "/default-book-cover.jpg"} 
          alt={item.title || "Book Cover"}
          className="h-48 w-36 object-cover rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.subtitle}</p>
      </div>

      {/* Category Badge */}
      <div className="mt-3 flex justify-center">
        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-500 rounded-full">
          {item.category}
        </span>
      </div>

      {/* Action Button - Now safe to access item.isFree */}
      <div className="mt-4 flex justify-center">
        {item.isFree ? (
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Download Free
          </button>
        ) : (
          <button
            onClick={handleBuy}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;