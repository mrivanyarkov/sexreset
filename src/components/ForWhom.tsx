export function ForWhom() {
  const features = [
    'хочет вернуть вкус к близости и телесности',
    'чувствует, что её либидо «спит»',
    'устала быть сильной и хочет снова стать чувственной',
    'хочет раскрыть природный магнетизм',
    'ценит премиальный формат и камерность'
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">
            Для кого этот ретрит
          </h2>
          <p className="text-xl text-slate-300">Для женщины, которая:</p>
        </div>

        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-rose-500/30 transition-all duration-300"
            >
              <div className="text-2xl text-rose-400 flex-shrink-0">—</div>
              <p className="text-lg text-slate-200">{feature}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-xl text-rose-300 font-serif">Это не про пошлость.</p>
          <p className="text-xl text-slate-300">
            Это про зрелую женственность.<br/>
            Про глубину. Про энергию. Про себя.
          </p>
        </div>
      </div>
    </section>
  );
}
