import React from 'react'
import heroImage from '../assets/img.png'

export default function Hero() {
  return (
    <section className="relative bg-slate-900">
      <div className="h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black/0"></div>
      </div>
    </section>
  )
}
