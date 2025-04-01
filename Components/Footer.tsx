import Image from 'next/image'
import React from 'react'
import { assets } from '@/public/Assets/assets'

const Footer = () => {
    return (
        <div className='flex justify-around flex-column gap-3 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
            <Image src={assets.logo} alt='logo_light' width={120} className='invert w-40' />
            <p className='text-white'>All right reserved. Copyright @leoss</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt="facebook" width={50} />
                <Image src={assets.twitter_icon} alt="facebook" width={50} />
                <Image src={assets.googleplus_icon} alt="facebook" width={50} />
            </div>
        </div>
    )
}

export default Footer