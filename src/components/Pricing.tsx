import { Check, Plane, CreditCard, Clock, Calendar } from 'lucide-react';

export function Pricing() {
  const packages = [
    {
      name: 'С проживанием в пентхаусе',
      price: '38 000 ₽',
      featured: true,
      includes: [
        'Проживание 3 ночи',
        '4-разовое фитнес-питание',
        'Все 8 практик',
        'Курс макияжа',
        'Будуарная фотосессия',
        'Прогулка на яхте',
        'Ужин при свечах'
      ]
    },
    {
      name: 'Без проживания',
      price: '28 000 ₽',
      featured: false,
      includes: [
        'Питание',
        'Все практики',
        'Макияж',
        'Фотосессия',
        'Яхта',
        'Ужин'
      ]
    }
  ];

  const details = [
    { icon: Calendar, text: 'Заезд: 6 марта в 12:00' },
    { icon: Clock, text: 'Выезд: 9 марта в 12:00' },
    { icon: Plane, text: 'Перелёт оплачивается отдельно' },
    { icon: CreditCard, text: 'Бронь по предоплате 30%' }
  ];

  return (
    <section id="booking" className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Стоимость участия
          </h2>
          <p className="text-xl text-rose-300">
            ‼ Для первых 2 участниц — специальная стоимость
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-3xl p-8 ${
                pkg.featured 
                  ? 'bg-gradient-to-br from-rose-500/20 to-pink-600/20 border-2 border-rose-500/50' 
                  : 'bg-slate-800/50 border border-slate-700/50'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 px-4 py-1 bg-rose-500 text-white text-sm rounded-full">
                  Популярный
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-5xl mb-2">💎</div>
                <h3 className="text-2xl font-serif text-white mb-4">{pkg.name}</h3>
                <div className="text-5xl font-serif text-white mb-2">{pkg.price}</div>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-slate-300 mb-4">Включено:</p>
                {pkg.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <a 
                href="https://t.me/sexolog58"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 text-center rounded-full transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/50'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                Забронировать
              </a>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {details.map((detail, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50"
            >
              <detail.icon className="w-6 h-6 text-rose-400 flex-shrink-0" />
              <p className="text-slate-200">{detail.text}</p>
            </div>
          ))}
        </div>

        {/* Limited Spots */}
        <div className="text-center p-8 bg-gradient-to-r from-rose-500/10 to-pink-600/10 rounded-3xl border border-rose-500/30">
          <h3 className="text-2xl font-serif text-white mb-4">
            Количество мест строго ограничено
          </h3>
          <p className="text-slate-300 mb-2">Это закрытый формат.</p>
          <p className="text-slate-300 mb-2">Без случайных людей. Без толпы.</p>
          <p className="text-rose-300 text-lg">Только женщины, готовые к перезагрузке.</p>
        </div>
      </div>
    </section>
  );
}
