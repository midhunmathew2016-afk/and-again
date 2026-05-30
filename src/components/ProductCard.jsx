export default function ProductCard({ product, formatPrice, onClick, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] bg-slate-50 shadow-sm">
      <button type="button" className="group block text-left" onClick={() => onClick(product)}>
        <img
          src={product.img}
          alt={product.title}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="p-6">
          <h4 className="text-xl font-semibold">{product.title}</h4>
          <p className="mt-3 text-sm leading-6 text-gray-600">{product.description}</p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-lg font-semibold text-gray-900">{formatPrice(product.price)}</span>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onAddToCart(product)
              }}
              className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:border-black hover:bg-black hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </button>
    </article>
  )
}
