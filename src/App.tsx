import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeLayout } from './components/layout/HomeLayout';
import { WorksLayout } from './components/layout/WorksLayout';
import { ContactLayout } from './components/layout/ContactsLayout';
import { MainLayout } from './components/layout/MainLayout';

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
