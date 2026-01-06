import Hero from "./Hero";
import CompanyProfile from "./CompanyProfile";
import ProjectHIghlights from "./ProjectHIghlights";
import { HomeData } from "./data";
import LatestNews from "./LatestNews";
import { NewsData } from "../news/data";
import ClientsList from "./ClientsList";
const Home = () => {
  return ( 
    <main>
      <Hero/>
      {/* <CompanyStats/> */}
      <CompanyProfile/>
      <ProjectHIghlights data={HomeData.ProjectHighlights} />
      <LatestNews data={NewsData.news} />
      <ClientsList data={HomeData.clientsData}/>
    </main>
   );
}
 
export default Home;