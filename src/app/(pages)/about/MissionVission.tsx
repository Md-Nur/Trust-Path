import React from "react";
import { FaFan } from "react-icons/fa";
import { FaSunPlantWilt } from "react-icons/fa6";

const MissionVission = () => {
  return (
    <section className="w-full flex justify-evenly gap-3 flex-wrap p-2 md:p-10 lg:p-20">
      <div className="card bg-base-200 w-72 md:w-96 shadow-xl hover:bg-accent hover:text-accent-content">
        <figure className="px-10 py-5">
          <FaFan className="text-5xl text-primary" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Our Mission</h2>
          <p>
            To serve you ethically, leading with innovation and
            collaboration.With integrity as our guide, we innovate and
            collaborate to serve you.
          </p>
        </div>
      </div>
      <div className="card bg-base-200 w-72 md:w-96 shadow-xl hover:bg-accent hover:text-accent-content">
        <figure className="px-10 py-5">
          <FaSunPlantWilt className="text-5xl text-primary" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Our Vision</h2>
          <p>
            To evolve into a leading institution of international standards,
            serving as a benchmark for professional services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
