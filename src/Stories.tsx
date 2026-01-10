import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar } from 'lucide-react';
import { stories, formatDate } from './storiesData';

/**
 * Stories Page Component
 * Displays all stories as cards in a grid layout
 */
const Stories: React.FC = () => {
  // Sort stories by date (newest first)
  const sortedStories = [...stories].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gray-800 text-white p-8 md:p-12 rounded-b-lg shadow-xl mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-4">
            <BookOpen size={32} className="mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Stories & Projects</h1>
          </div>
          <p className="text-xl text-gray-300">
            My hobbies, DIY projects, and personal adventures
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {sortedStories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No stories yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedStories.map((story) => (
              <Link
                key={story.id}
                to={`/stories/${story.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Cover Image */}
                {story.coverImage && (
                  <div className="w-full h-48 overflow-hidden bg-gray-200">
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Card Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </h2>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(story.date)}</span>
                  </div>
                  
                  {/* Preview text */}
                  {story.content.length > 0 && story.content[0].type === 'text' && (
                    <p className="mt-4 text-gray-600 line-clamp-3">
                      {story.content[0].content}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;

