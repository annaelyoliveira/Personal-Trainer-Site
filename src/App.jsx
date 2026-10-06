import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import ConsultoriaOnline from "./pages/ConsultoriaOnline.jsx";
import AcompanhamentoPresencial from "./pages/AcompanhamentoPresencial.jsx";
import ParceriaNutricionista from "./pages/ParceriaNutricionista.jsx";
import ParceriaSuplementos from "./pages/ParceriaSuplementos.jsx";
import Contato from "./pages/Contato.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoria-online" element={<ConsultoriaOnline />} />
          <Route path="/acompanhamento-presencial" element={<AcompanhamentoPresencial />} />
          <Route path="/parceria-nutricionista" element={<ParceriaNutricionista />} />
          <Route path="/parceria-suplementos" element={<ParceriaSuplementos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}