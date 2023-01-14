import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header class="header">
        <span class="logo-nav">B.Monroe Consulting</span>
        <nav class="main-nav">
            <ul class="main-nav-list">
                <Link class="main-nav-link" href="#">HOME</Link>
                <Link class="main-nav-link" href="#">WHAT WE DO</Link>
                <Link class="main-nav-link" href="#">SERVICES</Link>
                <Link class="main-nav-link" href="#">ABOUT</Link>
                <Link class="main-nav-link nav-cta" href="#">CONTACT</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar