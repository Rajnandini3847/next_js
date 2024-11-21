'use client';
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, X, Minus, Maximize2 } from 'lucide-react';

const PortfolioPost = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  const handleClose = () => {
    setIsCodeVisible(false);
  };

  const handleMaximize = () => {
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    if (isMaximized) {
      setIsMaximized(false);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const detailedCode = `
// Advanced Developer Profile Management System
import { DeveloperSkills, ProjectManagement } from '@/core/development';

class RajnandiniFrontendProfile extends DeveloperSkills {
  constructor() {
    super();
    this.name = "Rajnandini Tiwari";
    this.role = "Senior Frontend Engineer";
    this.expertise = {
      frontend: ['React', 'Next.js', 'TypeScript'],
      backend: ['Node.js', 'Python'],
      devOps: ['Docker', 'AWS', 'CI/CD']
    };
  }

  async getCurrentProjects() {
    return [
      {
        name: "Enterprise Dashboard",
        technologies: ['React', 'TypeScript', 'GraphQL'],
        status: "In Progress",
        complexity: 9.5
      },
      {
        name: "Open Source Contribution",
        repository: "github.com/itsrajnandini/dev-tools",
        focus: "Performance Optimization"
      }
    ];
  }

  calculateProfessionalGrowth() {
    const skillMatrix = {
      technicalSkills: 0.85,
      softSkills: 0.75,
      openSourceContributions: 0.65
    };

    return {
      overallGrowthIndex: this.computeGrowthMetrics(skillMatrix),
      recommendedLearningPath: this.suggestSkillUpgrade()
    };
  }
}

export default new RajnandiniFrontendProfile();
`;

  return (
    <div className="min-h-screen bg-black/80 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Post Header */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img
              src="/api/placeholder/48/48"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">Rajnandini Tiwari</span>
              <span className="text-gray-500">@itsRajnandinit</span>
              <span className="text-gray-500 text-sm ml-2">• 2h</span>
            </div>
            <p className="text-gray-400 text-sm">Frontend Developer | Open Source Enthusiast</p>
          </div>
          <button className="text-gray-500 hover:bg-blue-500/20 rounded-full p-2">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Post Content */}
        <div className="p-4 space-y-4">
          <div className="text-white space-y-2">
            <p>Exploring the world of code, one commit at a time 🚀</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                #FrontendDev
              </span>
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                #OpenSource
              </span>
            </div>
          </div>

          {/* Code Snippet */}
          {isCodeVisible && (
            <div 
              className={`
                bg-zinc-900 rounded-xl overflow-hidden 
                transition-all duration-300 ease-in-out
                ${isMaximized ? 'fixed inset-0 z-50 flex items-center justify-center p-10' : ''}
              `}
            >
              {isMaximized ? (
                <div className="w-full max-w-4xl bg-[#1A1A1A] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                  <div className="bg-[#252526] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <button 
                          onClick={handleClose} 
                          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center group"
                          aria-label="Close"
                        >
                          <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          onClick={handleMinimize} 
                          className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none flex items-center justify-center group"
                          aria-label="Minimize"
                        >
                          <Minus size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button 
                          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none flex items-center justify-center group"
                          aria-label="Maximize"
                        >
                          <Maximize2 size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </div>
                      <span className="text-sm text-gray-400">profile.ts</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>UTF-8</span>
                      <span>TypeScript React</span>
                      <span>Ln 24, Col 36</span>
                    </div>
                  </div>
                  <div className="flex flex-grow overflow-auto scrollbar-hide">
                    {/* Line Numbers */}
                    <div className="bg-[#1E1E1E] text-gray-500 text-right p-4 pr-2 select-none overflow-y-scroll">
                      {detailedCode.split('\n').map((_, index) => (
                        <div key={index} className="text-xs">{index + 1}</div>
                      ))}
                    </div>
                    {/* Code Content */}
                    <pre className="overflow-y-scroll p-4 text-sm text-gray-300 font-mono bg-[#1E1E1E] w-full">
                      <code>{detailedCode}</code>
                    </pre>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button 
                        onClick={handleClose} 
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none"
                        aria-label="Close"
                      ></button>
                      <button 
                        onClick={handleMinimize} 
                        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none"
                        aria-label="Minimize"
                      ></button>
                      <button 
                        onClick={handleMaximize} 
                        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none"
                        aria-label="Maximize"
                      ></button>
                    </div>
                    <span className="text-sm text-gray-400">script.js</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-gray-300">
                    <pre className="whitespace-pre-line">
                      {`const developer = {
  name: "Rajnandini Tiwari",
  role: "Frontend Developer",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Python"
  ],
  isAvailable: true,
  contact: () => {
    return {
      email: "itsrajnandini@dev.com"
    }
  }
}`}
                    </pre>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Post Interactions */}
        <div className="flex justify-between items-center p-4 border-t border-gray-800 text-gray-500">
          <button className="flex items-center hover:text-blue-400 hover:bg-blue-500/20 rounded-full p-2">
            <MessageCircle size={20} className="mr-2" />
            <span>67</span>
          </button>
          <button 
            onClick={handleLike}
            className={`flex items-center hover:bg-red-500/20 rounded-full p-2 
              ${isLiked ? 'text-red-500 hover:text-red-600' : 'hover:text-red-400'}`}
          >
            <Heart 
              size={20} 
              className={`mr-2 ${isLiked ? 'fill-current' : ''}`}
            />
            <span>{likes}</span>
          </button>
          <button className="flex items-center hover:text-green-400 hover:bg-green-500/20 rounded-full p-2">
            <Share2 size={20} className="mr-2" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPost;