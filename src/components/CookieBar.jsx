import React, {useState, useEffect} from 'react'

export default function CookieBar(){
  const [show, setShow] = useState(false)

  useEffect(()=>{
    const accepted = localStorage.getItem('cookies_accepted')
    if(!accepted) setShow(true)
  },[])

  function accept(){
    localStorage.setItem('cookies_accepted','1')
    setShow(false)
  }

  if(!show) return null

  return (
    <div className="fixed left-0 right-0 bottom-0 bg-white border-t shadow-lg p-4 flex items-center justify-between max-w-7xl mx-auto">
      <div className="text-sm text-gray-700">We use cookies to make your experience better. By using this site you agree to our cookies policy.</div>
      <div className="flex items-center gap-2">
        <button onClick={()=>setShow(false)} className="text-sm px-3 py-1">Dismiss</button>
        <button onClick={accept} className="bg-black text-white px-3 py-1 text-sm">Allow Cookies</button>
      </div>
    </div>
  )
}
