export default function CheckoutPage({ cartQuantity, cartTotal, onBack }) {
  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-[1.5rem] md:text-2xl font-serif">Contact for your order</h3>
              <p className="mt-2 text-sm text-gray-500">There is no payment step on this storefront. For any order or delivery query, reach out directly through the details below.</p>
            </div>
            <div className="rounded-full bg-white px-5 py-3 text-sm tracking-[0.18em] text-gray-700">
              {cartQuantity} items • {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(cartTotal)}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-gray-200 bg-white p-6 sm:p-8">
            <p className="text-sm tracking-[0.2em] text-gray-500">Contact details</p>
            <h4 className="mt-2 text-[1.5rem] md:text-2xl font-serif text-gray-900">We’re here to help</h4>
            <p className="mt-3 text-sm leading-7 text-gray-600">Please contact us for requests, purchase support, or delivery updates.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href="mailto:andagain.in@gmail.com" className="rounded-2xl border border-gray-200 bg-slate-50 p-5 transition hover:border-black hover:bg-white">
                <p className="text-xs tracking-[0.15em] text-gray-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">andagain.in@gmail.com</p>
              </a>
              <a href="tel:+919048610091" className="rounded-2xl border border-gray-200 bg-slate-50 p-5 transition hover:border-black hover:bg-white">
                <p className="text-xs tracking-[0.15em] text-gray-500">Phone</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">+91 90486 10091</p>
              </a>
              <a href="https://instagram.com/andagain.in" target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 bg-slate-50 p-5 transition hover:border-black hover:bg-white">
                <p className="text-xs tracking-[0.15em] text-gray-500">Instagram</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">@andagain.in</p>
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:text-black"
            >
              Back to cart
            </button>
            <a
              href="mailto:andagain.in@gmail.com?subject=Order%20enquiry"
              className="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
