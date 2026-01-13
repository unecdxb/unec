import { documentsData } from "./data";
import Image from "next/image";
import { GoDownload } from "react-icons/go";

const DownloadsList = () => {
  return (
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {
            documentsData.map((doc, index) => (
              <div key={index} className="bg-light">
                <div className="p-5 xl:p-10">
                  <Image src={doc.thumbnail} alt={doc.title} width={529} height={748} className="w-full h-[400] object-contain" />
                </div>
                <div className="flex justify-between items-center pt-10 bg-primary px-5 py-3 xl:px-10 xl:py-4">
                  <h3 className="text-white text-20 xl:text-24">{doc.title}</h3>
                  <a href={doc.file} target="_blank" rel="noopener noreferrer"><GoDownload className="text-white text-20 xl:text-24" /></a>
                </div>
              </div>
            )
            )}
        </div>
      </div>
    </section>
  );
}

export default DownloadsList;