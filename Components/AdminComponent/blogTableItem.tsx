import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'

interface props{
    author_img: any,
    title: string,
    author: string,
    date: any
    deleteBlog: any
    mongoId: string
}

const BlogTableItem= ({author_img, title, author, date, deleteBlog, mongoId}: props) => {

    const blogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={author_img?author_img:assets.profile_icon} width={50} height={50}  className="rounded-full object-cover w-[60px] h-[60px]" alt='author_image'></Image>
            <p>{author?author:"No author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"No title"}
        </td>
        <td className='px-6 py-4'>
            {blogDate.toDateString()}
        </td>
        <td onClick={()=> deleteBlog(mongoId)}>
            <button  className='text-white bg-red-500 px-10 py-2 ml-4 rounded-sm cursor-pointer'>X</button>
        </td>
    </tr>
  )
}

export default BlogTableItem