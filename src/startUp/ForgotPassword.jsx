import React from "react";
import {Link} from 'react-router-dom'
import cuate from "../assets/ForStartUp/cuate.svg";

const ForgotPassword = () => {
  return (
    <div>
      <div className="rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff]">
        <div className="flex">
          <div className="bg-[#F8E5C2] w-[30%]">
            <div className="">
              <img src={cuate} alt="" className="w-[20rem] my-[10rem]" />
            </div>
          </div>

          <div className="w-[70%] text-center p-5 border">
            <div className="">
              <p className="text-[#FFA500] text-xl pt-5 pb-2">
                Forgot Password
              </p>
              <p className="text-base">
                Register with us and start using our Lorem, ipsum
              </p>
              <p className="pb-8">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="ml-[2rem]">
              <div className="">
                <label htmlFor="email" className="mr-[39rem]">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border
                            text-gray-900 text-sm rounded block p-4 w-[93%] mb-9"
                />
              </div>

              <div className="mt-[3rem] mr-[4rem]">
                <button className="bg-[#FFA500] rounded-md p-3 w-[35rem] text-[white] font-semibold">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
