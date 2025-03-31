import Header from "../custom/Header";
import Footer from "../custom/Footer";
import CompanyCard from "../custom/CompanyCard";
import { energyData } from "../data/energyData";

const Energy = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik px-5">
        <div className="max-w-screen-lg h-40 md:h-50 bg-[#f3e9ce] mx-auto rounded-b-2xl text-center flex justify-center items-center px-4">
          <h3 className="text-2xl md:text-4xl tracking-wide">Energy</h3>
        </div>

        <div className="py-20 px-5 flex flex-col gap-8">
        {energyData.map((item, index) => (
          <div key={index}>
            <CompanyCard data={item} />
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Energy;
