export default function CategoryNav({ categories, selectedCategory, onSelect }) {
  return (
    <div className="sticky top-[4.5rem] z-30 hidden bg-white md:block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 overflow-x-auto py-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`rounded-none border-0 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition ${
                selectedCategory === category
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-transparent text-gray-800 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
