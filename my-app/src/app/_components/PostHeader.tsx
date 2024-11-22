import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const PostHeader = () => {
  return (
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
        <p className="text-gray-400 text-sm">Frontend Developer | Ex-SDE @nomadcoder.ai</p>
      </div>
      <button className="text-gray-500 hover:bg-blue-500/20 rounded-full p-2">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
};

export default PostHeader;