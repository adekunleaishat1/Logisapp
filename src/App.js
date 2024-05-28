import React, { useState } from "react";
import Navbar from "./Navbar";
import quest from "./Faqs";
import {
  FaCartFlatbed,
  FaTruckRampBox,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa6";
import {
  BsArrowRight,
  BsDiagram3,
  BsFullscreenExit,
  BsBroadcast,
  BsCheckLg,
  BsChevronDown,
} from "react-icons/bs";
import { FaTruck, FaStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Carousel } from "antd";
import Footer from "./Footer";

const App = () => {
  const [showing, setshowing] = useState(null)
  console.log(quest);
  useEffect(() => {
    AOS.init();
  }, []);

  const show = (i ) =>{
    console.log(i);
    setshowing(showing === i ? null : i)
   
  }

  return (
    <div>
      <div className="w-full body-bg min-h-[700px]">
        <Navbar />
        <div className="max-w-[1400px]  min-h-[500px] mx-auto body-bg grid grid-cols-1 md:grid-cols-2 gap-7 ">
          <div className="px-6">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-[#fff] font-inter font-bold mb-[20px] text-[48px]">
                Your Lightning Fast Delivery Partner
              </h1>
              <p className="text-[#fff] font-inter font-normal mb-[40px]  text-[15px]">
                Facere distinctio molestiae nisi fugit tenetur repellat non
                praesentium nesciunt optio quis sit odio nemo quisquam. eius
                quos reiciendis eum vel eum voluptatem eum maiores eaque id
                optio ullam occaecati odio est possimus vel reprehenderit
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-full  bg-[#ffffff] grid grid-cols-3 gap-6 py-[10px] px-4 rounded-[10px]"
            >
              <input
                placeholder="ZIP code or CitY"
                className="outline-none col-span-2 placeholder:font-inter  placeholder:text-[16px] placeholder:leading-[1.5] py-[18px]"
                type="text"
              />
              <button className="bg-[blue] text-[#fff] text-[16px] font-inter rounded-md col-span-1">
                Search
              </button>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-2  lg:grid-cols-4 gap-2 lg:gap-8 py-[20px] mt-6"
            >
              <div>
                <span className="text-[32px] text-[#fff] text-center mb-[15px] pb-[15px] font-inter font-bold block relative spancont">
                  232
                </span>
                <p className="text-[15px] text-[#fff] font-inter font-semibold text-center ">
                  Clients
                </p>
              </div>
              <div >
                <span className="text-[32px] text-[#fff] text-center mb-[15px] pb-[15px] font-inter font-bold block relative spancont">
                  512
                </span>
                <p className="text-[15px] text-[#fff] font-inter font-semibold text-center ">
                  Projects
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-[32px] text-[#fff] text-center mb-[15px] pb-[15px] font-inter font-bold block relative spancont">
                  1453
                </span>
                <p className="text-[15px] text-[#fff] font-inter font-semibold text-center ">
                  Support
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-[32px] text-[#fff] text-center mb-[15px] pb-[15px] font-inter font-bold block relative spancont">
                  32
                </span>
                <p className="text-[15px] text-[#fff] font-inter font-semibold text-center ">
                  Workers
                </p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="2000" className="w-full ">
            <img
              className="max-w-[100%] h-[500px]"
              src="https://bootstrapmade.com/demo/templates/Logis/assets/img/hero-img.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] px-4 md:px-0 mx-auto gap-12  grid  grid-cols-1 md:grid-cols-3 py-[80px] ">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center gap-6 items-start  group"
        >
          <div className="mr-[20px]">
            <FaCartFlatbed className="text-[#001f8d] text-[48px] group-hover:text-[#0d42ff] " />
          </div>
          <div className=" ">
            <h4 className="text-[20px] mb-[10px] text-[#0e1d34] group-hover:text-[#0d42ff]  font-bold font-inter">
              Lorem Ipsum
            </h4>
            <p className="text-[15px] mb-[10px] text-[#132848] font-normal font-inter">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
            <a className="flex items-center " href="">
              <span className="text-[14px] group-hover:text-[#0d42ff]   text-[#0e1d34]  font-bold font-inter">
                Learn More
              </span>
              <span>
                {" "}
                <BsArrowRight className="text-[14px] ml-[8px]  group-hover:text-[#0d42ff] " />
              </span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center gap-6 items-start group"
        >
          <div className="mr-[20px]">
            <FaTruck className="text-[#001f8d] text-[48px] group-hover:text-[#0d42ff] " />
          </div>
          <div className=" ">
            <h4 className="text-[20px] mb-[10px] text-[#0e1d34] group-hover:text-[#0d42ff]  font-bold font-inter">
              Lorem Ipsum
            </h4>
            <p className="text-[15px] mb-[10px] text-[#132848] font-normal font-inter">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
            <a className="flex items-center " href="">
              <span className="text-[14px] group-hover:text-[#0d42ff]   text-[#0e1d34]  font-bold font-inter">
                Learn More
              </span>
              <span>
                {" "}
                <BsArrowRight className="text-[14px] ml-[8px]  group-hover:text-[#0d42ff] " />
              </span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-center gap-6 items-start group"
        >
          <div className="mr-[20px]">
            <FaTruckRampBox className="text-[#001f8d] text-[48px] group-hover:text-[#0d42ff] " />
          </div>
          <div className=" ">
            <h4 className="text-[20px] mb-[10px] text-[#0e1d34] group-hover:text-[#0d42ff]  font-bold font-inter">
              Lorem Ipsum
            </h4>
            <p className="text-[15px] mb-[10px] text-[#132848] font-normal font-inter">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </p>
            <a className="flex items-center " href="">
              <span className="text-[14px] group-hover:text-[#0d42ff]   text-[#0e1d34]  font-bold font-inter">
                Learn More
              </span>
              <span>
                {" "}
                <BsArrowRight className="text-[14px] ml-[8px]  group-hover:text-[#0d42ff] " />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] px-4 md:px-0  py-[80px] gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h4 className="text-[32px] mb-[10px] text-[#001f8d]  font-bold font-inter">
            About Us
          </h4>
          <p className="text-[20px] mb-[16px] text-[#132848]  font-normal font-inter">
            Dolor iure expedita id fuga asperiores qui sunt consequatur minima.
            Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam
            itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis
            veritatis asperiores placeat.
          </p>
          <ul className="pb-[16px]">
            <li
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex items-start"
            >
              <div>
                <BsDiagram3 className="text-[48px] mr-[20px] text-[blue]" />
              </div>
              <div>
                <h5 className="text-[18px] leading-[1.2] mb-[10px] text-[#19335c]  font-bold font-inter">
                  Ullamco laboris nisi ut aliquip consequat
                </h5>
                <p className="text-[15px] mb-[16px] text-[#132848]  font-normal font-inter">
                  Magni facilis facilis repellendus cum excepturi quaerat
                  praesentium libre trade
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex items-start mt-[40px]"
            >
              <div>
                <BsFullscreenExit className="text-[48px] mr-[20px] text-[blue]" />
              </div>
              <div>
                <h5 className="text-[18px] leading-[1.2] mb-[10px] text-[#19335c]  font-bold font-inter">
                  Ullamco laboris nisi ut aliquip consequat
                </h5>
                <p className="text-[15px] mb-[16px] text-[#132848]  font-normal font-inter">
                  Magni facilis facilis repellendus cum excepturi quaerat
                  praesentium libre trade
                </p>
              </div>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex items-start mt-[40px]"
            >
              <div>
                <BsBroadcast className="text-[48px] mr-[20px] text-[blue]" />
              </div>
              <div>
                <h5 className="text-[18px] leading-[1.2] mb-[10px] text-[#19335c]  font-bold font-inter">
                  Ullamco laboris nisi ut aliquip consequat
                </h5>
                <p className="text-[15px] mb-[16px] text-[#132848]  font-normal font-inter">
                  Magni facilis facilis repellendus cum excepturi quaerat
                  praesentium libre trade
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <img
            src="https://bootstrapmade.com/demo/templates/Logis/assets/img/about.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto py-[80px] px-4 md:px-0">
        <div className="relative max-w-full text-center  py-[30px]">
          <span className="absolute top-[24px] md:top-[10px] text-[30px] md:text-[56px] font-bold left-0 right-0 z-[1] text-[#0E1D340F] uppercase font-inter">
            Our Services
          </span>
          <h2 className="relative z-[2] text-[22px] md:text-[32px] uppercase text-[#001973] font-bold mb-[20px] pb-[20px] service font-inter">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/storage-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff]  text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Storage
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Cumque eos in qui numquam. Aut aspernatur perferendis sed atque
              quia voluptas quisquam repellendus temporibus itaqueofficiis odit
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/logistics-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff] text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Logistics
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Asperiores provident dolor accusamus pariatur dolore nam id
              audantium ut et iure incidunt molestiae dolor ipsam ducimus
              occaecati nisi
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/cargo-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff] text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Cargo
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Dicta quam similique quia architecto eos nisi aut ratione aut
              ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et
              nihil
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/trucking-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff] text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Trucking
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Dicta quam similique quia architecto eos nisi aut ratione aut
              ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et
              nihil
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/packaging-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff] text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Packaging
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Illo consequuntur quisquam delectus praesentium modi dignissimos
              facere vel cum onsequuntur maiores beatae consequatur magni
              voluptates
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-[#fff] border border-[#0E1D3426] group"
          >
            <div className="mb-[15px] overflow-hidden storageimg">
              <img
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/warehousing-service.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[18px] leading-[1.2] mb-[5px] group-hover:text-[#0d42ff] text-[#19335c]  font-bold font-inter py-[10px] px-[30px] uppercase">
              Warehousing
            </h3>
            <p className="text-[15px] leading-[1.2] mb-[30px] text-[#132848]  font-inter px-[30px]">
              Quas assumenda non occaecati molestiae. In aut earum sed natus
              eatae in vero. Ab modi quisquam aut nostrum unde et qui est non
              quo nulla
            </p>
          </div>
        </div>
      </div>
      <div className="action-div px-4 md:px-0 py-[80px] flex justify-center items-center">
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className=" max-w-full md:max-w-[70%]  py-3 text-center "
        >
          <h3 className="text-[28px] leading-[1.2] mb-[16px] text-[#fff] font-bold  font-inter px-[30px]">
            Call To Action
          </h3>
          <p className="text-[18px] leading-[1.2] mb-[16px] text-[#fff]  font-inter">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="px-[40px] m-[10px] tracking-[1px] rounded-[5px] py-[12px] border-2 font-inter font-medium border-[#fff] text-[#fff] text-[16px] bg-[transperant] call-but">
            Call To Action
          </button>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto py-[80px] px-4 lg:px-0">
        <div className="grid  min-h-[400px] grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <img
              className="max-w-full h-[400px]"
              src="https://bootstrapmade.com/demo/templates/Logis/assets/img/features-1.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-[#001973] mb-[16px] font-inter text-[26px] font-semibold">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="mb-[16px] italic font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="mt-[16px]">
              <li className="flex items-center pb-[10px] font-inter">
                <BsCheckLg className="pr-[7px] text-[#0d42ff] text-[24px]" />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="flex items-center pb-[10px] font-inter">
                <BsCheckLg className="pr-[7px] text-[#0d42ff] text-[24px]" />{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="flex items-center pb-[10px] font-inter">
                <BsCheckLg className="pr-[7px] text-[#0d42ff]  text-[24px]" />{" "}
                Ullam est qui quos consequatur eos accusamus.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid min-h-[400px] grid-cols-1 md:grid-cols-2 gap-8 items-center  mt-[80px]">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-[#001973] mb-[16px] font-inter text-[26px] font-semibold">
              Corporis temporibus maiores provident
            </h3>
            <p className="mb-[16px] italic font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-[16px] font-inter">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="  flex justify-end items-center  text-right "
          >
            <img
              className="max-w-full h-[400px] object-cover"
              src="https://bootstrapmade.com/demo/templates/Logis/assets/img/features-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid min-h-[400px] grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[80px]">
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <img
              className="max-w-full h-[400px]"
              src="https://bootstrapmade.com/demo/templates/Logis/assets/img/features-3.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-[#001973] mb-[16px] text-[26px] font-inter font-semibold">
              Sunt consequatur ad ut est nulla consectetur reiciendis animi
              voluptas
            </h3>
            <p className="mb-[16px] italic font-inter">
              Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
              quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas
              dolor doloremque.
            </p>
            <ul className="mt-[16px]">
              <li className="flex items-center pb-[10px]">
                <BsCheckLg className="pr-[7px] text-[#0d42ff] font-inter text-[24px]" />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="flex items-center pb-[10px]">
                <BsCheckLg className="pr-[7px] text-[#0d42ff] text-[24px] font-inter" />{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="flex items-center pb-[10px]">
                <BsCheckLg className="pr-[7px] text-[#0d42ff] text-[24px] font-inter" />{" "}
                Ullam est qui quos consequatur eos accusamus.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid  min-h-[400px] grid-cols-1 md:grid-cols-2 gap-8 items-center  mt-[80px]">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3 className="text-[#001973] font-inter text-[26px] font-semibold mb-[16px]">
              Quas et necessitatibus eaque impedit ipsum animi consequatur
              incidunt in
            </h3>
            <p className="mb-[16px] font-inter italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mb-[16px] font-inter ">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="  flex justify-end items-center  text-right "
          >
            <img
              className="max-w-full h-[400px] object-cover"
              src="https://bootstrapmade.com/demo/templates/Logis/assets/img/features-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto py-[80px] px-4 lg:px-0">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative text-center  py-[30px]"
        >
          <span className="absolute top-[10px] text-[56px] font-bold left-0 right-0 z-[1] text-[#0E1D340F] uppercase font-inter">
            Pricing
          </span>
          <h2 className="relative z-[2] text-[32px] uppercase text-[#001973] font-bold mb-[20px] pb-[20px] service font-inter">
            Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-[#fff] border-t-[4px] border-[#fff] rounded-md py-[60px] px-[40px] pricing-div"
          >
            <h3 className="text-[#0e1d34] text-[20px] mb-[15px] font-semibold font-inter">
              Free Plan
            </h3>
            <h4 className="text-[#0d42ff] text-[48px] mb-[25px] font-semibold font-inter">
              <sup className="text-[28px] relative top-[-14px] font-inter">
                ${" "}
              </sup>
              0
              <span className="text-[#6c757dcc] text-[18px] font-inter">
                {" "}
                / month
              </span>
            </h4>
            <ul className="mb-[16px] text-[#6c757d] text-left py-[20px] leading-[20px]">
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Quam adipiscing vitae proin
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Dui Nec feugiat nisl pretium
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Nulla at volutpat diam uteera
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <RxCross1 className="pr-[3px] text-[#6C757D80] text-[24px] font-inter " />{" "}
                <span className="line-through text-[#6C757D80] text-[16px]">
                  Pharetra massa massa ultricies
                </span>
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <RxCross1 className="pr-[3px] text-[#6C757D80] text-[24px] font-inter " />{" "}
                <span className="line-through text-[#6C757D80] text-[16px]">
                  Massa ultricies mi quis hendrerit
                </span>
              </li>
            </ul>
            <a
              className="text-[#0d42ff] border-[#0d42ff] border rounded-md bg-[#fff] py-[12px] px-[35px] text-[16px] font-medium"
              href=""
            >
              Buy Now
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-[#fff] border-t-[4px] border-[#0d42ff] rounded-md py-[60px] px-[40px] pricing-div"
          >
            <h3 className="text-[#0e1d34] text-[20px] mb-[15px] font-semibold font-inter">
              Business Plan
            </h3>
            <h4 className="text-[#0d42ff] text-[48px] mb-[25px] font-semibold font-inter">
              <sup className="text-[28px] relative top-[-14px] font-inter">
                ${" "}
              </sup>
              29
              <span className="text-[#6c757dcc] text-[18px] font-inter">
                {" "}
                / month
              </span>
            </h4>
            <ul className="mb-[16px] text-[#6c757d] text-left py-[20px] leading-[20px]">
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Quam adipiscing vitae proin
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Dui Nec feugiat nisl pretium
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Nulla at volutpat diam uteera
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                <span className="  text-[16px]">
                  Pharetra massa massa ultricies
                </span>
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                <span className="  text-[16px]">
                  Massa ultricies mi quis hendrerit
                </span>
              </li>
            </ul>
            <a
              className="text-[#fff] border-[#0d42ff] border rounded-md bg-[#0d42ff] py-[12px] px-[35px] text-[16px] font-medium"
              href=""
            >
              Buy Now
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="bg-[#fff] border-t-[4px] border-[#fff] rounded-md py-[60px] px-[40px] pricing-div"
          >
            <h3 className="text-[#0e1d34] text-[20px] mb-[15px] font-semibold font-inter">
              Developer Plan
            </h3>
            <h4 className="text-[#0d42ff] text-[48px] mb-[25px] font-semibold font-inter">
              <sup className="text-[28px] relative top-[-14px] font-inter">
                ${" "}
              </sup>
              49
              <span className="text-[#6c757dcc] text-[18px] font-inter">
                {" "}
                / month
              </span>
            </h4>
            <ul className="mb-[16px] text-[#6c757d] text-left py-[20px] leading-[20px]">
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Quam adipiscing vitae proin
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Dui Nec feugiat nisl pretium
              </li>
              <li className="flex items-center py-[10px] gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                Nulla at volutpat diam uteera
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                <span className="  text-[16px]">
                  Pharetra massa massa ultricies
                </span>
              </li>
              <li className="flex items-center py-[10px]  gap-2">
                <BsCheckLg className="pr-[3px] text-[#059652] text-[24px] font-inter" />{" "}
                <span className="  text-[16px]">
                  Massa ultricies mi quis hendrerit
                </span>
              </li>
            </ul>
            <a
              className="text-[#0d42ff] border-[#0d42ff] border rounded-md bg-[#fff] py-[12px] px-[35px] text-[16px] font-medium"
              href=""
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <div className="testimonies-bg w-full py-[80px]">
        <div className="max-w-[1100px] mx-auto ">
          <Carousel className="relative z-[2] w-full  py-4" autoplay>
            <div className=" w-full">
              <img
                className="rounded-full img-test"
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/testimonials/testimonials-3.jpg"
                alt=""
              />
              <h3 className="text-[15px] mt-[10px] mb-[5px] text-center text-[#fff] font-inter font-bold">
                Jena Karlis
              </h3>
              <h4 className="text-[20px] text-center text-[#FFFFFF99] font-inter font-medium mb-[15px]">
                Store owner
              </h4>
              <div className="mb-[15px] flex justify-center gap-2 items-center">
                <FaStar className="text-[#ffc107] text-[20px] " />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
              </div>
              <p className="mb-[15px] font-inter italic text-[#fff] text-[18px] relative   quote">
                <FaQuoteLeft className="text-[26px] text-[#FFFFFF99] top-[-10px]  left-[-10px] relative inline-block " />
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="text-[26px] text-[#FFFFFF99] top-[10px] right-[-10px] relative  inline-block " />
              </p>
            </div>

            <div className="">
              <img
                className="rounded-full img-test"
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/testimonials/testimonials-3.jpg"
                alt=""
              />
              <h3 className="text-[15px] mt-[10px] mb-[5px] text-center text-[#fff] font-inter font-bold">
                Jena Karlis
              </h3>
              <h4 className="text-[20px] text-center text-[#FFFFFF99] font-inter font-medium mb-[15px]">
                Store owner
              </h4>
              <div className="mb-[15px] flex justify-center gap-2 items-center">
                <FaStar className="text-[#ffc107] text-[20px] " />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
              </div>
              <p className="mb-[15px] font-inter italic text-[#fff] text-[18px] relative quote">
                <FaQuoteLeft className="text-[26px] text-[#FFFFFF99] top-[-10px]  left-[-10px] relative inline-block " />
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="text-[26px] text-[#FFFFFF99] top-[10px] right-[-10px] relative  inline-block " />
              </p>
            </div>

            <div className="">
              <img
                className="rounded-full img-test"
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/testimonials/testimonials-3.jpg"
                alt=""
              />
              <h3 className="text-[15px] mt-[10px] mb-[5px] text-center text-[#fff] font-inter font-bold">
                Jena Karlis
              </h3>
              <h4 className="text-[20px] text-center text-[#FFFFFF99] font-inter font-medium mb-[15px]">
                Store owner
              </h4>
              <div className="mb-[15px] flex justify-center gap-2 items-center">
                <FaStar className="text-[#ffc107] text-[20px] " />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
              </div>
              <p className="mb-[15px] font-inter italic text-[#fff] text-[18px] relative quote">
                <FaQuoteLeft className="text-[26px] text-[#FFFFFF99] top-[-10px]  left-[-10px] relative inline-block " />
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="text-[26px] text-[#FFFFFF99] top-[10px] right-[-10px] relative  inline-block " />
              </p>
            </div>

            <div className="">
              <img
                className="rounded-full img-test"
                src="https://bootstrapmade.com/demo/templates/Logis/assets/img/testimonials/testimonials-3.jpg"
                alt=""
              />
              <h3 className="text-[15px] mt-[10px] mb-[5px] text-center text-[#fff] font-inter font-bold">
                Jena Karlis
              </h3>
              <h4 className="text-[20px] text-center text-[#FFFFFF99] font-inter font-medium mb-[15px]">
                Store owner
              </h4>
              <div className="mb-[15px] flex justify-center gap-2 items-center">
                <FaStar className="text-[#ffc107] text-[20px] " />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
                <FaStar className="text-[#ffc107] text-[20px]" />
              </div>
              <p className="mb-[15px] font-inter italic text-[#fff] text-[18px] relative text-center quote">
                <FaQuoteLeft className="text-[26px] text-[#FFFFFF99] top-[-10px]  left-[-10px] relative inline-block " />
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight className="text-[26px] text-[#FFFFFF99] top-[10px] right-[-10px] relative  inline-block " />
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="max-w-[1100px] px-4 lg:px-0 mx-auto bg-[#fff] py-[50px]">
      <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="relative text-center max-w-full  py-[30px]"
        >
          <span className="absolute top-[20px] md:top-[10px] text-[25px] md:text-[56px] font-bold left-0 right-0 z-[1] text-[#0E1D340F] uppercase font-inter">
          FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="relative z-[2] text-[22px] md:text-[32px] uppercase text-[#001973] font-bold mb-[20px] pb-[20px] service font-inter">
          FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="w-full"> 
          {quest.map((el , i)=>(
            <>
            <div key={i} onClick={()=>show(i)} className="bg-[#0E1D3408] w-full px-[30px] py-[20px] mb-[10px] rounded-md ">
              <div className=" flex justify-between">
              <div className="flex justify-center gap-4 items-center">
                <AiOutlineQuestionCircle className="text-[#0d42ff] text-[20px]" />
                <h3 className={showing == i ? "text-[#0d42ff] text-[18px] font-inter font-semibold" : "  text-[#0a0d13]  text-[18px] font-inter font-semibold"}>{el.label}</h3>
              </div>
              <div className={showing == i? "chevron" : "chevron2"}>
              {showing === i ?  <BsChevronDown className="text-[#0a0d13] text-[18px] font-semibold" /> 
                : <BsChevronDown className="text-[#0a0d13] text-[18px] font-semibold " />}
              </div>
              </div>
                <div className={showing == i ? "w-[full] accordion" : "w-[full]  accordion2" }>
                <h3>{el.content}</h3>
               </div>
            </div>
            </>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
