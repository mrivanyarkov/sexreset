import { Send } from 'lucide-react';
import logoImg from "figma:asset/b198e49ff25fa00ceeac05bb04a1e5c19f2f6b3d.png";

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Готова к перерождению?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Напиши и забронируй своё место
          </p>
          <a 
            href="https://t.me/sexolog58"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-lg rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-rose-500/50"
          >
            <Send className="w-5 h-5" />
            @sexolog58
          </a>
        </div>

        <div className="text-center pt-8 border-t border-slate-800/50">
          <div className="mb-4 flex justify-center">
            <img src={logoImg} alt="Интимная Перезагрузка" className="h-16 w-16 object-cover rounded-full shadow-lg shadow-rose-500/30" />
          </div>
          <p className="text-slate-400 mb-2">Интимная Перезагрузка</p>
          <p className="text-slate-500 text-sm">6–9 марта | Сочи</p>
        </div>
      </div>
    </footer>
  );
}