import { cn } from "@/lib/utils";


export const Greenbutton = ({
  color,
  classes,
  style,
}: {
  color: string;
  classes?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      aria-label="contact-us"
      style={style}
      className={cn(
        "group px-3 md:px-4 py-2 rounded-2xl relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-sm",
        classes
      )}
    >
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.702113 4.46775C0.314313 4.46775 -6.11205e-05 4.78212 -6.11544e-05 5.16992C-6.11883e-05 5.55772 0.314313 5.8721 0.702113 5.8721L0.702113 5.16992L0.702113 4.46775ZM18.9378 5.66644C19.212 5.39222 19.212 4.94763 18.9378 4.67341L14.4691 0.204804C14.1949 -0.069412 13.7503 -0.069412 13.4761 0.204804C13.2019 0.47902 13.2019 0.923612 13.4761 1.19783L17.4482 5.16992L13.4761 9.14202C13.2019 9.41623 13.2019 9.86083 13.4761 10.135C13.7503 10.4093 14.1949 10.4093 14.4691 10.135L18.9378 5.66644ZM0.702113 5.16992L0.702113 5.8721L18.4412 5.8721L18.4412 5.16992L18.4412 4.46775L0.702113 4.46775L0.702113 5.16992Z"
          fill={color}
          className="transition-all duration-300"
        />
      </svg>
    </button>
  );
};




export function GradientBorderBox({ title }: { title: string }) {
  return (
    <div  className="rounded-full p-[2px] border border-white bg-darkgreen ">
      <button className="rounded-2xl text-base xl:text-lg  text-white px-8 py-3 font-family-helvetica-now ">
    {title}
      </button>
    </div>
  );
}

