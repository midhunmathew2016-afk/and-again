export default function ConfirmationPage({ checkoutData, onContinueShopping, onViewCart }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-10 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-serif">Order Confirmed</h3>
          <p className="mt-4 text-gray-600">
            Thank you, {checkoutData.name || 'customer'}. Your order has been received and is being prepared for shipping.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            An email confirmation has been sent to {checkoutData.email || 'your inbox'}.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onContinueShopping}
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
            >
              Back to shop
            </button>
            <button
              type="button"
              onClick={onViewCart}
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:text-black"
            >
              View cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
