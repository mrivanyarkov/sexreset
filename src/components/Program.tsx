import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Camera, Ship, Utensils, Sparkles } from 'lucide-react';
import imgBoudoir1 from "figma:asset/770b8fbc52ec8556e20fe9500d4fbc2d682f5fa0.png";
import imgBoudoir2 from "figma:asset/fb489f77da332406e5195d0ee8ee675484be9e16.png";
import imgBoudoir3 from "figma:asset/33a6d54d4d25931ae40e77c81d0f857d5d332fcf.png";

export function Program() {
  const practices = [
    'Расслабляющий индивидуальный массаж',
    'Даосская сексуальная зарядка',
    'Распаковка сексуальности',
    'Блоки и страхи во время секса',
    'Телесная практика пробуждения эрогенных зон',
    'Глубокая работа через МАК с запросом сексуальности',
    'Access Bars',
    'Модуль «Богиня Любви»',
    '▫ Самомассаж груди',
    '▫ Раскрепощающая практика с розами',
    'Кинотерапия: разбор чувственных фильмов',
    'Макияж «для себя» под руководством стилиста',
    'Релакс и восстановление на инновационных аппаратах'
  ];

  const highlights = [
    {
      icon: Camera,
      text: 'Будуарная фотосессия с топовым ню-фотографом',
      images: [imgBoudoir1, imgBoudoir2, imgBoudoir3],
      isCollage: true
    },
    {
      icon: Ship,
      text: '2-часовая прогулка на яхте 8 марта',
      image: 'https://images.unsplash.com/photo-1648997934392-7213a9ce50b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHNlYSUyMHNhaWxpbmd8ZW58MXx8fHwxNzcwODA1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      icon: Utensils,
      text: 'Праздничный ужин при свечах',
      image: 'https://images.unsplash.com/photo-1767050179711-a8401bd02be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXMlMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzcwODA1ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Программа ретрита
          </h2>
          <p className="text-xl text-slate-300">
            Насыщенный чувственный интенсив в атмосфере роскоши.
          </p>
        </div>

        {/* Practices */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif text-rose-300 mb-8 flex items-center gap-3">
            <Heart className="w-7 h-7" />
            Интимные и телесные практики
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {practices.map((practice, index) => (
              <div 
                key={index}
                className={`p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 ${
                  practice.startsWith('▫') ? 'ml-6' : ''
                }`}
              >
                <p className="text-slate-200">{practice}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50">
            <p className="text-slate-200">Мастер-класс по сервировке романтического стола</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-rose-500/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto min-h-[400px]">
                  {highlight.isCollage ? (
                    <div className="grid grid-cols-2 gap-2 h-full p-2">
                      <img
                        src={highlight.images[0]}
                        alt={highlight.text}
                        className="w-full h-full object-cover rounded-lg col-span-2"
                      />
                      <img
                        src={highlight.images[1]}
                        alt={highlight.text}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <img
                        src={highlight.images[2]}
                        alt={highlight.text}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={highlight.image}
                      alt={highlight.text}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>
                </div>
                <div className="p-8 flex items-center">
                  <div className="flex items-center gap-4">
                    <highlight.icon className="w-12 h-12 text-rose-400 flex-shrink-0" />
                    <p className="text-xl text-white">{highlight.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-lg text-slate-300 italic">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <p>И, конечно, душевные разговоры с видом на море.</p>
          </div>
        </div>
      </div>
    </section>
  );
}