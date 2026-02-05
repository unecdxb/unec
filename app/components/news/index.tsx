import PageBnr from "../common/PageBnr";
import NewsList from "./NewsList";
import PageBanner from "./PageBanner";
import { NewsData } from "./type";

const News = ({ data }: { data: NewsData }) => {
  return (
    <main className="min-h-screen">
      <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} />
      {/* <PageBanner data={data.news.slice(0, 5)} /> */}
      <NewsList data={data} />
    </main>
  );
}

export default News;