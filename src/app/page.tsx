import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main>
      <div>HomePage</div>
      <Link href='./navigation-bar'>Login</Link>
    </main>
    
  )
}

export default HomePage