import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";

export default function PropertyCom() {
    return (
        <div className="">
            <div className="min-[480px]:bg-white bg-[#f4f5f5] ">
              {/* Property page */}
              <div className="lg:float-left lg:block leading-6 mb-[1em] mt-0 relative 
              md:m-0 mx-auto mb-4 ">
                <div className="mx-auto mb-4 max-w-[480px] rounded-xl relative z-1 md:shadow-none shadow-[0_0.0625rem_0.1875rem_0_rgba(0,0,0,0.2)] md:rounded-none rounded-xl">
                  <div className="rounded-xl overflow-hidden h-[310px] w-full relative z-1 ">
                    <Link
                      href="#"
                      className="cursor-pointer block h-full "
                    >
                      <div className="h-full relative">
                        <div className="h-full bg-[#f4f5f5] w-auto relative ">
                          {/* Pictures property or selfie */}
                          <ul className="h-full snap-x snap-mandatory">
                            <li className="snap-always snap-start overflow-hidden relative h-full w-full bg-[#f4f5f5]">
                              <Image
                                src="https://flatmates-res.cloudinary.com/image/upload/c_fill,dpr_2.0,f_auto,h_342,q_auto,w_414/yddcpgfomysmanc44a9d"
                                alt="Image"
                                height={684}
                                width={828}
                                className="aspect-[23/19]"
                              />
                            </li>
                          </ul>

                          {/* page number */}
                          <div className="opacity-80 absolute top-2 right-2 px-2 py-1 bg-[#59616e] rounded-[6.25rem] text-white text-xs leading-4 tracking-[0.0125rem] font-[500] ">
                            1
                            /
                            11
                          </div>

                          <button>

                          </button>

                          {/* scroll */}
                          <button className="absolute top-[calc(50%-1.5rem)] right-2 cursor-pointer w-12 h-12 rounded-full bg-white text-[#2f3a4a] flex items-center justify-center ">
                            <IoIosArrowForward size={24} />
                          </button>

                          {/* favorite button */}
                          <button className="bg-transparent hover:bg-white group rounded-full cursor-pointer p-2 absolute z-2 bottom-2 right-2 inline-block">
                            <CiStar size={25} className="overflow-visible fill-white group-hover:fill-[#2f3a4a]" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* content of property */}
                  <Link
                    href="#"
                    className="py-4 md:px-0 px-4 h-full bg-white cursor-pointer block relative "
                  >
                    <div className="">
                      <div className="flex items-center justify-between mb-2 ">
                        {/* Weekly rent */}
                        <p className="lg:text-xl lg:leading-[26px] text-lg leading-[22px] text-[#2f3a4a] font-[700] overflow-hidden  text-ellipsis whitespace-nowrap">
                          $255
                          / week
                        </p>
                        <div className="flex items-center border-[1px] border-solid border-[#2f3a4a] h-[20px] ml-4 ">
                          <p className="text-[#2f3a4a] text-xs font-[600] leading-5 px-2 whitespace-nowrap text-ellipsis ">
                            Free to messages
                          </p>
                        </div>
                      </div>
                      {/* location */}
                      <p className="text-sm leading-5 text-[#6d7580] pb-1 max-h-[5em] ">
                        Wentworth Point, Sydney
                      </p>
                      <div className="flex items-center ">
                        <div className="flex items-center ">
                          {/* Bed */}
                          <div className="table pr-3 ">
                            <span className="table-cell align-middle text-center">
                              <IoBedOutline size={16} className="fill-[#6d7580]" />
                            </span>
                            {/* the number of beds */}
                            <p className="text-[#6d7580] text-sm leading-5 table-cell pl-1.5 align-middle">4</p>
                          </div>
                          {/* Bathroom */}
                          <div className="table pr-3 ">
                            <span className="table-cell align-middle text-center">
                              <LiaBathSolid size={16} className="fill-[#6d7580]" />
                            </span>
                            {/* the number of beds */}
                            <p className="text-[#6d7580] text-sm leading-5 table-cell pl-1.5 align-middle">2</p>
                          </div>
                          {/* the number of room filled */}
                          <div className="table">
                            <span className="table-cell align-middle text-center">
                              <AiOutlineHome size={16} className="fill-[#6d7580]" />
                            </span>
                            {/* the number of beds */}
                            <p className="text-[#6d7580] text-sm leading-5 table-cell pl-1.5 align-middle">2</p>
                          </div>
                        </div>

                        <span className="leading-5 md:text-base text-sm mx-2 text-[#6d7580]">
                          {/* <LuDot className="" size={10}/> */}
                          ・
                        </span>

                        {/* Detail of the information about the room */}
                        <p className="text-sm leading-5 md:text-sm md:leading-normal text-[#6d7580] overflow-hidden text-ellipsis whitespace-nowrap">
                          2 Rooms in Share House
                        </p>
                      </div>
                      <p className="text-xs leading-4 md:text-sm md:leading-5 text-[#6d7580] mt-3 p-0 max-h-[5em] ">
                        Available Now
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    )
}