"use client";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import { Team } from "@/models/Team";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const TeamPage = () => {
  const {
    data: team,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const response = await axios.get("/api/team");
      return response.data;
    },
  });
  return (
    <section className="w-full">
      <Title>OUR TEAM</Title>
      {isLoading && <Loading />}
      {isError && <p className="my-5 text-error">{error.message}</p>}
      <div className="flex justify-evenly gap-3 w-full my-10 flex-wrap">
      {team?.length &&
        team.map((member: Team) => (
          <div
            key={member._id}
            className="card card-compact bg-base-100 w-72 md:w-96 shadow-xl"
          >
            <figure>
              <Image
                width={400}
                height={300}
                src={member.avatar}
                alt={member.name}
                className="rounded-t-xl w-full max-h-[300px] object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{member.name}</h2>
              <p className="font-semibold">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
