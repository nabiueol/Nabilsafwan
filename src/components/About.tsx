import React from 'react'
import Hero from './Hero'
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
function About() {
    return (
        <>
           <div className='container'>
        <div className='flex flex-wrap'>
            <div className='w-full px-4 mb-10 lg:w-1/2'>
                <h1 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Saya</h1>
                <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl'>Mau kenalan??</h2>
                <p className='font-medium text-base text-secondary max-w-xl lg:text-xl'>Yaudah, kenalin Saya Muhammad Nabil Safwan, biasa dipanggil Nabil.</p>
            </div>
            <div className='w-full px-4 mb-10 lg:w-1/2'>
                <h3 className='font-semibold text-dark text-2xl mb-4 lg:pt-10'>Kalau mau stalking nih</h3>
                <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem expedita animi amet, illo, ducimus repudiandae ab perferendis iusto dolor laboriosam provident ipsa vitae magni cumque, praesentium numquam voluptate nihil!</p>
                <div className='flex items-center'>
                  <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaInstagram size={30} />
                  </Link>
                  <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary'>
                    <FaTiktok size={30} />
                  </Link>
                </div>
            </div>
        </div>
    </div>
        </>

    )
}

export default About