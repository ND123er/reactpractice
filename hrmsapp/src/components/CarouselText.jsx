import { useState } from "react";

const slides = [
  {
    title: "Automated Payroll System",
    desc: "From onboarding to payroll, manage everything in one seamless powerful dashboard.",
  },
  {
    title: "Employee Management",
    desc: "Track employee data and performance efficiently.",
  },
  {
    title: "Attendance Tracking",
    desc: "Monitor attendance with smart tools.",
  },
];

export default function CarouselText() {
  const [current, setCurrent] = useState(0);

  return (
    <div  key={current} className="text-center mt-6 animate-[slideIn_0.5s_ease-out]">
      
      {/* Title */}
      <h3 className="text-lg font-semibold">
        {slides[current].title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
        {slides[current].desc}
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}