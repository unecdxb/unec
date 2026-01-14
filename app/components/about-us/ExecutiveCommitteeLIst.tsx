import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { aboutUsData } from "./data";
const ExecutiveCommitteeLIst = () => {
  return ( 
    <section className="sp-py" id="executive-committee">
      <div className="container">
        <SubTitle title="Executive Committee" mClass="mb-4 xl:mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 xl:gap-x-3 gap-y-12">
          {
            aboutUsData.executiveCommittee.items.map((item,index)=>(
              <div className="flex flex-col gap-4" key={index}>
                <div className="w-full h-[200px] lg:h-[350px] xl:h-[450px]">
                  <Image src={item.image} alt={item.name} width={1920} height={1080} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <h3 className="text-25 text-secondary font-light">{item.name}</h3>
                  <p className="text-primary">{item.position}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
   );
}
 
export default ExecutiveCommitteeLIst;