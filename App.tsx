import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Methodology from './components/Methodology';
import Comparison from './components/Comparison';
import Gallery from './components/Gallery';
import TeamInfo from './components/TeamInfo';
import References from './components/References';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Methodology />
        <Comparison />
        <Gallery />
        <TeamInfo />
        <References />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;