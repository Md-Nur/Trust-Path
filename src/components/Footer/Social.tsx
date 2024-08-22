import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex gap-2 w-full justify-center my-5">
      <a target="_blank" href="https://www.facebook.com">
        <FaFacebook className="text-3xl" />
      </a>
      <a target="_blank" href="https://www.twitter.com">
        <FaTwitter className="text-3xl" />
      </a>
      <a target="_blank" href="https://www.linkedin.com">
        <FaLinkedin className="text-3xl" />
      </a>
    </div>
  );
};

export default Social;
