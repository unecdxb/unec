interface Props {
    title: string;
    mClass?: string;
    titleColor?: string;
}
const SubTitle = ({title, mClass, titleColor}: Props) => {
  return ( 
    <div className={`inline-block ${mClass?mClass:'mb-6 xl:mb-12'}`}>
      <h2 className={`text-2xl xs:text-3xl xl:text-5xl !font-suisse-intl mb-4 uppercase font-medium ${titleColor}`}>
        {title}
      </h2>
      <div className="h-1 bg-gradient-to-r from-primary to-transparent" />
    </div>
   );
}
 
export default SubTitle;