import { Banner, HeroSection, Quotes } from "./components";

export default function App() {
  return (
    <div className="relative w-screen overflow-hidden">
      <HeroSection />
      <Quotes />
      <Banner />
    </div>
  );
}
