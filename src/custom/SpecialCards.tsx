import { Link } from "react-router-dom";

const SpecialCards = () => {
  return (
    <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik py-10 flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="w-[85%] md:w-[50vw] lg:w-[35vw] min-h-[55vh] transition-all duration-300 hover:scale-105 bg-[#c18431] rounded-lg flex flex-col justify-around gap-5 px-4 py-8">
        <img
          src="https://static.sitejabber.com/imgs/home/card-fig-a.webp"
          className="w-20 md:w-35 md:h-23"
        />
        <div>
          <h3 className="text-2xl md:text-4xl tracking-wide font-medium text-white">
            Share your experience
          </h3>
          <h5 className="text-base md:text-lg tracking-wide py-2 text-white">
            Go on, tell the world what you really think…
          </h5>
        </div>

        <span>
          <Link
            to={"/"}
            className="border-2 border-white text-white p-2 tracking-wide rounded-md transition-colors duration-300 hover:bg-white hover:text-[#c18431]"
          >
            Write a review
          </Link>
        </span>
      </div>

      <div className="w-[85%] md:w-[50vw] lg:w-[35vw] min-h-[55vh] transition-all duration-300 hover:scale-105 bg-[#854b23] rounded-lg mt-10 flex flex-col justify-around gap-5 px-4 py-8">
        <img
          src="https://static.sitejabber.com/imgs/home/card-fig-b.webp"
          className="w-20 md:w-30 md:h-25"
        />
        <div>
          <h3 className="text-2xl md:text-4xl tracking-wide font-medium text-white">
            Discover something new
          </h3>
          <h5 className="text-base md:text-lg tracking-wide py-2 text-white max-w-md">
            From well-known brands to hidden gems, see who’s recommended… and
            who’s not
          </h5>
        </div>

        <span>
          <Link
            to={"/categories"}
            className="border-2 border-white text-white p-2 tracking-wide rounded-md transition-colors duration-300 hover:bg-white hover:text-[#c18431]"
          >
            Browse by category
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SpecialCards;
