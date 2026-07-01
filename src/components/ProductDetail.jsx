import { useEffect, useRef, useState } from 'react'

export default function ProductDetail({ product, formatPrice, onAddToCart, onBuyNow, onBack }) {
  const [expandedSection, setExpandedSection] = useState('description')
  const [selectedImage, setSelectedImage] = useState(0)
  const touchStartX = useRef(null)
  const images = product.images?.length ? product.images : [product.img]

  const goPreviousImage = () => setSelectedImage((current) => Math.max(current - 1, 0))
  const goNextImage = () => setSelectedImage((current) => Math.min(current + 1, images.length - 1))

  useEffect(() => {
    setSelectedImage(0)
  }, [product])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].clientX
    const delta = endX - touchStartX.current
    if (delta > 40) {
      goPreviousImage()
    } else if (delta < -40) {
      goNextImage()
    }
  }

  // Product-specific content mapping
  const getProductContent = () => {
    const contentMap = {
      'Flora': {
        description: 'Beautiful rosewood rocking chair with smooth curves and intricate floral carvings.',
        materials: { primary: 'Rosewood', secondary: null },
        type: 'Restored furniture',
        dimensions: '520W x 530D x 1015H mm'
      },
      'Takhna': {
        description: 'An antique teak centre table featuring a naturally distressed top, a single functional drawer, and distinctively carved cabriole legs.',
        materials: { primary: 'Teak wood', secondary: null },
        type: 'Restored furniture',
        dimensions: '720W x 520D x 360H mm'
      },
      'Malabar': {
        description: 'Antique teak armchair featuring a slatted backrest, gently curved armrests, and intricately turned front legs with a richly grained, weathered finish.',
        materials: { primary: 'Teak wood', secondary: null },
        type: 'Restored furniture',
        dimensions: '490W x 560D x 900H mm'
      },
      'Chanda': {
        description: 'A round antique teak chest with three curved drawers, brass knobs, and tall cabriole legs.',
        materials: { primary: 'Teak wood', secondary: null },
        type: 'New furniture',
        dimensions: '405 (DIA) x 730H mm'
      },
      'Irit': {
        description: 'An antique Israeli framed artwork showcasing a delicate bouquet of pressed, dried flowers on handmade paper, enclosed in a rustic, vine-textured border frame.',
        materials: { primary: 'Dry flowers', secondary: 'Wooden frame' },
        type: 'Restored piece'
      },
      'Orchids': {
        description: 'An antique botanical print depicting a pair of elegant slipper orchids, beautifully presented within a wide, age-toned mat and a weathered frame.',
        materials: { primary: 'Floral print', secondary: null },
        type: 'Restored piece'
      },
      'Blossom': {
        description: 'A vintage hand-painted ceramic wall plate featuring a vibrant wreath of crimson flowers, rich green foliage, and delicate blue berry accents.',
        materials: { primary: 'Ceramic', secondary: null },
        type: 'Restored piece'
      },
      'Indigo': {
        description: 'An antique ceramic baluster vase featuring intricate blue-and-white floral arabesque patterns and formal geometric borders on an aged cream background.',
        materials: { primary: 'Ceramic', secondary: null },
        type: 'Restored piece',
        dimensions: '450H mm'
      },
      'Koi': {
        description: 'White porcelain baluster vase beautifully hand-painted with fluidly swimming red and black koi fish amidst delicate aquatic flora.',
        materials: { primary: 'Porcelain ceramic', secondary: null },
        type: 'New piece',
        dimensions: '350 (DIA) x 460H mm'
      },
      'Rib': {
        description: 'A striking dark-finished wooden vase intricately hand-carved with uniform, horizontal ribbed grooves across its tapered, ovular body.',
        materials: { primary: 'Wood', secondary: null },
        type: 'Restored piece'
      },
      'Raffles': {
        description: 'Restored Classic raffles chair in teak wood and leather upholstery.',
        materials: { primary: 'Teak wood', secondary: 'Leather' },
        type: 'Restored furniture',
        dimensions: '535W x 560D x 940H mm'
      },
      'Kasera': {
        description: 'A vintage rosewood side chair featuring a tightly woven rattan seat and backrest, accented by classically turned legs and upright finials.',
        materials: { primary: 'Rosewood and rattan', secondary: null },
        type: 'Restored furniture',
        dimensions: '460W x 510D x 950H mm'
      }
    }
    return contentMap[product.title] || {
      description: product.description,
      materials: { primary: 'Materials details unavailable', secondary: null },
      type: 'Restored furniture',
      dimensions: null
    }
  }
  
  const content = getProductContent()
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div
              className="relative rounded-[2rem] overflow-hidden bg-white md:h-[560px] w-full"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[selectedImage]}
                alt={`${product.title} ${selectedImage + 1}`}
                className="h-full w-full object-contain object-center"
              />
              {images.length > 1 && (
                <div className="absolute left-1/2 bottom-4 z-10 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        selectedImage === index ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3">
                {images.map((src, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`h-16 w-16 overflow-hidden rounded-xl border transition ${
                      selectedImage === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <img src={src} alt={`${product.title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <p className="text-sm tracking-[0.22em] text-gray-500">{product.category}</p>
              <h3 className="mt-1 text-[1.5rem] md:text-3xl font-serif tracking-tight">{product.title}</h3>
              <p className="mt-2 text-[1.25rem] md:text-2xl font-semibold text-gray-900" style={{ letterSpacing: '1px' }}>{formatPrice(product.price)}</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setExpandedSection(expandedSection === 'description' ? null : 'description')}
                className="w-full flex items-center justify-between border-b border-gray-300 py-3 text-left text-sm font-semibold tracking-[0.08em] text-gray-900 hover:text-black"
              >
                <span>Description</span>
                <svg className={`h-5 w-5 transition ${expandedSection === 'description' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {expandedSection === 'description' && (
                <div className="py-3 text-sm text-gray-600">
                  <p>{content.description}</p>
                </div>
              )}
              <button
                onClick={() => setExpandedSection(expandedSection === 'materials' ? null : 'materials')}
                className="w-full flex items-center justify-between border-b border-gray-300 py-4 text-left text-sm font-semibold tracking-[0.08em] text-gray-900 hover:text-black"
              >
                <span>Materials & Finishes</span>
                <svg className={`h-5 w-5 transition ${expandedSection === 'materials' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {expandedSection === 'materials' && (
                <div className="py-3 text-sm text-gray-600 space-y-2">
                  <p>{content.materials.primary}</p>
                  {content.materials.secondary && (
                    <p className="text-xs text-gray-500">{content.materials.secondary}</p>
                  )}
                </div>
              )}

              <button
                onClick={() => setExpandedSection(expandedSection === 'type' ? null : 'type')}
                className="w-full flex items-center justify-between border-b border-gray-300 py-4 text-left text-sm font-semibold tracking-[0.08em] text-gray-900 hover:text-black"
              >
                <span>Type</span>
                <svg className={`h-5 w-5 transition ${expandedSection === 'type' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {expandedSection === 'type' && (
                <div className="py-3 text-sm text-gray-600">
                  <p>{content.type || 'Restored furniture'}</p>
                </div>
              )}

              {content.dimensions && (
                <>
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'dimensions' ? null : 'dimensions')}
                    className="w-full flex items-center justify-between border-b border-gray-300 py-4 text-left text-sm font-semibold tracking-[0.08em] text-gray-900 hover:text-black"
                  >
                    <span>Dimensions</span>
                    <svg className={`h-5 w-5 transition ${expandedSection === 'dimensions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  {expandedSection === 'dimensions' && (
                    <div className="py-3 text-sm text-gray-600">
                      <p>{content.dimensions}</p>
                    </div>
                  )}
                </>
              )}

              <button
                onClick={() => setExpandedSection(expandedSection === 'delivery' ? null : 'delivery')}
                className="w-full flex items-center justify-between border-b border-gray-300 py-4 text-left text-sm font-semibold tracking-[0.08em] text-gray-900 hover:text-black"
              >
                <span>Delivery</span>
                <svg className={`h-5 w-5 transition ${expandedSection === 'delivery' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {expandedSection === 'delivery' && (
                <div className="py-3 text-sm text-gray-600">
                  <p>For furniture order and delivery enquiries, please email us at andagain.in@gmail.com, as all items are made to order, and shipping costs will vary according to the item and location.</p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row pt-4 border-t border-gray-300">
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="flex-1 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={() => onBuyNow(product)}
                className="flex-1 rounded-full border border-black bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Buy now
              </button>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="text-sm font-semibold tracking-[0.16em] text-gray-600 hover:text-black"
            >
              Back to products
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
