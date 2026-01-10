/**
 * Stories Data
 * 
 * Add your stories here. Each story can have:
 * - id: unique identifier (used in URL)
 * - title: story title
 * - date: publication date (format: "YYYY-MM-DD")
 * - coverImage: optional cover image path (like Notion)
 * - content: array of content blocks (text or images)
 */

export interface StoryContentBlock {
  type: 'text' | 'image';
  content?: string; // For text blocks
  imageUrl?: string; // For image blocks
  imageAlt?: string; // Alt text for images
}

export interface Story {
  id: string;
  title: string;
  date: string;
  coverImage?: string;
  content: StoryContentBlock[];
}

export const stories: Story[] = [
  {
    id: 'example-story-1',
    title: 'My First DIY Project: Building a Custom Desk',
    date: '2024-01-15',
    coverImage: '/placeholder.jpg',
    content: [
      {
        type: 'text',
        content: 'I\'ve always wanted a custom desk that fits perfectly in my workspace. After months of planning, I finally decided to build one myself.'
      },
      {
        type: 'text',
        content: 'The project started with selecting the right wood. I chose oak for its durability and beautiful grain pattern. The dimensions were carefully measured to fit my room perfectly.'
      },
      {
        type: 'image',
        imageUrl: '/placeholder.jpg',
        imageAlt: 'Desk in progress'
      },
      {
        type: 'text',
        content: 'The most challenging part was the joinery. I used mortise and tenon joints for strength and durability. It took several attempts to get the angles just right.'
      },
      {
        type: 'text',
        content: 'After sanding and applying three coats of polyurethane, the desk was complete. It\'s been six months now, and I couldn\'t be happier with the result!'
      },
      {
        type: 'image',
        imageUrl: '/placeholder.jpg',
        imageAlt: 'Finished desk'
      }
    ]
  },
  {
    id: 'example-story-2',
    title: 'Gardening Adventures: Growing Tomatoes from Seed',
    date: '2024-02-20',
    coverImage: '/placeholder.jpg',
    content: [
      {
        type: 'text',
        content: 'This spring, I decided to try growing tomatoes from seed instead of buying seedlings. It\'s been an incredible learning experience!'
      },
      {
        type: 'text',
        content: 'I started with heirloom varieties: Brandywine, Cherokee Purple, and Yellow Pear. The seeds were planted in early March in a warm, sunny window.'
      },
      {
        type: 'image',
        imageUrl: '/placeholder.jpg',
        imageAlt: 'Tomato seedlings'
      },
      {
        type: 'text',
        content: 'The first true leaves appeared after about two weeks. I was so excited! I carefully transplanted them into larger containers as they grew.'
      },
      {
        type: 'text',
        content: 'By May, the plants were ready to go outside. I built a simple trellis system to support them as they grow. Now, in July, I\'m harvesting beautiful, flavorful tomatoes every day!'
      }
    ]
  }
];

// Helper function to get a story by ID
export const getStoryById = (id: string): Story | undefined => {
  return stories.find(story => story.id === id);
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

