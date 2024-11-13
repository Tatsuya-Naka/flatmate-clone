import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Header from "./_components/header";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
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
          <div className="lg:flex lg:flex-row my-8 mx-auto max-w-[1200px] w-full hidden">
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
        <div>

        </div>

        {/* Footer 1 */}
        <footer>

        </footer>

        {/* footer 2 */}
        <footer>

        </footer>
      </div>
    </HydrateClient>
  );
}
