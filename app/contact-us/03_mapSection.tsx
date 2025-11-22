import { ReactNode } from "react";
import { SocialIcon } from "../component/atom/socialicon";



const companyDetails = [
  {
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.8859 1.98859C19.8859 0.894864 18.991 0 17.8973 0H1.98859C0.894864 0 0 0.894864 0 1.98859V13.9201C0 15.0138 0.894864 15.9087 1.98859 15.9087H17.8973C18.991 15.9087 19.8859 15.0138 19.8859 13.9201V1.98859ZM17.8973 1.98859L9.94293 6.96005L1.98859 1.98859H17.8973ZM17.8973 13.9201H1.98859V3.97717L9.94293 8.94864L17.8973 3.97717V13.9201Z"
          fill="#26DF04"
        />
      </svg>
    ),
    title: "Email",
    details: "info@theinfravisionfoundation.org",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.50212 1.9786C3.56147 2.85907 3.70987 3.71976 3.9473 4.54088L2.76014 5.72804C2.35453 4.54088 2.09731 3.28447 2.00828 1.9786H3.50212ZM13.2566 13.87C14.0975 14.1074 14.9582 14.2558 15.8288 14.3151V15.7892C14.5229 15.7002 13.2665 15.4429 12.0694 15.0472L13.2566 13.87ZM4.45184 0H0.989299C0.445184 0 0 0.445184 0 0.989299C0 10.2788 7.52856 17.8074 16.8181 17.8074C17.3622 17.8074 17.8074 17.3622 17.8074 16.8181V13.3654C17.8074 12.8213 17.3622 12.3761 16.8181 12.3761C15.5913 12.3761 14.3943 12.1783 13.2863 11.8122C13.1873 11.7727 13.0785 11.7628 12.9796 11.7628C12.7224 11.7628 12.4751 11.8617 12.2772 12.0497L10.1007 14.2261C7.30102 12.7916 5.00585 10.5064 3.58126 7.70664L5.75772 5.53018C6.03472 5.25318 6.11386 4.86735 6.00504 4.52109C5.639 3.41308 5.44114 2.22592 5.44114 0.989299C5.44114 0.445184 4.99596 0 4.45184 0Z"
          fill="#26DF04"
        />
      </svg>
    ),
    title: "Phone",
    details: "+91 98107 50745",
  },
  {
    icon: (
      <svg
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.14941 0.115234C12.591 0.115445 16.1826 3.70781 16.1826 8.14941C16.1825 9.65394 15.6808 11.3464 14.9199 13.0449C14.1596 14.7421 13.1444 16.4368 12.1279 17.9434C11.1117 19.4495 10.0955 20.7656 9.33301 21.7051C8.95181 22.1748 8.63429 22.5507 8.41211 22.8086C8.30122 22.9373 8.21366 23.0363 8.1543 23.1035C8.15252 23.1055 8.15017 23.1074 8.14844 23.1094C8.14687 23.1076 8.14516 23.1053 8.14355 23.1035C8.08418 23.0363 7.99662 22.9373 7.88574 22.8086C7.66356 22.5507 7.34604 22.1748 6.96484 21.7051C6.20237 20.7656 5.18609 19.4495 4.16992 17.9434C3.15349 16.4369 2.13826 14.7421 1.37793 13.0449C0.617038 11.3464 0.115321 9.65392 0.115234 8.14941C0.115234 3.70768 3.70768 0.115234 8.14941 0.115234ZM8.14941 2.21289C4.87286 2.21289 2.21289 4.87286 2.21289 8.14941C2.21302 9.83974 3.07683 11.96 4.23047 14.0342C5.38684 16.1133 6.84577 18.1648 8.05859 19.7217L8.14844 19.8369L8.23926 19.7217C9.47543 18.1531 10.9344 16.1109 12.085 14.0391C13.2331 11.9716 14.0848 9.85688 14.085 8.14941C14.085 4.87299 11.4258 2.2131 8.14941 2.21289Z"
          fill="#26DF04"
          stroke="#26DF04"
          strokeWidth="0.23"
        />
        <path
          d="M8.14962 11.061C9.75697 11.061 11.06 9.75795 11.06 8.1506C11.06 6.54325 9.75697 5.24023 8.14962 5.24023C6.54227 5.24023 5.23926 6.54325 5.23926 8.1506C5.23926 9.75795 6.54227 11.061 8.14962 11.061Z"
          fill="#26DF04"
        />
      </svg>
    ),
    title: "Address",
    details:
      "E 2261, Palam Vihar, Gurugram - 122017, Haryana, Delhi NCR, India.",
  },
];

export default function MapSection() {
  return (
    <section>
      <div className="w-container flex flex-col md:flex-row gap-8 lg:gap-12 p-4 md:p-6 rounded-xl blade-top-margin-sm blade-bottom-margin-lg bg-linear-to-l from-green to-darkgreen">
        <div className="w-full md:w-[50%]   ">
          <div className=" lg:mx-16">
            {companyDetails.map((details, index) => {
              return (
                <Details
                  key={index}
                  icon={details.icon}
                  title={details.title}
                  details={details.details}
                />
              );
            })}
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green" />
              <h4 className={`custom-text-md font-medium text-white`}>
                Follow us on
              </h4>
            </div>
            <div className="flex items-center gap-4 ps-6  pt-2">
              <SocialIcon icon="youtube" href="#" color="#fff"/>
              <SocialIcon icon="linkedin" href="#" color="#fff"/>
              <SocialIcon icon="twitter" href="#" color="#fff"/>
              <SocialIcon icon="instagram" href="#" color="#fff"/>
            </div>
          </div>
        </div>
          <div className="w-full md:w-1/2">
          <div className="w-full h-64 sm:h-full lg:h-[450px] rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

const Details = ({
  icon,
  title,
  details,
}: {
  icon: ReactNode;
  title: string;
  details: string;
}) => {
  return (
    <div className="flex flex-row items-start gap-4 my-4 md:my-6">
      {icon}
      <div>
        <h5 className="text-white custom-text-md">{title}</h5>
        <h6 className="text-white custom-text-md max-w-sm">{details}</h6>
      </div>
    </div>
  );
};
