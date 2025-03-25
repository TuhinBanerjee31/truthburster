import { CircleArrowOutUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { dataType } from "../public";

type CompanyCardProps = {
  data: dataType
};

const CompanyCard = ({ data }: CompanyCardProps) => {
  return (
    <div className="max-w-screen-md mx-auto bg-white min-h-50 shadow rounded px-5 py-10 flex flex-col gap-10 font-Rubik">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
        <div className="flex gap-2 md:gap-6 items-center">
          <img
            src={data.logo}
            alt={`${data.title} logo`}
            className="w-auto h-15 md:h-25 border rounded-lg p-2"
          />

          <div className="self-end p-1 md:p-2">
            <h4 className="text-lg md:text-xl font-semibold">{data.title}</h4>
            <span className="flex items-center gap-2 text-blue-600 hover:underline">
              <CircleArrowOutUpRight size={12} />
              <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-xs md:text-base no-underline">
                {data.website}
              </a>
            </span>
            <span className="flex items-center gap-2 md:gap-4 mt-2">
              <span className="flex gap-0 md:gap-1">
                {Array.from({ length: data.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="fill-yellow-400 text-yellow-400 h-4 md:h-10"
                  />
                ))}
              </span>
              <p className="text-base text-gray-600">{data.rating}</p>
            </span>
          </div>
        </div>

        <div>
          <Link
            to={data.redirect}
            className="border-[#ce9436] text-[#ce9436] transition-colors text-xs duration-400 hover:bg-[#ce9436] hover:text-white border cursor-pointer py-2 px-3 md:px-5 rounded"
          >
            See details
          </Link>
        </div>
      </div>
      <p className="px-3 text-xs md:text-base text-gray-700">{data.summary}</p>
    </div>
  );
};

export default CompanyCard;
