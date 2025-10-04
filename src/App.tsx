import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeLayout } from './components/layout/HomeLayout';
import { WorksLayout } from './components/layout/WorksLayout';
import { ContactLayout } from './components/layout/ContactsLayout';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
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
