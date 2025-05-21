function Logo({ scale = 1 }) {
    const baseSizeTop = 53;
    const baseSizeBottom = 50;

    return (
    <div style={{ fontFamily: 'Rubik' }} className="text-left font-[900] tracking-[3px] leading-[0.8]">
        <div className="flex">
            <div className="text-[#6179f6]" style={{ fontSize: `${baseSizeTop * scale}px` }}>FU</div>
            <div className="text-[#474444]" style={{ fontSize: `${baseSizeTop * scale}px` }}>ZZY</div>
        </div>
        <div className="flex">
            <div className="text-[#ff914d]" style={{ fontSize: `${baseSizeBottom * scale}px` }}>RO</div>
            <div className="text-[#474444]" style={{ fontSize: `${baseSizeBottom * scale}px` }}>BOTICS</div>
        </div>
    </div>
    );
}

export default Logo;
