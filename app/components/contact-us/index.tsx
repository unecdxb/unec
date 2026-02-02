import PageBnr from "../common/PageBnr";
import ContactForm from "./ContactForm";
import BranchList from "./BranchList";
import BranchList2 from "./BranchList2";
import { ContactData } from "./type";
import MapSection from "./MapSection";

const Index = ({ data }: { data: ContactData }) => {
  return (
    <main className="min-h-screen">
      {/* <PageBnr title="Contact Us" image="/assets/images/contact-us/bnr.jpg" /> */}
      <MapSection />
      {/* <BranchList data={data.firstSection.items} /> */}
      <BranchList2 data={data.firstSection.items} />
      <ContactForm />
    </main>
  );
}

export default Index;