'use client';
import PageBnr from "../common/PageBnr";
import Main from "./Main";
import SubContents from "./SubContents";
import VacanciesList from "./VacanciesList";
import JobForm from "./JobForm";
import { CareerData } from "./type";
import PageBanner from "../common/PageBanner";
import Main2 from "./Main2";
import SubContents2 from "./SubContents2";

const Index = ({ data }: { data: CareerData }) => {
  return (
    <main>
      <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} />
      {/* <PageBanner title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} /> */}
      <Main data={data.firstSection.items[0]} />
      {/* <Main2 data={data.firstSection.items[0]} /> */}
      <SubContents data={data.firstSection.items.slice(1,)} />
      {/* <SubContents2 data={data.firstSection.items.slice(1,)} /> */}
      <VacanciesList data={data.secondSection} />
      <JobForm openings={data.secondSection.items} />
    </main>
  );
}

export default Index;