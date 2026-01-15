import { projectData } from "./data";

const ProjectInfo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 mb-10 xl:mb-15">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-5 p-3 2xl:p-0">
        <div className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xl:pb-0 xl:p-6  2xl:p-10">
          <div className='pb-2 xl:pb-4 '>
            <h3 className="text-25 font-light text-secondary">Client</h3>
          </div>
          <p className="text-gray-600">{projectData.client}</p>
        </div>
        <div className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
          <div className='pb-2 xl:pb-4 '>
            <h3 className="text-25 font-light text-secondary">Consultant</h3>
          </div>
          <p className="text-gray-600">{projectData.consultant}</p>
        </div>
        <div className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
          <div className='pb-2 xl:pb-4 '>
            <h3 className="text-25 font-light text-secondary">BUA</h3>
          </div>
          <p className="text-gray-600">{projectData.BUA}</p>
        </div>

        <div className="2xl:border-r 2xl:border-gray-200 px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
          <div className='pb-2 xl:pb-4 '>
            <h3 className="text-25 font-light text-secondary">Region</h3>
          </div>
          <p className="text-gray-600">{projectData.region}</p>
        </div>
        <div className=" px-4 py-2 xs:p-4 xs:pb-0 xl:p-6 2xl:p-10">
          <div className='pb-2 xl:pb-4 '>
            <h3 className="text-25 font-light text-secondary">Status</h3>
          </div>
          <p className="text-gray-600">{projectData.status}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;