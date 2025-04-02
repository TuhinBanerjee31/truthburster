import { Users, Building2, Award, ArrowRight } from "lucide-react";
import Header from "../custom/Header";
import Footer from "../custom/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Connecting people with{" "}
                <span className="text-[#c18431]">trustworthy</span> and{" "}
                <span className="block mt-2">companies</span>
              </h1>
              <p className="text-gray-600 mb-8 text-base sm:text-lg">
                truthbusters is a modern platform for everyday people,
                <br className="hidden sm:block" />
                for everyday needs.
              </p>

              {/* Testimonials */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        alt="User"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        alt="User"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&crop=faces"
                        className="w-8 h-8 rounded-full border-2 border-white"
                        alt="User"
                      />
                    </div>
                    <span className="text-sm text-gray-600">and 24 others</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    "Truthbuster has transformed our business operations. Their
                    platform streamlined our processes and helped us reach new
                    heights."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                      alt="Profile"
                    />
                    <div>
                      <p className="font-medium">John Peterson</p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        CEO at TechFlow
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    "The platform has helped us scale our operations and cut
                    costs significantly. Highly recommended!"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[500px]"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center p-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">200M+</div>
              <div className="text-sm sm:text-base text-gray-600">
                Buyers helped
              </div>
            </div>

            <div className="text-center p-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-cyan-100 rounded-full mx-auto mb-4">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">10M+</div>
              <div className="text-sm sm:text-base text-gray-600">
                Supplier reviews
              </div>
            </div>

            <div className="text-center p-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#c18431] rounded-full mx-auto mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-2">140K+</div>
              <div className="text-sm sm:text-base text-gray-600">
                Verified businesses
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Trust and Transparency
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6">
              Truthbuster is dedicated to helping buyers make informed choices
              through real, unbiased reviews and creating a seamless online
              community. We make space to care in everything we do.
            </p>
            <button className="inline-flex items-center gap-2 text-[#c18431] font-medium hover:text-[#c18431] text-sm sm:text-base transition-colors duration-200">
              Learn more about Trust and Transparency
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
