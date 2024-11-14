"use client";
import Link
    from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Tab = "Flatemates and Housemates" | "Rooms for rent" | "Whole properties for rent" | "Student Accommodation" | "Popular Searches";

export default function FooterPage() {
    const [selectedTab, setSelectedTab] = useState<Tab>("Flatemates and Housemates");
    const [toggle, setToggle] = useState(false);

    const tabContent: Record<Tab, JSX.Element> = {
        "Flatemates and Housemates": (
            <div className="">
                <ul className="flex flex-wrap ">
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Adelaide
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Perth
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Canberra
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Gold Cost
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Wollongong
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Newcastle
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Flatmates in Hobart
                        </Link>
                    </li>
                </ul>
            </div>
        ),
        "Rooms for rent": (
            <div className="">
                <ul className="flex flex-wrap ">
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Adelaide
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Perth
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Canberra
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Gold Cost
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Wollongong
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Newcastle
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Rooms for rent in Hobart
                        </Link>
                    </li>
                </ul>
            </div>
        ),
        "Whole properties for rent": (
            <div className="">
                <ul className="flex flex-wrap ">
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Adelaide
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Perth
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Whole properties for rent in Gold Cost
                        </Link>
                    </li>
                </ul>
            </div>
        ),
        "Student Accommodation": (
            <div className="">
                <ul className="flex flex-wrap ">
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Adelaide
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Perth
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Student accommodation in Gold Cost
                        </Link>
                    </li>
                </ul>
            </div>
        ),
        "Popular Searches": (
            <div className="">
                <ul className="flex flex-wrap ">
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Studios for rent in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Studios for rent in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Granny flats for rent in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            One bedroom flat for rent in Melbourne
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Studio for rent in Brisbane
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Granny flats for rent in Sydney
                        </Link>
                    </li>
                    <li className="lg:basis-1/4 lg:pr-1 basis-full ">
                        <Link
                            href="#"
                            className="text-white text-sm font-[400] hover:border-b-2 border-solid border-white"
                        >
                            Granny flats for rent in Gold Coast
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div className="lg:pb-16 lg:pt-6 md:px-6 md:py-7 mx-auto max-w-[1200px] px-4 py-5">
            <div className="flex justify-between items-center">
                <h3 className="text-white lg:text-xl text-sm lg:opacity-100 opacity-80 m-0 ">
                    Australia&apos;s biggest share accommodation website
                </h3>
                <div className="lg:hidden inline-block"
                    onClick={() => setToggle(prev => !prev)}
                >
                    <IoIosArrowDown size={15} className={`cursor-pointer transform transition-transform duration-300 ease-in-out ${toggle ? "rotate-180 " : "rotate-0"}`} />
                </div>
            </div>

            <div className={`lg:hidden flex-col transition transition-all duration-500 ease-in-out ${toggle ? "max-h-[390px]" : "max-h-0 overflow-hidden"}`}>
                <ul className="flex my-6 overflow-y-scroll p-0 no-scrollbar">
                    <li className={`${selectedTab === "Flatemates and Housemates" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Flatemates and Housemates")}
                    >
                        Flatmates and Housemates
                    </li>
                    <li className={`${selectedTab === "Rooms for rent" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Rooms for rent")}
                    >
                        Rooms for rent
                    </li>
                    <li className={`${selectedTab === "Whole properties for rent" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Whole properties for rent")}
                    >
                        Whole properties for rent
                    </li>
                    <li className={`${selectedTab === "Student Accommodation" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Student Accommodation")}
                    >
                        Student Accommodation
                    </li>
                    <li className={`${selectedTab === "Popular Searches" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Popular Searches")}
                    >
                        Popular Searches
                    </li>
                </ul>

                {tabContent[selectedTab]}
            </div>

            <div className={`lg:flex flex-col hidden`}>
                <ul className="flex my-6 overflow-y-scroll p-0 no-scrollbar">
                    <li className={`${selectedTab === "Flatemates and Housemates" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Flatemates and Housemates")}
                    >
                        Flatmates and Housemates
                    </li>
                    <li className={`${selectedTab === "Rooms for rent" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Rooms for rent")}
                    >
                        Rooms for rent
                    </li>
                    <li className={`${selectedTab === "Whole properties for rent" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Whole properties for rent")}
                    >
                        Whole properties for rent
                    </li>
                    <li className={`${selectedTab === "Student Accommodation" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Student Accommodation")}
                    >
                        Student Accommodation
                    </li>
                    <li className={`${selectedTab === "Popular Searches" ? "border-b-2" : "hover:border-b-2"} border-solid border-white cursor-pointer text-sm font-[600] mr-10 pb-2 whitespace-nowrap `}
                        onClick={() => setSelectedTab("Popular Searches")}
                    >
                        Popular Searches
                    </li>
                </ul>

                {tabContent[selectedTab]}
            </div>
        </div>

    )
}