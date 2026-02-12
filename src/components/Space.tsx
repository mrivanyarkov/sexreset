import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Building2,
  Armchair,
  Mountain,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import imgPenthouse1 from "figma:asset/b04e7685f583e27f9442ec8e174a3e8c5da57dc8.png";
import imgPenthouse2 from "figma:asset/efdeff4a6d9cc6d699e50dc3d726a38890dc324e.png";
import imgPenthouse3 from "figma:asset/685f29d7e16d1c96863c4f19b40c79c53de185c8.png";
import imgPenthouse4 from "figma:asset/841161e52a2d467e926a3f3b477fcc323db9999c.png";
import imgPenthouse9 from "figma:asset/f69a4ffe4b62f83a936214fa639befca8a3a73f8.png";
import imgPenthouse10 from "figma:asset/09a3b7605de72724eab5686d5f7e306adda1ef1e.png";
import imgPenthouse11 from "figma:asset/4a9d9e11d4d8588b4dea2a0312191749f04ddeaf.png";
import imgPenthouse12 from "figma:asset/32374cd6afc9d8be2d550a3a66538a24e3d68a69.png";
import imgPenthouse13 from "figma:asset/2f58cf308429dde9ebce3237cf9c2c9825ec39e2.png";
import imgPenthouse14 from "figma:asset/409e8976a80a39d303ca3f9a37fb0131a49674d0.png";
import imgPenthouse15 from "figma:asset/016689268c1edc6dfd4a0244e4793cac26587075.png";
import imgPenthouse16 from "figma:asset/21c1843e27ceef92be5222f029f73c24733e2b41.png";

export function Space() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    { icon: Armchair, text: "Просторная гостиная для практик" },
    { icon: Building2, text: "Эстетичные спальни" },
    { icon: Mountain, text: "Терраса" },
    { icon: Utensils, text: "4-разовое фитнес-питание" },
  ];

  const images = [
    {
      url: imgPenthouse16,
      alt: "Просторная терраса",
    },
    {
      url: imgPenthouse10,
      alt: "Элегантная гостиная",
    },
    {
      url: imgPenthouse15,
      alt: "Стильная гостиная зона",
    },
    {
      url: imgPenthouse11,
      alt: "Дизайнерская спальня",
    },
    {
      url: imgPenthouse14,
      alt: "Современная кухня",
    },
    {
      url: imgPenthouse9,
      alt: "Роскошный интерьер с видом на море",
    },
    {
      url: imgPenthouse2,
      alt: "Панорамные окна с видом на море",
    },
    {
      url: imgPenthouse1,
      alt: "Панорамный вид пентхауса",
    },
    {
      url: imgPenthouse12,
      alt: "Бассейн на террасе",
    },
    {
      url: imgPenthouse4,
      alt: "Бассейн с видом на город",
    },
    {
      url: imgPenthouse13,
      alt: "Вид на горы и море",
    },
    {
      url: imgPenthouse3,
      alt: "Роскошный интерьер пентхауса",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Пространство
          </h2>
          <p className="text-2xl text-rose-300 mb-4">
            Роскошный пентхаус на 18 этаже с панорамным видом на
            море
          </p>
        </div>

        {/* Carousel Gallery */}
        <div className="mb-16 relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="min-w-full">
                  <div className="relative h-[500px] md:h-[600px]">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-rose-500/80 hover:bg-rose-500 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-rose-500/80 hover:bg-rose-500 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/60 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-rose-500 w-8"
                    : "bg-rose-300/50 hover:bg-rose-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
            >
              <feature.icon className="w-8 h-8 text-rose-400 flex-shrink-0" />
              <p className="text-lg text-slate-200">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 text-center">
          <p className="text-slate-300 mb-2">
            Атмосфера приватности
          </p>
          <p className="text-xl text-white font-serif mb-4">
            Здесь всё уже продумано за тебя.
          </p>
          <p className="text-rose-300 text-lg">
            Тебе остаётся только расслабиться.
          </p>
        </div>
      </div>
    </section>
  );
}