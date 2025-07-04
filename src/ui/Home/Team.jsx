import React from 'react';
import { FaPlus, FaFacebookF, FaInstagram, FaDribbble } from 'react-icons/fa';
import Button from '../Button';

const teamMembers = [
  {
    name: 'Anand Verma',
    role: 'Flameproof Product Engineer',
    image: 'https://html.themexriver.com/industo/images/resource/team-17.jpg', // Replace with actual image path
  },
  {
    name: 'Pooja Shah',
    role: 'Custom Enclosure Designer',
    image: 'https://html.themexriver.com/industo/images/resource/team-17.jpg',
  },
  {
    name: 'Rahul Singh',
    role: 'Panel & Junction Specialist',
    image: 'https://html.themexriver.com/industo/images/resource/team-17.jpg',
  },
  {
    name: 'Neha Patel',
    role: 'Instrumentation Panel Engineer',
    image: 'https://html.themexriver.com/industo/images/resource/team-17.jpg',
  
  },
];

const HomeTeam = () => {
  return (
    <section className="py-20  px-2 w-full max-w-6xl mx-auto bg-white text-center relative">
      <div className="mb-10">
        <h4 className="text-lg font-bold text-blue-500 uppercase pattern ">Our Experts</h4>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
          Our Industrial Expert Team
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Skilled in flameproof design, energy-efficient control panels, and industry-certified manufacturing — our team delivers reliability and precision for every client.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer  shadow-lg overflow-hidden relative group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-70 object-fill"
            />
          {/* social */}
              <div className="absolute top-4 bg-blue-600 rounded-l-md right-0 space-y-2 px-2 py-2 opacity-0 group-hover:opacity-100 translate-x-[100%] group-hover:translate-x-0 transition duration-300">
                <button className="bg-blue-500 cursor-pointer text-white w-8 h-8 flex items-center justify-center rounded-full shadow">
                  <FaFacebookF />
                </button>
                <button className="bg-blue-500 cursor-pointer text-white w-8 h-8 flex items-center justify-center rounded-full shadow">
                  <FaInstagram />
                </button>
                <button className="bg-blue-500 cursor-pointer text-white w-8 h-8 flex items-center justify-center rounded-full shadow">
                  <FaDribbble />
                </button>
              </div>
          
            <div className="p-5 text-left">
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <div className='flex justify-between items-center'>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2 w-39">{member.role}</p>
              <div className="mt-4 bg-blue-500 group-hover:bg-green-500 text-white px-4 py-3 text-sm flex items-center gap-1">
                <FaPlus />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
       <Button text={'More Members'} primarycolor={'bg-blue-500'} secondarycolor={"bg-green-700"} />
      </div>
    </section>
  );
};

export default HomeTeam;
