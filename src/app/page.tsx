import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main>
      <div>HomePage</div>
      <Link href='./login'>Login</Link><p></p>
      <Link href="./signup">Sign Up</Link>
    </main> 
    
  )
}

export default HomePage