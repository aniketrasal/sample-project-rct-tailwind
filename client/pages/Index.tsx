import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import WhoWeAre from "@/components/WhoWeAre";
import Stats from "@/components/Stats";
import WhatWeDo from "@/components/WhatWeDo";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Breadcrumb />
      <WhoWeAre />
      <Stats />
      {/* <WhatWeDo /> */}
    </div>
  );
}
