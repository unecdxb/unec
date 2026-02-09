import Link from "next/link";

interface BtnLightProps {
  href: string;
  text: string;
  
  width?: string;
  fontSize?: string;
  mClass?: string;
}

const BtnLight = ({ href, text, width, fontSize, mClass }: BtnLightProps) => {
  return (
    <Link href={href} className={`block relative text-center overflow-hidden uppercase font-light transition-all duration-700 ease-out group border-2 bg-transparent text-white border-white hover:text-secondary hover:bg-white 
       
        ${width ? width : "w-fit"}
        ${fontSize ? fontSize : "text-xs xl:text-sm"} px-4 py-2 xl:px-8 xl:py-3
        ${mClass ? mClass : ""}
      `}
    >
      <span className={` relative z-10 transition-colors duration-500 font-mono`} >
        {text}
      </span>
      {/* Sliding background */}
      <span className={` absolute inset-0 -translate-x-[120%] transition-transform duration-500 ease-out group-hover:translate-x-0 `} />
    </Link>
  );
};

export default BtnLight;
