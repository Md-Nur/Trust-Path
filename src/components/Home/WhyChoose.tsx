"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyChoose = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-auto px-2 md:px-0 my-24">
      <motion.figure
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          height={500}
          width={500}
          src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg"
          alt="Album"
        />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="card-body"
      >
        <h2 className="text-4xl font-bold text-center mb-5">
          WHY CHOOSE TPAAS?
        </h2>
        <p className="max-w-lg">
          Our dynamic team of professionals comes from diverse technical
          backgrounds, bringing a wealth of experience from various sectors.
          This unique blend ensures that we not only understand your local needs
          but also offer global perspectives, making us your strategic partner.
        </p>
        <div className="card-actions justify-end">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChoose;
