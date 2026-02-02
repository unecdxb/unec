import PageBanner from "../common/PageBanner";
import ProjectList from "./ProjectList";
import { ProjectType } from "./type";
import { RegionType } from "./type";
import { CategoryType } from "./type";

const Index = ({ data, regionData, categoryData }: { data: ProjectType, regionData: RegionType[], categoryData: CategoryType[] }) => {
  return (
    <main>
      {/* <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} /> */}
      <PageBanner title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} description={data.pageDescription} />
      <ProjectList data={data} regionData={regionData} categoryData={categoryData} />
    </main>
  );
}

export default Index;