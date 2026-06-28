import { useState } from 'react'
import logoSrc from '../assets/ChatGPT Image May 20, 2026 at 12_34_26 PM.png'

export default function Header({
  cartQuantity,
  wishlistCount,
  onCartClick,
  onSearchClick,
  onContactClick,
  onWishlistClick,
  categories = [],
  onCategorySelect,
  onLogoClick
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    onSearchClick(searchQuery.trim())
    setSearchOpen(false)
  }

  const clearSearch = () => {
    setSearchQuery('')
    onSearchClick('')
    setSearchOpen(true)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            <div className="flex md:hidden">
              <button
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="pointer-events-none absolute inset-x-0 flex justify-center">
              <button
                type="button"
                onClick={onLogoClick}
                className="pointer-events-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-transparent transition hover:scale-[1.02] sm:h-16 sm:w-16 md:h-20 md:w-20"
                aria-label="Go to home"
              >
                <img src={logoSrc} alt="and again logo" className="h-10 w-10 rounded-full object-contain sm:h-12 sm:w-12 md:h-16 md:w-16" />
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 md:ml-auto">
              <div
                className="relative hidden h-10 items-center md:flex"
                onMouseEnter={() => setSearchOpen(true)}
                onMouseLeave={() => {
                  if (!searchQuery) {
                    setSearchOpen(false)
                  }
                }}
              >
                <div className={`flex h-full items-center rounded-full bg-white px-2 shadow-sm transition-all duration-200 min-h-[40px] ${searchOpen ? 'w-[18rem]' : 'w-10'}`}>
                  {!searchOpen ? (
                    <button
                      className="flex h-full w-full items-center justify-center text-gray-700"
                      onClick={() => setSearchOpen(true)}
                      aria-label="Open search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6.5-6.5M11 5a6 6 0 100 12 6 6 0 000-12z" />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchOpen(true)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="h-full w-full bg-transparent text-sm outline-none"
                        autoFocus
                      />
                      {searchQuery && (
                        <button type="button" onClick={clearSearch} className="ml-2 text-gray-400 hover:text-black" aria-label="Clear search">
                          ×
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={onContactClick}
                className="text-gray-700 hover:text-black"
                aria-label="Contact us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              <button
                onClick={onWishlistClick}
                className="relative text-gray-700 hover:text-black"
                aria-label="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 text-[0.65rem] font-semibold text-gray-900">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onCartClick}
                className="relative text-gray-700 hover:text-black"
                aria-label="Shopping cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13l-1 7h13l-1-7M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                {cartQuantity > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 text-[0.65rem] font-semibold text-gray-900">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="bg-white py-2 md:hidden">
              <div className="flex flex-col gap-1 px-2 text-sm text-gray-700">
                <button onClick={() => { onLogoClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left transition hover:bg-gray-100">Home</button>
                <p className="px-3 pt-3 pb-1">Shop</p>
                {categories.filter((category) => category !== 'All products').map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onCategorySelect(category)
                      setMenuOpen(false)
                    }}
                    className="rounded-lg px-6 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-100"
                  >
                    {category}
                  </button>
                ))}
                <button onClick={() => { onWishlistClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left transition hover:bg-gray-100">Wishlist</button>
                <button onClick={() => { onContactClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left transition hover:bg-gray-100">Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

