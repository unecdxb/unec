import Main from "./Main";
import PageBnr from "../common/PageBnr";
import DownloadsList from "./DownloadsList";
import { DownloadsData } from "./type";

const Index = ({ data }: { data: DownloadsData }) => {
  return (
    <main className="min-h-screen">
      <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} />
      {/* <Main fileName="Corporate Profile" image="/assets/images/downloads/bnr.jpg" imageAlt="Downloads" file="" /> */}
      <DownloadsList data={data} />
    </main>
  );
}

export default Index;