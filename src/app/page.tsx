import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";
import PropertyCom from "./_components/property";
import { FaArrowRight } from "react-icons/fa";
import FooterPage from "./_components/footerPage";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { GiBookmarklet } from "react-icons/gi";
import { GiFeatheredWing } from "react-icons/gi";

export default async function Home() {
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="relative z-0">
        <Header />
        {/* home I need a flatmate and I need a place */}
        <div className="">
          <div>

          </div>

          <div className="lg:hidden flex md:flex-row flex-col md:justify-center items-center bg-[#eaebec] pt-4 px-4 pb-6 relative">
            {/* I need a flatmate */}
            <Link
              href="#"
              className="bg-[url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624496539/flatmates_design/mobile-homepage-bed.png)]
                        md:mr-8 bg-[center_right_6px] bg-[length:140px] bg-white bg-no-repeat rounded-lg shadow-[0_3px_1px_rgba(0,0,0,0.04)]
                        max-w-[400px] p-4 relative w-full md:m-0 mb-2"
            >
              <div className="relative z-2 ">
                <p className="text-[#6d7580] text-sm font-[600] leading-base leading-6 m-auto ">
                  Create free listing
                </p>
                <p className="text-[#2f3a4a] text-base font-[700] leading-6 m-auto ">
                  I need a flatmate
                </p>
              </div>
            </Link>

            {/* I need a place */}
            <Link
              href="#"
              className="bg-[url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624496539/flatmates_design/mobile-homepage-woman.png)]
                        bg-[right_16px_top_-6px] bg-[length:140px] bg-white bg-no-repeat rounded-lg shadow-[0_3px_1px_rgba(0,0,0,0.04)]
                        max-w-[400px] p-4 relative w-full "
            >
              <div className="relative z-2 ">
                <p className="text-[#6d7580] text-sm font-[600] leading-base leading-6 m-auto ">
                  Create free listing
                </p>
                <p className="text-[#2f3a4a] text-base font-[700] m-auto leading-6 ">
                  I need a place
                </p>
              </div>
            </Link>
          </div>

          {/* for 1024px width */}
          <div className="lg:flex lg:flex-row my-7 mx-auto max-w-[1200px] w-full hidden">
            {/* I need a flatmate */}
            <Link
              href="#"
              className="lg:mr-8 bg-[url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624431481/flatmates_design/homepage-desktop-bed)]
                        bg-right bg-no-repeat bg-contain relative w-full min-h-[220px] hover:outline hover:outline-2 hover:outline-[#2f3a4a] hover:outline-solid rounded-xl group"
            >
              <div className="border-3  shadow-[0_3px_8px_rgba(0,0,0,0.12)] m-0.5 px-8 py-6 h-full rounded-xl">
                <div className="flex flex-col items-start height-[168px] justify-center relative z-2 h-full gap-2">
                  {/* Title */}
                  <h3 className="text-[#2f3a4a] text-2xl font-[700] leading-[1.875rem] mb-[0.5rem] max-w-[230px] ">
                    Create a free property listing
                  </h3>
                  <p className="text-[#2f3a4a] text-2xl font-[700] leading-[1.875rem] mb-[0.5rem] max-w-[230px] ">

                  </p>
                  <div
                    className="group-hover:opacity-80 bg-[#2f3a4a] rounded-lg inline-block font-base font-[600] min-w-[200px] px-4 py-3 text-center w-auto"
                  >
                    <p className="text-white m-0 ">
                      I need a flatmate
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* I need a place */}
            <Link
              href="#"
              className=" bg-[url(https://flatmates-res.cloudinary.com/image/upload/dpr_2.0,f_auto,q_auto/v1624430583/flatmates_design/homepage-desktop-woman)]
                        bg-right bg-no-repeat bg-contain relative w-full min-h-[220px] hover:outline hover:outline-2 hover:outline-[#2f3a4a] hover:outline-solid rounded-xl group"
            >
              <div className="border-3  shadow-[0_3px_8px_rgba(0,0,0,0.12)] m-0.5 px-8 py-6 h-full rounded-xl">
                <div className="flex flex-col items-start height-[168px] justify-center relative z-2 h-full gap-2">
                  {/* Title */}
                  <h3 className="text-[#2f3a4a] text-2xl font-[700] leading-[1.875rem] mb-[0.5rem] max-w-[230px] ">
                    Create a free seeker listing
                  </h3>
                  <p className="text-[#2f3a4a] text-2xl font-[700] leading-[1.875rem] mb-[0.5rem] max-w-[230px] ">

                  </p>
                  <div
                    className="group-hover:opacity-80 bg-[#2f3a4a] rounded-lg inline-block font-base font-[600] min-w-[200px] px-4 py-3 text-center w-auto"
                  >
                    <p className="text-white m-0 ">
                      I need a place
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Property */}
        <div className="lg:pt-0 md:mx-auto md:max-w-[1200px] md:pb-16 pb-8 md:pt-4">
          {/* Property content */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-6">
            <PropertyCom />
            <PropertyCom />
            <PropertyCom />
            <PropertyCom />
          </div>

          {/* Page Link */}
          <nav className="md:pt-0 md:w-auto flex flex-col items-center justify-center mx-auto pt-4 w-[274px] ">
            <div className=" flex items-center justify-center mb-8">
              <div className="flex items-center justify-around w-full ">
                <Link
                  href="#"
                  className="bg-[#006977] rounded-lg text-white mx-1.5 flex items-center justify-center text-sm font-[600] h-[40px] w-[40px] shrink-0 "
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:decoration-[#2f3a4a] border-[1px] border-solid border-[#2f3a4a] bg-white rounded-lg text-[#2f3a4a] mx-1.5 flex items-center justify-center text-sm font-[600] w-[40px] h-[40px] "
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:decoration-[#2f3a4a] border-[1px] border-solid border-[#2f3a4a] bg-white rounded-lg text-[#2f3a4a] mx-1.5 flex items-center justify-center text-sm font-[600] w-[40px] h-[40px] "
                >
                  3
                </Link>
                <Link
                  href="#"
                  className="hover:underline hover:decoration-[#2f3a4a] border-[1px] border-solid border-[#2f3a4a] bg-white rounded-lg text-[#2f3a4a] mx-1.5 flex items-center justify-center text-sm font-[600] w-[40px] h-[40px] "
                >
                  4
                </Link>
                <span className="text-[#2f3a4a] text-base tracking-[2px] ">
                  •••
                </span>
                <Link
                  href="#"
                  className="hover:underline hover:decoration-[#2f3a4a] border-[1px] border-solid border-[#2f3a4a] bg-white rounded-lg text-[#2f3a4a] mx-1.5 flex items-center justify-center text-sm font-[600] w-[40px] h-[40px] "
                >
                  4000
                </Link>
              </div>
              <div className="ml-2 md:block hidden ">
                <Link
                  href="#"
                  className="flex items-center justify-center bg-[#006977] text-white font-[600] h-[40px] justify-center rounded-lg px-4 "
                >
                  <span className="text-sm flex items-center">
                    Next
                    <FaArrowRight size={12.25} className="ml-1.5" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center my-4 w-full md:hidden block justify-center w-full">
              <Link
                href="#"
                className="flex items-center justify-center bg-[#006977] rounded-lg text-white font-[600] px-4 h-[40px] w-full"
              >
                <span className="text-sm flex items-center">
                  Next
                  <FaArrowRight size={12.25} className="ml-1.5" />
                </span>
              </Link>
            </div>

            {/* Number of data I can see but now how many properties I can see */}
            <div className="text-[#2f3a4a] text-sm opacity-80">
              Viewing 1-12 of 45615 results
            </div>
          </nav>
        </div>

        {/* Footer 1 */}
        <footer className="relative z-0">
          <div>

          </div>

          <div className="lg:block bg-[#6d7580] text-white w-full  ">
            <FooterPage />
          </div>
        </footer>

        {/* footer 2 */}
        <footer className="bg-[#2f3a4a] min-h-[336px] relative z-1">
          <div className="md:px-6 md:pt-6 md:pb-16 block mx-auto max-w-[1200px] py-5 px-4 w-full ">
            <div className="max-w-[140px] mb-2">
              <Link
                href="#"
                className="text-white text-sm max-w-[140px] group"
              >
                <span className="text-center text-white max-w-[140px] group-hover:opacity-80">
                  <svg width="140" height="32" viewBox="0 0 256 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1531_4296)"><path className="fill-white" d="M15.878 16.5246H25.2441L23.7366 26.4818H14.3169L12.7559 37.1392H0L5.32968 1.23771H28.9592L27.3446 11.8415H16.5266L15.8799 16.5246H15.878Z" ></path><path className="fill-white" d="M37.8929 37.1392H26.0514L31.5953 0H43.4368L37.8929 37.1392Z"></path><path className="fill-white" d="M70.4561 26.6424L70.2954 27.773C70.0257 29.5483 70.4025 30.1949 71.7494 30.2485H72.6637L70.4561 37.1372C67.9807 37.8373 67.0643 37.998 64.8587 37.998C60.9293 37.998 58.7772 36.7603 58.561 34.2849C56.2998 37.0301 54.3084 37.998 51.0792 37.998C45.3191 37.998 41.3898 33.2614 41.3898 26.9102C41.3898 26.3172 41.4434 25.6725 41.4969 25.0259C42.574 15.7133 50.0022 9.84811 60.3898 9.84811C64.5889 9.84811 68.4647 10.6018 72.6618 12.1629L70.4541 26.6424H70.4561ZM59.6916 19.5911C59.4219 19.5375 59.2076 19.484 58.9914 19.484C56.0856 19.2142 53.7709 20.9914 53.5547 23.7902C53.394 25.8887 54.3619 27.2355 56.1392 27.3962C57.0536 27.5033 57.7002 27.3426 58.561 26.9122L59.6916 19.5911Z"></path><path className="fill-white" d="M96.4559 19.5931H89.7814L89.1348 23.8993C89.0277 24.3297 89.0277 24.7065 89.0277 25.2996C89.0277 27.3982 90.2654 28.6359 92.3104 28.6359C93.0106 28.6359 93.6552 28.5288 94.9484 28.0983L97.047 34.9335C93.9249 37.1411 90.6422 38.002 85.9056 38.002C83.1605 38.002 80.1455 36.7643 78.531 34.9335C77.1306 33.426 76.486 31.4346 76.5931 29.2825C76.6466 28.2055 76.8073 26.8606 77.077 25.1925L77.8843 19.5951H73.3639L74.3319 12.867C80.2526 11.0898 83.7515 8.29105 87.5182 2.20963L92.2013 3.28667L91.0171 10.9291H97.7987L96.4539 19.5951L96.4559 19.5931Z" fill="#2F3A4A"></path><path className="fill-white" d="M110.719 10.0663C112.011 11.1969 112.604 12.8115 112.604 15.0727C112.604 15.1798 112.604 15.5031 112.55 15.8799C114.918 11.9506 117.394 10.3896 121.323 10.0663C123.638 9.90563 125.467 10.3896 126.921 11.4666C128.105 12.4346 128.535 13.5116 128.751 15.6657C131.173 12.0597 134.135 10.2825 138.008 10.0683C142.422 9.85207 145.813 12.383 146.028 16.2052C146.081 17.2287 146.028 18.3573 145.867 19.597L143.229 37.1431H131.387L133.379 24.0639C133.432 23.5799 133.486 22.9868 133.486 22.7191C133.486 21.3187 132.893 20.6741 131.925 20.7276C130.848 20.7812 129.934 21.4278 128.696 22.9353L126.544 37.1451H114.756L116.694 23.7426C116.854 23.2586 116.908 22.8282 116.908 22.5584C116.961 21.4278 116.317 20.6741 115.347 20.6741C114.377 20.6741 113.409 21.2671 112.064 22.9353L109.912 37.1451H98.0705L100.332 21.8047C100.546 20.7812 100.655 19.7061 100.762 18.5755C100.923 17.3378 100.923 16.9074 100.923 15.2928C100.923 14.3784 100.762 13.6247 100.169 12.3315L110.719 10.0703V10.0663Z" fill="#2F3A4A"></path><path className="fill-white" d="M175.955 26.6424L175.794 27.773C175.524 29.5483 175.901 30.1949 177.248 30.2485H178.162L175.955 37.1372C173.479 37.8373 172.563 37.998 170.357 37.998C166.428 37.998 164.276 36.7603 164.06 34.2849C161.799 37.0301 159.807 37.998 156.578 37.998C150.818 37.998 146.889 33.2614 146.889 26.9102C146.889 26.3172 146.942 25.6725 146.996 25.0259C148.073 15.7133 155.501 9.84811 165.889 9.84811C170.088 9.84811 173.963 10.6018 178.16 12.1629L175.953 26.6424H175.955ZM165.19 19.5911C164.921 19.5375 164.706 19.484 164.49 19.484C161.584 19.2142 159.27 20.9914 159.053 23.7902C158.893 25.8887 159.861 27.2355 161.638 27.3962C162.552 27.5033 163.199 27.3426 164.06 26.9122L165.19 19.5911Z" fill="#2F3A4A"></path><path className="fill-white" d="M201.953 19.5931H195.278L194.631 23.8993C194.524 24.3297 194.524 24.7065 194.524 25.2996C194.524 27.3982 195.762 28.6359 197.807 28.6359C198.507 28.6359 199.152 28.5288 200.445 28.0983L202.544 34.9335C199.422 37.1411 196.139 38.002 191.402 38.002C188.657 38.002 185.642 36.7643 184.028 34.9335C182.627 33.426 181.983 31.4346 182.09 29.2825C182.143 28.2055 182.304 26.8606 182.574 25.1925L183.381 19.5951H178.861L179.829 12.867C185.749 11.0898 189.248 8.29105 193.015 2.20963L197.698 3.28667L196.514 10.9291H203.295L201.951 19.5951L201.953 19.5931Z" fill="#2F3A4A"></path><path className="fill-white" d="M229.619 33.8565C224.612 37.0856 221.49 38.002 215.893 38.002C212.233 38.002 208.197 36.3339 206.043 33.912C204.105 31.7044 203.244 29.0683 203.244 25.5158C203.244 17.0661 210.672 9.85207 219.338 9.85207C223.698 9.85207 226.336 10.6594 228.434 12.6508C229.942 14.1047 230.803 15.9335 230.803 17.8178C230.803 21.3167 228.434 24.2761 224.182 26.0533C221.653 27.0768 219.822 27.5608 215.839 28.1519C216.539 29.4967 217.831 30.1969 219.392 30.1969C222.083 30.1969 224.452 29.3361 228.058 26.9677L229.619 33.8565ZM221.976 19.2162C221.976 18.0856 221.222 17.3319 220.092 17.3319C218.747 17.3319 217.186 18.4625 216.379 20.1306C215.948 20.9914 215.788 21.6381 215.571 23.2526C219.824 22.4989 221.976 21.1541 221.976 19.2162Z" fill="#2F3A4A"></path><path className="fill-white" d="M254.702 19.8608C252.01 18.7838 250.773 18.4605 249.265 18.4069C248.188 18.3534 247.488 18.8374 247.488 19.5911C247.488 20.2377 248.081 20.8288 249.21 21.4754C251.901 22.9829 252.978 23.7366 253.676 24.7046C254.591 25.9958 255.021 27.3426 255.021 28.8481C255.021 34.0687 249.638 37.998 242.372 37.998C237.743 37.998 233.599 37.0301 229.94 35.0386L232.092 27.0193C234.353 28.0428 236.505 28.6874 238.173 28.7965C239.304 28.8501 240.165 28.2055 240.058 27.2891C240.004 26.6424 239.734 26.3211 238.12 25.2441C234.03 22.4989 232.737 20.6146 232.953 17.6552C233.223 13.1348 238.013 9.85009 244.417 9.85009C248.454 9.85009 251.253 10.4412 255.829 12.2719L254.698 19.8608H254.702Z"></path></g><defs><clipPath id="clip0_1531_4296"><rect width="255.833" height="38" fill="white"></rect></clipPath></defs></svg>
                </span>
              </Link>
            </div>

            <div className="overflow-auto">
              <div className="lg:float-left lg:mb-0 mb-8 lg:pr-16 lg:w-[464px] md:block hidden pr-6  ">
                <p className="font-[600] text-white text-sm">Flatmates.com.au is a peer to peer listing site for those looking for shared homes or those looking for a flatmate. Simply create a listing, search and connect.</p>
              </div>

              <div className="lg:float-left lg:mb-0 mb-8 lg:pr-16 lg:w-[370px] block md:pr-6 pr-0">
                <ul className="pr-2 pr-0 lg:w-1/2 md:w-1/3 w-1/2 inline-block">
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden underline"
                    >
                      <span>About us</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden hover:underline"
                    >
                      <span>How it works</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden hover:underline"
                    >
                      <span>Info</span>
                    </Link>
                  </li>
                </ul>

                <ul className="pl-2 lg:w-1/2 md:w-1/3 inline-block ">
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden hover:underline"
                    >
                      <span>Privacy policy</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden hover:underline"
                    >
                      <span>Terms & Conditions</span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#"
                      className="text-white text-sm inline-block overflow-hidden hover:underline"
                    >
                      <span>FAQ & Contanct</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:float-left lg:mb-0 mb-8 ">
                <h3 className="md:block hidden mb-4 text-white text-sm font-normal ">Connect with us on:</h3>
                <div className="">
                  <ul>
                    <li className="ml-0 mr-6 inline-block ">
                      <Link
                        href="#"
                        className="group"
                      >
                        <span className="text-center bg-white rounded-full max-w-[30px] group-hover:opacity-80">
                          <FaFacebookF size={30} className="fill-[#2f3a4a] bg-white p-1.5 rounded-full" />
                        </span>
                      </Link>
                    </li>
                    <li className="ml-0 mr-6 inline-block ">
                      <Link
                        href="#"
                        className="group"
                      >
                        <span className="text-center bg-white rounded-full max-w-[30px] group-hover:opacity-80">
                          <CiInstagram size={30} className="fill-[#2f3a4a] bg-white p-1.5 rounded-full" />
                        </span>
                      </Link>
                    </li>
                    <li className="ml-0 mr-6 inline-block ">
                      <Link
                        href="#"
                        className="group"
                      >
                        <span className="text-center bg-white rounded-full max-w-[30px] group-hover:opacity-80">
                          <FaTwitter size={30} className="fill-[#2f3a4a] bg-white p-1.5 rounded-full" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <div className="md:mb-4 md:mt-8 mb-0 ">
                <ul className="flex md:flex-row flex-col md:gap-0 gap-1 flex-wrap ">
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <RiHome2Line size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                        <span className="text-white font-[500] text-sm">REA Group</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <RiHome2Line size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                        <span className="text-white font-[500] text-sm">realestate.com.au</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <RiHome2Line size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                        <span className="text-white font-[500] text-sm">realcommercial.com.au</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <RiHome2Line size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                        <span className="text-white font-[500] text-sm">PropTrack</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <GiBookmarklet size={13} className="fill-white" />
                        <span className="text-white font-[500] text-sm">Mortgage Choice</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <RiHome2Line size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                        <span className="text-white font-[500] text-sm">smartline</span>
                      </span>
                    </Link>
                  </li>
                  <li className="mb-4 inline-block mr-6 ">
                    <Link
                      href="#"
                      className="text-white text-sm hover:opacity-80"
                    >
                      <span className="text-center flex items-center gap-1 max-h-[24px]">
                        <span className="text-white font-[500] text-sm">Property</span>
                        <GiFeatheredWing size={24} className="bg-white rounded-full fill-[#2f3a4a] p-1" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <p className="text-xs text-white">
                  Flatmates.com.au is owned and operated by ASX-listed REA Group Ltd (REA:ASX) © REA Group Ltd.
                </p>
              </div>

              <div className="h-[1px] bg-[#abb0b6] md:my-8 my-6 w-full " />

              <div className="">
                <p className="text-xs text-white">
                  In the spirit of reconciliation, Flatmates.com.au acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea and community. We pay our respects to their Elders past, present and emerging.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HydrateClient>
  );
}
