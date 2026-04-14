import CarouselText from "./CarouselText";

export default function LeftPanel() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-white">
      
      {/* Top Logo */}
      <div className="w-full">
        <h1 className="text-2xl font-bold text-gray-800">
          HRM<span className="text-red-500">Snap</span>
        </h1>
      </div>

      {/* Laptop Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/laptop.png"
          alt="laptop"
          className="w-full max-w-lg object-contain"
        />
      </div>

      {/* Bottom Content */}
      <div className="mb-6">
        {/* Center Logo */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          HRM<span className="text-red-500">Snap</span>
        </h2>

        {/* Carousel Text */}
        <CarouselText />
      </div>

    </div>
  );
}