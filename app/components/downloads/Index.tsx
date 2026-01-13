import PageBnr from "../common/PageBnr";
import DownloadsList from "./DownloadsList";

const Index = () => {
  return ( 
    <main className="min-h-screen">
      <PageBnr  title="Downloads" image="/assets/images/downloads/bnr.jpg" />
      <DownloadsList />
    </main>
   );
}
 
export default Index;