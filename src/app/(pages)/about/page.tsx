import About from "./About";
import CoreValues from "./CoreValues";
import MissionVission from "./MissionVission";
import Promise from "./Promise";
import WhyStand from "./WhyStand";
const AboutUs = () => {
  return (
    <>
      <About />
      <WhyStand />
      <MissionVission />
      <CoreValues />
      <Promise />
      <p className="text-justify my-20">
        Choose TrustPath and experience a passionate commitment to not just meet
        but exceed your expectations. Our dedication to client satisfaction,
        professional excellence, and ethical conduct makes us the ideal choice
        for those who demand more from their professional services provider.
        Join us on your journey to excellence, and let TrustPath be your guide.
      </p>
    </>
  );
};

export default AboutUs;
