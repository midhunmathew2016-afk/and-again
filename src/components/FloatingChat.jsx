import React from 'react'

export default function FloatingChat(){
  return (
    <button aria-label="chat" className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.2-3.9A7.72 7.72 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    </button>
  )
}
