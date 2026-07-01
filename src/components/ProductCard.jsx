
export default function ProductCard({ product, formatPrice, onClick, onAddToCart, onAddToWishlist, isInWishlist }) {
  const handleWishlistClick = (e) => {
    e.stopPropagation()
    onAddToWishlist(product)
  }

  return (
    <article className="overflow-hidden rounded-[1.5rem] bg-slate-50 shadow-sm">
      <button type="button" className="group block text-left w-full" onClick={() => onClick(product)}>
        <div className="overflow-hidden bg-white transition duration-300 group-hover:scale-[1.02] px-6 relative">
          <div className="aspect-[4/5] w-full overflow-hidden relative">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-contain object-left-bottom rounded-md"
            />
            <button
              onClick={handleWishlistClick}
              className={`absolute right-2 top-2 z-20 transition duration-200 ${isInWishlist ? 'text-red-500' : 'text-gray-700 hover:text-black'}`}
              aria-label="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-6 pb-6 pt-4">
          <h4 className="text-xl">{product.title}</h4>
          <div className="mt-3">
            <span className="text-lg text-gray-900">{formatPrice(product.price)}</span>
          </div>
        </div>
      </button>
    </article>
  )
}


