import React from 'react'
import PinkCircle from "../assets/CategoriesSub/PinkCircle.png"
import Books from "../assets/CategoriesSub/Books.png"
import Computer from "../assets/CategoriesSub/Computer.png"
import Foods from "../assets/CategoriesSub/Foods.png"
import HandEx from "../assets/CategoriesSub/HandEx.png"
import Shirt from "../assets/CategoriesSub/Shirt.png"
import shoes from "../assets/CategoriesSub/shoes.png"
import Utensils from "../assets/CategoriesSub/Utensils.png"

const CategoriesSub = () => {
  return (
    <div>
       <div className="p-[1rem]">
            <p className="py-[1rem] text-xl font-semibold ml-[4rem] sm:ml-[8.9rem]">Categories</p>
            
            <div className="flex justify-evenly text-center sm:flex-wrap">
                    <div className="">
                        <img src={PinkCircle} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">All</p>
                    </div>

                    <div className="">
                        <img src={Books} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Books</p>
                    </div>

                    <div className="">
                        <img src={Computer} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Gadgets</p>
                    </div>

                    <div className="">
                        <img src={Foods} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Foods</p>
                    </div>

                    <div className="">
                        <img src={HandEx} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Accesories</p>
                    </div>

                    <div className="">
                        <img src={Shirt} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Clothes</p>
                    </div>

                    <div className="">
                        <img src={shoes} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Shoes</p>
                    </div>

                    <div className="">
                        <img src={Utensils} alt="" className="w-[3rem] sm:w-[5rem]" />
                        <p className="text-sm">Utensils</p>
                    </div>
            </div>
       </div>
    </div>
  )
}

export default CategoriesSub