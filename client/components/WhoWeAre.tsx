import { Telescope, Flag, Users, ArrowRight, Grid3x3, Radio, Cable, Package } from "lucide-react";
import { useState } from "react";
import Maskgroup from "../../public/Maskgroup.png";
import Frame from "../../public/Frame.png";

export default function WhoWeAre() {
  const [activeTab, setActiveTab] = useState("products");

  const productCategories = [
    { icon: Grid3x3, name: "Connectors" },
    { icon: Package, name: "Assembly & Harness" },
    { icon: Radio, name: "RF & Microwave" },
    { icon: Grid3x3, name: "Others" },
    { icon: Cable, name: "Wires & Cables" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[2px] text-winchester-content font-medium">
                WHO WE ARE
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-winchester-content leading-tight">
                Giving life to mission critical applications for over 80 years
              </h2>
            </div>

            <p className="text-xs lg:text-sm leading-relaxed text-winchester-content">
              Winchester Interconnect is a global provider of precision-engineered interconnect solutions. The company has been connecting innovation to application since 1941. Winchester Interconnect partners with organizations in industries such as aerospace, defense, medical, industrial, and space. This collaboration empowers them to solve connectivity challenges. An agile approach, combined with global resources, ensures an understanding of customer needs and the delivery of high-quality, reliable solutions efficiently. Winchester Interconnect's mission is to inspire its innovative team to design and deliver interconnect solutions that empower customers.
            </p>

            {/* Vision */}
            <div className="flex flex-col gap-5 pt-2">
              <div className="flex gap-3 items-start">
                <Telescope className="w-5 h-5 text-winchester-content flex-shrink-0" />
                <div>
                  <h3 className="text-md font-semibold text-winchester-content">Vision</h3>
                  <p className="text-sm leading-relaxed text-winchester-content">
                    To be the leading global partner in interconnect innovation for critical technologies.
                  </p>
                </div>
              </div>
              <br/>

              <div className="flex gap-3 items-start">
                <Flag className="w-5 h-5 text-winchester-content flex-shrink-0" />
                <div>
                  <h3 className="text-md font-semibold text-winchester-content">Mission</h3>
                  <p className="text-sm leading-relaxed text-winchester-content">
                    To engineer reliable, high-performance connectivity solutions that power life-saving systems and mission-driven innovations.
                  </p>
                </div>
              </div>
              <br/>

              <div className="flex gap-3 items-start">
                <Users className="w-5 h-5 text-winchester-content flex-shrink-0" />
                <div>
                  <h3 className="text-md font-semibold text-winchester-content">Values</h3>
                  <p className="text-sm leading-relaxed text-winchester-content">
                    We act with integrity, foster innovation, encourage collaboration, stay customer-centric, and commit to excellence.
                  </p>
                </div>
              </div>
              <br/>
            </div>

            {/* Image */}
            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[3/1.5] rounded-[20px] bg-[#FFF3F4] overflow-hidden mt-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ada602641f6af7df99168b55a03100fe7cf45625?width=1502"
                alt="Winchester office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Image with badge */}
            <div className="relative w-full flex justify-center">
              <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[3/1.5] rounded-[20px] bg-[#FFF3F4] relative overflow-visible">
                <div className="overflow-hidden rounded-[20px]">
                  <img src={Maskgroup} alt="Winchester office" className="w-full h-full object-cover" />
                </div>

                {/* Badge half outside */}
                <div className="absolute -bottom-[40px] -left-[40px] sm:-bottom-[50px] sm:-left-[50px] w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px]">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-full bg-white shadow-lg" />
                    <div className="absolute inset-[5%] rounded-full bg-winchester-badge-red flex items-center justify-center">
                      <img src={Frame} alt="Frame" className="w-full h-full object-cover rounded-full" />
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

            {/* What We Do Section */}
            <section className="w-full bg-gradient-to-b from-white to-gray-50">
              <div className="px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
                <div className="mb-6 lg:mb-10">
                  <p className="text-xs uppercase tracking-[2px] text-winchester-content font-medium mb-2">WHAT WE DO</p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-winchester-content leading-snug mb-3">
                  We design and manufacture a range of interconnect solutions for mission-critical applications where reliability is essential.
                  </h2>
                  <p className="text-sm leading-relaxed text-winchester-content max-w-2xl">
                  The product portfolio includes RF and microwave solutions, fiber optics, miniature connectors, and specivalized industrial and military-grade connectors. We also specialize in custom cable and cable assemblies, including high-flex, overmolded, and undersea cables. This ensures durability, high reliability, and optimal performance in harsh environments.
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap items-center gap-2 p-1 rounded-full bg-[rgba(227,229,231,0.5)] w-fit">
                  <button
                    onClick={() => setActiveTab("products")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
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
                    className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === "industries"
                        ? "bg-button-gradient text-white"
                        : "text-winchester-content hover:bg-white/50"
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    Supported Industries
                  </button>
                </div>

                {/* Product Categories */}
                {activeTab === "products" && (
                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 mt-4">
                    {productCategories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-winchester-content flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-winchester-content">
                            {category.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* CTA Button */}
                <button className="mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-winchester-content text-winchester-content font-medium text-xs sm:text-sm hover:bg-winchester-content hover:text-white transition-all">
                  Know Our Market Expertise
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
