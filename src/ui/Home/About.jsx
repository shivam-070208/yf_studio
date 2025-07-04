import React from 'react';
import { FaPlug, FaShieldAlt } from 'react-icons/fa';
import Button from '../Button';
import { motion } from 'motion/react';

const HomeAboutSection = () => {
  return (
    <section className="py-12 px-4 bg-white w-full max-w-2xl md:max-w-5xl mx-auto relative">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 max-w-[500px] inline-block">
          <motion.div initial={{x:-200,rotate:180}} viewport={{once:true}} transition={{duration:0.5}} whileInView={{rotate:0,x:0,opacity:1}} className="rounded-xl overflow-hidden block">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="Technicians at work"
              className="w-full h-[390px] object-cover rounded-xl"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-4  text-center shadow-md">
              <p className="text-2xl font-bold">26+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1}} className="border-white rounded-lg w-36 h-36 border-[6px] translate-x-1/2 translate-y-1/2 z-10 absolute bottom-0 right-8 overflow-hidden">
            <img
              src="https://html.themexriver.com/industo/images/resource/about-2.jpg"
              alt="Control equipment"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <span className="inline-block text-lg pattern text-blue-600 px-3 py-1 rounded-full font-semibold mb-2">
            About Y.F Enterprises
          </span>
          <h2 className="text-3xl font-extrabold text-blue-900 leading-tight mb-4">
            Flameproof Electrical Safety <br /> You Can Rely On
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Y.F Enterprises delivers high-quality flameproof electrical solutions across India.
            From control panels and distribution boards to custom junction boxes — our products are 
            trusted in critical industries and backed by 24x7 support.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 group p-6 rounded-xl shadow-sm relative">
              <div className="absolute -top-5 left-5 bg-blue-600 text-white p-2 rounded-full shadow-md group-hover:rotate-y-180 transition-all duration-500">
                <FaPlug className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg mt-6 mb-2">Flameproof Equipment</h4>
              <p className="text-gray-600 text-sm">
                Full range of flameproof control stations, rotary switches, and push button panels.
              </p>
            </div>

            <div className="bg-gray-50 group p-6 rounded-xl shadow-sm relative">
              <div className="absolute -top-5 left-5 bg-green-500 text-white p-2 rounded-full shadow-md group-hover:rotate-y-180 transition-all duration-500">
                <FaShieldAlt className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-lg mt-6 mb-2">Reliable Safety & Support</h4>
              <p className="text-gray-600 text-sm">
                Engineered to meet IIA, IIB, IIC gas group standards — with nationwide service reach.
              </p>
            </div>
          </div>

          <Button
            text="Explore More"
            href="/services"
            primarycolor="bg-green-400"
            secondarycolor="bg-blue-900"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
