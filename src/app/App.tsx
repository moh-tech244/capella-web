import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickIntro } from '../components/QuickIntro';
import { Pricing } from '../components/Pricing';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { FloatingSupport } from '../components/FloatingSupport';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <QuickIntro />
      <Pricing />
      <Features />
      <Footer />
      <FloatingSupport />
    </div>
  );
}
