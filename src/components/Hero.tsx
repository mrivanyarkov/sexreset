import { ImageWithFallback } from './figma/ImageWithFallback';
import imgPenthouse from "figma:asset/b04e7685f583e27f9442ec8e174a3e8c5da57dc8.png";
import logoImg from "figma:asset/b198e49ff25fa00ceeac05bb04a1e5c19f2f6b3d.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imgPenthouse}
          alt="Роскошный пентхаус"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img src={logoImg} alt="Интимная Перезагрузка" className="h-24 w-24 object-cover rounded-full shadow-2xl shadow-rose-500/50 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 bg-clip-text text-transparent">
            Интимная Перезагрузка
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            Закрытый женский ретрит в роскошном пентхаусе в Сочи
          </p>
          <div className="inline-block px-8 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-rose-500/30 mb-8">
            <p className="text-2xl text-rose-300">3 ночи / 4 дня глубокой трансформации</p>
            <p className="text-3xl font-serif text-white mt-2">6–9 марта</p>
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Не массовое мероприятие.<br/>
            Изысканное пространство для женщин, которые выбирают комфорт, красоту и приватность.
          </p>
          <a 
            href="#booking" 
            className="inline-block px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/50"
          >
            Забронировать место
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-rose-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}