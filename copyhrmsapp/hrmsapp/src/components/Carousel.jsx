import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Automated Payroll System",
    desc: "From onboarding to payroll, manage everything in one seamless dashboard.",
    image: "/images/laptop.png",
  },
  {
    id: 2,
    title: "Employee Management",
    desc: "Track employee data and performance efficiently.",
    image: "/images/laptop2.png",
  },
  {
    id: 3,
    title: "Attendance Tracking",
    desc: "Monitor attendance with smart tools.",
    image: "/images/laptop3.png",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full max-w-md text-center">
      
      {/* Image */}
      <img
        src={slides[current].image}
        alt="slide"
        className="w-full h-auto object-contain mb-6"
      />

      {/* Logo */}
      <h2 className="text-2xl font-bold text-gray-800">
        HRM<span className="text-red-500">Snap</span>
      </h2>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold">
        {slides[current].title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 mt-2 text-sm">
        {slides[current].desc}
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}