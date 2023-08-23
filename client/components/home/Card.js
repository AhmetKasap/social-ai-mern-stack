import React from 'react'
import { FaUserAlt, FaRegComment } from "react-icons/fa";
import { BiDotsHorizontalRounded, BiLike } from "react-icons/bi";
import Link from 'next/link';




const Card = () => {




    return (
        <>
        
            <div className=' w-3/4 mx-auto h-auto border-2 rounded-xl mb-8'>
                <div className=' w-5/6 mx-auto mt-5 mb-5'>
                    <div className='flex flex-row items-center justify-between '>
                        <div className='flex flex-row items-center'>
                            <FaUserAlt className='rounded-full w-12 h-12 m-2 text-blue-500'></FaUserAlt>
                            <h1 className='font-roboto text-gray-700'>Kullanıcı Ad</h1>
                            <h1 className='font-roboto text-gray-400 ml-3 '>@ User Name</h1>
                            <h1 className='font-roboto text-gray-400 font-light ml-3'> - tarih</h1>
                        </div>
                        <button ><BiDotsHorizontalRounded className='text-3xl'></BiDotsHorizontalRounded></button>
                    </div>

                    <Link href="/detay" >
                        <div className='mt-5 mb-5'>
                            <p className='font-opsenSans '>
                               
                            </p>

                            
                        </div>
                    </Link>
                    
                    <hr></hr>
                    <div className='mt-4 flex flex-row gap-24'>
                        <Link href='/' className='flex flex-row items-center focus:text-red-500'>
                            <BiLike className='text-xl'></BiLike>
                            <span className='ml-3 font-rem'>450</span>
                        </Link>

                        <Link href="/" className='flex flex-row items-center focus:text-blue-500'>
                            <FaRegComment className='text-xl'></FaRegComment>
                            <span className='ml-3 font-rem'>275</span>
                        </Link>
                    </div>
                </div>
            </div>




            



        </>
    )
}

export default Card