import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Sparkles, Users, BookOpen, Check, Camera } from 'lucide-react';
import imgOlesya from "figma:asset/931330c9645f951e08ad3cde27e052a9b6f96484.png";
import imgIrina from "figma:asset/50a1f2b03f658d0799b4a6c872783456be43dd0d.png";
import imgElena from "figma:asset/d2c7d3555acccf46357335e5a959f4f4ad15bab9.png";
import imgSvetlana from "figma:asset/082d3e85244e534c67995d11881ce675596bbf17.png";
import imgOlesyaDobro from "figma:asset/536e6075482a9775012a5cc2ecf42d0a7718ebc0.png";

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
    },
    {
      name: 'Калинина Елена',
      image: imgElena,
      title: 'Эксперт по эстетике и стилю',
      subtitle: 'Мастер-классы по декорированию и макияжу',
      masterclasses: [
        {
          title: 'Мастер-класс по декорированию романтического стола и правила этикета',
          points: [
            'Оформим стол свечами, предметами декора которые возбудят к пикантному общению',
            'Научимся красиво пользоваться предметами сервировки'
          ]
        },
        {
          title: 'Мастер-класс по макияжу',
          points: [
            'Практическое занятие где мы создадим макияж для свидания'
          ]
        }
      ],
      description: 'Создаём атмосферу элегантности и красоты.'
    },
    {
      name: 'Светлана Яркая',
      image: imgSvetlana,
      title: 'Дипломированный, практикующий семейный и кризисный психолог, сексолог',
      subtitle: 'Крутая, психологиня-богиня!!',
      services: [
        'Помогаю преодолеть кризисы в отношениях и в личной жизни',
        'Раскрываю и усиливаю вашу врождённую сексуальность при помощи техник, sexмак карт, гипноза и др',
        'Обучаю девушек секретным интимным техникам для мужчин',
        'Провожу практику рефлекс оргазама',
        'Обучаю девушек интимному самомассажу',
        'Эксперт по половому просвещению, помогаю начать разговор с детьми "об этом"'
      ],
      results: [
        'Новые ощущения себя в отношениях и выход на уровень выше',
        'Осознание, что кризисы, это точки роста, которые вместе успешно преодолеем',
        'Принятие своего тела и новые грани сексуальности, и как следствие удовлетворяющей вас сексуальной жизни',
        'Разблокировку вашего либидо, подростковых травм о внешности и юности',
        'Мягкий переход в зрелую сексуальность и нахождение ресурса в этом состоянии'
      ],
      description: 'Профессионал с душой и огромным опытом в сфере интимной психологии.'
    },
    {
      name: 'Олеся Добро',
      image: imgOlesyaDobro,
      title: 'Фотограф, Сочи',
      subtitle: '«Каждый кадр - это шаг к осознанию своей внутренней красоты»',
      experience: [
        'Более 7 лет в фотографии',
        'Автор Будуарных и Ню съёмок, которые помогают женщинам почувствовать свою сексуальность, уверенность и лёгкость',
        'Моя цель - показать природную притягательность каждой женщины и подарить новые ощущения свободы и любви к себе'
      ],
      description: 'Эстетика, чувственность и магия каждого кадра для вашей красоты.'
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

                  {speaker.masterclasses && (
                    <div className="space-y-4 mb-6">
                      {speaker.masterclasses.map((masterclass, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-slate-200 font-medium">{masterclass.title}</p>
                          </div>
                          <ul className="ml-8 space-y-1">
                            {masterclass.points.map((point, j) => (
                              <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                                <span className="text-rose-400 mt-1">—</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {speaker.services && (
                    <div className="space-y-2 mb-6">
                      {speaker.services.map((service, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                          <p className="text-slate-200">{service}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {speaker.results && (
                    <div className="space-y-2 mb-6">
                      <p className="text-slate-300 mb-4 font-medium">Взаимодействие со мной, даёт вам:</p>
                      <div className="space-y-2 mb-6">
                        {speaker.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                            <p className="text-slate-200">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {speaker.experience && (
                    <div className="space-y-2 mb-6">
                      {speaker.experience.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Camera className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
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