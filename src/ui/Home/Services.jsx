import React, { useState } from "react";
import {
  FaLightbulb,
  FaToggleOn,
  FaBoxes,
  FaCogs,
  FaPlus,
} from "react-icons/fa";
import Button from "../Button";
import { motion } from "motion/react";

const services = [
  {
    title: "Luminaires",
    icon: <FaLightbulb />,
    description: "High-efficiency explosion-proof lighting solutions.",
  },
  {
    title: "Control Station",
    icon: <FaToggleOn />,
    description: "Reliable flameproof control and monitoring systems.",
  },
  {
    title: "Junction Box",
    icon: <FaBoxes />,
    description: "Flameproof enclosures for industrial wiring connections.",
  },
  {
    title: "Instrumentation Panel",
    icon: <FaCogs />,
    description: "Custom panels designed for precision monitoring and safety.",
  },
];

const HomeService = () => {
  const [hovered, sethovered] = useState(false);
  return (
    <section className="relative py-20 px-4 md:px-16 bg-cover bg-center text-white bg-[url('https://html.themexriver.com/industo/images/main-slider/image-2.jpg')] bg-fixed ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0f184bd0] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center mb-12">
        <h3 className="text-white font-bold  tracking-wide uppercase text-lg pattern ">
          What We Do
        </h3>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          We Provide Best Services
          <br /> For Industries
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1], // smoother than linear
              delay: index * 0.1,
            }}
            key={index}
            className="bg-[#1C0060] w-fit h-fit overflow-hidden -z-10 relative group text-white p-10 text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 mx-auto mb-4 z-10 bg-blue-950 bg-opacity-10 flex items-center justify-center rounded-full text-white text-xl relative">
              <div className="absolute top-0 left-0 -translate-x-3 -translate-y-3 w-20 h-20 rounded-full bg-transparent border-2 border-white border-dashed group-hover:animate-spin" />
              {service.icon}
            </div>
            <h4 className="text-lg font-bold mb-2 z-10">{service.title}</h4>
            <p className="text-sm text-gray-300 mb-10 line-clamp-2 z-10">
              {service.description}
            </p>
            <button className="bg-blue-500 hover:bg-white transition-all   hover:text-blue-500 cursor-pointer  text-white text-center px-2 py-2 text-lg ">
              <FaPlus fontWeight={100} />
            </button>
            <div className="flex w-full h-full  absolute top-0 left-0 -z-1">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-full flex-1 -translate-y-[100%] transition-all duration-300 group-hover:translate-y-0 bg-green-400 "
                    style={{ transitionDelay: `${hovered ? 0 : i * 70}ms` }}
                  />
                ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center mt-10">
        <Button
          text="More Services"
          href="/services"
          primarycolor="bg-blue-400"
          secondarycolor="bg-black"
        />
      </div>
    </section>
  );
};

export default HomeService;
