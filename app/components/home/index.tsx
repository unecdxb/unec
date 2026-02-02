import Hero from "./Hero";
import CompanyProfile from "./CompanyProfile";
import ProjectHIghlights from "./ProjectHIghlights";
import { HomeData } from "./data";
import LatestNews from "./LatestNews";
import ClientsList from "./ClientsList";
import { HomeDataType } from "./type";
import { ProjectType } from "../projects/type";
import { NewsData } from "../news/type";

const Home = ({ data, projectData, newsData }: { data: HomeDataType, projectData: ProjectType, newsData: NewsData }) => {
  return (
    <main>
      <Hero data={data.bannerSection} />
      {/* <CompanyStats/> */}
      <CompanyProfile data={data.firstSection} />
      <ProjectHIghlights data={projectData.projects.filter((project) => project.highlight)} title={data.secondSection.title} />
      <LatestNews data={newsData.news} title={data.thirdSection.title} />
      <ClientsList data={data.fourthSection} />
    </main>
  );
}

export default Home;