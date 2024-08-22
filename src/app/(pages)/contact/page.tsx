import Title from "@/components/Title";
import Static from "./Static";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="w-full">
      <Title>CONTACT US</Title>
      <div className="hero my-10 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
          <Static />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
