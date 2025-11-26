 import { Heading } from "../component/atom/decorativeHeading";
// import Image from 'next/image'

// export default function WhyRevops() {
//   return (
//     <section className="blade-top-padding-lg blade-bottom-padding-lg">
//       <div className="relative w-full h-auto bg-black overflow-hidden">
  
//   {/* Blur Layer */}
//   <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

//   {/* Left Green Glow */}
//   <div
//     className="
//       absolute bottom-0 left-0
//       w-[35rem] h-[35rem]
//       bg-[radial-gradient(circle_at_bottom_left,#26DF04,transparent_80%)]
//       opacity-60 z-0
//     "
//   ></div>

//   {/* Right Green Glow */}
//   <div
//     className="
//       absolute right-0 top-1/2 -translate-y-1/2
//       w-[35rem] h-[45rem]
//       bg-[radial-gradient(circle_at_right_center,#26DF04,transparent_70%)]
//       opacity-70 z-0
//     "
//   ></div>

//   {/* CONTENT (Z-50 so it shows ABOVE everything) */}
//   <div className="relative z-50 flex flex-col justify-center items-center h-full">
//     <Heading title="Why Revops" color="#26DF04" />
//     <h2 className="custom-text-3xl font-bold text-white py-2">
//       100+ <i className="font-normal">Companies</i> trusted us <br /> to
//       improve their <i className="font-normal">marketing</i>
//     </h2>

//     {/* IMAGE GRID */}
//     <div className="grid grid-cols-2 gap-6 d mt-10">
//       <div className="relative w-[35rem] h-[14rem]">
//   <Image src="/assets/service/image1.png" alt="Revops" fill className="object-cover" />
// </div>

//       <div className="relative w-[35rem] h-[14rem]">
//   <Image src="/assets/service/image2.png" alt="Revops" fill className="object-cover" />
// </div>
//       <div className="relative w-[35rem] h-[14rem]">
//         <Image src="/assets/service/image3.png" alt="Revops" fill className="object-cover" />
//       </div>

//       <div className="relative w-[35rem] h-[14rem]">
//         <Image src="/assets/service/image4.png" alt="Revops" fill className="object-cover" />
//       </div>
//     </div>

//   </div>

// </div>

//     </section>
//   );
// }




import Image from "next/image"

export default function WhyRevops() {
  const cards = [
    {
      id: 1,
      label: "D2C",
      title: "Grow Your Channel",
      description:
        "Secure Funding Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
      image: "/assets/service/image1.png",
    },
    {
      id: 2,
      label: "D2C",
      title: "Grow Your Channel",
      description:
        "Secure Funding Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
      image: "/assets/service/image2.png",
    },
    {
      id: 3,
      label: "D2C",
      title: "Grow Your Channel",
      description:
        "Secure Funding Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
      image: "/assets/service/image3.png",
    },
    {
      id: 4,
      label: "D2C",
      title: "Grow Your Channel",
      description:
        "Secure Funding Monetize your passion and fuel your channel's growth with funding based on your YouTube earnings.",
      image: "/assets/service/image4.png",
    },
  ]

  return (
    <section className="blade-top-padding-lg blade-bottom-padding-lg">
      <div className="relative w-full h-auto bg-black overflow-hidden">
        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[60px] z-10"></div>

        {/* Left Green Glow */}
        <div
          className="
            absolute bottom-0 left-0
            w-[35rem] h-[35rem]
            bg-[radial-gradient(circle_at_bottom_left,#26DF04,transparent_80%)]
            opacity-60 z-0
          "
        ></div>

        {/* Right Green Glow */}
        <div
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            w-[35rem] h-[45rem]
            bg-[radial-gradient(circle_at_right_center,#26DF04,transparent_70%)]
            opacity-70 z-0
          "
        ></div>

        {/* CONTENT (Z-50 so it shows ABOVE everything) */}
        <div className="relative z-50 flex flex-col justify-center items-center h-full px-4">
         <Heading title="Why Revops" color="#26DF04" />
    <h2 className="custom-text-3xl font-bold text-white py-2">
      100+ <i className="font-normal">Companies</i> trusted us <br /> to
      improve their <i className="font-normal">marketing</i>
    </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-6xl w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="
                  relative group
                  border border-green-500/30 rounded-lg overflow-hidden
                  bg-black/40 backdrop-blur-sm
                  hover:border-green-500/60 transition-all duration-300
                  min-h-[20rem]
                "
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/5 transition-all duration-300 z-10"></div>

                {/* Content Container */}
                <div className="relative z-20 h-full flex flex-col p-6">
                  {/* Card Label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-500 text-sm font-semibold tracking-wider">{card.label}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>

                  {/* Card Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{card.description}</p>

                  {/* Image Container */}
                  <div className="relative w-full h-[25rem] rounded-md overflow-hidden mb-4 ">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>

             
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
