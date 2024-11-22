import React, { ReactNode } from 'react';

const PostContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 space-y-4">
      <div className="text-white space-y-2">
        <p>Exploring the world of code, one commit at a time 🚀</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
            #FrontendDev
          </span>
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
            #OpenToGigs
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PostContent;