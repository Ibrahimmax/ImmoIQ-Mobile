// import React from 'react'

// import CustomLink from './CustomLink'

// function MenuList() {

//   return (
//     <div>
//        <div className="fixed bottom-0 left-0 w-full bg-white  flex justify-around ">

//       <a href="/page1" className="menu-link justify-center flex flex-col  items-center ">
//       <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M13.3333 19H1.93325C1.60188 19 1.33325 18.7314 1.33325 18.4V3.6C1.33325 3.26863 1.60188 3 1.93325 3H7.33325V1.6C7.33325 1.26863 7.60188 1 7.93325 1H12.7333C13.0647 1 13.3333 1.26863 13.3333 1.6V7M13.3333 19H18.7333C19.0647 19 19.3333 18.7314 19.3333 18.4V7.6C19.3333 7.26863 19.0647 7 18.7333 7H13.3333M13.3333 19V15M13.3333 7V11M13.3333 15V11M13.3333 15H15.3333M13.3333 11H15.3333" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span className="text-black text-sm">Lexikon</span>
//       </a>

//       <a href="/page2" className="menu-link justify-center flex flex-col  items-center">
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12 3V21" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M6 12L7.5 10L9 12" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M15 12L16.5 14L18 12" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span className="text-black text-sm">Schätzung</span>
//       </a>

//       <a href="/page1" className="menu-link justify-center flex flex-col  items-center ">
//       <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M9.1665 4H6.6665C5.56193 4 4.6665 4.89543 4.6665 6V20C4.6665 21.1046 5.56193 22 6.6665 22H12.6665" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M16.1665 4H18.6665C19.7711 4 20.6665 4.89543 20.6665 6V15" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M8.6665 6.4V4.5C8.6665 4.22386 8.89036 4 9.1665 4C9.44264 4 9.67072 3.77604 9.71802 3.50398C9.86618 2.65171 10.4405 1 12.6665 1C14.8925 1 15.4668 2.65171 15.615 3.50398C15.6623 3.77604 15.8904 4 16.1665 4C16.4426 4 16.6665 4.22386 16.6665 4.5V6.4C16.6665 6.73137 16.3979 7 16.0665 7H9.2665C8.93513 7 8.6665 6.73137 8.6665 6.4Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M16.1665 20.5L18.1665 22.5L23.1665 17.5" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span className="text-black text-sm">Lexikon</span>
//       </a>

//       <a href="/page4" className="menu-link justify-center flex flex-col  items-center">
//       <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M4.33325 19V5C4.33325 3.89543 5.22868 3 6.33325 3H19.7333C20.0647 3 20.3333 3.26863 20.3333 3.6V16.7143" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M10.3333 14C10.3333 14 11.2333 10.8824 13.3333 9" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M13.1355 12.4245L13.001 12.4372C11.3091 12.5961 9.80231 11.3541 9.63545 9.66298C9.46858 7.97187 10.7048 6.47208 12.3967 6.31311L15.3823 6.03257C15.5739 6.01457 15.7444 6.15518 15.7633 6.34663L16.018 8.92756C16.1922 10.6929 14.9016 12.2586 13.1355 12.4245Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M6.33325 17H20.3333" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M6.33325 21H20.3333" stroke="#003f52" stroke-width="1.5" stroke-linecap="round"/>
// <path d="M6.33325 21C5.22868 21 4.33325 20.1046 4.33325 19C4.33325 17.8954 5.22868 17 6.33325 17" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span className="text-black text-sm">Guides</span>
//       </a>
//       <a href="/page5" className="menu-link justify-center flex flex-col  items-center">
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M10.5856 10.5857L16.9495 7.0502L13.414 13.4142L7.05005 16.9497L10.5856 10.5857Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

// <span className="text-black text-sm">Mandate</span>
//       </a>
//       <a href="/page6" className="menu-link justify-center flex flex-col  items-center">
//       <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.6665 18V12M12.6665 12V3.40992C12.6665 2.97917 13.1069 2.68876 13.5029 2.85844L21.9468 6.47729C22.4214 6.68065 22.4346 7.34854 21.9685 7.5705L12.6665 12Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12.6665 22C16.5325 22 19.6665 20.433 19.6665 18.5C19.6665 16.567 16.5325 15 12.6665 15C8.80051 15 5.6665 16.567 5.6665 18.5C5.6665 20.433 8.80051 22 12.6665 22Z" stroke="#003f52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// <span className="text-black text-sm">Finder</span>
//       </a>
//     </div>
//     </div>
//   )
// }

// export default MenuList

// MenuList.jsx



import React from "react";
import CustomLink from "../MenuList/CustomLink";

function MenuList() {
  return (
    <div>
     <div className="fixed bottom-0 left-0 w-full bg-white">
      <div className="flex flex-wrap justify-around">
        <CustomLink
          href="/page1"
          text="Lexikon"
          svg={ 
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                d="M13.3333 19H1.93325C1.60188 19 1.33325 18.7314 1.33325 18.4V3.6C1.33325 3.26863 1.60188 3 1.93325 3H7.33325V1.6C7.33325 1.26863 7.60188 1 7.93325 1H12.7333C13.0647 1 13.3333 1.26863 13.3333 1.6V7M13.3333 19H18.7333C19.0647 19 19.3333 18.7314 19.3333 18.4V7.6C19.3333 7.26863 19.0647 7 18.7333 7H13.3333M13.3333 19V15M13.3333 7V11M13.3333 15V11M13.3333 15H15.3333M13.3333 11H15.3333"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            }
            className="flex-1 flex-shrink-0  text-xs" // Adjust padding and text size
            svgClassName="w-4 h-4  " // Adjust the size of the SVG icon
           
        />
        <CustomLink
          href="/page2"
          text="Schätzung"
          svg={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3V21"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 12L7.5 10L9 12"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12L16.5 14L18 12"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          className="flex-1 flex-shrink-0  text-xs" // Adjust padding and text size
          svgClassName="w-4 h-4" // Adjust the size of the SVG icon
        />
        <CustomLink
          href="/page3"
          text="Checklisten"
          svg={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1665 4H6.6665C5.56193 4 4.6665 4.89543 4.6665 6V20C4.6665 21.1046 5.56193 22 6.6665 22H12.6665"
                stroke="#003F52"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M16.1665 4H18.6665C19.7711 4 20.6665 4.89543 20.6665 6V15"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8.6665 6.4V4.5C8.6665 4.22386 8.89036 4 9.1665 4C9.44264 4 9.67072 3.77604 9.71802 3.50398C9.86618 2.65171 10.4405 1 12.6665 1C14.8925 1 15.4668 2.65171 15.615 3.50398C15.6623 3.77604 15.8904 4 16.1665 4C16.4426 4 16.6665 4.22386 16.6665 4.5V6.4C16.6665 6.73137 16.3979 7 16.0665 7H9.2665C8.93513 7 8.6665 6.73137 8.6665 6.4Z"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M16.1665 20.5L18.1665 22.5L23.1665 17.5"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          className="flex-1 flex-shrink-0 text-xs" // Adjust padding and text size
          svgClassName="w-4 h-4" // Adjust the size of the SVG icon
        />
        <CustomLink
          href="/page4"
          text="Guides"
          svg={
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33325 19V5C4.33325 3.89543 5.22868 3 6.33325 3H19.7333C20.0647 3 20.3333 3.26863 20.3333 3.6V16.7143" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.3333 14C10.3333 14 11.2333 10.8824 13.3333 9" stroke="#003F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.1355 12.4245L13.001 12.4372C11.3091 12.5961 9.80231 11.3541 9.63545 9.66298C9.46858 7.97187 10.7048 6.47208 12.3967 6.31311L15.3823 6.03257C15.5739 6.01457 15.7444 6.15518 15.7633 6.34663L16.018 8.92756C16.1922 10.6929 14.9016 12.2586 13.1355 12.4245Z" stroke="#003F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33325 17H20.3333" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.33325 21H20.3333" stroke="#003F52" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.33325 21C5.22868 21 4.33325 20.1046 4.33325 19C4.33325 17.8954 5.22868 17 6.33325 17" stroke="#003F52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          }
          className="flex-1 flex-shrink-0  text-xs" // Adjust padding and text size
          svgClassName="w-4 h-4" // Adjust the size of the SVG icon
        />
        <CustomLink
          href="/page5"
          text="Mandate"
          svg={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M10.5856 10.5857L16.9495 7.0502L13.414 13.4142L7.05005 16.9497L10.5856 10.5857Z"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ></path>
            </svg>
          }
          className="flex-1 flex-shrink-0  text-xs" // Adjust padding and text size
          svgClassName="w-4 h-4" // Adjust the size of the SVG icon
        />
        <CustomLink
          href="/page5"
          text="Finder"
          svg={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6665 18V12M12.6665 12V3.40992C12.6665 2.97917 13.1069 2.68876 13.5029 2.85844L21.9468 6.47729C22.4214 6.68065 22.4346 7.34854 21.9685 7.5705L12.6665 12Z"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6665 22C16.5325 22 19.6665 20.433 19.6665 18.5C19.6665 16.567 16.5325 15 12.6665 15C8.80051 15 5.6665 16.567 5.6665 18.5C5.6665 20.433 8.80051 22 12.6665 22Z"
                stroke="#003f52"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          className="flex-1 flex-shrink-0 text-xs" // Adjust padding and text size
          svgClassName="w-4 h-4" // Adjust the size of the SVG icon
        />

        {/* Add more CustomLink components for other menu items */}
      </div>
      </div>
    </div>
  );
}

export default MenuList;
