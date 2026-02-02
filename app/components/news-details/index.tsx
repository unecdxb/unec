import PageBnr from "../common/PageBnr";
import Main from "./main";
import { NewsData } from "../news/type";
import PageBanner from "../common/PageBanner";

const Index = ({ data }: { data: NewsData['news'][number] }) => {
  return (
    <main>
      {/* <PageBnr title="News Details" image="/assets/images/news/bnr.jpg" /> */}
      <PageBanner title={data.title} image={data.banner} imageAlt={data.bannerAlt} date={data.date} />
      <Main data={data} />
    </main>
  );
}

export default Index;