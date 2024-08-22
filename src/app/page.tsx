import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import ServicesCards from "@/components/Home/ServicesCards";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesCards />
      <WhyChoose />
      <Clients />
    </div>
  );
}
