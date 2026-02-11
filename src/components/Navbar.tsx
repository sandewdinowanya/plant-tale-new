'use client'
import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div>
            <h1>MyApp</h1>
            <div>
                <Link href='#about'>About</Link>
                <Link href="#services">Services</Link>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar