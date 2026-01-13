'use client';
import PageBnr from "../common/PageBnr";
import Main from "./Main";
import SubContents from "./SubContents";
import VacanciesList from "./VacanciesList";
import JobForm from "./JobForm";
const Index = () => {
  return ( 
    <main>
      <PageBnr title="Careers" image="/assets/images/careers/bnr-img.jpg" />
      <Main />
      <SubContents />
      <VacanciesList />
      <JobForm />
    </main>
   );
}
 
export default Index;