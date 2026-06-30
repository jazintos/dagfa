import Hero from "../sections/Hero";

import Story from "../components/home/Story";
{/*import Stats from "../components/home/Stats"; */}
import Spectra from "../components/home/Spectra";
import FocusAreas from "../components/home/FocusAreas";
import LeadershipPreview from "../components/home/LeadershipPreview";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Story />

      <Spectra />

    {/* <Stats /> */}

      <FocusAreas />

      <LeadershipPreview />

      <CTA />
    </>
  );
}