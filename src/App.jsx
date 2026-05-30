import React, { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import ProductGallery from './components/ProductGallery'
import ProductDetail from './components/ProductDetail'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import ConfirmationPage from './components/ConfirmationPage'

const categories = ['All products', 'Used furniture', 'New furniture', 'Accessories', 'Wall decor']
const products = [
  {
    title: 'Curated lounge chair',
    description: 'A sculptural statement chair with warm wood details and tactile upholstery.',
    category: 'Used furniture',
    vendor: 'The Edit',
    price: 395000,
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80'
  },
  {
    title: 'Textured ceramic vase',
    description: 'Hand-finished accessories designed to layer with everyday objects.',
    category: 'Accessories',
    vendor: 'The Edit',
    price: 15250,
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80'
  },
  {
    title: 'Modern oak sideboard',
    description: 'Clean-lined storage with a softly rounded silhouette for living rooms.',
    category: 'New furniture',
    vendor: 'The Edit',
    price: 171000,
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80'
  },
  {
    title: 'Gallery wall styling',
    description: 'Complete wall decor sets for layered, atmospheric interiors.',
    category: 'Wall decor',
    vendor: 'The Edit',
    price: 49600,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80'
  }
]

const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value)

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All products')
  const [searchQuery, setSearchQuery] = useState('')
  const [route, setRoute] = useState(() => window.location.hash.replace('#', '') || '/')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/'
      setRoute(hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
  }

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase()
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'All products' || product.category === selectedCategory
      const matchesSearch =
        product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0)

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.product.title === product.title)
      if (existing) {
        return currentCart.map((item) =>
          item.product.title === product.title
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...currentCart, { product, quantity }]
    })
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    navigate('/product')
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    navigate('/cart')
  }

  const handleBuyNow = (product) => {
    addToCart(product)
    navigate('/checkout')
  }

  const handleCheckoutSubmit = (event) => {
    event.preventDefault()
    navigate('/confirmation')
  }

  const handleCheckoutChange = (event) => {
    const { name, value } = event.target
    setCheckoutData((current) => ({ ...current, [name]: value }))
  }

  const handleUpdateQuantity = (product, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.product.title === product.title
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemove = (product) => {
    setCart((currentCart) => currentCart.filter((item) => item.product.title !== product.title))
  }

  const activeRoute = route === '/product' && !selectedProduct ? '/' : route

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header
        cartQuantity={cartQuantity}
        onCartClick={() => navigate('/cart')}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={(category) => {
          setSelectedCategory(category)
          const productsSection = document.getElementById('products-section')
          productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
      />

      <main>
        <Hero />

        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif tracking-tight">Our story</h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              AND AGAIN began with a love for objects that feel both familiar and refined. We create purposeful, modern interiors with thoughtful craftsmanship, timeless materials, and a soft approach to everyday luxury.
            </p>
          </div>
        </section>

        {activeRoute === '/' && (
          <ProductGallery
            products={filteredProducts}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setSelectedCategory(category)
              const productsSection = document.getElementById('products-section')
              productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onViewCart={() => navigate('/cart')}
            cartQuantity={cartQuantity}
          />
        )}

        {activeRoute === '/product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            formatPrice={formatPrice}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onBack={() => navigate('/')}
          />
        )}

        {activeRoute === '/cart' && (
          <CartPage
            cart={cart}
            cartQuantity={cartQuantity}
            cartTotal={cartTotal}
            onContinueShopping={() => navigate('/')}
            onCheckout={() => navigate('/checkout')}
            onUpdateQuantity={handleUpdateQuantity}
            onRemove={handleRemove}
          />
        )}

        {activeRoute === '/checkout' && (
          <CheckoutPage
            checkoutData={checkoutData}
            onChange={handleCheckoutChange}
            onSubmit={handleCheckoutSubmit}
            cartQuantity={cartQuantity}
            cartTotal={cartTotal}
            onBack={() => navigate('/cart')}
          />
        )}

        {activeRoute === '/confirmation' && (
          <ConfirmationPage
            checkoutData={checkoutData}
            onContinueShopping={() => {
              setCart([])
              setCheckoutData({ name: '', email: '', address: '', cardNumber: '', expiry: '', cvv: '' })
              navigate('/')
            }}
            onViewCart={() => navigate('/cart')}
          />
        )}
      </main>
    </div>
  )
}
