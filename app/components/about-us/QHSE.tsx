
import SubTitle from "../common/SubTitle";
import { aboutUsData } from "./data";
const QHSE = () => {
  return (
    <section className="border-t border-gray-300 sp-py">
      <div className="container">
        <SubTitle title="QHSE" mClass="mb-4 xl:mb-12" />
        <div className="qhse-grid">
          {
            aboutUsData.QHSEData.items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="qhse-item">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-26 font-bold ">{item.title}</h3>
                      <div className="flex items-center ">
                        <IconComponent className="text-48" />
                      </div>
                    </div>
                    <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-3 xl:mb-6" />
                    <div className="flex flex-wrap justify-between gap-4">
                      {
                        item.description.map((desc, index) => {
                          return (
                            <p className="text-18 font-normal " key={index}>{desc}</p>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default QHSE;