import React from 'react'
import {Link} from 'react-router-dom'

const CategorySelect = () => {
  return (
    <div className='sm:px-7'>
        <div className="rounded-md max-w-[1000px] my-[30px] mx-auto p-4 bg-[#ffffff] border text-center sm:w-[600px] ">
            <p className="text-[#FFA500] text-xl font-semibold pt-5 pb-2 sm:text-3xl">Kindly select the category that best fit you</p>
            <p className="pb-5 sm:text-2xl">Register with us and start...</p>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-2">
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Books</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Clothes</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Gadget</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Cars</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Books</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Clothes</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Gadget</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Cars</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Books</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Clothes</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Gadget</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Cars</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Books</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Clothes</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Gadget</p>
                </div>
                <div className="border p-12 rounded-md">
                    <p className="text-xl">Cars</p>
                </div>
            </div>
            
            <div className="">
                <button className="bg-[#FFA500] rounded-md p-3 w-[494px] text-[white] font-semibold mt-[3rem] mx-[5rem]">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CategorySelect