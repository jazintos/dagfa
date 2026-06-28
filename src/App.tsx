import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Leadership from './sections/Leadership';
import WhyDAGFA from './sections/WhyDAGFA';
import Analytics from './sections/Analytics';
import Initiatives from './sections/Initiatives';
import Insights from './sections/Insights';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <WhyDAGFA />
        <Analytics />
        <Initiatives />
        <Insights />
        <Contact />
      </main>
    </div>
  );
}
