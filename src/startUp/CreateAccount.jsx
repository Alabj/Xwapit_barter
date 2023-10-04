import React from 'react'
import { useNavigate } from 'react-router-dom';
import cuate from '../assets/ForStartUp/cuate.svg'
import Google from '../assets/ForStartUp/Google.png'
import Facebook from '../assets/ForStartUp/Facebook.png'
import Apple from '../assets/ForStartUp/Apple.png'

const CreateAccount = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/Login')
    };
    const navigateToOtp = ()=>{
        navigate('/VerifyOtp')
    }

  return (
    <div className='rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff] '>
        <div className=" border flex rounded-md sm:flex-wrap sm:w-[550px] sm:px-7">
            <div className="bg-[#F8E5C2] w-[30%] sm:w-full sm:h-[15rem]">
                <div className="">
                    <img src={cuate} alt="" className="w-[20rem] my-[10rem] sm:w-[7rem] sm:my-[5rem] sm:mx-auto" />
                </div>
            </div>

            <div className="w-[70%] text-center sm:w-full">

                <div className="">
                    <p className="text-[#FFA500] text-xl pt-5 pb-2">Create Account</p>
                    <p className="text-base">Register with us and start using our Lorem, ipsum</p>
                    <p className="">Lorem ipsum dolor sit amet.</p>
               </div>
                
                <div>
                    <div className="pt-[3rem] flex ml-[2rem] sm:flex-wrap">
                    <div className="">
                        <label htmlFor="Amount" className='font-semibold mr-[13rem] sm:mr-[21.9rem]'>First Name</label>
                        <input type="text" id='Amount' className='border
                        text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='John'/>
                        </div>

                    <div className="sm:pt-9">
                        <label htmlFor="Amount" className='font-semibold mr-[13rem] sm:mr-[21.9rem]'>Last Name</label>
                        <input type="text" id='Amount' className='border
                        text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='Doe'/>
                    </div>
                    </div>

                    <div className="pt-[3rem] flex ml-[2rem] sm:flex-wrap">
                    <div className="">
                    <label htmlFor="Amount" className='font-semibold mr-[13rem]  sm:mr-[24.9rem]'>Email</label>
                    <input type="text" id='Amount' className='border border-solid
                     text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='example@email.com'/>
                     </div>

                    <div className="ml-[2rem] sm:pt-9 sm:ml-[2px]">
                    <label htmlFor="Amount" className='font-semibold mr-[13rem]  sm:mr-[23.9rem]'>Number</label>
                    <input type="text" id='Amount' className='border
                     text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='09035672438'/>
                    </div>
                    </div>
                    
                    <div className="pt-[3rem] flex ml-[2rem] sm:flex-wrap">
                        <div className="">
                        <label htmlFor="Amount" className='font-semibold mr-[13rem] sm:mr-[21.9rem]'>Password</label>
                        <input type="password" id='Amount' className='border border-solid
                        text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='example@email.com'/>
                        </div>

                        <div className="sm:pt-9">
                        <label htmlFor="Amount" className='font-semibold mr-[13rem] sm:mr-[19.9rem]'>Confirm Password</label>
                        <input type="password" id='Amount' className='border
                        text-gray-900 text-sm rounded block p-4 w-[15rem] sm:w-[27rem]' placeholder='koai87%*$#@'/>
                        </div>
                    </div>
                </div>
                
              <div>
                <div className='pt-5 ml-[2rem]'>

                    <div className="flex items-center mb-4 sm:flex ">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 "/>
                            <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">By ticking this box, you agree to our Terms and conditions and private policy</label>
                    </div>

                    <div className="mr-[16rem] pt-[2rem]">
                        <button onClick={navigateToOtp} className="bg-[#FFA500] rounded-md p-3 w-[32rem] text-[white] font-semibold sm:w-[29rem]">Create Account</button>
                    </div>

                    <div className='mr-[8rem] pt-3'>
                        <p>Already has an account? <button onClick={handleNavigation} className='text-[#0463FE] text-base'>Login</button></p>
                    </div>
                </div>
              </div>

                <div>
                    <div className="flex gap-5 pt-4 ml-[15rem]">
                        <a href="https://www.facebook.com/" className="">
                            <img src={Facebook} alt="" className="w-[30px]" />
                        </a>

                        <a href="https://www.google.com/" className="">
                            <img src={Google} alt="" className="w-[30px]" />
                        </a>

                        <a href="https://www.apple.com/ng/" className="">
                            <img src={Apple} alt="" className="w-[30px]" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CreateAccount