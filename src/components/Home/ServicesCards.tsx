"use client"
import Link from "next/link";
import { FaList, FaWeight } from "react-icons/fa";
import { MdChat, MdGraphicEq } from "react-icons/md";
import { motion } from "framer-motion";

const data = [
  {
    title: "Audit & Assurance",
    description:
      "We provide a range of audit and assurance services to help you achieve your business objectives, strengthen your financial reporting and comply with regulatory requirements.",
    icon: <FaList />,
    to: "/audit-assurance",
  },
  {
    title: "Taxation",
    description:
      "We offer a full range of tax services to help you minimise your tax liabilities and meet your compliance requirements.",
    icon: <MdGraphicEq />,
    to: "/taxation",
  },
  {
    title: "Corporate Law",
    description:
      "We provide a range of corporate law services to help you navigate the complexities of corporate governance and compliance.",
    icon: <FaWeight />,
    to: "/corporate-law",
  },
  {
    title: "Business Advisory",
    description:
      "We offer a range of business advisory services to help you grow your business and achieve your strategic objectives.",
    icon: <MdChat />,
    to: "/business-advisory",
  },
];

const ServicesCards = () => {
  return (
    <div className="flex flex-wrap justify-around max-w-7xl gap-2 mx-auto mb-20">
      {data.map((service, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          key={index}
          className="card bg-base-300 w-72 shadow-xl hover:bg-secondary hover:text-secondary-content"
        >
          <figure className="px-10 py-5">
            <div className="p-4 rounded-full ring ring-offset-accent ring-offset-2 ring-primary">
              {service.icon}
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{service.title}</h2>
            <p>{service.description}</p>
            <div className="card-actions">
              <Link href={service.to} className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCards;
