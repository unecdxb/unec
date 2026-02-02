
import PageBnr from "../common/PageBnr";
import Main from "./Main";
import ChairmanMsg from "./ChairmanMsg";
import ExecutiveCommitteeLIst from "./ExecutiveCommitteeLIst";
import MVV from "./MVV";
import OurValue from "./OurValue";
import AwardsRecognitions from "./AwardsRecognitions";
import AssociatedBusiness from "./AssociatedBusiness";
import QHSE from "./QHSE";
import PageBanner from "../common/PageBanner";
import Main2 from "./Main2";
import ChairmanMsg2 from "./ChairmanMsg2";
import ExecutiveCommitteeList2 from "./ExecutiveCommitteeList2";
import Qhse2 from "./Qhse2";

const Index = ({ data }: { data: any }) => {
  return (
    <main className="min-h-screen">
      {/* <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} /> */}
      <PageBanner title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} description={data.pageDescription} />
      {/* <Main /> */}
      <Main2 />
      {/* <MVV /> */}
      {/* <ChairmanMsg /> */}
      <ChairmanMsg2 />
      {/* <ExecutiveCommitteeLIst /> */}
      <ExecutiveCommitteeList2 />
      <OurValue />
      <AwardsRecognitions />
      <AssociatedBusiness />
      {/* <QHSE /> */}
      <Qhse2 />
    </main>
  );
}

export default Index;