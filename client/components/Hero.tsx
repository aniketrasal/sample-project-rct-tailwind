import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#F0F7FC] via-white to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/4 w-[847px] h-[508px] bg-[#86B8FE]/30 rounded-full blur-[100px]" />
        <div className="absolute top-[52px] right-0 translate-x-1/4 w-[729px] h-[356px] bg-[#FE8696]/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-start">
          {/* Left content */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight bg-winchester-gradient bg-clip-text text-transparent">
              Built on Trust.
              <br />
              Driven by Innovation
            </h1>
            
            <button className="inline-flex items-center gap-2 self-start px-5 py-2 rounded-full bg-button-gradient text-white font-semibold text-xs lg:text-sm hover:opacity-90 transition-opacity w-fit">
              Need A Custom Solution?
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Right content */}
          <div className="text-winchester-content lg:w-1/2">
            <p style={{fontSize:"20px"}} className="text-sm lg:text-base leading-relaxed">
              Winchester designs and manufactures high-performance interconnect solutions for environments where reliability, durability, and performance are mission-critical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
