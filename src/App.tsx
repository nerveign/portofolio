import { Layout } from 'lucide-react';
import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Layout />
        <Footer />
      </div>
    </>
  );
}

export default App;
