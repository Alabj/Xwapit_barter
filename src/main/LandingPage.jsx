import React from 'react'
import Bartering from '../assets/LandingPage/Bartering.png'
import BoxStuff from '../assets/LandingPage/BoxStuff.png'
import PeopleBarter from '../assets/LandingPage/PeopleBarter.png'
import PeopleCheck from '../assets/LandingPage/PeopleCheck.png'
import CategoriesSub from '../subscript/CategoriesSub'


const LandingPage = () => {
  return (
    <div>
        <div>
            <div className="flex justify-evenly bg-[#FFA500]">
              <div className="">
                <img src={Bartering} alt="" className="w-[25rem]" />
              </div>

              <div className="text-white pt-[6rem]">
                  <p className="text-4xl font-semibold">Exchange Them for What</p>
                  <p className="text-4xl font-semibold">You need</p>
                  <p className="font-semibold pt-5">"Trade by barter involve direct exchange of goods or service without</p>
                  <p className="font-semibold">the use of money"</p>
                  <button className="mt-10 p-2 rounded-lg w-[90%] bg-white text-[#FFA500] font-semibold">Get Started</button>
              </div>
            </div>
        </div>

      <div>
          <div className="flex justify-evenly bg-[#F9F9F9] p-[3rem]">
             <div className="text-center font-medium">
                <img src={BoxStuff} alt="" className="w-[5rem] mx-auto" />
                <p className="">1060+</p>
                <p className="">Items Uploaded</p>
             </div>
             <div className="text-center font-medium">
              <img src={PeopleBarter} alt="" className="w-[5rem] mx-auto" />
                <p className="">1000+</p>
                <p className="">Items for trade and barter</p>
             </div>
             <div className="text-center font-medium">
              <img src={PeopleCheck} alt="" className="w-[5rem] mx-auto" />
                <p className="">1400+</p>
                <p className="">Members</p>
             </div>
          </div>
      </div>

      <CategoriesSub/>
    </div>
  )
}

export default LandingPage