import { Quote, ChevronRight, ChevronLeft } from "lucide-react";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

const testiData = [
  {
    content: `“What I grew to enjoy was being able to connect with others on
  the website and sharing my own thoughts and opinions. Overall,
  I could not recommend this website more if you want an
  unbiased review on any brand or service.”`,
    name: "Samira R.",
  },
  {
    content: `“I love being able to read reviews from other consumers about
                  companies that I’ve never heard of before and learning about
                  new products from companies that I love buying products from!”`,
    name: "Samantha B.",
  },
  {
    content: `“I love Truthburster because I can read reviews about other
                  websites and make informed decisions. It’s easy to use and
                  find what you’re looking for. I like that I can build my own
                  profile, write reviews and help other consumers.”`,
    name: "Nafia T.",
  },
  {
    content: ` “Truthburster reviews have been extremely helpful to me. It
                  has a really great set up to make it easy to find a website.
                  AND, you can even connect with other users like social media
                  and make friends if you want.”`,
    name: "Heather H.",
  },
  {
    content: `“I only wish I had known about this website a long time ago.
                  It’s awesome to be able to get it out to the public what many
                  of the sites are about. Thanks, Truthburster, for helping to
                  open the book on scammers.”`,
    name: `Athena M.`,
  },
];

const Testimonial = () => {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen font-Rubik bg-[rgb(253,251,246)] py-20">
      <div className="flex max-w-full md:max-w-screen-xl mx-auto justify-around">
        <img
          src="https://static.Sitejabber.com/imgs/home/reviews/i1.png"
          className="w-10 md:w-15"
        />
        <Quote className="text-[#ce9436] rotate-180" />

        <img
          src="https://static.Sitejabber.com/imgs/home/reviews/i4.png"
          className="w-10 md:w-15"
        />
      </div>

      <h5 className="text-[#ce9436] text-lg tracking-wide text-center pt-10">
        Why people love us
      </h5>

      <div className="max-w-screen-lg mx-auto py-10">
        <div className="relative w-full glide-01">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {testiData.map(item => (
                <li key={item.name} className="w-full max-w-full max-h-full m-auto flex flex-col justify-center items-center gap-6">
                <p className="text-base md:text-xl max-w-md md:max-w-screen-md tracking-wide mx-auto text-center">{item.content}</p>
                <h5 className="text-base tracking-wide">{item.name}</h5>
              </li>
              ))}
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white/20 text-slate-700 hover:cursor-pointer hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <ChevronLeft />
            </button>
            <button
              className="inline-flex items-center justify-center w-8 h-8 transition duration-300 bg-white/20 text-slate-700 hover:cursor-pointer hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      {/*<!-- End Slider with controls inside --> */}

      <div className="flex md:max-w-screen-2xl mx-auto justify-between md:justify-around px-10 md:px-0 pt-10">
        <img
          src="https://static.sitejabber.com/imgs/home/reviews/i3.png"
          className="w-10 md:w-15"
        />

        <img
          src="https://static.sitejabber.com/imgs/home/reviews/i2.png"
          className="w-10 md:w-15 absolute left-[50%] mt-20"
        />

        <img
          src="https://static.sitejabber.com/imgs/home/reviews/i5.png"
          className="w-10 md:w-15"
        />
      </div>
    </div>
  );
};

export default Testimonial;
