import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeLayout } from './components/layout/home-layout';
import { WorksLayout } from './components/layout/works-layout';
import { ContactLayout } from './components/layout/contact-layout';
import { MainLayout } from './components/layout/main-layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/works" element={<WorksLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
