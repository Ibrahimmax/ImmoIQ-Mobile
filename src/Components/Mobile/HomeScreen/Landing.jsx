import React, { useState } from "react";
import MobNavbar from '../Navbar/MobNavbar'
import MenuList from '../MenuList/MenuList'
import SearchBar from "./RelativeSearch";
function Landing() {
return(

    <div className="md:hidden">
      <MobNavbar/>
      <div className='flex flex-col justify-end items-center py-[90px] '>
<div className='border border-[#E3E3E3] rounded-full p-2'>
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.16669 16.3333C6.2337 16.3333 4.66669 17.9003 4.66669 19.8333C4.66669 21.7664 6.2337 23.3333 8.16669 23.3333C8.57577 23.3333 8.96844 23.2631 9.33335 23.1342" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.97457 18.2054C3.41168 17.4512 2.33337 15.8515 2.33337 14C2.33337 12.5863 2.96189 11.3196 3.95474 10.4638" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99062 10.3696C3.68072 9.90627 3.5 9.34924 3.5 8.75C3.5 7.13917 4.80584 5.83334 6.41667 5.83334C7.07339 5.83334 7.67943 6.05038 8.16695 6.41667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.44399 6.49289C8.26613 6.11584 8.16669 5.69454 8.16669 5.25C8.16669 3.63917 9.47253 2.33334 11.0834 2.33334C12.6942 2.33334 14 3.63917 14 5.25V23.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33331 23.3333C9.33331 24.622 10.378 25.6667 11.6666 25.6667C12.9553 25.6667 14 24.622 14 23.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.16666C14 10.0997 15.5669 11.6667 17.5 11.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.8334 16.3333C21.7664 16.3333 23.3334 17.9003 23.3334 19.8333C23.3334 21.7664 21.7664 23.3333 19.8334 23.3333C19.4243 23.3333 19.0316 23.2631 18.6667 23.1342" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.0255 18.2054C24.5883 17.4512 25.6667 15.8515 25.6667 14C25.6667 12.5863 25.0381 11.3196 24.0452 10.4638" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.0094 10.3696C24.3193 9.90627 24.5 9.34924 24.5 8.75C24.5 7.13917 23.1942 5.83334 21.5834 5.83334C20.9266 5.83334 20.3206 6.05038 19.8331 6.41667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 5.25C14 3.63917 15.3059 2.33334 16.9167 2.33334C18.5275 2.33334 19.8333 3.63917 19.8333 5.25C19.8333 5.69454 19.7339 6.11584 19.556 6.49289" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 23.3333C18.6667 24.622 17.622 25.6667 16.3333 25.6667C15.0446 25.6667 14 24.622 14 23.3333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<h4 className='text-base text-center font-semibold mt-3 fontNunito ' style={{color: "rgba(14, 14, 14, 1)"}}>
Salü, wie kann ich ihnen heute helfen?
</h4>
</div>
<SearchBar/>


      <MenuList/>
    </div>
  
  );
};

export default Landing;
