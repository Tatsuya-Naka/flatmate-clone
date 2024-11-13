import Link from "next/link";
import paths from "~/server/paths";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { getServerAuthSession } from "~/server/auth";
import { FaUserAlt } from "react-icons/fa";

export default async function Header() {
    const session = await getServerAuthSession();

    return (
        <div className="relative z-[200] font-sans">
            <div className="bg-white sticky top-0 right-0 left-0 flex items-center justify-center border-b-[1px] border-solid border-gray-200 flex items-center justify-center w-full md:pt-[22px] md:pb-[21px] md:px-4 px-4 pb-4">
                <nav className="max-w-[1200px] md:grid lg:grid-cols-[minmax(134px,_3fr)_minmax(0px,_6fr)_4.5fr] md:grid-cols-[minmax(134px,_2fr)_minmax(0px,_4fr)_5fr] md:gap-4 flex items-center md:justify-center w-full flex-wrap gap-x-3">
                    {/* MenuButton */}
                    <button className="md:hidden flex justify-start items-center px-4 -mx-4 min-h-12 min-w-auto"
                        type="button"
                    >
                        <FiMenu width={450} height={450} className="w-[28px] h-[30px]" />
                    </button>

                    {/* logo */}
                    <div className="">
                        <Link
                            href={paths.home()}
                            className=" "
                        >
                            {/* <h1 className="text-center italic font-[1000] text-sky-900 text-4xl">
                                Flatmates
                            </h1> */}
                            <span className="h-100 flex text-center  lg:max-w-[215px] md:max-w-[165px] max-w-[134px]">
                                <svg width="256" height="38" viewBox="0 0 256 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1531_4296)"><path d="M15.878 16.5246H25.2441L23.7366 26.4818H14.3169L12.7559 37.1392H0L5.32968 1.23771H28.9592L27.3446 11.8415H16.5266L15.8799 16.5246H15.878Z" fill="#2F3A4A"></path><path d="M37.8929 37.1392H26.0514L31.5953 0H43.4368L37.8929 37.1392Z" fill="#2F3A4A"></path><path d="M70.4561 26.6424L70.2954 27.773C70.0257 29.5483 70.4025 30.1949 71.7494 30.2485H72.6637L70.4561 37.1372C67.9807 37.8373 67.0643 37.998 64.8587 37.998C60.9293 37.998 58.7772 36.7603 58.561 34.2849C56.2998 37.0301 54.3084 37.998 51.0792 37.998C45.3191 37.998 41.3898 33.2614 41.3898 26.9102C41.3898 26.3172 41.4434 25.6725 41.4969 25.0259C42.574 15.7133 50.0022 9.84811 60.3898 9.84811C64.5889 9.84811 68.4647 10.6018 72.6618 12.1629L70.4541 26.6424H70.4561ZM59.6916 19.5911C59.4219 19.5375 59.2076 19.484 58.9914 19.484C56.0856 19.2142 53.7709 20.9914 53.5547 23.7902C53.394 25.8887 54.3619 27.2355 56.1392 27.3962C57.0536 27.5033 57.7002 27.3426 58.561 26.9122L59.6916 19.5911Z" fill="#2F3A4A"></path><path d="M96.4559 19.5931H89.7814L89.1348 23.8993C89.0277 24.3297 89.0277 24.7065 89.0277 25.2996C89.0277 27.3982 90.2654 28.6359 92.3104 28.6359C93.0106 28.6359 93.6552 28.5288 94.9484 28.0983L97.047 34.9335C93.9249 37.1411 90.6422 38.002 85.9056 38.002C83.1605 38.002 80.1455 36.7643 78.531 34.9335C77.1306 33.426 76.486 31.4346 76.5931 29.2825C76.6466 28.2055 76.8073 26.8606 77.077 25.1925L77.8843 19.5951H73.3639L74.3319 12.867C80.2526 11.0898 83.7515 8.29105 87.5182 2.20963L92.2013 3.28667L91.0171 10.9291H97.7987L96.4539 19.5951L96.4559 19.5931Z" fill="#2F3A4A"></path><path d="M110.719 10.0663C112.011 11.1969 112.604 12.8115 112.604 15.0727C112.604 15.1798 112.604 15.5031 112.55 15.8799C114.918 11.9506 117.394 10.3896 121.323 10.0663C123.638 9.90563 125.467 10.3896 126.921 11.4666C128.105 12.4346 128.535 13.5116 128.751 15.6657C131.173 12.0597 134.135 10.2825 138.008 10.0683C142.422 9.85207 145.813 12.383 146.028 16.2052C146.081 17.2287 146.028 18.3573 145.867 19.597L143.229 37.1431H131.387L133.379 24.0639C133.432 23.5799 133.486 22.9868 133.486 22.7191C133.486 21.3187 132.893 20.6741 131.925 20.7276C130.848 20.7812 129.934 21.4278 128.696 22.9353L126.544 37.1451H114.756L116.694 23.7426C116.854 23.2586 116.908 22.8282 116.908 22.5584C116.961 21.4278 116.317 20.6741 115.347 20.6741C114.377 20.6741 113.409 21.2671 112.064 22.9353L109.912 37.1451H98.0705L100.332 21.8047C100.546 20.7812 100.655 19.7061 100.762 18.5755C100.923 17.3378 100.923 16.9074 100.923 15.2928C100.923 14.3784 100.762 13.6247 100.169 12.3315L110.719 10.0703V10.0663Z" fill="#2F3A4A"></path><path d="M175.955 26.6424L175.794 27.773C175.524 29.5483 175.901 30.1949 177.248 30.2485H178.162L175.955 37.1372C173.479 37.8373 172.563 37.998 170.357 37.998C166.428 37.998 164.276 36.7603 164.06 34.2849C161.799 37.0301 159.807 37.998 156.578 37.998C150.818 37.998 146.889 33.2614 146.889 26.9102C146.889 26.3172 146.942 25.6725 146.996 25.0259C148.073 15.7133 155.501 9.84811 165.889 9.84811C170.088 9.84811 173.963 10.6018 178.16 12.1629L175.953 26.6424H175.955ZM165.19 19.5911C164.921 19.5375 164.706 19.484 164.49 19.484C161.584 19.2142 159.27 20.9914 159.053 23.7902C158.893 25.8887 159.861 27.2355 161.638 27.3962C162.552 27.5033 163.199 27.3426 164.06 26.9122L165.19 19.5911Z" fill="#2F3A4A"></path><path d="M201.953 19.5931H195.278L194.631 23.8993C194.524 24.3297 194.524 24.7065 194.524 25.2996C194.524 27.3982 195.762 28.6359 197.807 28.6359C198.507 28.6359 199.152 28.5288 200.445 28.0983L202.544 34.9335C199.422 37.1411 196.139 38.002 191.402 38.002C188.657 38.002 185.642 36.7643 184.028 34.9335C182.627 33.426 181.983 31.4346 182.09 29.2825C182.143 28.2055 182.304 26.8606 182.574 25.1925L183.381 19.5951H178.861L179.829 12.867C185.749 11.0898 189.248 8.29105 193.015 2.20963L197.698 3.28667L196.514 10.9291H203.295L201.951 19.5951L201.953 19.5931Z" fill="#2F3A4A"></path><path d="M229.619 33.8565C224.612 37.0856 221.49 38.002 215.893 38.002C212.233 38.002 208.197 36.3339 206.043 33.912C204.105 31.7044 203.244 29.0683 203.244 25.5158C203.244 17.0661 210.672 9.85207 219.338 9.85207C223.698 9.85207 226.336 10.6594 228.434 12.6508C229.942 14.1047 230.803 15.9335 230.803 17.8178C230.803 21.3167 228.434 24.2761 224.182 26.0533C221.653 27.0768 219.822 27.5608 215.839 28.1519C216.539 29.4967 217.831 30.1969 219.392 30.1969C222.083 30.1969 224.452 29.3361 228.058 26.9677L229.619 33.8565ZM221.976 19.2162C221.976 18.0856 221.222 17.3319 220.092 17.3319C218.747 17.3319 217.186 18.4625 216.379 20.1306C215.948 20.9914 215.788 21.6381 215.571 23.2526C219.824 22.4989 221.976 21.1541 221.976 19.2162Z" fill="#2F3A4A"></path><path d="M254.702 19.8608C252.01 18.7838 250.773 18.4605 249.265 18.4069C248.188 18.3534 247.488 18.8374 247.488 19.5911C247.488 20.2377 248.081 20.8288 249.21 21.4754C251.901 22.9829 252.978 23.7366 253.676 24.7046C254.591 25.9958 255.021 27.3426 255.021 28.8481C255.021 34.0687 249.638 37.998 242.372 37.998C237.743 37.998 233.599 37.0301 229.94 35.0386L232.092 27.0193C234.353 28.0428 236.505 28.6874 238.173 28.7965C239.304 28.8501 240.165 28.2055 240.058 27.2891C240.004 26.6424 239.734 26.3211 238.12 25.2441C234.03 22.4989 232.737 20.6146 232.953 17.6552C233.223 13.1348 238.013 9.85009 244.417 9.85009C248.454 9.85009 251.253 10.4412 255.829 12.2719L254.698 19.8608H254.702Z" fill="#2F3A4A"></path></g><defs><clipPath id="clip0_1531_4296"><rect width="255.833" height="38" fill="white"></rect></clipPath></defs></svg>
                            </span>
                        </Link>
                    </div>

                    {/* header items */}
                    <ul className="md:flex hidden justify-evenly items-center md:order-[9999] flex-none">
                        <li className="bg-transparent hover:bg-gray-100 rounded-lg">
                            <Link
                                href="/"
                                className="text-sky-900 font-[700] text-sm leading-5 tracking-wide rounded-lg px-4 py-2 flex items-center"
                            >
                                Shortlist
                            </Link>
                        </li>
                        <li className="bg-transparent hover:bg-gray-100 rounded-lg">
                            <Link
                                href="/"
                                className="text-sky-900 font-[700] text-sm leading-5 tracking-wide rounded-lg px-4 py-2 flex items-center"
                            >
                                Messages
                            </Link>

                        </li>
                        <li className="bg-transparent hover:bg-gray-100 rounded-lg">
                            <Link
                                href="/"
                                className="text-sky-900 font-[700] text-sm leading-5 tracking-wide rounded-lg px-4 py-2 flex items-center"
                            >
                                Guides
                            </Link>

                        </li>
                        <li className={`${!session && "bg-transparent hover:bg-gray-100 rounded-lg "}`}>
                            <Link
                                href="/"
                                className="text-sky-900 font-[700] text-sm leading-5 tracking-wide rounded-lg px-4 py-2 flex items-center md:justify-center "
                            >
                                {!session ? <div className="w-full h-full flex items-center">
                                    <FaUserAlt height={1400} width={1245} className="inline-block h-[14px] w-[12.45px]" />
                                    <p className="ml-2 inline-block whitespace-nowrap">Sign in</p>
                                </div> : <FaUserCircle size={24} className="inline-block" />}
                            </Link>
                        </li>
                    </ul>

                    {/* profile after md */}
                    <div className="md:hidden inline-block text-right flex flex-1 ">
                        <Link
                            href="/"
                            className="ml-auto "
                        >
                            <div className="flex ">
                                {/* profile image */}
                                {!session ?
                                    <div className="w-full h-full flex items-center">
                                        <FaUserAlt height={1245} width={1400} className="inline-block h-[12.45px] w-[14px]" />
                                        <p className="ml-2 text-sm inline-block whitespace-nowrap">Sign in</p>
                                    </div>
                                    :
                                    <div className="border-[1px] border-solid border-sky-900 rounded-full w-[32px] h-[32px] bg-green-700" />
                                }
                            </div>
                        </Link>
                    </div>

                    {/* Search bar */}
                    <div className="w-full max-h-[90vh] md:h-12 ">
                        <button
                            className="w-full my-auto bg-white text-base relative cursor-pointer leading-6 font-[400] text-left border-[1px] border-solid
                            border-sky-800 rounded-lg h-12 flex items-center justify-start px-4 "
                            type="button"
                        >
                            <div className="max-w-[90%] h-8 flex items-center overflow-hidden" >
                                <IoSearch size={20} className="mr-4 fill-sky-900 font-[900] inline-block shrink-0" />
                                <span className="text-left font-[100] font-sans whitespace-nowrap block text-ellipsis overflow-hidden">
                                    Search rooms and housemates
                                </span>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}