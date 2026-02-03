
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
import { AboutData } from "./type";

const Index = ({ data }: { data: AboutData }) => {
  return (
    <main className="min-h-screen">
      {/* <PageBnr title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} /> */}
      <PageBanner title={data.pageTitle} image={data.banner} imageAlt={data.bannerAlt} description={data.pageDescription} />
      {/* <Main /> */}
      <Main2 firstSection={data.firstSection} secondSection={data.secondSection} />
      {/* <MVV /> */}
      {/* <ChairmanMsg /> */}
      <ChairmanMsg2 data={data.thirdSection} />
      <ExecutiveCommitteeLIst data={data.fourthSection} />
      {/* <ExecutiveCommitteeList2 /> */}
      <OurValue data={data.fifthSection} />
      <AwardsRecognitions data={data.sixthSection} />
      <AssociatedBusiness data={data.seventhSection} />
      {/* <QHSE /> */}
      <Qhse2 data={data.eighthSection} />
    </main>
  );
}

export default Index;