import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-slate-900">
      <div className="h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2200&q=80')" }}>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 flex h-full items-end px-6 py-10 md:px-12 md:py-16">
          <div className="max-w-3xl rounded-[2rem] bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-600">Featured collection</p>
            <h1 className="mt-4 text-4xl font-serif tracking-tight text-slate-900 md:text-5xl">Elevated interiors for modern homes</h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
              Discover furniture, accessories and wall decor designed to bring warmth, calm and craftsmanship to every room.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
