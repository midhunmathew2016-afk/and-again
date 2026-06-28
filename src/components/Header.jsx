import { useState } from 'react'
import logoSrc from '../assets/ChatGPT Image May 20, 2026 at 12_34_26 PM.png'

export default function Header({ cartQuantity, wishlistCount, onCartClick, onSearchClick, onContactClick, onWishlistClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearchClick(searchQuery)
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-gray-200">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Hamburger Menu - Only visible on mobile */}
            <div className="flex md:hidden">
              <button
                className="text-gray-700 hover:text-black"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Logo - Centered on mobile, left on desktop */}
            <div className="absolute inset-x-0 flex justify-center pointer-events-none md:static md:justify-start md:relative">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-sm md:h-20 md:w-20">
                <img src={logoSrc} alt="and again logo" className="h-full w-full rounded-full object-cover" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 md:gap-6 md:ml-auto">
              {/* Search Icon with Search Bar */}
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-black"
                  onClick={() => setSearchOpen(!searchOpen)}
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6.5-6.5M11 5a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                </button>
                {searchOpen && (
                  <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-64">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        autoFocus
                      />
                      <button
                        onClick={handleSearch}
                        className="px-3 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                      >
                        Go
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Us Icon */}
              <button
                onClick={onContactClick}
                className="text-gray-700 hover:text-black"
                aria-label="Contact us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={onWishlistClick}
                className="text-gray-700 hover:text-black relative"
                aria-label="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-black px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                type="button"
                onClick={onCartClick}
                className="relative text-gray-700 hover:text-black"
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

          {/* Mobile Menu - Only visible on mobile */}
          {menuOpen && (
            <div className="border-t border-gray-200 bg-white py-3 md:hidden">
              <div className="flex flex-col gap-2 px-2 text-sm text-gray-700">
                <button onClick={() => { window.location.hash = '/'; setMenuOpen(false) }} className="rounded-lg px-3 py-2 text-left hover:bg-gray-100">Home</button>
                <button onClick={() => { onWishlistClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-2 text-left hover:bg-gray-100">Wishlist</button>
                <button onClick={() => { onContactClick(); setMenuOpen(false) }} className="rounded-lg px-3 py-2 text-left hover:bg-gray-100">Contact</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

