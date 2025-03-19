import { Search, MonitorDot, Pickaxe, Scale, Factory, SwatchBook, RadioTower, Headset, Zap, Ship, Stethoscope, ShoppingCart, GraduationCap, Plane, TreePalm, Banknote, ClipboardList, Leaf, Dumbbell, Music, FlaskConical, Car } from "lucide-react";
import Footer from "../custom/Footer";
import Header from "../custom/Header";

const trendCategories = [
  {
    compo: <MonitorDot />,
    title: "IT",
  },
  {
    compo: <Pickaxe />,
    title: "Construction",
  },
  {
    compo: <Scale />,
    title: "Legal",
  },
  {
    compo: <Factory />,
    title: "Manufacture",
  },
  {
    compo: <SwatchBook />,
    title: "Textile",
  },
  {
    compo: <RadioTower />,
    title: "Telecom",
  },
  {
    compo: <Headset />,
    title: "BPO",
  },
  {
    compo: <Zap />,
    title: "Energy",
  },
  {
    compo: <Ship />,
    title: "Maritime",
  },
  {
    compo: <Stethoscope />,
    title: "Healthcare",
  },
  {
    compo: <ShoppingCart />,
    title: "Retail",
  },
  {
    compo: <GraduationCap />,
    title: "Education",
  },
  {
    compo: <Plane />,
    title: "Aviation",
  },
  {
    compo: <TreePalm />,
    title: "Tourism",
  },
  {
    compo: <Banknote />,
    title: "Finance",
  },
  {
    compo: <ClipboardList />,
    title: "Logistics",
  },
  {
    compo: <Leaf />,
    title: "Agriculture",
  },
  {
    compo: <Dumbbell />,
    title: "Fitness",
  },
  {
    compo: <Music />,
    title: "Entertainment",
  },
  {
    compo: <FlaskConical />,
    title: "Pharmaceutical",
  },
  {
    compo: <Car />,
    title: "Automotive",
  },
];


const Categories = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[rgb(253,251,246)] font-Rubik flex flex-col justify-center gap-8 px-4 pt-40 pb-20">
        <h1 className="text-6xl tracking-wide text-center font-medium">
          Browse Company
        </h1>
        <h5 className="text-xl tracking-wider text-center max-w-screen-md mx-auto">
          Don’t wait to stumble across what you need… Find it, stat ⚡ – from
          the hottest in retail to must-have business tools, and beyond.
        </h5>
        <span className="group flex bg-white shadow w-lg justify-between px-4 py-3 rounded mx-auto">
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search here..."
          />{" "}
          <Search
            className="transition-colors p-1 rounded group-hover:bg-[#c18431]"
            size={32}
          />
        </span>

        <div className="grid grid-cols-12 max-w-screen-xl gap-10 mx-auto pt-20">
          {trendCategories.map(item =>(
              <span className="w-60 md:w-90 col-span-6 md:col-span-4 p-4 flex gap-4 items-center shadow rounded bg-[#f3e9ce]">
              <span className="p-2 bg-white shadow rounded">{item.compo}</span>
              <p className="text-lg tracking-wide">{item.title}</p>
            </span>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
