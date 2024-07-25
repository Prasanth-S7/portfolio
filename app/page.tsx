import { BackgroundBeams } from "@/components/ui/background-beams";
import Skills from "@/components/skills";
import Hero from "@/components/hero";
import Header from "@/components/header";
export default function Main() {
  return (
    <div className="text-xl overflow-y-hidden overflow-hidden">
      <BackgroundBeams></BackgroundBeams>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
    </div>
  );
}
