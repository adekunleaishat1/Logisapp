import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0e1d34] min-h-[400px] py-[30px] px-3 md:px-0">
        <div className="max-w-[1300px] mx-auto  px-0 sm:px-6">
          <div className="grid  sm:grid-cols-1 lg:grid-cols-2 gap-4  py-5 ">
            <div className=" col-span-1 ">
              <a className="mb-[25px]">
                <h3 className="text-[30px] tracking-[1px] font-bold font-inter text-[#fff]">
                  Logis
                </h3>
              </a>
              <p className="text-[14px] mb-[16px] text-[#fff]">
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="flex  items-center py-3 ">
                <a href=""></a>
                <a className="rounded-full w-[40px] h-[40px] flex justify-center items-center border-[#ffffff33] border-[2px] mr-[10px]">
                  <FaTwitter className="text-[#ffffffb3] text-[16px]" />{" "}
                </a>
                <a className="rounded-full w-[40px] h-[40px] flex justify-center items-center border-[#ffffff33] border-[2px] mr-[10px]">
                  {" "}
                  <FaFacebook className="text-[#ffffffb3] text-[16px]" />
                </a>
                <a className="rounded-full w-[40px] h-[40px] flex justify-center items-center border-[#ffffff33] border-[2px] mr-[10px]">
                  <FaInstagram className="text-[#ffffffb3] text-[16px]" />
                </a>
                <a className="rounded-full w-[40px] h-[40px] flex justify-center items-center border-[#ffffff33] border-[2px] mr-[10px]">
                  <FaLinkedin className="text-[#ffffffb3] text-[16px]" />
                </a>
              </div>
            </div>
            <div className="col-span-1 grid lg:grid-cols-3  grid-cols-2 mt-4 md:mt-0">
              <div className="">
                <h4 className="text-[16px] text-[#fff] pb-[12px] font-bold leading-[1.2]">
                  Useful Links
                </h4>
                <ul>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Home
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      About Us
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Services
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Term of Service
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-[16px] text-[#fff] pb-[12px] font-bold leading-[1.2]">
                  Our Services
                </h4>
                <ul>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Web Design
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Web Development
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Product Management
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Marketing
                    </a>
                  </li>
                  <li className="pb-[10px] ">
                    <a
                      className="text-[14px] text-[#ffffff99] inline-block leading-[1]"
                      href=""
                    >
                      {" "}
                      Graphics Design
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" mt-3 md:mt-0">
                <h4 className="text-[16px] text-[#fff] pb-[12px] font-bold leading-[1.2]">
                  Contact Us
                </h4>
                <p className="text-[14px] leading-[26px] text-[#fff] mb-[16px]">
                  A108 Adam Street <br /> New York, NY 535022 <br /> United
                  States{" "}
                </p>
                <p className="text-[14px] leading-[26px] text-[#fff] mb-[16px]">
                  <strong className="pt-[16px]">Phone:</strong>+1 5589 55488 55{" "}
                  <br /> <strong>Email:</strong>info@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 text-center text-[#fff] text-[14px] font-inter">
            © Copyright
            <strong>Logis</strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
