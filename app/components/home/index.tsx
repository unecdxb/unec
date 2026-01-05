import Hero from "./Hero";
import CompanyStats from "./CompanyStats";
import CompanyProfile from "./CompanyProfile";
import ProjectHIghlights from "./ProjectHIghlights";
import { HomeData } from "./data";
import LatestNews from "./LatestNews";
import { NewsData } from "../news/data";
const Home = () => {
  return ( 
    <main>
      <Hero/>
      {/* <CompanyStats/> */}
      <CompanyProfile/>
      <ProjectHIghlights data={HomeData.ProjectHighlights} />
      <LatestNews data={NewsData.news} />
    </main>
   );
}
 
export default Home;