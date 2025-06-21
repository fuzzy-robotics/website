import React from 'react';

interface TabButtonProps {
  index: number;  // Added index to the interface as it's used in the component
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  index,
  icon,
  title,
  description,
}) => {
  const isEven = index % 2;
  const border = isEven ? '#6179f6 solid 1px' : '#ff914d solid 1px'

  return (
    <div
      className="hover:shadow-lg group w-[33%] flex flex-row h-[100px] cursor-pointer transition-all duration-300 rounded-lg text-gray-900 bg-white/50"
      style={{border: "lightgrey solid 1px"}}
    >
      <div 
        className="w-[30%] p-4"
        style={{
          // This will make the SVG icon change color on hover
          color: 'inherit'
        }}
      >
        {icon}
      </div>
      <div className="text-left flex flex-col justify-center">
        <p 
          className='mb-[0px] font-[700] text-[#474444] pl-[10px] text-left' 
          style={{fontFamily: 'Montserrat', fontSize: '20px'}}
        >
          {title}
        </p>
        <p 
          className='mt-[3px] font-[400] text-[#474444] pl-[10px] text-left' 
          style={{fontFamily: 'Rubik', fontSize: '16px'}}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TabButton;