import PageBnr from "../common/PageBnr";
import ContactForm from "./ContactForm";
import BranchList from "./BranchList";

const Index = () => {
  return ( 
    <main className="min-h-screen">
      <PageBnr title="Contact Us" image="/assets/images/contact-us/bnr.jpg" />
      <BranchList />
      <ContactForm />
    </main>
   );
}
 
export default Index;