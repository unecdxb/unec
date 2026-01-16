interface Props {
    title: string;
    mClass?: string;
    titleColor?: string;
}
const SubTitle = ({title, mClass, titleColor}: Props) => {
  return ( 
    <div className={`inline-block ${mClass?mClass:'mb-2 xl:mb-6'}`}>
      <h2 className={`text-36 xl:text-40 3xl:text-50  uppercase font-light leading-[1.2] ${titleColor?titleColor:'text-secondary'}`}>
        {title}
      </h2>
      {/* <div className="h-1 bg-gradient-to-r from-primary to-transparent" /> */}
    </div>
   );
}
 
export default SubTitle;