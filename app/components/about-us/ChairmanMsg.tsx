import Image from "next/image";
import SubTitle from "../common/SubTitle";
const ChairmanMsg = () => {
    return ( 
      <section className="sp-py bg-light" id="chairman-message">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-20 items-stretch">
            <div>
              <div className="relative h-full w-full mx-auto overflow-hidden">
                <Image
                  src="/assets/images/about-us/abt-main.jpg"
                  alt="Chairman"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 83%, 75% 83%, 75% 100%, 61% 84%, 0 84%);",
                    WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 83%, 75% 83%, 75% 100%, 61% 84%, 0 84%)"
                  }}
                />
              </div>

            </div>
            <div>
              <SubTitle title="TOGETHER, WE BUILD [ LEGACY ]"  />
              <div className=" ">
                <p className=" mb-4">Great things in life are rarely accomplished alone. It takes teamwork to build something beautiful, strong and enduring. [ UNEC ] has been a trusted, hard-working partner at the side of real estate developers in the region for over 40 years, collaborating on iconic, world-class projects across the UAE and gulf region.</p>
                <p className=" mb-4">Our role is to successfully deliver the client’s vision into reality using our history of experience, vast resources and dedicated team members. We attribute our accomplishments to decades of commitment to our clients, and a deep understanding of their interests and goals; providing real value in building tomorrows skylines, today.</p>
                <p className="">This is our passion and the foundation of a hard-earned reputation. It is and will remain at the heart of who we are as a company, as we continue to evolve with new strategies and technical mastery, maintaining our position at the forefront of our industry. Together, we’re building a legacy of excellence for years to come.</p>
              </div>
              <div className="mt-6">
                <h3 className="text-25 font-normal text-secondary">Eng. Abdulhalim Muwahid</h3>
                <p className=" font-suisse-intl"><span className="font-light text-secondary uppercase text-24 ">[</span><span className="font-light uppercase text-primary">Chairman</span><span className="font-light text-secondary uppercase text-24 ">]</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default ChairmanMsg;