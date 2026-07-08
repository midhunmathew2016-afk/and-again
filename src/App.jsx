import React, { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import ProductGallery from './components/ProductGallery'
import ProductDetail from './components/ProductDetail'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import ConfirmationPage from './components/ConfirmationPage'
import ContactPage from './components/ContactPage'
import WishlistPage from './components/WishlistPage'

import img01 from './assets/01.png'
import img02 from './assets/AVSDE5483.JPG'
import img03 from './assets/BFMNE4246.JPG'
import img04 from './assets/BTXE8099.PNG'
import img06 from './assets/CSDY5866[1].PNG'
import img07 from './assets/DNIO3131.PNG'
import img09 from './assets/EYPJE2333[1].JPG'
import img11 from './assets/HREFE9714[1].JPG'
import img12 from './assets/IMG_0298.jpeg'
import img14 from './assets/UYDH8932[1].PNG'
import img15 from './assets/XDNY5353.PNG'
import p1 from './assets/p1.jpeg'
import p1a from './assets/p1a.jpeg'
import p02 from './assets/p02.jpeg'
import p02a from './assets/p02.a.jpeg'
import p03 from './assets/p03.jpeg'
import p03a from './assets/p03a.jpeg'
import p04 from './assets/p04.PNG'
import p04a from './assets/p04a.jpeg'
import p04b from './assets/p04b.jpeg'
import p05 from './assets/p05.jpeg'
import p006 from './assets/p006.jpeg'
import pdghe5082 from './assets/PDGHE5082.JPG'
import p06 from './assets/p06.jpeg'
import p06a from './assets/p06a.jpeg'
import p07 from './assets/p07.jpeg'
import p07a from './assets/p07a.JPG'
import p08 from './assets/p08.jpeg'
import p09 from './assets/p09.jpeg'
import syhr5358 from './assets/SYHR5358.PNG'
import bronzeImage from './assets/28536596-af75-49a9-a8f7-5203c29b63ee.jpeg'
import hodmeImage from './assets/HODME1571[1].JPG'
import kasera1 from './assets/32fb18b0-5929-4d0c-90a5-6cc347b9b9e5.jpeg'
import kasera2 from './assets/68fe573d-975b-4efd-b668-e6203b72ede3.jpeg'
import kasera3 from './assets/5db78747-16b1-436d-9ace-5158982d2e44.jpeg'

const categories = ['All products', 'Restored furniture', 'New furniture', 'Wall decor', 'Artifacts']
const products = [
 

  {
    title: 'Raffles',
    description: 'Restored Classic raffles chair in teak wood and leather upholstery.',
    category: 'Restored furniture',
    vendor: 'And Again',
    price: 45000,
    img: img01,
    images: [img01, p1, p1a]
  },
  {
    title: 'Irit',
    description: 'An antique Israeli framed artwork showcasing a delicate bouquet of pressed, dried flowers on handmade paper, enclosed in a rustic, vine-textured border frame.',
    category: 'Wall decor',
    vendor: 'And Again',
    price: 15000,
    img: p006,
    images: [p006, p06, p06a]
  },
  {
    title: 'Indigo',
    description: 'An antique ceramic baluster vase featuring intricate blue-and-white floral arabesque patterns and formal geometric borders on an aged cream background.',
    category: 'Artifacts',
    vendor: 'And Again',
    price: 31000,
    img: img03,
    images: [img03, p08]
  },
  {
    title: 'Chanda',
    description: 'A round antique teak chest with three curved drawers, brass knobs, and tall cabriole legs.',
    category: 'New furniture',
    vendor: 'And Again',
    price: 22000,
    img: img04,
    images: [img04, p05]
  },
  {
    title: 'Flora',
    description: 'Beautiful rosewood rocking chair with smooth curves and intricate floral carvings.',
    category: 'Restored furniture',
    vendor: 'And Again',
    price: 51500,
    img: img06,
    images: [img06, p02, p02a]
  },
  {
    title: 'Koi',
    description: 'White porcelain baluster vase beautifully hand-painted with fluidly swimming red and black koi fish amidst delicate aquatic flora.',
    category: 'Artifacts',
    vendor: 'And Again',
    price: 24000,
    img: img07,
    images: [img07, bronzeImage]
  },
  {
    title: 'Rib',
    description: 'A striking dark-finished wooden vase intricately hand-carved with uniform, horizontal ribbed grooves across its tapered, ovular body.',
    category: 'Artifacts',
    vendor: 'And Again',
    price: 9000,
    img: img09,
    images: [img09, p09]
  },
  {
    title: 'Orchids',
    description: 'An antique botanical print depicting a pair of elegant slipper orchids, beautifully presented within a wide, age-toned mat and a weathered frame.',
    category: 'Wall decor',
    vendor: 'And Again',
    price: 12000,
    img: p07a,
    images: [p07a, p07]
  },
  {
    title: 'Takhna',
    description: 'An antique teak centre table featuring a naturally distressed top, a single functional drawer, and distinctively carved cabriole legs.',
    category: 'Restored furniture',
    vendor: 'And Again',
    price: 17000,
    img: img12,
    images: [img12, p03, p03a]
  },
  {
    title: 'Malabar',
    description: 'Antique teak armchair featuring a slatted backrest, gently curved armrests, and intricately turned front legs with a richly grained, weathered finish.',
    category: 'Restored furniture',
    vendor: 'And Again',
    price: 22000,
    img: pdghe5082,
    images: [pdghe5082, p04a, p04b]
  },
  {
    title: 'Kasera',
    description: 'A vintage rosewood side chair featuring a tightly woven rattan seat and backrest, accented by classically turned legs and upright finials.',
    category: 'Restored furniture',
    vendor: 'And Again',
    price: 19000,
    img: hodmeImage,
    images: [hodmeImage, kasera1, kasera2, kasera3]
  },
  {
    title: 'Blossom',
    description: 'A vintage hand-painted ceramic wall plate featuring a vibrant wreath of crimson flowers, rich green foliage, and delicate blue berry accents.',
    category: 'Wall decor',
    vendor: 'And Again',
    price: 9500,
    img: img15,
    images: [img15, syhr5358]
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
  const [wishlist, setWishlist] = useState(() => {
    try {
      const raw = window.localStorage.getItem('wishlist')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
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

  useEffect(() => {
    window.localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const navigate = (path) => {
    window.location.hash = path
    const scrollTarget = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    }

    requestAnimationFrame(scrollTarget)
    window.setTimeout(scrollTarget, 80)
  }

  useEffect(() => {
    const sections = [{ category: 'All products', id: 'all-products-section' }, ...categories.map((category) => ({
      category,
      id: category.toLowerCase().replace(/\s+/g, '-')
    }))]

    const handleScroll = () => {
      const offset = 180
      const activeSection = [...sections]
        .reverse()
        .find((section) => {
          const element = document.getElementById(section.id)
          return element?.getBoundingClientRect().top <= offset
        })

      if (activeSection && activeSection.category !== selectedCategory) {
        setSelectedCategory(activeSection.category)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [selectedCategory])

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return products
    return products.filter((product) => {
      const haystack = [product.title, product.description, product.category, product.vendor]
        .join(' ')
        .toLowerCase()
      return haystack.includes(query)
    })
  }, [searchQuery])

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
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  const handleToggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.title === product.title)
      if (exists) {
        return current.filter((item) => item.title !== product.title)
      }
      return [...current, product]
    })
  }

  const isInWishlist = (product) => wishlist.some((item) => item.title === product.title)

  const handleHeaderSearch = (query) => {
    setSearchQuery(query)
    setSelectedCategory('All products')
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToCategory = (category) => {
    const id = category === 'All products' ? 'all-products-section' : category.toLowerCase().replace(/\s+/g, '-')
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    navigate('/')
    window.setTimeout(() => scrollToCategory(category), 200)
  }

  const handleLogoClick = () => {
    setSelectedCategory('All products')
    setSearchQuery('')
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        wishlistCount={wishlist.length}
        onCartClick={() => navigate('/cart')}
        onSearchClick={handleHeaderSearch}
        onContactClick={() => navigate('/contact')}
        onWishlistClick={() => navigate('/wishlist')}
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onLogoClick={handleLogoClick}
      />

      {activeRoute === '/' && (
        <CategoryNav
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={(category) => {
            setSelectedCategory(category)
            scrollToCategory(category)
          }}
        />
      )}

      <main>
        {activeRoute === '/' && (
          <>
            <Hero />

            <section className="bg-white py-16">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[1.5rem] md:text-3xl font-serif tracking-tight">What We Do</h2>
                <p className="mt-5 text-base leading-8 text-gray-600">
                  Every vintage piece carries memories. We collect, curate, and restore furniture and decor from across India, including pieces shared by people who believe they deserve another home. It’s our way of preserving timeless design while embracing a more sustainable future.
                </p>
              </div>
            </section>

            <ProductGallery
              products={filteredProducts}
              categories={categories}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onProductClick={handleProductClick}
              onAddToCart={handleAddToCart}
              onViewCart={() => navigate('/cart')}
              cartQuantity={cartQuantity}
              onToggleWishlist={handleToggleWishlist}
              isProductInWishlist={isInWishlist}
            />
          </>
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

        {activeRoute === '/contact' && (
          <ContactPage onBack={() => navigate('/')} />
        )}

        {activeRoute === '/wishlist' && (
          <WishlistPage
            wishlist={wishlist}
            onOpenProduct={handleProductClick}
            onRemoveFromWishlist={handleToggleWishlist}
            onAddToCart={(product) => {
              handleAddToCart(product)
              navigate('/cart')
            }}
            onContinueShopping={() => navigate('/')}
            formatPrice={formatPrice}
          />
        )}
      </main>
    </div>
  )
}


