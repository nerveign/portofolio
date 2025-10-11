import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeLayout } from './components/layout/home-layout';
import { WorksLayout } from './components/layout/works-layout';
import { ContactLayout } from './components/layout/contact-layout';
import { MainLayout } from './components/layout/main-layout';
import { ThemeProvider } from './components/context/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomeLayout />} />
              <Route path="/works" element={<WorksLayout />} />
              <Route path="/contact" element={<ContactLayout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
