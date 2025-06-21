
interface LogoSmallProps {
  scale?: number;
  showHoverEffect?: boolean;
}

function LogoSmall({ scale = 1, showHoverEffect = false }: LogoSmallProps) {
  const baseSizeTop = 53;
  const baseSizeBottom = 50;

  return (
    <div 
      style={{ fontFamily: 'Rubik' }} 
      className={`text-left font-[900] tracking-[3px] leading-[0.8] flex flex-col justify-center ${showHoverEffect ? 'group cursor-pointer' : ''}`}
    >
      <div className="flex">
        <div className="text-[#6179f6]" style={{ fontSize: `${baseSizeTop * scale}px` }}>
          FU
          {showHoverEffect && (
            <span className="text-[#2c3e50] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-x-2 group-hover:translate-x-0">
              ZZY
            </span>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="text-[#ff914d]" style={{ fontSize: `${baseSizeBottom * scale}px` }}>
          RO
          {showHoverEffect && (
            <span className="text-[#2c3e50] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100 transform translate-x-2 group-hover:translate-x-0">
              BOTICS
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LogoSmall;
