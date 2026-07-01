export default function CartPage({
  cart,
  cartQuantity,
  cartTotal,
  onContinueShopping,
  onCheckout,
  onUpdateQuantity,
  onRemove
}) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-gray-200 bg-slate-50 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[1.5rem] md:text-2xl font-serif">Your cart</h3>
              <p className="mt-1 text-sm text-gray-500">Review the pieces you want to bring home.</p>
            </div>
            <div className="text-right text-sm text-gray-600">{cartQuantity} items</div>
          </div>

          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div key={idx} className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-4 md:grid-cols-[140px_1fr_auto]">
                  <img src={item.product.img} alt={item.product.title} className="h-32 w-full rounded-3xl object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold">{item.product.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{item.product.category}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.product.price)}</p>
                    <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product, -1)}
                        className="rounded-full border border-gray-300 px-3 py-1"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product, 1)}
                        className="rounded-full border border-gray-300 px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-sm text-gray-500">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(item.product.price * item.quantity)}</span>
                    <button
                      type="button"
                      onClick={() => onRemove(item.product)}
                      className="text-sm font-semibold text-gray-600 hover:text-black"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
              Your cart is empty. Add a few favorites to continue.
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">Secure checkout with trusted payment processing.</p>
              <p className="mt-1 text-[1.5rem] md:text-2xl font-semibold text-gray-900">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onContinueShopping}
                className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:text-black"
              >
                Continue shopping
              </button>
              <button
                type="button"
                onClick={onCheckout}
                disabled={cart.length === 0}
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                Checkout now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
