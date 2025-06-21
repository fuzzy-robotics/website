import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogsSection = ({data}) => {
  // const data = [
  //   {
  //     title: 'The Future of Human-Robot Collaboration',
  //     excerpt: 'Exploring how AI-powered robots are transforming workplace dynamics and creating new opportunities for human-machine partnerships.',
  //     image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  //     author: 'Dr. Sarah Chen',
  //     date: 'December 15, 2024',
  //     readTime: '8 min read',
  //     category: 'Research',
  //     categoryColor: 'bg-blue-500'
  //   },
  //   {
  //     title: 'Machine Learning Breakthroughs in Robotics',
  //     excerpt: 'Latest advances in deep learning algorithms that are revolutionizing robotic perception and decision-making capabilities.',
  //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  //     author: 'Prof. Michael Rodriguez',
  //     date: 'December 12, 2024',
  //     readTime: '12 min read',
  //     category: 'Technology',
  //     categoryColor: 'bg-green-500'
  //   },
  //   {
  //     title: 'Ethical Considerations in AI Development',
  //     excerpt: 'Addressing the moral implications and responsible practices needed as artificial intelligence becomes more integrated into society.',
  //     image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  //     author: 'Dr. Emily Watson',
  //     date: 'December 10, 2024',
  //     readTime: '6 min read',
  //     category: 'Ethics',
  //     categoryColor: 'bg-purple-500'
  //   }
  // ];

  return (
    <section className="pb-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-6 py-2 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-[#ff914d] rounded-full"></div>
            <span className="text-sm font-medium text-slate-700" style={{ fontFamily: 'Rubik' }}>
              Our Work
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-black text-slate-900 mb-8"
            style={{ fontFamily: 'Montserrat' }}
          >
            Our <span className="text-[#ff914d]">Blogs</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#ff914d] rounded-full mx-auto mb-6"></div>
          <p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Rubik' }}
          >
            Insights, discoveries, and thought leadership in AI and robotics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {data.map((blog, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 bg-white rounded-2xl overflow-hidden"
              onClick={()=>{console.log(blog.url)}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  {/* <div className={`${blog.categoryColor} text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg`}>
                    <BookOpen className="w-3 h-3" />
                    <span 
                      className="text-sm font-bold"
                      style={{ fontFamily: 'Montserrat' }}
                    >
                      {blog.category}
                    </span>
                  </div> */}
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 
                  className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#ff914d] transition-colors duration-300 line-clamp-2"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {blog.name}
                </h3>
                <p 
                  className="text-slate-600 leading-relaxed mb-6 line-clamp-3"
                  style={{ fontFamily: 'Rubik' }}
                >
                  {blog.description}
                </p>
                
                {/* Blog meta info */}
                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span 
                    className="text-sm text-slate-500 font-medium"
                    style={{ fontFamily: 'Rubik' }}
                  >
                    {blog.readTime}
                  </span>
                  
                  <div className="flex items-center text-[#ff914d] font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                    <span style={{ fontFamily: 'Montserrat' }}>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center">
          <Link to="/data">
            <button className="group bg-[#ff914d] hover:bg-[#e8803d] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-3 mx-auto">
              <span style={{ fontFamily: 'Montserrat' }}>View All Blogs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BlogsSection;