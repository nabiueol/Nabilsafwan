"use client";
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portofolio from '@/components/Portofolio';
import Client from '@/components/Client';
import Blog from '@/components/Blog';
import Link from 'next/link';
import Kontak from '@/components/Kontak';
import Footer from '@/components/Footer';

function Page() {
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);


  return (
    <>
      <header
        className={`${
          header ? 'fixed bg-white bg-opacity-80 buram' : 'absolute bg-transparent'
        } top-0 left-0 w-full flex items-center z-10`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 relative">
            {/* Left side: Logo */}
            <div className="px-4">
              <Link className="font-bold text-lg text-primary block p-4" href="/">
                Nabil Safwan
              </Link>
            </div>
            
            {/* Right side: Menu button and nav */}
            <div className="flex items-center space-x-4">
              {/* Menu button */}
              <button className="lg:hidden" onClick={toggleMenu}>
                <span
                  className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                    menu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                    menu ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                    menu ? '-rotate-45 -translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
              </button>
              
              {/* Nav items */}
              <nav
                className={`${
                  !menu ? 'hidden' : 'block'
                } absolute py-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:block lg:rounded-none lg:shadow-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Portofolio
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <section className="pt-36 pb-32">
        <Hero />
      </section>
      <section className="pt-36 pb-32">
        <About />
      </section>
      <section className="pt-36 pb-32 bg-slate-100">
        <Portofolio />
      </section>
      <section className="pt-36 pb-32 bg-slate-700">
        <Client />
      </section>
      <section className="pt-36 pb-32">
        <Blog />
      </section>
      <section className="pt-36 pb-32">
        <Kontak />
      </section>
      <section className="bg-dark pt-24 pb-12">
        <Footer />
      </section>
    </>
  );
}

export default Page;