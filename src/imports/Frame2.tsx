import imgRectangle3 from "figma:asset/50a1f2b03f658d0799b4a6c872783456be43dd0d.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[941px] left-[78px] top-[52px] w-[684px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}