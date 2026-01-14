import Link from "next/link";

interface PrimaryBtnProps {
  href: string;
  text: string;
  mode?: "light" | "dark";
  width?: string;
  fontSize?: string;
  mClass?: string;
}

const PrimaryBtn = ({ href, text, mode = "dark", width, fontSize, mClass }: PrimaryBtnProps) => {

  const isLight = mode === "light";

  return (
    <Link href={href} className={`block relative overflow-hidden uppercase font-light transition-all duration-700 ease-out group border-2
        ${isLight ? "bg-light border-light text-white" : " border-secondary text-black"}
        ${width ? width : "w-fit"}
        ${fontSize ? fontSize : "text-xs xl:text-sm"} px-4 py-2 xl:px-8 xl:py-3
        ${mClass ? mClass : ""}
      `}
    >
      <span className={` relative z-10 transition-colors duration-500 ${isLight ? "group-hover:text-secondary" : "group-hover:text-white"}`} >
        {text}
      </span>
      {/* Sliding background */}
      <span className={` absolute inset-0 -translate-x-[120%] transition-transform duration-500 ease-out group-hover:translate-x-0 ${isLight ? "bg-white" : "bg-black"} `} />
    </Link>
  );
};

export default PrimaryBtn;
