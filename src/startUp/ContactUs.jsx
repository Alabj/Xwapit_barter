import React from 'react'
import {Link} from 'react-router-dom'
import ContactPic from "../assets/ForStartUp/ContactUs.svg"

const ContactUs = () => {
  return (
    <div>
        <form className="rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff] border">
            <div className="flex">
                <div className="w-[30%]">
                    <div className="">
                    <img src={ContactPic} alt="" className="w-[20rem] " />
                    </div>
                </div>

                <div className="w-[70%] text-center p-5 border">

                    <div>
                    <p className="text-[#FFA500] text-xl font-semibold pt-5 pb-2">Help center - Submit a request</p>
                    <p className="text-base">Register with us and start using our Lorem, ipsum</p>
                    <p className="pb-8">Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="">
                        <div className="">
                            <label htmlFor="email" className="mr-[39rem]">Your Email Address</label>
                            <input type="text"id="email" className="border
                            text-gray-900 text-sm rounded block p-4 w-[93%] mb-9" />
                        </div>

                        <div className="">
                            <label htmlFor="email" className="mr-[39rem]">Subject<span className="text-[red] font-semibold">*</span></label>
                            <input type="text"id="email" className="border
                            text-gray-900 text-sm rounded block p-4 w-[93%] mb-9" />
                        </div>

                        <div className="">
                            <label htmlFor="email" className="mr-[29.5rem]">Reason for contacting us<span className="text-[red] font-semibold">*</span></label>
                            <textarea id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900
                             rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                             "></textarea>
                        </div>

                        <div className="pt-7 text-start">
                            <p className="text-base">Please enter the details of your request. A member of our support staff will respond</p>
                            <p className="text-base">as soon as possible.</p>

                            <button className="bg-[#FFA500] rounded-md p-3 w-[494px] text-[white] font-semibold mt-[3rem] mx-[5rem]">Submit</button>
                        </div>
                            

                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactUs