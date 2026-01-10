import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { getStoryById, formatDate } from './storiesData';

/**
 * Story Detail Page Component
 * Displays a single story with full content, images, and cover image
 */
const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-6">The story you're looking for doesn't exist.</p>
          <Link
            to="/stories"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8">
        <button
          onClick={() => navigate('/stories')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Stories
        </button>
      </div>

      {/* Cover Image (Notion-style) */}
      {story.coverImage && (
        <div className="max-w-4xl mx-auto mb-8 px-4 md:px-8">
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Story Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {story.title}
          </h1>
          <div className="flex items-center text-gray-500">
            <Calendar size={18} className="mr-2" />
            <span className="text-lg">{formatDate(story.date)}</span>
          </div>
        </header>

        {/* Content Blocks */}
        <div className="prose prose-lg max-w-none">
          {story.content.map((block, index) => {
            if (block.type === 'text' && block.content) {
              return (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                >
                  {block.content}
                </p>
              );
            } else if (block.type === 'image' && block.imageUrl) {
              return (
                <div key={index} className="my-8">
                  <img
                    src={block.imageUrl}
                    alt={block.imageAlt || `Image ${index + 1}`}
                    className="w-full rounded-lg shadow-md"
                  />
                  {block.imageAlt && (
                    <p className="text-sm text-gray-500 italic mt-2 text-center">
                      {block.imageAlt}
                    </p>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </article>

      {/* Navigation Footer */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        <div className="border-t border-gray-200 pt-8">
          <Link
            to="/stories"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <BookOpen size={18} className="mr-2" />
            View All Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;

