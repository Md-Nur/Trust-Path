import Title from "@/components/Title";
import Image from "next/image";

const Promise = () => {
  return (
    <section className="w-full my-20">
      <Title>Our Promise</Title>
      <div className="flex justify-around flex-wrap gap-5">
        <div className="max-w-lg space-y-5 text-justify">
          <p>
            <strong>Client-Centric Approach:</strong>
            We are committed to putting our clients first, ensuring that we
            understand their needs and provide them with the best possible
            solutions.
          </p>
          <p>
            <strong>Quality Assurance:</strong>
            We are dedicated to delivering high-quality services that meet the
            highest standards of excellence, ensuring that our clients get the
            best results every time.
          </p>
          <p>
            <strong>Professionalism:</strong>
            We conduct ourselves with the utmost professionalism, ensuring that
            we are honest, transparent, and ethical in all our dealings with
            clients and partners.
          </p>
          <p>
            <strong>Continuous Improvement:</strong>
            We are constantly striving to improve our services and processes,
            ensuring that we stay ahead of the curve and provide our clients
            with the best possible solutions.
          </p>
          <p>
            <strong>Long-Term Partnerships:</strong>
            We believe in building long-term partnerships with our clients and
            partners, ensuring that we work closely together to achieve our
            common goals.
          </p>
        </div>
        <Image
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330"
          alt="Our Promise"
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Promise;
