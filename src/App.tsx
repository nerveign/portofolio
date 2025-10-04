import { Layout } from './components/ui/Layout';
import { HeroSection } from './components/ui/HeroSection';
import { WorksSection } from './components/ui/WorksSection';
import { ContactSection } from './components/ui/ContactSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/works" element={<WorksSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
