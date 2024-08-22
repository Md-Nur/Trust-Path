"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 33,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };
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
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          className="max-w-xl"
        >
          <motion.h1 variants={fadeInUp} className="mb-5 text-5xl font-bold">
            Discover the
            <span className="bg-gradient-to-r from-accent font-extrabold to-secondary text-transparent bg-clip-text">
              TrustPath{" "}
            </span>
            Advantage: Your Path to Excellence
          </motion.h1>
          <motion.p variants={fadeInUp} className="mb-5">
            Are you in search of a professional services provider that
            transcends the ordinary? At TrustPath, we take pride in being your
            trusted partner, offering much more than just services.
          </motion.p>
          <Link href="/contact">
            <motion.button className="btn btn-primary" variants={fadeInUp}>
              Join Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
