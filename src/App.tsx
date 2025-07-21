import { Route, Routes } from "react-router-dom";
import MainLayout from "@/_component/mainLayout";
import LandingPage from "@/pages/landing";
import AboutUsPage from "@/pages/apropos";
import ProgramPage from "@/pages/programs";
import ServicesPage from "@/pages/services";
import MomGymPage from "@/pages/mum-gym";
import VacancesPage from "@/pages/vacances";
import ContactPage from "@/pages/contacts";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/apropos" element={<AboutUsPage />} />
        <Route path="/programs" element={<ProgramPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/mum-gym" element={<MomGymPage />} />
        <Route path="/vacances" element={<VacancesPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;
