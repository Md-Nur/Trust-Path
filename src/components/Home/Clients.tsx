"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Title from "../Title";

const Clients = ({ desc }: { desc?: string }) => {
  const pathname = usePathname();
  const clients = useQuery({
    queryKey: ["clients", pathname],
    queryFn: async () => {
      const response = await axios.get("/api/clients");
      return response.data;
    },
  });

  if (clients.isLoading) return <Loading />;
  // console.log(clients.data);
  return (
    <section className="w-ful mt-20">
      <Title>OUR CLIENTS</Title>
      {desc && <p className="text-justify text-lg my-5">{desc}</p>}
      <div
        className="hero py-5 bg-fixed bg-cover bg-center bg-no-repeat 
        shadow-black shadow-inner"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521790797524-b2497295b8a0)",
        }}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {Array.isArray(clients.data) &&
            clients.data.map(
              (client: { _id: string; name: string; imgUrl: string }) => (
                <SwiperSlide key={client._id}>
                  <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure>
                      <Image
                        src={client.imgUrl}
                        alt={client.name}
                        width={300}
                        height={300}
                        className="rounded-t-lg object-cover w-full h-56"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="text-center font-bold text-xl">
                        {client.name}
                      </h2>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
