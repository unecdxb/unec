import SubTitle from "../common/SubTitle";
import { IoInfiniteOutline } from "react-icons/io5";
import { BsMagic } from "react-icons/bs";
import { GoLog } from "react-icons/go";
import { BsHouseCheck } from "react-icons/bs";
const OurValue = () => {
  return ( 
    <section className="sp-py bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] pb-10 md:pb-16 lg:pb-20 xl:pb-24 border-b border-gray-300">
          <div>
            <h2 className="text-60 font-bold">OUR NAME SPELLS OUR [ VALUES ]</h2>
          </div>
          <div>
            <div className="mb-3 xl:mb-6">
              <IoInfiniteOutline className="text-48" />
            </div>
            <div>
              <h3 className="text-3xl font-normal !font-suisse-intl mb-2 xl:mb-4">[ United ] in Approach</h3>
              <p className="text-19">We build relationships that last to exercise mutual benefits. That is because our interests are always aligned with yours. We consider ourselves as a part of your team since the very start and every decision is aligned with your deadline and goals in mind, resulting in successful outcomes. Our commitment continues even after delivery since we always look for everlasting relationships with our clients. It is a unity of purpose shared by everyone at [UNEC], where experts from many fields come together as one. We bring combined experience and expertise to every job, each team member taking pride in their contribution to our collective strength.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-20 sp-pt">
          <div>
            <div className="mb-3 xl:mb-6">
              <BsMagic className="text-48" />
            </div>
            <div>
              <h3 className="text-2xl font-normal !font-suisse-intl mb-2 xl:mb-4">[ Engineering ] Solutions</h3>
              <p>Engineering is in our DNA and it influences the way we strive to solve your problems and meet your requirements. We cherish the challenges that come with complex projects because they result in solutions that create the outstanding.</p>
            </div>
          </div>
          <div>
            <div className="mb-3 xl:mb-6">
              <BsHouseCheck className="text-48" />
            </div>
            <div>
              <h3 className="text-2xl font-normal !font-suisse-intl mb-2 xl:mb-4">[ Construction ] Done Well</h3>
              <p>We always make sure to improve safety and efficiency while reducing our impact on the natural environment. When you join hands with [UNEC], you sign up for quality workmanship at an excellent value executed in a responsible and sustainable way.</p>
            </div>
          </div>
          <div>
            <div className="mb-3 xl:mb-6">
              <GoLog className="text-48" />
            </div>
            <div>
              <h3 className="text-2xl font-normal !font-suisse-intl mb-2 xl:mb-4">[ Company ] Unlimited</h3>
              <p>Future always excites us, innovation inspires us & creativity drives us. As technology and techniques evolve, [UNEC] continuously explores innovative ideas and implements the latest in construction tech to bolster the efficiency of our Processes, policies and upskilling our talent pool.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default OurValue;