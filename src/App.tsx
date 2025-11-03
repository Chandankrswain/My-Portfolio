import { Heading, Quotes } from "./components";
import { About, HeroSection, Skills } from "./sections";

export default function App() {
  return (
    <div className="relative w-screen overflow-hidden">
      <HeroSection />
      <Quotes />
      <About />
      <Heading heading="SKILLS & EXPERTISE" />
      <Skills />
    </div>
  );
}
