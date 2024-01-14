import Link from "next/link";
import React from "react";

const Navbar = () => {
  return ( 
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
          <Link href="/">
            <a className='navbar__link relative'>
              HOME
            </a>
          </Link>
          <Link href="/categories">
            <a className='navbar__link relative'>
              CATEGORIES
            </a>
          </Link>
          <Link href="/mens">
            <a className='navbar__link relative'>
              MEN'S
            </a>
          </Link>
          <Link href="/womens">
            <a className='navbar__link relative'>
              WOMEN'S
            </a>
          </Link>
          <Link href="/jewelry">
            <a className='navbar__link relative'>
              JEWELRY
            </a>
          </Link>
          <Link href="/perfume">
            <a className='navbar__link relative'>
              PERFUME
            </a>
          </Link>
          <Link href="/blog">
            <a className='navbar__link relative'>
              BLOG
            </a>
          </Link>
          <Link href="/hot-offers">
            <a className='navbar__link relative'>
              HOT OFFERS
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
