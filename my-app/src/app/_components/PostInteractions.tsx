'use client';
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const PostInteractions = () => {
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
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
  );
};

export default PostInteractions;