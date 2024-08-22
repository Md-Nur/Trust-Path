import Title from "@/components/Title";
import Image from "next/image";

const CoreValues = () => {
  return (
    <section className="w-full my-20">
      <Title>Our Core Values</Title>
      <div className="flex flex-wrap justify-around gap-5 items-center">
        <Image
          src="https://images.unsplash.com/photo-1647694420044-6e42df6ca610"
          alt="Core Values"
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />
        <div className="max-w-lg space-y-5 text-justify">
          <p>
            <strong>Integrity:</strong>
            We are committed to the highest standards of integrity in all our
            dealings, ensuring that we are honest, transparent, and ethical in
            everything we do.
          </p>
          <p>
            <strong>Excellence:</strong>
            We strive for excellence in all our endeavors, ensuring that we
            deliver the best possible results to our clients and partners.
          </p>
          <p>
            <strong>Innovation:</strong>
            We are constantly innovating and adapting to meet the changing needs
            of our clients, ensuring that we stay ahead of the curve.
          </p>
          <p>
            <strong>Collaboration:</strong>
            We believe in the power of collaboration and teamwork, working
            closely with our clients and partners to achieve our common goals.
          </p>
          <p>
            <strong>Empowerment:</strong>
            We empower our team members to take ownership of their work and
            contribute to the success of our organization, ensuring that they
            have the tools and resources they need to excel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
