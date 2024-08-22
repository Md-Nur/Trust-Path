"use client";
import Loading from "@/components/Loading";
import Title from "@/components/Title";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Service = ({ urlType }: { urlType: string }) => {
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [urlType],
    queryFn: async () => {
      const response = await axios.get(`/api/services?type=${urlType}`);
      return response.data;
    },
  });

  if (isError) {
    toast.error(error.message);
  }
  return (
    <section className="w-full">
      <Title>{urlType}</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-center">
        {isLoading && (
          <>
            <Loading />
            <Loading />
          </>
        )}
        {isError && (
          <div className="lg:col-span-2 p-4 text-error">
            <h2 className="text-xl font-bold">Error</h2>
            <p>{error.message}</p>
          </div>
        )}
        {services?.length &&
          services?.map(
            (service: { _id: string; name: string; content: string }) => (
              <div
                id={service._id}
                key={service._id}
                className="rounded-3xl bg-base-200 p-4 shadow-xl"
              >
                <h2 className="text-xl text-center font-bold">
                  {service.name}
                </h2>
                <div
                  className="custom-html-content rounded-lg p-5"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                ></div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default Service;
