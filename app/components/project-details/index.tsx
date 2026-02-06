import Banner from "./Banner";
import Main from "./Main";
import SimilarProjects from "./SimilarProjects";
import { Project, ProjectData } from "./type";

const Index = ({ data, allProjectData }: { data: Project, allProjectData: ProjectData }) => {

  return (
    <main className="min-h-screen">
      {/* <PageBnr title={data.title} image={data.banner} imageAlt={data.bannerAlt} /> */}
      <Banner title={data.title} image={data.banner} imageAlt={data.bannerAlt} />
      <Main data={data} />
      <SimilarProjects data={allProjectData} />
    </main>
  );
}

export default Index;