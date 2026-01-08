import PageBnr from "../common/PageBnr";
import ProjectList from "./ProjectList";

const Index = () => {
  return ( 
    <main>
      <PageBnr title="Projects" image="/assets/images/projects/bnr.jpg" />
      <ProjectList />
    </main>
   );
}
 
export default Index;