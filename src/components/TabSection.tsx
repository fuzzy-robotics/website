
import { useState } from 'react';
import TabButton from './TabButton';
import { ThreeDMarquee } from './ui/grid-motion';

const TabSection = ({data}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  // "public/marquee-images/1fdcf8b9-2232-48c8-a7d7-77bf83d0f3ce.png",
  // "public/marquee-images/fcf553ec-33f6-4473-842a-f04d96bffdf8.png",
  // "public/marquee-images/f7612979-d024-45c1-98ae-6262a5d5f443.png",
  // "public/marquee-images/cd877079-1f36-486a-8b7b-d62d26d3d5c3 (1).png",
  // "public/marquee-images/cb1d89c1-dad8-4e6e-b092-c8caa896ed21 (1).png",
  // "public/marquee-images/9dbed969-39c4-46f4-ba39-3ff9bcd68222.png",
  // "public/marquee-images/6841cb7c-0e32-4c86-b640-5d45df74d5f1 (1).png",
  // "public/marquee-images/299508e6-b203-4acb-bd67-54885f291b4a.png",

  const images = data['images'].map((imgPath: string) =>
    imgPath.replace(/^public\//, './')
  );

  const tabs = [
    {
      title: 'Ideate',
      description: 'Research and design intelligent models.',
      icon: <img style={{filter: "brightness(0.8)"}} src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d2158d8a6bd9a74b2e8486_Nodes-ManyHeads.svg" className='h-[100%] w-[100%]' alt="AI Learning" />,
      content: {
        title: 'Machine Learning Research',
        description: 'Our research focuses on developing advanced neural architectures that can learn from limited data and generalize across diverse environments. We explore reinforcement learning, computer vision, and natural language processing to create intelligent systems.',
      }
    },
    {
      title: 'Build',
      description: 'Apply AI to real-world robotic systems.',
      icon: <img style={{filter: "brightness(0.8)"}} src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682def086450e428cc74ef6e_Hands-Puzzle.svg" className='h-[100%] w-[100%]' alt="Robotics Building" />,
      content: {
        title: 'Robotic System Integration',
        description: 'We integrate cutting-edge AI models into physical robotic platforms, creating systems that can perceive, reason, and act in complex real-world environments. Our robots learn from interaction and adapt to new scenarios.',
      }
    },
    {
      title: 'Control',
      description: 'Use our dashboard to monitor and refine behavior.',
      icon: <img style={{filter: "brightness(0.8)"}} src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d2158c590b5c5fb0248eb5_Hands-Tree.svg" className='h-[100%] w-[100%]' alt="Control Systems" />,
      content: {
        title: 'Intelligent Control Systems',
        description: 'Our advanced control dashboard provides real-time monitoring and fine-tuning capabilities for robotic behavior. Machine learning algorithms continuously optimize performance based on environmental feedback and task requirements.',
      }
    },
  ];

  return (
    <section className="pb-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#6179f6]/50 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#ff914d]/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl font-black text-[#2c3e50] mb-8"
            style={{ fontFamily: 'Montserrat' }}
          >
            Our <span className="bg-gradient-to-r from-[#6179f6] to-[#ff914d] bg-clip-text text-transparent">Process</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#6179f6] to-[#ff914d] rounded-full mx-auto mb-6"></div>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Rubik' }}
          >
            From theoretical breakthroughs to real-world implementation
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-row justify-evenly mb-8 gap-4">
              {tabs.map((tab, index) => (
                <TabButton
                  key={index}
                  index={index}
                  icon={tab.icon}
                  title={tab.title}
                  description={tab.description}
                />
              ))}
            </div>
            
            <div className="border p-3 bg-white rounded-2xl shadow-lg">
            <ThreeDMarquee images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
