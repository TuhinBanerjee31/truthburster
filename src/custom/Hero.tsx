import { useEffect, useState } from "react";
import heroImg from "../assets/heroImg.png";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Assurance", "Proof", "Reviews", "Truthburster"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="min-h-[90vh] w-full bg-[rgb(253,251,246)] font-Rubik">
      <div className="max-w-screen-xl mx-auto pt-16 grid grid-cols-12 place-items-center px-5">
        {/* ALL TEXT AREA */}
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-5xl md:text-6xl">Believe with</h1>
          <h1 className="text-5xl md:text-6xl text-[#c18431] font-play lowercase">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>

          <p className="text-base w-[80%] md:w-full md:text-lg tracking-wide pt-8 md:pt-12">
            Browse millions of reviews from buyers just like you – and make your
            voice heard.
          </p>
        </div>

        {/* IMAGE AREA */}
        <div className="col-span-12 md:col-span-6 pt-10 md:pt-0">
          <img src={heroImg} className="w-[100%] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
