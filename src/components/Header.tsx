import logoImg from "figma:asset/b198e49ff25fa00ceeac05bb04a1e5c19f2f6b3d.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Интимная Перезагрузка" className="h-10 w-10 object-cover rounded-full" />
          <span className="text-xl text-rose-300">Интимная Перезагрузка</span>
        </div>
        <a 
          href="#booking" 
          className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
        >
          Забронировать место
        </a>
      </div>
    </header>
  );
}