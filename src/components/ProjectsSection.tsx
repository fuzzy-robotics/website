import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const ProjectsSection = ({data}) => {
  const colorMap = {
    "done": 'bg-green-500',
    "wip": 'bg-blue-500',
    "ideation": 'bg-yellow-500'
  }

  const statusMapping = {
    "done": 'Done',
    "wip": 'WIP',
    "ideation": 'Ideation'
  }

  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-6 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6179f6]" />
            <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'Rubik' }}>
              Our Progress
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-black text-slate-900 mb-8"
            style={{ fontFamily: 'Montserrat' }}
          >
            Featured <span className="text-[#6179f6]">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#6179f6] rounded-full mx-auto mb-6"></div>
          <p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Rubik' }}
          >
            Transforming industries through innovative AI and robotics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {data.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 bg-white rounded-2xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <div className={`${colorMap[project.status]} text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span 
                      className="text-sm font-bold"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      {statusMapping[project.status]}
                    </span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 
                  className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#6179f6] transition-colors duration-300"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {project.name}
                </h3>
                <p 
                  className="text-slate-600 leading-relaxed mb-6"
                  style={{ fontFamily: 'Rubik' }}
                >
                  {project.description}
                </p>
                
                {/* Project details */}
                <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{project.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;