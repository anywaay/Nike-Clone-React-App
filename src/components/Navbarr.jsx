// import React, { useState } from 'react';
// import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
// import { navLinks } from '../constants';

// const Nav = () => {
//   const [showNav, setShowNav] = useState(false);
//   const [navFlex, setNavFlex] = useState(0);
//   let [open,setOpen]=useState(false);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//     if (navFlex === 0) {
//       setNavFlex(1);
//     } else {
//       setNavFlex(0);
//     }
//   };

//   return (
//     <header className='shadow-md w-full fixed top-0 left-0 z-10'>
//       <nav className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 max-container'>
//         <a href='/'>
//           <img
//             src={headerLogo}
//             alt="Logo"
//             width={130}
//             height={29}
//           />
//         </a>
//         <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
//         <img
//             src={hamburger}
//             alt='hamburger'
//             width={25}
//             height={25}
//             onClick={toggleNav}
//             style={{ cursor: 'pointer' }}
//           />
//         </div>

      
//         <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
//          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
//          ${open ? 'top-20 ':'top-[-490px]'}`}>
//           {navLinks.map((item) => (
//             <li key={item.label} className='md:ml-8 text-xl md:my-0 my-7'>
//               <a
//                 href={item.href}
//                 className='text-gray-800 hover:text-gray-400 duration-500'
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Nav;




























// import { headerLogo } from "../assets/images";
// import {hamburger } from "../assets/icons";
// import { navLinks } from '../constants';

// const Nav = () => {
//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//         <nav className='flex justify-between items-center max-container'>
//             <a href='/'>
//                 <img
//                   src={headerLogo}
//                   alt="Logo"
//                   width={130}
//                   height={29}
//                  />
//             </a>

//             <ul className='flex-1 flex justify-center ml-[25%] mr-20 gap-14 items-center max-lg:hidden'>
//                 {navLinks.map((item) =>(
//                     <li key={item.label}>
//                         <a
//                          href={item.href}
//                          className="font-montserrat leading-normal text-lg text-slate-grey"
//                         > {item.label}</a>
//                     </li>
//                 ))}
//             </ul>
//             <div className='hidden max-lg:block'>
//                 <img
//                   src={hamburger}
//                   alt='hamburger'
//                   width={25}
//                   height={25}
//                  />
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Nav



// import React, { useState } from 'react';
// import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
// import { navLinks } from '../constants';

// const Nav = () => {
//   const [showNav, setShowNav] = useState(false);
//   const [navFlex, setNavFlex] = useState(0);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//     if (navFlex === 0) {
//       setNavFlex(1);
//     } else {
//       setNavFlex(0);
//     }
//   };

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href='/'>
//           <img
//             src={headerLogo}
//             alt="Logo"
//             width={130}
//             height={29}
//           />
//         </a>

//         <ul className={`flex-1 flex flex-col justify-normal items-end lg:flex lg:items-center lg:flex-row lg:justify-center ml-[25%] mr-20 gap-14 
//         ${showNav ? 'hidden' : 'flex'}`}>
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-grey"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
//           <a href='/'>Sign in</a>
//           <span>/</span>
//           <a href='/'>Explore now</a>
//         </div>
//         <div className='hidden max-lg:block'>
//           <img
//             src={hamburger}
//             alt='hamburger'
//             width={25}
//             height={25}
//             onClick={toggleNav}
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;





// import React, { useState } from 'react';
// import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
// import { navLinks } from '../constants';

// const Nav = () => {
//   const [showNav, setShowNav] = useState(false);
//   const [navFlex, setNavFlex] = useState(0);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//     if (navFlex === 0) {
//       setNavFlex(1);
//     } else {
//       setNavFlex(0);
//     }
//   };

//   return (
//     <header className='padding-x py-8 absolute z-10 w-full'>
//       <nav className='flex justify-between items-center max-container'>
//         <a href='/'>
//           <img
//             src={headerLogo}
//             alt="Logo"
//             width={130}
//             height={29}
//           />
//         </a>

//         <ul className={`flex-1 flex flex-col justify-normal items-end lg:flex lg:items-center lg:flex-row lg:justify-center ml-[25%] mr-20 gap-14 
//         ${showNav ? 'hidden' : 'flex'}`}>
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-grey"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className='hidden max-lg:block'>
//           <img
//             src={hamburger}
//             alt='hamburger'
//             width={25}
//             height={25}
//             onClick={toggleNav}
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;