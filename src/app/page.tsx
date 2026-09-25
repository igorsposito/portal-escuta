import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import CipaSection from '../components/CipaSection/CipaSection';
import DashboardSection from '../components/DashboardSection/DashboardSection';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Faq from '../components/Faq/Faq';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <CipaSection />
      <DashboardSection />
      <HowItWorks />
      <Faq />
      <ContactSection />
      <Footer />
    </main>
  );
}