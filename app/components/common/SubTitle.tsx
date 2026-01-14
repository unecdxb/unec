interface Props {
    title: string;
    mClass?: string;
    titleColor?: string;
}
const SubTitle = ({title, mClass, titleColor}: Props) => {
  return ( 
    <div className={`inline-block ${mClass?mClass:'mb-6 xl:mb-12'}`}>
      <h2 className={`text-2xl xs:text-3xl xl:text-5xl 2xl:text-50  uppercase font-light ${titleColor?titleColor:'text-secondary'}`}>
        {title}
      </h2>
      {/* <div className="h-1 bg-gradient-to-r from-primary to-transparent" /> */}
    </div>
   );
}
 
export default SubTitle;