import { Sparkles } from 'lucide-react';

export function Benefits() {
  const benefits = [
    'Прокачают сексуальный интеллект',
    'Пробудят желание и либидо',
    'Запустят в теле возбуждающую волну',
    'Начнут получать максимум удовольствия от близости',
    'Усилят интимные отношения',
    'Раскроют природный магнетизм',
    'Обретут уверенность и внутреннюю ценность'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Что ты получишь
          </h2>
          <p className="text-xl text-slate-300">
            Участницы перезагрузки не просто узнают что-то новое. Они:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-rose-500/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-6 h-6 text-rose-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-slate-200">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
