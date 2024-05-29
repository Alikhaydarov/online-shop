import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        {/* <Image src={"https://mrit.uz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b5c244a9.png&w=384&q=75"} alt='image' width={150} height={40} /> */}Logo
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-gray-900 font-semibold">Home page</Link>
        <Link href={"/contact"} className="mr-5 hover:text-gray-900 font-semibold">Contact</Link>
        <Link href={"/products"} className="mr-5 hover:text-gray-900 font-semibold">All products</Link>
      </nav>
      <div className='flex items-center space-x-2.5 text-sm'>
        <Link href={"/shopping-cart"}>
          <button className='button bg-blue-600 text-white border-blue-600  hover:bg-transparent hover:text-black'>
            My Bag
          </button>
        </Link>
        {/* <button className='button bg-transparent text-black border-blue-600  hover:bg-blue-600 hover:border-transparen hover:text-white'>
          My Bag
        </button> */}
      </div>
    </header>
  )
}
