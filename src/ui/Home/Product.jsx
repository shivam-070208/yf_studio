import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Button from "../Button";

const products = [
  ...Array(7)
    .fill("")
    .map(() => {
      return {
        title: "Flamorer",
        image:
          "https://html.themexriver.com/industo/images/resource/news-12.jpg",
          price:900
      };
    }),
];

const ProductCarousel = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-600 pattern mt-6">
          Our Products & Services
        </h2>
        <Swiper
          className="cursor-grab"
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
          
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="   text-center  transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 shadow-lg shadow-[#8f8d8d]    mx-auto rounded-full translate-y-1/2 h-40 object-fill"
                />
                <div className="p-4  shadow-lg shadow-[#8f8d8d] mb-8 rounded">
                  <h4 className=" text-lg mt-20 mx-auto w-75 font-semibold text-[#1c13c6]">
                    {item.title}
                  </h4>
                  <hr className="text-neutral-400" />
                  <p className="mt-2 text-lg px-4 text-neutral-700 w-full flex justify-between flex-wrap font-semibold">
                  $ {item.price}
                <span class="text-yellow-400 text-xl">★★★★★</span>
                  </p>
                  <Button text={"Order Now"} primarycolor={"bg-orange-400 mt-10"} secondarycolor={"bg-blue-700"} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
