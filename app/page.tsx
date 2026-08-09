import Background from "@/components/ui/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import ProductShowcase from "@/components/ProductShowcase";
import RolesSection from "@/components/RolesSection";
import VoiceSection from "@/components/VoiceSection";
import Privacy from "@/components/Privacy";
import AppDownload from "@/components/AppDownload";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <ProductShowcase />
        <RolesSection />
        <VoiceSection />
        <Privacy />
        <AppDownload />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
