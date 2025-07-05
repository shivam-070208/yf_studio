import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaPlus } from 'react-icons/fa';
import Button from '../Button';
import { Autoplay } from 'swiper/modules';

const images = [
  { url: 'https://html.themexriver.com/industo/images/gallery/2.jpg', alt: 'Project 1' },
   { url: 'https://html.themexriver.com/industo/images/gallery/2.jpg', alt: 'Project 1' },
  { url: 'https://html.themexriver.com/industo/images/gallery/2.jpg', alt: 'Project 1' }
];

const Casestudy = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="w-screen px-4 mt-8 -translate-x-5  pb-8" style={{
    backgroundImage: 'linear-gradient(to bottom, white 50%, #000254 50%)',
  }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-xl  ">
    
        <div className="p-6 flex flex-col gap-4">
            <div>
   <span className="inline-block text-lg font-semibold text-blue-600 pattern px-3 py-1 rounded-full w-fit mb-4">
            Y.F Enterprises Case Study
          </span>
          <h2 className="text-3xl font-extrabold text-blue-950 mb-4 ml-6">
          Recent Industry<br/> Project
          </h2>
            </div>
       
    <div className='pl-4 md:pt-40 '>
        <h2 className='md:text-white font-semibold  text-3xl text-blue-800 font-sans mt-4'>Lorem ipsum dolor sit.</h2>
        <p className='text-sm md:text-white text-blue-600 font-semibold  line-clamp-5 mt-5 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto totam dolor molestiae dicta, veritatis mollitia quidem deserunt, aliquam possimus modi esse numquam autem? At maiores veritatis excepturi quos eligendi deserunt cupiditate, cumque illum quaerat, sapiente dolorem, commodi earum placeat.</p>
        <Button text={"Case Detail"} primarycolor={"bg-green-400"}  secondarycolor={"bg-black"} />
    </div>
        </div>

        
        <div className=" h-full relative transform-3d">
          <Swiper
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
          
            autoplay={{
          
            disableOnInteraction: false,
          }}
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
            className="w-full h-full transform-3d"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img.url}
                  alt={img.alt} 
                    onMouseDown={(e)=>console.log(e)
                    }
                  className="w-full h-full cursor-grab  object-cover"
                />
              </SwiperSlide>
            ))}
            
          </Swiper>

          {/* Dots */}
          <div className="relative top-4  left-1/2  flex gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all rounded-full ${
                  i === active ? 'w-8 h-2 bg-green-400' : 'w-4 h-2 bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
