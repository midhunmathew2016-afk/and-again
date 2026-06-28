
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
              className={`absolute right-2 top-2 z-20 rounded-full p-2 shadow-md transition duration-200 ${isInWishlist ? 'bg-red-500 hover:bg-red-600' : 'bg-white hover:bg-gray-100'}`}
              aria-label="Add to wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition duration-200 ${isInWishlist ? 'fill-white text-white' : 'text-gray-400 hover:text-red-500'}`}
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill={isInWishlist ? 'currentColor' : 'none'}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-6 pb-6 pt-4">
          <h4 className="text-xl font-semibold">{product.title}</h4>
          <div className="mt-3">
            <span className="text-lg font-semibold text-gray-900">{formatPrice(product.price)}</span>
          </div>
        </div>
      </button>
    </article>
  )
}


