import { useForm } from "../formReducer/Form";
import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import cuate from '../assets/ForStartUp/cuate.svg'
import Google from '../assets/ForStartUp/Google.png'
import Facebook from '../assets/ForStartUp/Facebook.png'
import Apple from '../assets/ForStartUp/Apple.png'

const Login = () => {
    const [loading, Setloading] = useState(false)

    // const info = {
    //     email: state.EmailAddress,
    //     password: state.Password,
    //   };
    
    //   function handleSubmit(e) {
    //     e.preventDefault();
    //     dispatch({ type: "START_FETCH" });
    //     fetch("https://carbon-api-test.azurewebsites.net/api/v1/user/login", {
    //       method: "POST",
    //       body: JSON.stringify(info),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log(json);
    //         dispatch({ type: "DATA_FETCHED", payload: json });
    //       })
    
    //       // dispatch({type: "RESET"})
    
    //       .catch((error) => {
    //         console.log(error);
    //         dispatch({ type: "ERROR" });
    //       });
    //   } 

    // function getEmail(e) {
    //     dispatch({
    //       type: "DATA_FETCHED",
    //       field: "EmailAddress",
    //       payload: e.target.value,
    //     });
    // }

    // function getPassword(e) {
    //     dispatch({ type: "DATA_FETCHED", field: "Password", payload: e.target.value });
    //   }

    const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/CreateAccount')
  };
  const naigatetoLandingPage = ()=>{
    navigate('/')
  }

  return (
    <div>
        <form className=" border-2 rounded-md max-w-[1000px] my-[30px] mx-auto bg-[#ffffff] sm:mx-[2rem] sm:w-[550px]"
          >
            <div className="flex sm:flex-wrap">
                <div className="bg-[#F8E5C2] w-[30%] sm:w-full sm:h-[20rem]">
                    <div className="">
                        <img src={cuate} alt="" className="w-[20rem] my-[10rem] sm:w-[10rem] sm:my-[5rem] sm:mx-auto" />
                    </div>
                </div>
                <div className="w-[70%] text-center p-5 border sm:w-full">
                    
                    <div className="">
                        <p className="text-[#FFA500] text-xl pt-5 pb-2 sm:text-4xl">Login</p>
                        <p className="text-base sm:text-xl">Register with us and start using our Lorem, ipsum</p>
                        <p className="pb-8 sm:text-xl">Lorem ipsum dolor sit amet.</p>
                </div>
                
                <div>
                   <div className="ml-[1rem]">
                    <div className="">
                            <label htmlFor="email" className="mr-[39rem] sm:text-xl">Email</label>
                        <input type="text" id='email' className="border
                        text-gray-900 text-sm rounded block p-4 w-[90%] mb-9 sm:w-[29rem]" 
                       />
                        </div>

                        <div className="">
                            <label htmlFor="Password" className="mr-[39rem] sm:text-xl">Password</label>
                        <input type="password" id='Password' className="border
                        text-gray-900 text-sm rounded block p-4 w-[90%] sm:w-[29rem]" 
                        />
                        </div>
                   </div>

                </div>

                <div >
                   <div className="flex gap-[22.2rem] sm:gap-[9rem]">
                        <div className="flex items-center mt-5 ml-[1rem]">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border-[#FFA500] sm:w-6 sm:h-6"/>
                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 sm:text-xl">Remember Me</label>
                        </div>

                        <div className="mt-5">
                            <a href="#" className="text-sm text-[#FFA500] sm:text-xl">Forgot Password?</a>
                        </div>
                   </div>
                </div>

                <div>
                    <div className="mt-[3rem] mr-[4rem] sm:ml-[1rem]">
                        <button onClick={naigatetoLandingPage} 
                        className="bg-[#FFA500] rounded-md p-3 w-[35rem] text-[white] font-semibold sm:w-[29rem]">Login</button>
                    </div>

                    <div className='mr-[8rem] pt-3 sm:ml-[5rem]'>
                        <p className='font-semibold'>Don't have an account? <button onClick={handleNavigation} className='text-[#FFA500] text-base font-semibold '>Create Account</button></p>
                    </div>

                    <div className="flex gap-5 pt-5 ml-[15rem] sm:ml-[12rem]">
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
        </form>
    </div>
  )
}

export default Login