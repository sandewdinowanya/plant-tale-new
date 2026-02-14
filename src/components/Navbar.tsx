'use client'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="./plant-tale.png" className="logo"/>
            <div>
                <Link href='/'>Home</Link>
                <Link href='#services'>Services</Link>
                <Link href="#features">Features</Link>

                <Link href="/login" className="login">Login</Link>
                <Link href="/signup" className="signup">Sign Up</Link> 
            </div>
        </div>
    </nav>
  )
}

export default Navbar