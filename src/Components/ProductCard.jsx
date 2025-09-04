import React from 'react'

const ProductCard = () => {
  return (
    <div className=" group cursor-pointer">
      <div className="card hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img 
            src=""
            alt="Product"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Quick View
            </button>
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
              Category
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            Product Name
          </h3>
          <p className="text-2xl font-bold text-gray-900">
            $99.00
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard