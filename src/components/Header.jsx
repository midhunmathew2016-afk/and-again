import { useState } from 'react'

export default function Header({ cartQuantity, onCartClick, categories = [], selectedCategory, onCategorySelect }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <button
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-black" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.65 6.15z" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-x-0 flex justify-center pointer-events-none md:static md:justify-center">
              <div className="text-2xl font-serif tracking-[0.35em] uppercase">AND AGAIN</div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <button className="text-gray-600 hover:text-black" aria-label="Account">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-black" aria-label="Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onCartClick}
                className="relative text-gray-600 hover:text-black"
                aria-label="Shopping cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l-1 7h13l-1-7M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                {cartQuantity > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="border-t border-gray-200 bg-white py-3">
              <div className="flex flex-col gap-2 px-2 text-sm text-gray-700">
                <a href="#" className="rounded-lg px-3 py-2 hover:bg-gray-100">Shop</a>
                <a href="#" className="rounded-lg px-3 py-2 hover:bg-gray-100">About us</a>
                <a href="#" className="rounded-lg px-3 py-2 hover:bg-gray-100">Contact</a>
              </div>
            </div>
          )}
          {/* Category row directly under header so it stays visually attached */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-center gap-3 overflow-x-auto py-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      onCategorySelect?.(category)
                      const productsSection = document.getElementById('products-section')
                      productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`rounded-none border-0 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition ${
                      selectedCategory === category ? 'bg-black text-white shadow-sm' : 'bg-transparent text-gray-800 hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
