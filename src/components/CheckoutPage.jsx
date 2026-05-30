export default function CheckoutPage({ checkoutData, onChange, onSubmit, cartQuantity, cartTotal, onBack }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-serif">Secure checkout</h3>
              <p className="mt-2 text-sm text-gray-500">Complete your order with trusted payment details.</p>
            </div>
            <div className="rounded-full bg-white px-5 py-3 text-sm uppercase tracking-[0.18em] text-gray-700">
              {cartQuantity} items • {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-10 grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-gray-700">
                Name
                <input
                  name="name"
                  type="text"
                  value={checkoutData.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-gray-700">
                Email
                <input
                  name="email"
                  type="email"
                  value={checkoutData.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-semibold text-gray-700">
              Shipping address
              <input
                name="address"
                type="text"
                value={checkoutData.address}
                onChange={onChange}
                required
                className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </label>

            <div className="grid gap-6 sm:grid-cols-3">
              <label className="space-y-2 text-sm font-semibold text-gray-700">
                Card number
                <input
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9 ]*"
                  value={checkoutData.cardNumber}
                  onChange={onChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-gray-700">
                Expiry
                <input
                  name="expiry"
                  type="text"
                  value={checkoutData.expiry}
                  onChange={onChange}
                  required
                  placeholder="MM/YY"
                  className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
              <label className="space-y-2 text-sm font-semibold text-gray-700">
                CVV
                <input
                  name="cvv"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={checkoutData.cvv}
                  onChange={onChange}
                  required
                  placeholder="123"
                  className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600">All data is encrypted and securely processed. Your purchase is protected by trusted payment providers.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onBack}
                  className="rounded-full border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-900 transition hover:border-black hover:text-black"
                >
                  Back to cart
                </button>
                <button
                  type="submit"
                  className="w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-900 sm:w-auto"
                >
                  Complete purchase
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
