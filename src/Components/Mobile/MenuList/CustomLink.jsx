// import React, { useState } from 'react';

// const CustomLink = ({ href, text, svg }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked); // Toggle the clicked state
//   };

//   return (
//     <div className={`border-t-2 ${clicked ? 'border-[#459E97]' : 'border-gray-300'} p-4`}>
//       <a href={href} className="menu-link justify-center flex flex-col items-center" onClick={handleClick}>
//         <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M13.3333 19H1.93325C1.60188 19 1.33325 18.7314 1.33325 18.4V3.6C1.33325 3.26863 1.60188 3 1.93325 3H7.33325V1.6C7.33325 1.26863 7.60188 1 7.93325 1H12.7333C13.0647 1 13.3333 1.26863 13.3333 1.6V7M13.3333 19H18.7333C19.0647 19 19.3333 18.7314 19.3333 18.4V7.6C19.3333 7.26863 19.0647 7 18.7333 7H13.3333M13.3333 19V15M13.3333 7V11M13.3333 15V11M13.3333 15H15.3333M13.3333 11H15.3333" stroke={clicked ? "#459E97" : "#484C52"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         {svg}
//         <span className={`text-sm ${clicked ? 'text-[#459E97] ' : 'text-black'}`}>{text}</span>
//       </a>
//     </div>
//   );
// };

// export default CustomLink;


// CustomLink.jsx



// import React, { useState } from 'react';

// const CustomLink = ({ href, text, svg }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked); // Toggle the clicked state
//   };

//   return (
//     <div className={`border-t-2 ${clicked ? 'border-[#459E97]' : 'border-gray-300'} p-4`}>
//       <a href={href} className="menu-link justify-center flex flex-col items-center" onClick={handleClick}>
//         {svg}
//         <span className={`text-sm ${clicked ? 'text-[#459E97] ' : 'text-black'}`}>{text}</span>
//       </a>
//     </div>
//   );
// };

// export default CustomLink;


// import React, { useState } from 'react';

// const CustomLink = ({ href, text, svg }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked); // Toggle the clicked state
//   };

//   return (
//     <div className={`border-t-2 ${clicked ? 'border-[#459E97]' : 'border-gray-300'} py-2 flex-1`}>
//       <a href={href} className="menu-link justify-center flex flex-col items-center" onClick={handleClick}>
//         {svg}
//         <span className={`text-sm ${clicked ? 'text-[#459E97] ' : 'text-[#003F52]'}`}>{text}</span>
//       </a>
//     </div>
//   );
// };

// export default CustomLink;



import React, { useState } from 'react';

const CustomLink = ({ href, text, svg }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  return (
    <div className={`border-t-2 ${clicked ? 'border-[#459E97]' : 'border-gray-300'} py-2 flex-1`}>
      <a href={href} className="menu-link justify-center flex flex-col items-center" onClick={handleClick}>
        {React.cloneElement(svg, {
          className: `${clicked ? 'color-[#459E97]' : 'color-[#003F52]'}`, // Adjust the SVG color based on clicked state
        })}
        <span className={`text-sm ${clicked ? 'text-[#459E97]' : 'text-[#003F52]'}`}>{text}</span>
      </a>
    </div>
  );
};

export default CustomLink;
