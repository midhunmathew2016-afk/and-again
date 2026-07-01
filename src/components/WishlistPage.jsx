
export default function WishlistPage({ wishlist, onOpenProduct, onRemoveFromWishlist, onAddToCart, onContinueShopping, formatPrice }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-[1.5rem] md:text-3xl font-serif text-gray-900">Your wishlist</h2>
            <p className="mt-2 text-sm text-gray-500">Saved pieces ready for your next decision.</p>
          </div>
          <p className="text-sm font-semibold text-gray-700">{wishlist.length} item{wishlist.length === 1 ? '' : 's'}</p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlist.map((product) => (
              <article key={product.title} className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50">
                <button type="button" onClick={() => onOpenProduct(product)} className="w-full text-left">
                  <div className="h-72 w-full overflow-hidden bg-white p-4">
                    <img src={product.img} alt={product.title} className="h-full w-full rounded-xl object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-[0.16em] text-gray-500">{product.category}</p>
                    <h3 className="mt-1 text-[1rem] md:text-lg font-semibold text-gray-900">{product.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{formatPrice(product.price)}</p>
                  </div>
                </button>

                <div className="px-5 pb-5 space-y-3">
                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="w-full rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-900"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemoveFromWishlist(product)}
                    className="w-full rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    Remove from wishlist
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-slate-50 p-10 text-center text-gray-600">
            No items in your wishlist yet. Tap the heart icon on a product image to save it.
          </div>
        )}

        <button
          type="button"
          onClick={onContinueShopping}
          className="mt-8 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
        >
          Continue shopping
        </button>
      </div>
    </section>
  )
}


