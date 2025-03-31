import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-[30vh] bg-[rgb(253,251,246)] font-Rubik">
      <Link to={"/categories/kpng"} className="max-w-screen-md min-h-40 rounded border transition-all duration-300 ease-in-out hover:scale-105 border-[#f3e9ce] shadow mx-auto bg-[#e9d39f] flex justify-around items-center">
        <div className="max-w-30 md:max-w-40 shadow-lg rounded-lg">
          <img
            src="https://kpng.org/assets/kpngLogo-D4y35yqu.png"
            className="h-full"
          />
        </div>

        <span className="text-lg md:text-2xl font-medium tracking-widest text-[rgb(253,251,246)]">
          Leading Company<br></br> of the Year<br></br> 2024
        </span>
      </Link>
    </div>
  );
};

export default Banner;

