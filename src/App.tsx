import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ForWhom } from './components/ForWhom';
import { Benefits } from './components/Benefits';
import { Program } from './components/Program';
import { Space } from './components/Space';
import { Speakers } from './components/Speakers';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <Hero />
      <ForWhom />
      <Benefits />
      <Program />
      <Space />
      <Speakers />
      <Pricing />
      <Footer />
    </div>
  );
}
