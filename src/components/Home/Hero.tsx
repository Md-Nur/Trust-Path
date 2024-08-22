import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen md:-mb-10"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1551135049-8a33b5883817)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover the TrustPath Advantage: Your Path to Excellence
          </h1>
          <p className="mb-5">
            Are you in search of a professional services provider that
            transcends the ordinary? At TrustPath, we take pride in being your
            trusted partner, offering much more than just services.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
