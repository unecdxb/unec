
import Main from "./main";
import { NewsData } from "../news/type";
import PageBanner from "../common/PageBanner";

const Index = ({ data }: { data: NewsData['news'][number] }) => {
  return (
    <main>
      <PageBanner title={data.title} subTitle={data.subTitle} image={data.banner} imageAlt={data.bannerAlt} date={data.date} />
      <Main data={data} />
    </main>
  );
}

export default Index;