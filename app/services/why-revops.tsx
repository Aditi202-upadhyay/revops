import Image from "next/image"
import { Heading } from "../component/atom/decorativeHeading"

export default function WhyChoose() {
  return (
    <section className="blade-top-padding-lg">
      <div className="bg-black relative min-h-screen">
        <div className="relative z-50 flex justify-center items-center flex-col text-center">
          <Heading title="Why Revops" color="#26DF04" />
          <h2 className="text-3xl font-bold text-white py-2">
            100+ <i className="font-normal">Companies</i> trusted us <br /> to improve their{" "}
            <i className="font-normal">marketing</i>
          </h2>
        </div>

        <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

        <div
          className="
      absolute bottom-0 left-0
      w-[35rem] h-[35rem]
      bg-[radial-gradient(circle_at_bottom_left,#26DF04,transparent_80%)]
      opacity-60 z-0
    "
        ></div>

        <div
          className="
      absolute right-0 top-1/2 -translate-y-1/2
      w-[35rem] h-[45rem]
      bg-[radial-gradient(circle_at_right_center,#26DF04,transparent_70%)]
      opacity-70 z-0
    "
        ></div>

        <div className="flex flex-wrap justify-center items-center gap-8 min-h-[45rem] mx-auto mt-8 relative z-50 px-4">
          {/* Card 1 */}
          <div className="relative">
            <div className="w-full md:w-[44rem] bg-black border border-green rounded-md pb-20">
              <div className="flex gap-2 items-center p-4 relative z-20">
                <div className="w-2 h-2 bg-green-500"></div>
                <h4 className="text-white font-medium text-base">D2C</h4>
              </div>
              <p className="text-white text-lg px-6 max-w-sm relative z-20">
                Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel&apos;s growth with
                funding based on your YouTube earnings.
              </p>
              <div className="w-full h-56 relative z-20 px-6">
                <Image src="/assets/services/image2.png" alt="D2C Service" fill className="object-contain" />
              </div>
            </div>

            <div
              className="
        absolute -bottom-20 left-0
        w-[20rem] h-[20rem]
        bg-[radial-gradient(circle_at_center,#26DF04,transparent_75%)]
        opacity-50 z-20 pointer-events-none
      "
            ></div>
          </div>

          {/* Card 2 */}
          <div className="relative">
            <div className="w-full md:w-[35rem] bg-black border border-green rounded-md pb-20">
              <div className="flex gap-2 items-center p-4 relative z-20">
                <div className="w-2 h-2 bg-green-500"></div>
                <h4 className="text-white font-medium text-base">D2C</h4>
              </div>
              <p className="text-white text-lg px-6 max-w-sm relative z-20">
                Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel&apos;s growth with
                funding based on your YouTube earnings.
              </p>
              <div className="w-full h-56 relative z-20 px-6">
                <Image src="/assets/services/image4.png" alt="D2C Service" fill className="object-contain" />
              </div>
            </div>

            <div
              className="
        absolute -bottom-20 left-0
        w-[20rem] h-[20rem]
        bg-[radial-gradient(circle_at_center,#26DF04,transparent_75%)]
        opacity-50 z-20 pointer-events-none
      "
            ></div>
          </div>

          {/* Card 3 */}
          <div className="relative">
            <div className="w-full md:w-[35rem] bg-black border border-green rounded-md pb-20">
              <div className="flex gap-2 items-center p-4 relative z-20">
                <div className="w-2 h-2 bg-green-500"></div>
                <h4 className="text-white font-medium text-base">D2C</h4>
              </div>
              <p className="text-white text-lg px-6 max-w-sm relative z-20">
                Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel&apos;s growth with
                funding based on your YouTube earnings.
              </p>
              <div className="w-full h-56 relative z-20 px-6">
                <Image src="/assets/services/image3.png" alt="D2C Service" fill className="object-contain" />
              </div>
            </div>

            <div
              className="
        absolute -bottom-20 left-0
        w-[20rem] h-[20rem]
        bg-[radial-gradient(circle_at_center,#26DF04,transparent_75%)]
        opacity-50 z-20 pointer-events-none
      "
            ></div>
          </div>

          {/* Card 4 */}
          <div className="relative">
            <div className="w-full md:w-[44rem] bg-black border border-green rounded-md pb-20">
              <div className="flex gap-2 items-center p-4 relative z-20">
                <div className="w-2 h-2 bg-green-500"></div>
                <h4 className="text-white font-medium text-base">D2C</h4>
              </div>
              <p className="text-white text-lg px-6 max-w-sm relative z-20">
                Grow Your Channel, Secure Funding. Monetize your passion and fuel your channel&apos;s growth with
                funding based on your YouTube earnings.
              </p>
              <div className="w-full h-56 relative z-20 px-6">
                <Image src="/assets/services/image1.png" alt="D2C Service" fill className="object-contain" />
              </div>
            </div>

            <div
              className="
        absolute -bottom-20 left-0
        w-[20rem] h-[20rem]
        bg-[radial-gradient(circle_at_center,#26DF04,transparent_75%)]
        opacity-50 z-20 pointer-events-none
      "
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
