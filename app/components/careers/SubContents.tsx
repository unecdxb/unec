import SubTitle from "../common/SubTitle";
import Image from "next/image";
const SubContents = () => {
  return (
    <section className="sp-py" id="associated-business">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 items-center bg-light p-6 xl:p-10">
          <div>
            <h3 className="text-3xl font-normal !font-suisse-intl mb-2 xl:mb-4">WHY WORK WITH US</h3>
            <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4 md:mb-6 xl:mb-10" />
            <p className="text-19">Joining [UNEC] makes you part of a team which is dedicated to achieving the highest level of excellence in best practices, creativity and cutting-edge thinking. Together we aim to turn the vision of a project into reality.</p>
            <p className="text-19">We always believe that a new project is a new challenge. And each challenge adds valuable experience to the team. With the large variety of UNEC’s project portfolio ranging from towers, malls, schools, hospitals, villas to the most iconic developments. [UNEC] is always keen to pass on this knowledge and expertise to the generations of tomorrow.</p>
          </div>
          <div>
            <div>
              <Image src="/assets/images/careers/careers-main.jpg" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <hr className="h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-transparent border-0 mb-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-20 sp-py items-center bg-light p-6 xl:p-10">
          <div>
            <div>
              <Image src="/assets/images/careers/careers-2.jpg" alt="Associated Business" width={1920} height={1080} className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-normal !font-suisse-intl mb-2 xl:mb-4">BENEFITS OF WORKING WITH [UNEC]</h3>
            <hr className="h-1 bg-gradient-to-r from-black/20 to-transparent border-0 mb-4 md:mb-6 xl:mb-10" />
            <p className="text-19">At [UNEC], we have a “one team, one family” culture. UNEC continuously demonstrates strong commitment to the ongoing development of our people.</p>
            <p className="text-19">Our employee’s job satisfaction and career path development is always a top Priority at [UNEC]. The Employee Performance Appraisal Scheme and training & development programs, as well as the introduction of S.M.A.R.T goal settings and Key Performance Indicators KPI’s, ensures that we tailor career prospects to every individuals’ needs and always focus on encouraging employee-led career conversations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubContents;