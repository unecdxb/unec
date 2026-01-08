
import PageBnr from "../common/PageBnr";
import Main from "./Main";
import ChairmanMsg from "./ChairmanMsg";
import ExecutiveCommitteeLIst from "./ExecutiveCommitteeLIst";
import MVV from "./MVV";
import OurValue from "./OurValue";
import AwardsRecognitions from "./AwardsRecognitions";
import AssociatedBusiness from "./AssociatedBusiness";
import QHSE from "./QHSE";
const Index = () => {
  return ( 
    <main className="min-h-screen">
     <PageBnr title="About Us" image="/assets/images/about-us/bnr.jpg" />
     <Main />
     <MVV />
     <ChairmanMsg />
     <ExecutiveCommitteeLIst />
     <OurValue />
     <AwardsRecognitions />
     <AssociatedBusiness />
     <QHSE />
    </main>
   );
}
 
export default Index;