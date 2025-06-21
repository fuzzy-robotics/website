import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight, BookOpen, ChevronLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAuthor, setSelectedAuthor] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allBlogs = [
    {
      title: 'The Future of Human-Robot Collaboration',
      excerpt: 'Exploring how AI-powered robots are transforming workplace dynamics and creating new opportunities for human-machine partnerships.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
      author: 'Dr. Sarah Chen',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Research',
      categoryColor: 'bg-blue-500'
    },
    {
      title: 'Machine Learning Breakthroughs in Robotics',
      excerpt: 'Latest advances in deep learning algorithms that are revolutionizing robotic perception and decision-making capabilities.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      author: 'Prof. Michael Rodriguez',
      date: 'December 12, 2024',
      readTime: '12 min read',
      category: 'Technology',
      categoryColor: 'bg-green-500'
    },
    {
      title: 'Ethical Considerations in AI Development',
      excerpt: 'Addressing the moral implications and responsible practices needed as artificial intelligence becomes more integrated into society.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      author: 'Dr. Emily Watson',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Ethics',
      categoryColor: 'bg-purple-500'
    },
    {
      title: 'Autonomous Systems in Healthcare',
      excerpt: 'How robotic systems are revolutionizing patient care, from surgical assistance to medication delivery and monitoring.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
      author: 'Dr. James Liu',
      date: 'December 8, 2024',
      readTime: '10 min read',
      category: 'Healthcare',
      categoryColor: 'bg-red-500'
    },
    {
      title: 'The Rise of Edge AI in Robotics',
      excerpt: 'Examining how edge computing is enabling real-time AI processing in robotic systems without cloud dependency.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
      author: 'Prof. Lisa Zhang',
      date: 'December 5, 2024',
      readTime: '9 min read',
      category: 'Technology',
      categoryColor: 'bg-green-500'
    },
    {
      title: 'Sustainable Robotics: Green AI Solutions',
      excerpt: 'Exploring environmentally conscious approaches to AI and robotics development for a sustainable future.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399',
      author: 'Dr. Marcus Green',
      date: 'December 3, 2024',
      readTime: '7 min read',
      category: 'Sustainability',
      categoryColor: 'bg-emerald-500'
    }
  ];

  const categories = ['all', ...Array.from(new Set(allBlogs.map(blog => blog.category)))];
  const authors = ['all', ...Array.from(new Set(allBlogs.map(blog => blog.author)))];

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesAuthor = selectedAuthor === 'all' || blog.author === selectedAuthor;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAuthor && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[#ff914d] hover:text-[#e8803d] transition-colors duration-300 mb-8 font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              <span style={{ fontFamily: 'Montserrat' }}>Back to Home</span>
            </Link>
            
            <div className="text-center mb-12">
              <h1 
                className="text-5xl md:text-6xl font-black text-slate-900 mb-6"
                style={{ fontFamily: 'Montserrat' }}
              >
                All <span className="text-[#ff914d]">Blogs</span>
              </h1>
              <div className="w-32 h-1.5 bg-[#ff914d] rounded-full mx-auto mb-4"></div>
              <p 
                className="text-lg text-slate-600 max-w-3xl mx-auto"
                style={{ fontFamily: 'Rubik' }}
              >
                Discover insights, research findings, and thought leadership in AI and robotics
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Filters Sidebar */}
              <div className="w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                  <h3 
                    className="text-xl font-bold text-slate-900 mb-4"
                    style={{ fontFamily: 'Montserrat' }}
                  >
                    Filters
                  </h3>
                  
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search blogs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category === 'all' ? 'All Categories' : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Author Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
                    <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {authors.map(author => (
                          <SelectItem key={author} value={author}>
                            {author === 'all' ? 'All Authors' : author}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Results Count */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      Showing {filteredBlogs.length} of {allBlogs.length} blogs
                    </p>
                  </div>
                </div>
              </div>

              {/* Blogs Grid */}
              <div className="flex-1">
                <div className="space-y-6">
                  {filteredBlogs.map((blog, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white rounded-xl overflow-hidden">
                      <div className="flex">
                        {/* Image */}
                        <div className="w-80 flex-shrink-0 relative overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="absolute top-4 left-4">
                            <div className={`${blog.categoryColor} text-white px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg`}>
                              <BookOpen className="w-3 h-3" />
                              <span 
                                className="text-sm font-bold"
                                style={{ fontFamily: 'Montserrat' }}
                              >
                                {blog.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <CardContent className="flex-1 p-8">
                          <h3 
                            className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#ff914d] transition-colors duration-300"
                            style={{ fontFamily: 'Montserrat' }}
                          >
                            {blog.title}
                          </h3>
                          <p 
                            className="text-slate-600 leading-relaxed mb-6"
                            style={{ fontFamily: 'Rubik' }}
                          >
                            {blog.excerpt}
                          </p>
                          
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
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;