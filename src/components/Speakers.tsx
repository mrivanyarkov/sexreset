import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Sparkles, Users, BookOpen } from 'lucide-react';
import imgOlesya from "figma:asset/931330c9645f951e08ad3cde27e052a9b6f96484.png";
import imgIrina from "figma:asset/50a1f2b03f658d0799b4a6c872783456be43dd0d.png";

export function Speakers() {
  const speakers = [
    {
      name: 'Олеся',
      image: imgOlesya,
      title: 'Автор мастер-класса',
      subtitle: '«Женская грудь — центр силы и притяжения»',
      benefits: [
        'Королевскую осанку',
        'Лёгкость и расслабленность',
        'Усиление магнетизма',
        'Гармонизацию эмоций',
        'Увеличение жизненной энергии',
        'Чувство внутренней свободы'
      ],
      description: 'Деликатная, эстетичная и глубокая работа с телом в атмосфере роскоши.'
    },
    {
      name: 'Ирина Соловьева',
      image: imgIrina,
      title: 'Эксперт по телесному и эмоциональному оздоровлению',
      subtitle: '20 лет опыта',
      expertise: [
        'Практик Access Bars',
        'Эксперт по философии Ян Шэн',
        'Тета-исцеление и квантовые разборы',
        'Ведущая курсов «Сакральная Женственность», «Интуитивный интеллект»'
      ],
      description: 'Мама 5 детей, поэтесса. Глубина, мудрость и энергия.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Спикеры ретрита
          </h2>
        </div>

        <div className="space-y-16">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-rose-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative h-96 md:h-auto">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/80"></div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <h3 className="text-3xl font-serif text-white mb-2">{speaker.name}</h3>
                  <p className="text-rose-300 text-lg mb-2">{speaker.title}</p>
                  <p className="text-slate-400 mb-6 italic">{speaker.subtitle}</p>

                  {speaker.benefits && (
                    <>
                      <p className="text-slate-300 mb-4">Этот мастер-класс подарит тебе:</p>
                      <div className="space-y-2 mb-6">
                        {speaker.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-slate-200">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {speaker.expertise && (
                    <div className="space-y-2 mb-6">
                      {speaker.expertise.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-slate-200">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-slate-300 italic border-l-4 border-rose-500/50 pl-4">
                    {speaker.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}