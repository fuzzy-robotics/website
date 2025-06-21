
import { Button } from '@/components/ui/button';
import LogoSmall from './LogoSmall';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
// import ModelViewer from "./RoboticHand.jsx"

const HeroSection = ({data}) => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Enhanced background with dynamic gradients */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tl"></div>
      
      {/* More sophisticated geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-40 h-40 border-2 border-[#6179f6]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-28 h-28 border border-[#ff914d]/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#6179f6]/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#ff914d]/50 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-[#6179f6]/20 to-transparent"></div>
        <div className="absolute bottom-1/2 right-1/5 w-20 h-1 bg-gradient-to-r from-[#ff914d]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-10">
            {/* Logo with enhanced spacing */}
            <div className="animate-fade-in">
              {/* <LogoSmall scale={0.7} /> */}
            </div>

            {/* Main headline with better typography */}
            <div className="space-y-8">
              <h1 
                className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-[#2c3e50] animate-fade-in"
                style={{ fontFamily: 'Montserrat' }}
              >
                Building
                {' '}<span className="text-[#6179f6]">
                  Intelligent
                </span>{' '}
                Machines
              </h1>
              
              <div className="flex items-center gap-2">
                <div style={{background: "linear-gradient(to right, #6179f6, #6179f6)"}} className="w-7 h-1.5 rounded-full"></div>
                <div style={{background: "linear-gradient(to right, #ff914d, #ff914d)"}} className="w-7 h-1.5 rounded-full"></div>
                <Sparkles className="w-10 h-6 text-[#ff914d] animate-bounce delay-300" />
              </div>
            </div>

            {/* Enhanced description */}
            <div className="space-y-6">
              <p 
                className="text-2xl text-gray-700 leading-relaxed max-w-2xl animate-fade-in delay-300"
                style={{ fontFamily: 'Rubik' }}
              >
                We develop cutting-edge AI systems that enable robots to{' '}
                <span className="text-[#6179f6] font-semibold">learn</span>,{' '}
                <span className="text-[#ff914d] font-semibold">adapt</span>, and{' '}
                <span className="text-[#6179f6] font-semibold">evolve</span> in real-world environments.
              </p>
            </div>

            {/* Enhanced CTA */}
            <div className="animate-fade-in delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#6179f6] to-[#4f67d9] hover:from-[#4f67d9] hover:to-[#6179f6] text-white px-10 py-6 text-xl font-[500] rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group border-0"
                style={{ fontFamily: 'Montserrat' }}
              >
                {/* <Brain className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" /> */}
                Explore Our Research
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            {/* Redesigned stats with better visual hierarchy */}
            <div className="grid grid-cols-3 gap-12 pt-12 animate-fade-in delay-500">
              <div className="text-center group">
                <div className="relative">
                  <div className="text-5xl font-black text-[#6179f6] group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Montserrat' }}>{data['active-projects']}+</div>
                  <Zap className="absolute -top-2 -right-2 w-4 h-4 text-[#ff914d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-gray-600 mt-2 uppercase tracking-wider" style={{ fontFamily: 'Rubik' }}>Active Projects</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-5xl font-black text-[#ff914d] group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Montserrat' }}>{data['publications']}+</div>
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-[#6179f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-gray-600 mt-2 uppercase tracking-wider" style={{ fontFamily: 'Rubik' }}>Publications</div>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <div className="text-5xl font-black text-[#6179f6] group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: 'Montserrat' }}>{data['researchers']}+</div>
                  <Brain className="absolute -top-2 -right-2 w-4 h-4 text-[#ff914d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-sm font-medium text-gray-600 mt-2 uppercase tracking-wider" style={{ fontFamily: 'Rubik' }}>Researchers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[600px] animate-fade-in delay-600">
              <img 
                  src="./lovable-uploads/ChatGPT Image Jun 8, 2025, 01_06_36 AM.png" 
                  alt="Advanced robotics technology"
                  className='object-cover h-[600px] rounded-2xl opacity-[0.9]'
              />
              <div className="z-[-1] absolute top-1/4 -left-12 w-24 h-24 bg-gradient-to-br from-[#6179f6]/10 to-[#a3b2ff] rounded-full blur-2xl animate-pulse"></div>
              <div className="z-[-1] absolute bottom-1/4 -right-12 w-32 h-32 bg-gradient-to-br from-[#ff914d]/15 to-[#fcb78b] rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
