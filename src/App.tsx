import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";
import HowWeWork from "./pages/HowWeWork.tsx";
import Contact from "./pages/Contact.tsx";
import Distribution from "./pages/Distribution.tsx";
import NewProductDevelopment from "./pages/custom-products/NewProductDevelopment.tsx";
import CustomManufacturing from "./pages/custom-products/CustomManufacturing.tsx";
import CustomPackaging from "./pages/custom-products/CustomPackaging.tsx";
import Manufacturing from "./pages/manufacturing/Manufacturing.tsx";
import { Gummies, Capsules, Tablets, Powders, Liquids } from "./pages/manufacturing/FormatPages.tsx";
import Tobacco from "./pages/manufacturing/Tobacco.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/custom-products/new-product-development" element={<NewProductDevelopment />} />
          <Route path="/custom-products/custom-manufacturing" element={<CustomManufacturing />} />
          <Route path="/custom-products/custom-packaging" element={<CustomPackaging />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/manufacturing/gummies" element={<Gummies />} />
          <Route path="/manufacturing/capsules" element={<Capsules />} />
          <Route path="/manufacturing/tablets" element={<Tablets />} />
          <Route path="/manufacturing/powders" element={<Powders />} />
          <Route path="/manufacturing/liquids" element={<Liquids />} />
          <Route path="/manufacturing/tobacco" element={<Tobacco />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
