'use client';
import React, { useState } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

const CodeSnippet = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(true);

  const handleClose = () => {
    setIsCodeVisible(false);
  };

  const handleMaximize = () => {
    setIsMaximized(true);
  };

  const handleMinimize = () => {
    setIsMaximized(false);
  };

  const detailedCode = `
// Advanced Developer Profile Management System
import { DeveloperSkills, ProjectManagement } from '@/core/development';

class RajnandiniFrontendProfile extends DeveloperSkills {
  constructor() {
    super();
    this.name = "Rajnandini Tiwari";
    this.role = "SDE-I/Frontend Developer";
    this.expertise = {
      frontend: ['React', 'Next.js', 'Angular', 'TypeScript'],
      backend: ['Firebase', 'Python']
    };
  }

  async getCurrentProjects() {
    return [
      {
        name: "Grabb",
        technologies: ['React', 'TypeScript', 'Firebase'],
        status: "In Progress",
        complexity: 9.5
      },
      {
        name: "Digit-Reco",
        repository: "github.com/itsrajnandini/digit-reco",
        focus: "Frontend & Backend collaboration"
      }
    ];
  }

  calculateProfessionalGrowth() {
    const skillMatrix = {
      technicalSkills: 0.85,
      softSkills: 0.75,
    };

    return {
      overallGrowthIndex: this.computeGrowthMetrics(skillMatrix),
      recommendedLearningPath: this.suggestSkillUpgrade()
    };
  }
}

export default new RajnandiniFrontendProfile();`;

  if (!isCodeVisible) return null;

  return (
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
            <div className="bg-[#1E1E1E] text-gray-500 text-right p-4 pr-2 select-none overflow-y-scroll">
              {detailedCode.split('\n').map((_, index) => (
                <div key={index} className="text-xs">{index + 1}</div>
              ))}
            </div>
            <pre className="overflow-y-scroll p-4 text-sm text-gray-300 font-mono bg-[#1E1E1E] w-full">
              <code>{detailedCode}</code>
            </pre>
          </div>
        </div>
      ) : (
        <div className="bg-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <button 
                onClick={handleClose} 
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none flex items-center justify-center group"
                aria-label="Close"
              >
                <X size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none flex items-center justify-center group"
                aria-label="Minimize"
              >
                <Minus size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={handleMaximize} 
                className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none flex items-center justify-center group"
                aria-label="Maximize"
              >
                <Maximize2 size={10} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
            <span className="text-sm text-gray-400">script.js</span>
          </div>
          <div className="p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre-wrap">
              {`const developer = {
    name: "Rajnandini Tiwari",
    role: "Frontend Developer",
    skills: [
        "React",
        "Next.js", 
        "Angular", 
        "Firebase"
    ],
    isAvailable: true,
    contact: () => {
        return {
            email: "rajnandinitiwari3847@gmail.com"
        }
    }
}`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;