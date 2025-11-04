export default function Stats() {
  const stats = [
    { value: "80+", label: "Years of\nExperience" },
    { value: "18", label: "Manufacturing\nSites" },
    { value: "37K+", label: "Employees\nGlobally" },
    { value: "4K+", label: "Engineers\n& Technicians" },
    { value: "3.2K+", label: "Team\nMembers" },
  ];

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <div className="text-2xl lg:text-4xl font-bold text-winchester-content">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm font-medium text-winchester-content text-center whitespace-pre-line leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
