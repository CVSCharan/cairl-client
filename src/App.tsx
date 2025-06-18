import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Webinar from "./pages/Webinar";
import VisualJourney from "./pages/VisualJourney";
import Happening from "./pages/Happening";
import Bootcamps from "./pages/Bootcamps";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-bootcamps" element={<Bootcamps />} />
        <Route path="/happenings" element={<Happening />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/journey" element={<VisualJourney />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
