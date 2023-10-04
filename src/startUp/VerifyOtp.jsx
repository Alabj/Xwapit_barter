import React, { useState } from 'react';
import Shield from '../assets/ForStartUp/shield-lock.svg'
import OtpInput from "react-otp-input";
import {Link} from 'react-router-dom'

const VerifyOtp = () => {
    const [otp, setOtp] = useState('');
  return (
    <div>
       <div className="rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff]">
        <div className="flex">

                <div className="bg-[#F8E5C2] w-[30%] rounded">
                    <div className="">
                        <img src={Shield} alt="" className="[20rem] my-[10rem]" />
                    </div>
                </div>

                <div className="w-[70%] text-center ">
                    <p className="text-[#FFA500] text-xl pt-[7rem] pb-2">OTP verification</p>
                    <p className="text-base">We have sent a one time verification code to your </p>
                    <p className="">Number ending with 8432</p>

                    <div className="flex gap-6 justify-center pt-[3rem]">
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            isInputNum={true}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                            color: "black",
                            width: "2.2rem",
                            height: "3rem",
                            border: "2px solid orange",
                            borderRadius: "7px",
                            }}
                        />
                    </div>

                    <div className="">
                        <button className="bg-[#FFA500] rounded-md p-3 w-[80%] text-[white] font-semibold mt-[3rem] mb-6 mx-[5rem]">Submit</button>
                        <div className="">
                            <p className="font-bold">Didn't get a security code? <span className='text-[#FFA500]'> re-send</span></p>
                        </div>
                    </div>
                </div>

                
            </div>
       </div>
    </div>
  )
}

export default VerifyOtp