
import PageBnr from "../common/PageBnr";
import Main from "./Main";
import ChairmanMsg from "./ChairmanMsg";
import ExecutiveCommitteeLIst from "./ExecutiveCommitteeLIst";
import MVV from "./MVV";
import OurValue from "./OurValue";
import AwardsRecognitions from "./AwardsRecognitions";
import AssociatedBusiness from "./AssociatedBusiness";
const Index = () => {
  return ( 
    <main className="min-h-screen">
     <PageBnr />
     <Main />
     <MVV />
     <ChairmanMsg />
     <ExecutiveCommitteeLIst />
     <OurValue />
     <AwardsRecognitions />
     <AssociatedBusiness />
    </main>
   );
}
 
export default Index;