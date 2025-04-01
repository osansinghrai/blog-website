import React from 'react'
import Blogitem from './Blogitem'
import { blog_data } from '@/public/Assets/assets'
import { useState } from 'react'

const Bloglist = () => {

    const [menu, setMenu] = useState("All")


    return (
        <div>
            <div className='flex justify-center gap-6 my-10 align-center'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white px-4 py-1 rounded-sm' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white px-4 py-1 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white px-4 py-1 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white px-4 py-1 rounded-sm' : ""}>Lifestyle</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blog_data.filter((item) => menu === "All" ? true : menu === item.category).map((item, index) => {
                    return <Blogitem key={index} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}
            </div>
        </div>
    )
}

export default Bloglist