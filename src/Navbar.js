import React, {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [showing, setshowing] = useState(false)
  const [deep, setdeep] = useState(false)
  const [drop, setdrop] = useState(false)

  const show =() =>{
   setshowing(!showing)
  }
  const showdeep =() =>{
     setdeep(!deep)
  }
  const showdrop = () =>{
    setdrop(!drop)
  }
  return (
    <div className='w-full py-[30px] '>
        <div className=' max-w-[1400px]  mx-auto flex justify-between items-center  '>
          <div>
            <a href=""><h1 className='text-[#fff] text-[30px] font-bold font-inter'>Logis</h1></a>
          </div>
            <div className='px-4'>
                <ul className=' justify-between items-center md:flex hidden'>
                    <li><a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Home</a></li>
                    <li><a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">About</a></li>
                    <li><a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Services</a></li>
                    <li><a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Pricing</a></li>
                    <li className='flex justify-between items-center relative group'>
                        <a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Dropdown</a><IoIosArrowDown className='font-medium text-[16px] text-[#fff]' />
                        <ul className='absolute bg-[#fff] w-[200px] hidden rounded-md  top-16 px-[20px] py-[10px] border-[#19335c] group-hover:block drop'>
                            <li className='text-start py-2'><a className='text-[16px]  font-medium font-inter' href="">Drop Down 1</a></li>
                            <li className='text-start py-2 flex justify-between items-center deepdrop'>
                               <a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down </a>
                               <IoIosArrowDown className='font-medium text-[16px]  ' />
                               <ul className=' bg-[#fff] hidden w-[200px] absolute left-[90%] rounded-md shadow-md border-[#19335c] top-12 px-[18px] py-[10px] deepdown'>
                                <li className='text-start py-2 '><a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down 1</a></li>
                                <li className='text-start py-2 '><a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down 2</a></li>
                                <li className='text-start py-2 '><a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down 3</a></li>
                                <li className='text-start py-2 '><a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down 4</a></li>
                                <li className='text-start py-2 '><a className='text-[16px]  font-medium font-inter' href="">Deep Drop Down 5</a></li>
                               </ul>
                            </li>
                            <li className='text-start py-2'><a className='text-[16px]  font-medium font-inter ' href="">Drop Down 2</a></li>
                            <li className='text-start py-2'><a className='text-[16px] font-medium font-inter ' href="">Drop Down 3</a></li>
                            <li className='text-start py-2'><a className='text-[16px] font-medium font-inter ' href="">Drop Down 4</a></li>
                        </ul>
                    </li>
                    <li ><a className='py-[12px] px-[20px] text-[16px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Contact</a></li>
                    <button className='bg-[blue] py-2 px-5 text-[#fff] rounded-md'>Get a Quote</button>
                </ul>

                   <RiMenu3Fill onClick={show} className="text-[#fff] text-[30px] flex md:hidden" />
                       <div className=  {showing? 'fixed left-0 top-0 bottom-0 h-full overflow-scroll w-[100%] px-6 bg-[#19335cf8] z-[1] ease-in-out duration-500 ' : "fixed ease-in-out duration-500 z-[1] top-0 bottom-0 left-[-100%] h-full"  }>
                       <div className='flex justify-between items-center py-4 px-4'>
                        <a href=""><h1 className='text-[#fff] text-[30px] font-bold font-inter'>Logis</h1></a>
                        <IoCloseSharp onClick={show} className="text-[#fff] text-[30px]"/>
                       </div>
                        <ul className='mt-6'>
                         <li><a className='py-[12px] px-[20px] text-[20px] text-[#fff] font-medium font-inter flex justify-between items-center' href="">Home</a></li>
                         <li><a className='py-[12px] px-[20px] text-[20px] text-[#b7bcc3] font-medium font-inter flex justify-between items-center' href="">About</a></li>
                         <li><a className='py-[12px] px-[20px] text-[20px] text-[#b7bcc3] font-medium font-inter flex justify-between items-center' href="">Services</a></li>
                         <li><a className='py-[12px] px-[20px] text-[20px] text-[#b7bcc3] font-medium font-inter flex justify-between items-center' href="">Pricing</a></li>
                         <li className='relative '>
                          <div onClick={showdrop} className='flex justify-between items-center '>
                          <a className='py-[12px] px-[20px] text-[20px] text-[#b7bcc3] font-medium font-inter flex justify-between items-center' href="">Dropdown</a>
                          <IoIosArrowDown className='font-medium text-[24px] text-[#b7bcc3]' />
                          </div>
                          <ul className={drop? 'sticky top-12 bg-[#19335c]  w-full  border-[blue] border rounded-md  px-[20px] py-[20px]' : "hidden"}>
                                 <li className='text-start py-2 text-[#b7bcc3]'><a className='text-[20px]  font-medium font-inter' href="">Drop Down 1</a></li>
                                 <li className='text-start w-full py-2  relative '>
                                     <div onClick={showdeep} className='flex justify-between items-center'>
                                      <a className='text-[20px]  text-[#b7bcc3] font-medium font-inter' href="">Deep Drop Down </a>
                                      <IoIosArrowDown className='font-medium text-[16px] text-[#b7bcc3] ' /> 
                                     </div>
                                    <ul className={deep ?'bg-[#19335c]  border-[blue] border w-full sticky  rounded-md top-12 px-[18px] py-[20px]': "top-0  hidden"} >
                                     <li className='text-start py-2 '><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter' href="">Deep Drop Down 1</a></li>
                                     <li className='text-start py-2 '><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter' href="">Deep Drop Down 2</a></li>
                                     <li className='text-start py-2 '><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter' href="">Deep Drop Down 3</a></li>
                                     <li className='text-start py-2 '><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter' href="">Deep Drop Down 4</a></li>
                                     <li className='text-start py-2 '><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter' href="">Deep Drop Down 5</a></li>
                                    </ul>
                                 </li>
                                 <li className='text-start py-2'><a className='text-[20px] text-[#b7bcc3]  font-medium font-inter ' href="">Drop Down 2</a></li>
                                 <li className='text-start py-2'><a className='text-[20px] text-[#b7bcc3] font-medium font-inter ' href="">Drop Down 3</a></li>
                                 <li className='text-start py-2'><a className='text-[20px] text-[#b7bcc3] font-medium font-inter ' href="">Drop Down 4</a></li>
                             </ul>
                         </li>
                         <li ><a className='py-[12px] mb-[16px] px-[20px] text-[20px] text-[#b7bcc3] font-medium font-inter flex justify-between items-center' href="">Contact</a></li>
                         <button className='bg-[blue] w-full py-3 text-[20px]  text-[#fff] rounded-md'>Get a Quote</button>
                        </ul>
                     </div>
               
            </div>
           
        </div>
    </div>
  )
}

export default Navbar