import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const allProjects = [
    {
      title: "Smart Manufacturing Assistant",
      description:
        "AI-powered system that optimizes production workflows and predicts maintenance needs in real-time.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      status: "Completed",
      duration: "8 months",
      team: "12 engineers",
      tags: ["Manufacturing", "Predictive AI", "IoT"],
      statusColor: "bg-green-500",
    },
    {
      title: "Autonomous Delivery Drone",
      description:
        "Advanced navigation system for package delivery using computer vision and machine learning.",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
      status: "In Production",
      duration: "14 months",
      team: "18 engineers",
      tags: ["Autonomous Systems", "Computer Vision", "Logistics"],
      statusColor: "bg-blue-500",
    },
    {
      title: "Medical Diagnosis Robot",
      description:
        "Robotic system that assists doctors in diagnosing patients using advanced AI algorithms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      status: "Beta Testing",
      duration: "22 months",
      team: "25 engineers",
      tags: ["Healthcare", "Medical AI", "Robotics"],
      statusColor: "bg-purple-500",
    },
    {
      title: "Warehouse Automation System",
      description:
        "Complete robotic solution for inventory management and order fulfillment in large warehouses.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      status: "Active",
      duration: "16 months",
      team: "20 engineers",
      tags: ["Automation", "Logistics", "Computer Vision"],
      statusColor: "bg-green-500",
    },
    {
      title: "Agricultural Monitoring Drone",
      description:
        "AI-powered drone for crop monitoring, pest detection, and yield optimization in agriculture.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      status: "Research Phase",
      duration: "12 months",
      team: "8 engineers",
      tags: ["Agriculture", "Computer Vision", "Environmental"],
      statusColor: "bg-orange-500",
    },
    {
      title: "Robotic Surgery Assistant",
      description:
        "Precision robotic system that assists surgeons in complex medical procedures.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063",
      status: "Clinical Trials",
      duration: "30 months",
      team: "35 engineers",
      tags: ["Healthcare", "Precision Robotics", "Medical AI"],
      statusColor: "bg-red-500",
    },
  ];

  const statuses = [
    "all",
    "Completed",
    "In Production",
    "Beta Testing",
    "Active",
    "Research Phase",
    "Clinical Trials",
  ];
  const allTags = [
    "all",
    ...Array.from(new Set(allProjects.flatMap((project) => project.tags))),
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    const matchesTag =
      selectedTag === "all" || project.tags.includes(selectedTag);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#6179f6] hover:text-[#5568e6] transition-colors duration-300 mb-8 font-medium"
            >
              <ChevronLeft className="w-5 h-5" />
              <span style={{ fontFamily: "Montserrat" }}>Back to Home</span>
            </Link>

            <div className="text-center mb-12">
              <h1
                className="text-5xl md:text-6xl font-black text-slate-900 mb-6"
                style={{ fontFamily: "Montserrat" }}
              >
                All <span className="text-[#6179f6]">Projects</span>
              </h1>
              <div className="w-32 h-1.5 bg-[#6179f6] rounded-full mx-auto mb-4"></div>
              <p
                className="text-lg text-slate-600 max-w-3xl mx-auto"
                style={{ fontFamily: "Rubik" }}
              >
                Explore our complete portfolio of innovative AI and robotics
                solutions
              </p>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Filters Sidebar */}
              <div className="w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                  <h3
                    className="text-xl font-bold text-slate-900 mb-4"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Filters
                  </h3>

                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <Select
                      value={selectedStatus}
                      onValueChange={setSelectedStatus}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status === "all" ? "All Statuses" : status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tag Filter */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Category
                    </label>
                    <Select value={selectedTag} onValueChange={setSelectedTag}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {allTags.map((tag) => (
                          <SelectItem key={tag} value={tag}>
                            {tag === "all" ? "All Categories" : tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Results Count */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                      Showing {filteredProjects.length} of {allProjects.length}{" "}
                      projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="flex-1">
                <div className="space-y-6">
                  {filteredProjects.map((project, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white rounded-xl overflow-hidden"
                    >
                      <div className="flex">
                        {/* Image */}
                        <div className="w-80 flex-shrink-0 relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="absolute top-4 right-4">
                            <div
                              className={`${project.statusColor} text-white px-3 py-1 rounded-lg flex items-center gap-2 shadow-lg`}
                            >
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span
                                className="text-sm font-bold"
                                style={{ fontFamily: "Montserrat" }}
                              >
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="flex-1 p-8">
                          <h3
                            className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#6179f6] transition-colors duration-300"
                            style={{ fontFamily: "Montserrat" }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-slate-600 leading-relaxed mb-6"
                            style={{ fontFamily: "Rubik" }}
                          >
                            {project.description}
                          </p>

                          <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span>{project.team}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium border border-slate-200"
                                style={{ fontFamily: "Montserrat" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center text-[#6179f6] font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                            <span style={{ fontFamily: "Montserrat" }}>
                              View Details
                            </span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

export default Projects;
