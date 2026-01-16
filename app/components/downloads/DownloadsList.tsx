import { documentsData } from "./data";
import Image from "next/image";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
const DownloadsList = () => {
  return (
    <section className="sp-py">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 2xl:gap-10">
          {
            documentsData.map((doc, index) => (
              <Link key={index} href={doc.file} target="_blank" className="bg-light group">
                <div className="p-5 xl:p-10">
                  <Image src={doc.thumbnail} alt={doc.title} width={529} height={748} className="w-full h-[400] object-contain group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-center pt-10 bg-primary px-5 py-3 xl:px-10 xl:py-4 group-hover:bg-primary/80 transition-colors duration-300">
                  <h3 className="text-white text-20 xl:text-24">{doc.title}</h3>
                  <a href={doc.file} target="_blank" rel="noopener noreferrer"><GoDownload className="text-white text-20 xl:text-24" /></a>
                </div>
              </Link>
            )
            )}
        </div>
      </div>
    </section>
  );
}

export default DownloadsList;