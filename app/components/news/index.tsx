import PageBnr from "../common/PageBnr";
import NewsList from "./NewsList";

const News = () => {
  return ( 
    <main className="min-h-screen">
      <PageBnr title="News" image="/assets/images/news/bnr.jpg" />
      <NewsList />
    </main>
   );
}
 
export default News;