export default function CategoryNav({ categories, selectedCategory, onSelect }) {
  return (
    <div className="sticky top-20 md:top-28 z-30 hidden bg-white md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 overflow-x-auto py-4 min-h-[72px] leading-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className="group rounded-2xl px-4 h-12 text-sm font-normal leading-6 tracking-[0.32em] uppercase transition"
            >
              <span
                className={`inline-block border-b-2 pb-1 transition ${
                  selectedCategory === category
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-700 group-hover:border-black group-hover:text-black'
                }`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
