import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-rose-light h-screen flex flex-col justify-between">
      <Head>
        <title>Booksy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='h-24'>
        <nav className=''>
          <div className='flex gap-10 justify-center my-4 | lg:hidden'>
            <img className="h-9 w-9 cursor-pointer" src="images\menu.svg" />
            <h1 className="text-2xl font-black font-poppins lg:hidden ">Booksy</h1>
          </div>
          <ul className="hidden | lg:block grid grid-cols-6 justify-center items-center font-bold font-poppins text-center lowercase">
            <li href={'/'} className="p-2 m-2 cursor-pointer">Home</li>
            <li href={'/'} className="p-2 m-2 cursor-pointer">FAQ</li>
            <li href={'/'} className="p-2 m-2 cursor-pointer">Books</li>
            <li href={'/'} className="p-2 m-2 cursor-pointer">About</li>
            <li href={'/'} className="p-2 m-2 cursor-pointer">Translate</li>
            <li href={'/'} className="p-2 m-2 cursor-pointer">Sign Up</li>
          </ul>
        </nav>
      </header>

      <main className="bg-rose-light grid h-full | lg:grid-cols-2 justify-center items-center">
        <section className="h-full grid grid-rols-3">
          <div className="p-3 m-auto">
            <h1 className="font-poppins font-black mb-28 text-5xl">
              your book collection in one platform
            </h1>
            <p className="font-roboto text-1xl">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel tellus gravida, ornare nibh varius, egestas leo. Duis vitae odio non neque ultricies volutpat. Nam pretium elit ut eleifend fringilla.
            </p>
          </div>
          <button className='justify-self-center self-start font-black font-poppins text-1xl bg-black rounded-full text-white h-12 w-4/6 border-none outline-none hover:bg-green-light duration-150'>
            Get started
          </button>
        </section>
        <section className="hidden | lg:block">
          <img src="images\undrawn_side_img.svg" />
        </section>
      </main>

      <footer className="font-roboto text-1xl h-12 p-3 m-auto">
        Developed by <a className="outline-none" href='https://github.com/FernandaMendonca'>fefa</a>
      </footer>
    </div>
  )
}
