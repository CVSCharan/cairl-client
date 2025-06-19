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
import Events from "./pages/Events";
import ResearchAndInnovation from "./pages/ResearchAndInnovation";
import Services from "./pages/Services";
import Engage from "./pages/Engage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/engage-with-us" element={<Engage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/ai-bootcamps" element={<Bootcamps />} />
        <Route
          path="/research-innovation"
          element={<ResearchAndInnovation />}
        />
        <Route path="/happenings" element={<Happening />} />
        <Route path="/webinars" element={<Webinar />} />
        <Route path="/visual-journey" element={<VisualJourney />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
