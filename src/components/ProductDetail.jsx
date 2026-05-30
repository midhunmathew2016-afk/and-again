export default function ProductDetail({ product, formatPrice, onAddToCart, onBuyNow, onBack }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <img src={product.img} alt={product.title} className="rounded-[2rem] object-cover md:h-[560px] w-full" />
          <div className="flex flex-col justify-between rounded-[2rem] border border-gray-200 bg-slate-50 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-gray-500">{product.category}</p>
              <h3 className="mt-4 text-3xl font-serif tracking-tight">{product.title}</h3>
              <p className="mt-5 text-sm leading-7 text-gray-600">{product.description}</p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-lg font-semibold text-gray-900">
                <span>Price</span>
                <span>{formatPrice(product.price)}</span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
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
                className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-600 hover:text-black"
              >
                Back to products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
