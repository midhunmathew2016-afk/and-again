import { useState } from 'react'
import logoSrc from '../assets/Logo bg removed.png'

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
    <header className="sticky top-0 z-50 bg-white shadow-sm overflow-visible">
      <div className="border-b border-gray-200">
        <div>
          {/* Nav row: fixed height so CategoryNav can stick just below */}
          <div className="relative h-20 md:h-28 flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center md:hidden">
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

            {/* Left Navigation - HOME only (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-8 justify-start leading-6">
              <button
                onClick={onLogoClick}
                className="text-sm font-normal leading-6 tracking-[0.32em] uppercase text-gray-700 hover:text-black transition border-b-2 border-transparent hover:border-black pb-1"
              >
                HOME
              </button>
              <button
                onClick={onContactClick}
                className="text-sm font-normal leading-6 tracking-[0.32em] uppercase text-gray-700 hover:text-black transition border-b-2 border-transparent hover:border-black pb-1"
              >
                CONTACT
              </button>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-50">
              <button type="button" onClick={onLogoClick} aria-label="Go to home">
              <img src={logoSrc} alt="and again logo" className="h-32 md:h-48 lg:h-56 w-auto max-w-[18rem] object-contain bg-transparent" />
              </button>
            </div>

            {/* Right side: CONTACT (desktop) then icons */}
            <div className="flex items-center justify-end gap-3 sm:gap-4 md:gap-5">

              {/* Search - Hidden on mobile */}
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
                      className="flex h-full w-full items-center justify-center text-gray-700 hover:text-black"
                      onClick={() => setSearchOpen(true)}
                      aria-label="Open search"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

              {/* Cart Icon */}
              <button
                type="button"
                onClick={onCartClick}
                className="relative text-gray-700 hover:text-black transition"
                aria-label="Shopping cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
                  <path d="M5 4h2l2.4 12.8a2 2 0 001.98 1.61H18a2 2 0 002-1.75L22 6H7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {cartQuantity > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 text-[0.65rem] font-semibold text-gray-900">
                    {cartQuantity}
                  </span>
                )}
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onWishlistClick}
                className="relative text-gray-700 hover:text-black transition"
                aria-label="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full border border-gray-200 bg-white px-1.5 py-0.5 text-[0.65rem] font-semibold text-gray-900">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Search Icon - Mobile */}
              <button
                className="md:hidden text-gray-700 hover:text-black transition"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6.5-6.5M11 5a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              </button>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-50">
              <button type="button" onClick={onLogoClick} aria-label="Go to home">
                <img src={logoSrc} alt="and again logo" className="h-32 md:h-48 lg:h-56 w-auto max-w-[18rem] object-contain bg-transparent" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="md:hidden py-2 border-t border-gray-100">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none"
                autoFocus
              />
            </div>
          )}

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="bg-white py-2 md:hidden border-t border-gray-100">
              <div className="flex flex-col gap-1 px-2 text-sm">
                <button onClick={() => { onLogoClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left text-xs tracking-widest text-gray-700 hover:bg-gray-100 transition font-medium">Home</button>
                <button onClick={() => { onContactClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left text-xs tracking-widest text-gray-700 hover:bg-gray-100 transition font-medium">Contact</button>
                <button onClick={() => { onWishlistClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-3 text-left text-xs tracking-widest text-gray-700 hover:bg-gray-100 transition font-medium">Wishlist</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

