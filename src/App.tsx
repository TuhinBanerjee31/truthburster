import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import FindArea from "./pages/FindArea";
import View from "./pages/View";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import It from "./pages/It";
import IbmPage from "./pages/IbmPage";
import GooglePage from "./pages/GooglePage";
import MicrosoftPage from "./pages/MicrosoftPage";
import TcsPage from "./pages/TcsPage";
import InfosysPage from "./pages/InfosysPage";
import AccenturePage from "./pages/AccenturePage";
import OraclePage from "./pages/OraclePage";
import SapPage from "./pages/SapPage";
import CognizantPage from "./pages/CognizantPage";
import DellPage from "./pages/DellPage";
import Construction from "./pages/Construction";
import LtPage from "./pages/LtPage";
import KpngPage from "./pages/KpngPage";
import BouyguesPage from "./pages/BouyguesPage";
import VinciPage from "./pages/VinciPage";
import BechtelPage from "./pages/BechtelPage";
import SkanskaPage from "./pages/SkanskaPage";
import StrabagPage from "./pages/StrabagPage";
import ObayashiPage from "./pages/ObayashiPage";
import Legal from "./pages/Legal";
import About from "./pages/About";
import Manufacture from "./pages/Manufacture";
import Textile from "./pages/Textile";
import Telecom from "./pages/Telecom";
import Bpo from "./pages/Bpo";
import Energy from "./pages/Energy";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/findArea" element={<FindArea />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view" element={<View />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/categories/it" element={<It />} />
        <Route path="/categories/construction" element={<Construction />} />
        <Route path="/categories/manufacture" element={<Manufacture />} />
        <Route path="/categories/textile" element={<Textile />} />
        <Route path="/categories/telecom" element={<Telecom />} />
        <Route path="/categories/bpo" element={<Bpo />} />
        <Route path="/categories/energy" element={<Energy />} />
        <Route path="/categories/legal" element={<Legal />} />
        <Route path="/categories/ibm" element={<IbmPage />} />
        <Route path="/categories/google" element={<GooglePage />} />
        <Route path="/categories/microsoft" element={<MicrosoftPage />} />
        <Route path="/categories/tcs" element={<TcsPage />} />
        <Route path="/categories/infosys" element={<InfosysPage />} />
        <Route path="/categories/accenture" element={<AccenturePage />} />
        <Route path="/categories/oracle" element={<OraclePage />} />
        <Route path="/categories/sap" element={<SapPage />} />
        <Route path="/categories/cognizant" element={<CognizantPage />} />
        <Route path="/categories/dell" element={<DellPage />} />
        <Route path="/categories/lt" element={<LtPage />} />
        <Route path="/categories/kpng" element={<KpngPage />} />
        <Route path="/categories/bouygues" element={<BouyguesPage />} />
        <Route path="/categories/vinci" element={<VinciPage />} />
        <Route path="/categories/bechtel" element={<BechtelPage />} />
        <Route path="/categories/skanska" element={<SkanskaPage />} />
        <Route path="/categories/strabag" element={<StrabagPage />} />
        <Route path="/categories/obayashi" element={<ObayashiPage />} />
      </Routes>
    </>
  );
}

export default App;
