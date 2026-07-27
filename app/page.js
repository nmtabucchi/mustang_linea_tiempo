import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-mustang-dark text-white">
      <Header />
      <Hero />
      <Timeline />
    </main>
  );
}
