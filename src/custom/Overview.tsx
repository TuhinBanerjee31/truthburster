import overviewImg from "../assets/overview.png"
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="font-Rubik bg-[rgb(253,251,246)] min-h-screen overflow-x-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto py-[10vh] md:py-[25vh] px-6">
     {/* TEXT AREA */}
      <div className="flex flex-col gap-4">
        <p className="uppercase tracking-wide">A history of trust</p>
        <h1 className="text-3xl md:text-5xl font-medium tracking-wide">Over seventeen years of trust and expertise</h1>
        <ul className="ml-6">
          <li className="list-disc text-base md:text-lg p-1">Gobal Partners</li>
          <li className="list-disc text-base md:text-lg p-1">Award-winning platform</li>
          <li className="list-disc text-base md:text-lg p-1">Recognition for consumer protection</li>
          <li className="list-disc text-base md:text-lg p-1">Tools to help you make smarter purchases</li>
        </ul>

        <div className="max-w-xl flex gap-8 ml-10">
          <Link to={"/about-us"} className="bg-[#ce9436] rounded px-4 py-2 text-white tracking-wide transition-colors duration-300 border border-[#ce9436] hover:bg-transparent hover:text-[#ce9436]">Know us</Link>
          <Link to={"/contact"} className="hover:bg-[#ce9436] rounded px-4 py-2 hover:text-white tracking-wide transition-colors duration-300 border border-[#ce9436] bg-transparent text-[#ce9436]">Contact us</Link>
        </div>
      </div>

      {/* ANIMATION AREA */}
      <div className="w-full pb-10 md:pb-0">
      <div
        className="bg-contain bg-no-repeat bg-center w-[100vw] md:w-[45vw] h-full flex justify-center items-center"
        style={{
          backgroundImage: `url(https://media.tenor.com/Vzpbk5BFYLoAAAAi/dtc-chile-circle.gif)`,
        }}
      >
        <img src={overviewImg} className="w-60 p-2" />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Overview;
