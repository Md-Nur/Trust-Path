import Address from "@/components/Footer/Address";
import Social from "@/components/Footer/Social";

const Static = () => {
  return (
    <div className="text-center lg:text-left max-w-md">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="py-6">
        Get connected with us for any queries, information, and details about
        our services. Our team is always ready to serve you with everything you
        need. Our experts are always at your service.
      </p>
      <Address />
      <Social />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d233639.3804636671!2d90.42366200000001!3d23.796709!3m2!1i1024!2i768!4f13.1!2m1!1sProgati%20Sharani%2C%20Dhaka%E2%80%931212!5e0!3m2!1sen!2sus!4v1724085512011!5m2!1sen!2sus"
        className="w-full h-72 rounded-xl shadow-xl"
        // style="border:0;"
        // allowfullscreen={true}
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Static;
