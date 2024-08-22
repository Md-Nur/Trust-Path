import Title from "@/components/Title";
import Image from "next/image";

const WhyStand = () => {
  return (
    <section className="w-full my-20">
      <Title>Why TrustPath Stands Out</Title>
      <div className="flex w-full flex-wrap gap-2 justify-evenly">
        <div className="max-w-lg space-y-5 text-justify">
          <p>
            <strong>Local Insights, Global Expertise:</strong>
            Our dynamic team of professionals comes from diverse technical
            backgrounds, bringing a wealth of experience from various sectors.
            This unique blend ensures that we not only understand your local
            needs but also offer global perspectives, making us your strategic
            partner.
          </p>
          <p>
            <strong>Tailored Solutions, Personalized Approach:</strong>
            We understand that every business is unique, and so are its
            challenges. Our solutions are tailored to your specific needs, and
            our approach is personalized to ensure that we address your concerns
            effectively.
          </p>
          <p>
            <strong>Cutting-Edge Technology, Time-Tested Solutions:</strong>
            We leverage the latest technology to provide you with innovative
            solutions that are not only efficient but also effective. Our
            time-tested solutions ensure that you get the best results every
            time.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1465080428893-be7915b1bbaa"
          alt="Why Stand Out"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default WhyStand;
