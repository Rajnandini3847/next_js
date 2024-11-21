// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 p-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-black text-white p-4 rounded-lg flex gap-4">
        {/* Left side - Profile and Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/api/placeholder/48/48" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base">Your Name</span>
                  <span className="text-gray-500">@yourusername</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-1 rounded-full border border-gray-500 text-sm font-semibold text-white hover:bg-gray-900">
                Contact
              </button>
              <button className="p-1 hover:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-500">•••</span>
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-4 text-[15px] leading-normal">
            <p>Full Stack Developer | Open Source Enthusiast</p>
            
            <p>Skills & Experience:</p>
            
            <ul className="space-y-1">
              <li>- Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>- Backend: Node.js, Python, PostgreSQL, MongoDB</li>
              <li>- DevOps: Docker, AWS, CI/CD</li>
              <li>- 3+ years of development experience</li>
            </ul>
            
            <p>Featured Projects:</p>
            
            <ul className="space-y-1">
              <li>- 🚀 E-commerce Platform (React, Node.js, MongoDB)</li>
              <li>- 📱 Social Media Dashboard (Next.js, PostgreSQL)</li>
              <li>- 🤖 AI-powered Chat Application (Python, TensorFlow)</li>
            </ul>
            
            <p>Open for:</p>
            <ul className="space-y-1">
              <li>- Full-stack development roles</li>
              <li>- Open source collaboration</li>
              <li>- Freelance projects</li>
            </ul>

            <p className="text-blue-400">portfolio.com/yourname</p>
          </div>
        </div>

        {/* Right side - Code Snippet */}
        <div className="w-96 bg-zinc-950 rounded-lg overflow-hidden">
          <div className="bg-zinc-800 px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400">script.js</span>
          </div>
          <div className="p-4 font-mono text-sm text-gray-300">
            <pre className="whitespace-pre-line">
{`const developer = {
  name: "Your Name",
  role: "Full Stack Dev",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Python"
  ],
  isAvailable: true,
  contact: () => {
    return {
      email: "you@dev.com"
    }
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}