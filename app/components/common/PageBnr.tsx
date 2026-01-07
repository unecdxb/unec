
import Breadcrumb from "./Breadcrumb";
import Image from "next/image";
const PageBnr = () => {
  return ( 
    <section className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] bg-primary w-full relative">
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black/50 to-transparent z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/70 to-transparent z-1"></div>
      <Image src="/assets/images/about-us/bnr.jpg" alt="Banner" className="w-full h-full object-cover absolute top-0 left-0 z-0" width={1920} height={1080} />
      <div className="container h-full relative z-10">
        <div className="flex flex-col justify-end gap-4 h-full pb-10 md:pb-16 lg:pb-20 xl:pb-24">
          <h1 className="text-60 font-bold text-white">About Us</h1>
          <Breadcrumb />
        </div>
      </div>
    </section>
   );
}
 
export default PageBnr;