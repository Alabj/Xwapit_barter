import React from "react";
import {Link} from 'react-router-dom'
import cuate from "../assets/ForStartUp/cuate.svg";

const ForgotPassword = () => {
  return (
    <div>
      <form className="rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff] sm:mx-[2rem] sm:w-[650px]">
        <div className="flex sm:flex-wrap">
          <div className="bg-[#F8E5C2] w-[30%] sm:w-full sm:h-[20rem]">
            <div className="">
              <img src={cuate} alt="" className="w-[20rem] my-[10rem] sm:w-[10rem] sm:my-[5rem] sm:mx-auto" />
            </div>
          </div>

          <div className="w-[70%] text-center p-5 border sm:w-full">
            <div className="">
              <p className="text-[#FFA500] text-xl pt-5 pb-2 sm:text-4xl">
                Forgot Password
              </p>
              <p className="text-base sm:text-2xl sm:font-medium">
                Register with us and start using our Lorem, ipsum
              </p>
              <p className="pb-8 sm:text-2xl sm:font-medium">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="ml-[2rem]">
              <div className="">
                <label htmlFor="email" className="mr-[39rem] sm:text-2xl sm:font-medium">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border
                   text-gray-900 text-sm rounded block p-4 w-[93%] mb-9 sm:p-6"
                />
              </div>

              <div className="mt-[3rem] mr-[4rem]">
                <button className="bg-[#FFA500] rounded-md p-3 w-[35rem] text-[white] font-semibold sm:p-6">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
