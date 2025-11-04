import { ArrowRight, Grid3x3, Radio, Cable, Package } from "lucide-react";
import { useState } from "react";

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState<"products" | "industries">("products");

  const productCategories = [
    { icon: Grid3x3, name: "Connectors" },
    { icon: Radio, name: "RF & Microwave" },
    { icon: Cable, name: "Wires & Cables" },
    { icon: Package, name: "Assembly & Harness" },
    { icon: Grid3x3, name: "Others" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Heading section */}
        <div className="mb-8 lg:mb-10">
          <p className="text-xs uppercase tracking-[2px] text-winchester-content font-medium mb-2">WHAT WE DO</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-winchester-content leading-tight mb-4">
            We design and manufacture a range of interconnect solutions for mission-critical applications where reliability is essential.
          </h2>
          <p className="text-xs lg:text-sm leading-relaxed text-winchester-content max-w-2xl">
            The product portfolio includes RF and microwave solutions, fiber optics, miniature connectors, and specivalized industrial and military-grade connectors. We also specialize in custom cable and cable assemblies, including high-flex, overmolded, and undersea cables. This ensures durability, high reliability, and optimal performance in harsh environments.
          </p>
        </div>

        {/* Image and content grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start relative">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[400/300] lg:aspect-[500/380] rounded-[20px] bg-[#FFF3F4] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ada602641f6af7df99168b55a03100fe7cf45625?width=1502" 
                alt="Winchester products" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content with badge */}
          <div className="flex flex-col gap-4 pt-2 lg:pt-0 relative">
            {/* Tabs */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[rgba(227,229,231,0.5)] w-fit">
              <button
                onClick={() => setActiveTab("products")}
                className={`flex items-center gap-1.5 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === "products"
                    ? "bg-button-gradient text-white"
                    : "text-winchester-content hover:bg-white/50"
                }`}
              >
                <Grid3x3 className="w-3.5 h-3.5" />
                Product Range
              </button>
              <button
                onClick={() => setActiveTab("industries")}
                className={`flex items-center gap-1.5 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === "industries"
                    ? "bg-button-gradient text-white"
                    : "text-winchester-content hover:bg-white/50"
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                Supported Industries
              </button>
            </div>

            {/* Product categories */}
            {activeTab === "products" && (
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {productCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-winchester-content flex-shrink-0" />
                      <span className="text-xs lg:text-sm font-medium text-winchester-content">
                        {category.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 self-start px-4 lg:px-5 py-2 rounded-full border border-winchester-content text-winchester-content font-medium text-xs lg:text-sm hover:bg-winchester-content hover:text-white transition-all">
              Know Our Market Expertize
              <ArrowRight className="w-3 h-3" />
            </button>

            {/* Badge circle on right */}
            <div className="absolute -bottom-16 -right-8 lg:-bottom-20 lg:-right-16 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-white shadow-lg" />
                <div className="absolute inset-[15%] rounded-full bg-winchester-badge-red flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 189 189">
                    <circle cx="67.3" cy="87.7" r="6.8" fill="white" />
                    <circle cx="94.5" cy="87.7" r="6.8" fill="white" />
                    <circle cx="121.6" cy="87.7" r="6.8" fill="white" />
                    <circle cx="108.1" cy="101.3" r="6.8" fill="white" />
                    <circle cx="80.9" cy="101.3" r="6.8" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
