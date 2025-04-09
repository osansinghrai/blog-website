import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'

interface props{
    author_img: any,
    title: string,
}

const BlogTableItem= ({author_img, title}: props) => {
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={author_img?author_img:assets.profile_icon} width={50} height={50} alt='author_image'></Image>
        </th>
        <td className='px-6 py-4'>
            {title?title:"No title"}
        </td>
        <td className='px-6 py-4'>
            {"9 April 2025"}
        </td>
        <td className='px-6 py-4'>
            x
        </td>
    </tr>
  )
}

export default BlogTableItem