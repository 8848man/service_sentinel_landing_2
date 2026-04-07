import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Reframe from "@/components/Reframe";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ValueProps from "@/components/ValueProps";
import ProductViz from "@/components/ProductViz";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0B0F14", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Problem />
      <Reframe />
      <Solution />
      <HowItWorks />
      <ValueProps />
      <ProductViz />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
