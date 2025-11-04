import { Heading, Quotes } from "./components";
import {
  About,
  HeroSection,
  Projects,
  QuotesSection,
  Skills,
} from "./sections";

export default function App() {
  return (
    <div className="relative w-screen overflow-hidden">
      <HeroSection />
      <Quotes />
      <About />
      <Heading
        classname="bg-orange-500 text-9xl text-[#141414] p-4 skew-y-2 font-black "
        heading="SKILLS & EXPERTISE"
      />
      <Skills />
      <QuotesSection />
      <Heading
        classname="bg-blue-400 text-9xl text-[#141414] p-4 -skew-y-2 font-black "
        heading="PROJECTS GALLERY"
      />
      <Projects />
    </div>
  );
}
