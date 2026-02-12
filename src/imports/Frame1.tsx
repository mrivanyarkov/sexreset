import img1 from "figma:asset/931330c9645f951e08ad3cde27e052a9b6f96484.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[499px] left-[101px] top-[325px] w-[333px]" data-name="ОЛЕСЯ 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] left-[143px] not-italic text-[12px] text-black top-[176px]">ФОТО ОЛЕСИ</p>
    </div>
  );
}