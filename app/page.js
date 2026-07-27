import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-mustang-dark text-mustang-white">
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
