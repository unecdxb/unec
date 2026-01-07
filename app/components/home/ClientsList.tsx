import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface dataProps{
  data:{
    title:string,
    items:{
      image:string | StaticImageData,
      alt:string
    }[]
  }
}

const ClientsList = ({data}: dataProps) => {
  return ( 
    <section className="sp-py ">
      <div className="container">
        <SubTitle title="Clients" titleColor="text-black" mClass="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-black/10">
          {
            data.items.map((client,index)=>(
              <div key={index} className="w-full h-[218px] border-r border-b border-black/10 flex items-center justify-center overflow-hidden group">
                <Image src={client.image} alt={client.alt} width={350} height={218} className="w-[250px] h-[145px] object-contain group-hover:scale-110 transition-all duration-300" />
              </div>
            ))
          }
        </div>
      </div>
    </section>
   );
}
 
export default ClientsList;