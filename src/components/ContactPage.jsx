export default function ContactPage({ onBack }) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-gray-200 bg-slate-50 p-8 sm:p-10">
          <p className="text-sm tracking-[0.2em] text-gray-500">Contact details</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-serif text-gray-900">Get in touch</h2>
          <p className="mt-4 text-gray-600">For product questions, order updates, and delivery support, contact us through the details below.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-xs tracking-[0.15em] text-gray-500">Email</p>
              <a href="mailto:andagain.in@gmail.com" className="mt-2 block text-lg font-semibold text-gray-900 hover:text-black">
                andagain.in@gmail.com
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-xs tracking-[0.15em] text-gray-500">Phone</p>
              <a href="tel:+919048610091" className="mt-2 block text-lg font-semibold text-gray-900 hover:text-black">
                +91 9048610091
              </a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="text-xs tracking-[0.15em] text-gray-500">Instagram</p>
              <a href="https://instagram.com/andagain.in" target="_blank" rel="noreferrer" className="mt-2 block text-lg font-semibold text-gray-900 hover:text-black">
                @andagain.in
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="mt-8 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-black hover:text-black"
          >
            Back to shopping
          </button>
        </div>
      </div>
    </section>
  )
}