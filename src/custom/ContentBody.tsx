import { Star, Clock3 } from "lucide-react";
import { dataType } from "../public";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        return (
          <Star
            key={i}
            size={16}
            className={`${
              starValue <= rating
                ? "text-yellow-400 fill-yellow-400"
                : starValue - 0.5 <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            } transition-colors duration-200`}
          />
        );
      })}
    </div>
  );
}

interface Metric {
  label: string;
  value: number;
  rating: number;
  total: number;
}

function MetricBar({ metric }: { metric: Metric }) {
  const percentage = (metric.value / metric.total) * 100;

  return (
    <div className="flex items-center gap-4">
      <div className="w-24 text-sm text-gray-600">{metric.label}</div>
      <div className="flex-1 flex items-center gap-2">
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#c18431] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <RatingStars rating={metric.rating} />
        <span className="text-sm text-gray-500 min-w-[3rem]">
          {metric.value.toLocaleString()}
        </span>
      </div>
    </div>
  );
}

type CompanyProps = {
  data: dataType
};

const ContentBody = ({data}: CompanyProps) => {
  const metrics: Metric[] = [
    { label: "Service", value: data.metricProfile[0], rating: 4.5, total: 2000 },
    { label: "Value", value: data.metricProfile[1], rating: 4.2, total: 200 },
    { label: "Shipping", value: data.metricProfile[2], rating: 4.3, total: 200 },
    { label: "Returns", value: data.metricProfile[3], rating: 4.0, total: 100 },
    { label: "Quality", value: data.metricProfile[4], rating: 4.7, total: 7000 },
  ];

  return (
    <div className="min-h-screen bg-[rgb(253,251,246)] flex items-center justify-center p-4 sm:p-6 md:p-8 font-Rubik">
      <div className="w-full max-w-screen-lg mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center transform transition-transform hover:scale-105">
              <img src={data.logo} className="w-15 h-auto" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#c18431] to-[#c18431] bg-clip-text text-transparent">
                  {data.title}
                </h1>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <RatingStars rating={data.rating} />
                  <span className="text-sm text-gray-600">
                    {data.rating} ({data.totalReviews})
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-2.5 bg-[#c18431] text-white rounded-lg hover:bg-[#c18431] transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                  Write a Review
                </button>
                <button className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-[#c18431] transition-all duration-200">
                  Ask a Question
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="w-20 h-20 relative group">
                <div className="w-full h-full rounded-full border-8 border-[#c18431] flex items-center justify-center transform transition-transform group-hover:scale-105">
                  <div className="text-center">
                    <span className="text-base font-bold text-[#c18431]">
                      {data.percentage}%
                    </span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">↑</span>
                </div>
              </div>
              {/* <p className="text-sm text-gray-600 text-center mt-2">
                of reviewers recommend
                <br className="sm:hidden" /> {data.title}
              </p> */}
            </div>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#c18431]to-transparent p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {data.summary}
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
                {metrics.map((metric, index) => (
                  <MetricBar key={index} metric={metric} />
                ))}
              </div>

              <div className="flex items-center gap-2 p-4 bg-[#c18431]rounded-lg text-gray-600">
                <Clock3 size={16} className="text-[#c18431]" />
                <span className="text-sm">
                  This company responds to reviews on average within 2 days
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner">
                <img
                  src={data.office[0]}
                  alt="Photo scanning process"
                  className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <img
                    src={data.office[1]}
                    alt="Vintage photos"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <img
                    src={data.office[2]}
                    alt="Digital memories"
                    className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
