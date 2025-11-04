import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2F9FF]">
        <span className="text-xs text-winchester-content-light">Home</span>
        <ChevronRight className="w-3.5 h-3.5 text-winchester-content-light" />
        <span className="text-xs text-winchester-content-light">About Us</span>
        <ChevronRight className="w-3.5 h-3.5 text-winchester-content-light" />
        <span className="text-xs text-winchester-content font-semibold">Corporate Information</span>
      </div>
    </div>
  );
}
