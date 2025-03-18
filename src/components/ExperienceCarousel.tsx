import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ExperienceImage {
  url: string;
  description: string;
}

interface ExperienceCarouselProps {
  images: ExperienceImage[];
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={4}
      className="rounded-xl overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center">
          <img 
            src={image.url} 
            alt={`Slide ${index}`} 
            className="w-full h-60 object-cover rounded-xl shadow-lg transition-transform duration-1600 hover:scale-105" 
          />
          <p className="mt-2 text-sm text-center text-gray-700">{image.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExperienceCarousel;
