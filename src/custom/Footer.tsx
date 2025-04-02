import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[rgb(253,251,246)] font-Rubik py-5">
      <div className="min-h-[10vh] w-[95%] py-2 bg-white animate-bounce mx-auto shadow rounded flex flex-col md:flex-row justify-around md:justify-between items-center px-4 md:px-10">
        <h5 className="text-base">
          © <span className="font-play">truthbusters</span>. All rights
          reserved.
        </h5>

        <ul className="flex gap-4">
          <Link to={"/terms"} className="tracking-wide text-base">
            Terms of Service
          </Link>
          <Link to={"/policy"} className="tracking-wide text-base">
            Privacy Policy
          </Link>
          <Link to={"/contact"} className="tracking-wide text-base">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
