import { Search, MonitorDot, Pickaxe, Scale, Factory, SwatchBook, RadioTower, Headset, Zap, Ship, Stethoscope, ShoppingCart, GraduationCap, Plane, TreePalm, Banknote, ClipboardList, Leaf, Dumbbell, Music, FlaskConical, Car } from "lucide-react";
import Footer from "../custom/Footer";
import Header from "../custom/Header";
import { Link } from "react-router-dom";

const trendCategories = [
  {
    compo: <MonitorDot />,
    title: "IT",
    redirect:"/categories/it"
  },
  {
    compo: <Pickaxe />,
    title: "Construction",
    redirect:"/categories/construction"
  },
  {
    compo: <Scale />,
    title: "Legal",
    redirect:"/categories/legal"
  },
  {
    compo: <Factory />,
    title: "Manufacture",
    redirect:"/categories/manufacture"
  },
  {
    compo: <SwatchBook />,
    title: "Textile",
    redirect:"/categories/manufacture"
  },
  {
    compo: <RadioTower />,
    title: "Telecom",
    redirect:"/categories/telecom"
  },
  {
    compo: <Headset />,
    title: "BPO",
    redirect:"/categories/bpo"
  },
  {
    compo: <Zap />,
    title: "Energy",
    redirect:"/categories/energy"
  },
  {
    compo: <Ship />,
    title: "Maritime",
    redirect:"/categories/martime"
  },
  {
    compo: <Stethoscope />,
    title: "Healthcare",
    redirect:"/categories/healthcare"
  },
  {
    compo: <ShoppingCart />,
    title: "Retail",
    redirect:"/categories/retail"
  },
  {
    compo: <GraduationCap />,
    title: "Education",
    redirect:"/categories/education"
  },
  {
    compo: <Plane />,
    title: "Aviation",
    redirect:"/categories/aviation"
  },
  {
    compo: <TreePalm />,
    title: "Tourism",
    redirect:"/categories/tourism"
  },
  {
    compo: <Banknote />,
    title: "Finance",
    redirect:"/categories/finance"
  },
  {
    compo: <ClipboardList />,
    title: "Logistics",
    redirect:"/categories/energy"
  },
  {
    compo: <Leaf />,
    title: "Agriculture",
    redirect:"/categories/agriculture"
  },
  {
    compo: <Dumbbell />,
    title: "Fitness",
    redirect:"/categories/fitness"
  },
  {
    compo: <Music />,
    title: "Entertainment",
    redirect:"/categories/entertainment"
  },
  {
    compo: <FlaskConical />,
    title: "Pharmaceutical",
    redirect:"/categories/pharmaceutical"
  },
  {
    compo: <Car />,
    title: "Automotive",
    redirect:"/categories/automotive"
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
              <Link to={item.redirect} className="w-60 md:w-90 col-span-6 md:col-span-4 p-4 flex gap-4 items-center shadow rounded bg-[#f3e9ce]">
              <span className="p-2 bg-white shadow rounded">{item.compo}</span>
              <p className="text-lg tracking-wide">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
