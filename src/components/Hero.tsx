import React from 'react'
import Foto from '@/assets/ghost.png'
import Image from 'next/image'
function Hero() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full self-center p-4 lg:w-1/2'>
                        <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>Selamat Datang Di Website Saya <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Muhammad Nabil Safwan</span></h1>
                        <h2 className='font-medium text-secondary mb-10 text-lg lg:text-2xl'>Saya adalah Seorang Siswa di SMK Telkom Makassar</h2>
                        <p className='font-medium text-secondary mb-10 leading-relaxed'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam a sunt eius alias dolores earum. Fugiat atque suscipit incidunt.</p>
                    </div>
                    <div className='w-full self-end p-4 lg:w-1/2'>
                        <div className='mt-10 relative lg:mt-9 right-0'>
                            <Image src={Foto} width={300} alt='foto' className='max-w-full mx-auto' />
                            <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 mb-[-150px] ml-3'>
                                <svg width='600' height='600' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#450A0A" d="M36.7,-52C48.2,-49.7,58.7,-40.6,61.9,-29.5C65.1,-18.4,61,-5.1,55.5,5.4C50,15.9,43.1,23.6,37.1,34C31,44.4,25.8,57.4,17.1,61.2C8.4,65,-3.8,59.7,-17.2,56.7C-30.7,53.6,-45.3,52.8,-51,44.9C-56.6,37.1,-53.1,22.1,-55.2,7.9C-57.3,-6.3,-64.8,-19.7,-62.1,-29.6C-59.4,-39.5,-46.5,-45.9,-34.5,-48C-22.4,-50.1,-11.2,-47.9,0.7,-48.9C12.6,-50,25.1,-54.3,36.7,-52Z" transform="translate(100 100)" />
                                </svg>
                             </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero