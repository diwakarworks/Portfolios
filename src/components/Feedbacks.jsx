import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { whyMeAchievements } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const InfoCard = ({ index, title, description, icon }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-8 rounded-3xl xs:w-[340px] w-full"
    >
      <div className="flex items-center gap-4 mb-4">
        {icon && <img src={icon} alt={title} className="w-20 h-20" />}
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
      </div>
      <p className="text-secondary text-[16px]">{description}</p>
    </div>
  );
};

const WhyMeAchievements = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[350px]`}>
        <div>
          <p className={styles.sectionSubText}>Get to know me</p>
          <h2 className={styles.sectionHeadText}>Impact</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center`}
      >
        {whyMeAchievements.map((item, index) => (
          <InfoCard key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WhyMeAchievements, "");
