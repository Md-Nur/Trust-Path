"use client";
import Loading from "@/components/Loading";
import Table from "@/components/Table";
import Title from "@/components/Title";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Manage = ({
  urlEnd,
  unwantedFields,
  avatarField,
  availableActions,
}: {
  urlEnd: string;
  unwantedFields?: string[];
  avatarField?: string;
  availableActions?: string[];
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["manage", urlEnd],
    queryFn: async () => {
      const response = await axios.get(`/api/${urlEnd}`);
      return response.data;
    },
  });
  return (
    <div className="w-full">
      <Title>{urlEnd.split("-").join(" ")}</Title>
      {isError && data?.length < 1 && (
        <h2 className="text-xl text-error text-center">{error.message}</h2>
      )}
      {isLoading && !Array.isArray(data) ? (
        <Loading />
      ) : (
        <Table
          unwantFields={unwantedFields}
          avatarField={avatarField}
          availableActions={availableActions}
          datas={data}
        />
      )}
    </div>
  );
};

export default Manage;
