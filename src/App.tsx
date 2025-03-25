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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/findArea" element={<FindArea />} />
        <Route path="/view" element={<View />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/categories/it" element={<It />} />
        <Route path="/categories/construction" element={<Construction />} />
        <Route path="/categories/it/ibm" element={<IbmPage />} />
        <Route path="/categories/it/google" element={<GooglePage />} />
        <Route path="/categories/it/microsoft" element={<MicrosoftPage />} />
        <Route path="/categories/it/tcs" element={<TcsPage />} />
        <Route path="/categories/it/infosys" element={<InfosysPage />} />
        <Route path="/categories/it/accenture" element={<AccenturePage />} />
        <Route path="/categories/it/oracle" element={<OraclePage />} />
        <Route path="/categories/it/sap" element={<SapPage />} />
        <Route path="/categories/it/cognizant" element={<CognizantPage />} />
        <Route path="/categories/it/dell" element={<DellPage />} />
        <Route path="/categories/construction/lt" element={<LtPage />} />
        <Route path="/categories/construction/kpng" element={<KpngPage />} />
        <Route path="/categories/construction/bouygues" element={<BouyguesPage />} />
        <Route path="/categories/construction/vinci" element={<VinciPage />} />
        <Route path="/categories/construction/bechtel" element={<BechtelPage />} />
        <Route path="/categories/construction/skanska" element={<SkanskaPage />} />
        <Route path="/categories/construction/strabag" element={<StrabagPage />} />
        <Route path="/categories/construction/obayashi" element={<ObayashiPage />} />
      </Routes>
    </>
  );
}

export default App;
