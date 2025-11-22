const DecorativeIcon = () => (
  <svg
    width="14"
    height="25"
    viewBox="0 0 14 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="7" y="9" width="7" height="7" fill="#26DF04" />
    <rect y="18" width="7" height="7" fill="#26DF04" />
    <rect width="7" height="7" fill="#26DF04" />
  </svg>
);

const DecorativeIconReverse = () => (
  <svg
    width="14"
    height="25"
    viewBox="0 0 14 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="7"
      y="16"
      width="7"
      height="7"
      transform="rotate(-180 7 16)"
      fill="#26DF04"
    />
    <rect
      x="14"
      y="7"
      width="7"
      height="7"
      transform="rotate(-180 14 7)"
      fill="#26DF04"
    />
    <rect
      x="14"
      y="25"
      width="7"
      height="7"
      transform="rotate(-180 14 25)"
      fill="#26DF04"
    />
  </svg>
);
export const Heading = ({title,color}:{title:string,color?:string}) => {
  return (
    <div className="flex gap-2 items-center">
      <DecorativeIcon />
       <h4
        className="font-medium custom-text-lg"
        style={{ color }}
      >
        {title}
      </h4>
     
      <DecorativeIconReverse />
    </div>
  );
};
  