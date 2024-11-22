'use client';
import React from 'react';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostInteractions from './PostInteractions';
import CodeSnippet from './CodeSnippet';

const PortfolioPost = () => {
  return (
    <div className="min-h-screen bg-black/80 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-black border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <PostHeader />
        <PostContent>
          <CodeSnippet />
        </PostContent>
        <PostInteractions />
      </div>
    </div>
  );
};

export default PortfolioPost;