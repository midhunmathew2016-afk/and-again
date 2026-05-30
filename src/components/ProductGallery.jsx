import ProductCard from './ProductCard'

export default function ProductGallery({
  products,
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  setSearchQuery,
  onProductClick,
  onAddToCart,
  onViewCart,
  cartQuantity
}) {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-end">
          <div className="w-full md:w-96">
            <label htmlFor="product-search" className="sr-only">Search products</label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" />
                </svg>
              </span>
              <input
                id="product-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="products-section" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-10">
            <div>
              <h3 className="text-2xl font-serif">Products</h3>
              <p className="mt-2 text-sm text-gray-500">Showing {products.length} products</p>
            </div>
            <button
              type="button"
              onClick={onViewCart}
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition hover:border-black hover:text-black"
            >
              Cart ({cartQuantity})
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.length > 0 ? (
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  formatPrice={(value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)}
                  onClick={onProductClick}
                  onAddToCart={onAddToCart}
                />
              ))
            ) : (
              <div className="col-span-full rounded-[1.5rem] border border-dashed border-gray-300 bg-slate-50 p-12 text-center text-gray-500">
                No products match your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  )
}
