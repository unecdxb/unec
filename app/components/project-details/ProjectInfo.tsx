"use client";
import { motion } from "framer-motion";
import { moveUp, zoomInUp } from "../motionVarients";
import { statusData } from "../AdminProject/statusData";

const ProjectInfo = ({ region, status, items, title }: { region: string, status: string, items: { title: string, value: string }[], title: string }) => {

  return (
    // <motion.div variants={zoomInUp(0.2)} initial="hidden" whileInView="show" viewport={{ amount: 0.1, once: true }} className="bg-gradient-to-br from-gray-50 to-gray-100 mb-10 xl:mb-15">
    //   <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-5 p-3 2xl:p-0">
    //     {items.map((item, index) => (
    //       <div key={index} className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xl:pb-0 xl:p-6  2xl:p-10">
    //         <div className='pb-2 xl:pb-4 '>
    //           <h3 className="text-25 font-light text-secondary">{item.title}</h3>
    //         </div>
    //         <p className="text-gray-600">{item.value}</p>
    //       </div>
    //     ))}


    //     <div className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
    //       <div className='pb-2 xl:pb-4 '>
    //         <h3 className="text-25 font-light text-secondary">Region</h3>
    //       </div>
    //       <p className="text-gray-600">{region}</p>
    //     </div>
    //     <div className=" px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
    //       <div className='pb-2 xl:pb-4 '>
    //         <h3 className="text-25 font-light text-secondary">Status</h3>
    //       </div>
    //       <p className="text-gray-600">{statusData.find((item) => item.value.toString() == status)?.name}</p>
    //     </div>
    //   </div>
    // </motion.div>

    <>
      <section className="w-full mx-auto py-2">
        <h2 className="text-2xl font-semibold tracking-wide mb-10 uppercase">
          PROJECT DETAILS
        </h2>

        <div className="border-t border-gray-300">

          {items[0] && (
            <div className="grid grid-cols-1 py-6 border-b border-gray-300">
              <div className="flex gap-4">
                <span className="w-32 text-sm uppercase tracking-widest text-black">
                  {items[0].title}
                </span>
                <span className="text-sm uppercase tracking-widest text-black">
                  : {items[0].value}
                </span>
              </div>
            </div>
          )}


          {items.slice(1).reduce((rows: any[], item, index, array) => {
            if (index % 2 === 0) {
              rows.push(array.slice(index, index + 2));
            }
            return rows;
          }, []).map((pair, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-gray-300"
            >
              {pair.map((item: any, colIndex: number) => (
                <div key={colIndex} className="flex gap-4">
                  <span className="w-32 text-sm uppercase tracking-widest text-black">
                    {item.title}
                  </span>
                  <span className="text-sm uppercase tracking-widest text-black">
                    : {item.value}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-gray-300">
            <div className="flex gap-4">
              <span className="w-32 text-sm uppercase tracking-widest text-black">Consultant</span>
              <span className="text-sm uppercase tracking-widest text-black">
                : Atkins
              </span>
            </div>

            <div className="flex gap-4">
              <span className="w-32 text-sm uppercase tracking-widest text-black">BUA</span>
              <span className="text-sm uppercase tracking-widest text-black">
                : 2,054,147 Sq. Ft
              </span>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-gray-300">
            <div className="flex gap-4">
              <span className="w-32 text-sm uppercase tracking-widest text-black">Location</span>
              <span className="text-sm uppercase tracking-widest text-black">
                : {region}
              </span>
            </div>

            <div className="flex gap-4">
              <span className="w-32 text-sm uppercase tracking-widest text-black">Status</span>
              <span className="text-sm uppercase tracking-widest text-black">
                : {statusData.find((item) => item.value.toString() == status)?.name}
              </span>
            </div>
          </div>

        </div>

      </section>

    </>


  );
}

export default ProjectInfo;