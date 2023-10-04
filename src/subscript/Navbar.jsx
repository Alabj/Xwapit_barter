import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import cuate from '../assets/ForStartUp/cuate.svg'

const Navbar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search query:', query);
      };

  return (
    <div>
        <nav className="flex justify-evenly p-6">

            <div className="">
                <img src={cuate} alt="" className="w-[3rem]" />
            </div>

            <div className="">
                <form onSubmit={handleSubmit} className="">
                    <div className="flex items-center border rounded-lg">
                        <input type="text" id="search" name="query" placeholder="I am looking for..." value={query}
                        onChange={handleInputChange} className="w-[31rem] p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                        <button type="submit" className="bg-[#FFA500] text-white p-3 rounded-r-lg hover:bg-[darkorange]">Search</button>
                    </div>
                </form>
            </div>

            <div className="flex gap-3">
                <button className="border p-2.5 rounded-lg w-[8rem] font-semibold">Login</button>
                <button className="bg-[#FFA500] text-white border rounded-lg w-[8rem] font-semibold"><Link to='CreateAccount'>Create Account</Link></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar