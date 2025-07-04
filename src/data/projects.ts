interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 'ml-platform',
    title: 'AI-Powered Analytics Platform',
    description: 'A comprehensive machine learning platform that automates data analysis and provides intelligent insights. Features custom ML models, real-time processing, and interactive dashboards for business intelligence.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    link: 'https://example.com/ml-platform',
  },
  {
    id: 'nlp-chatbot',
    title: 'Intelligent Customer Service Bot',
    description: 'Advanced NLP-powered chatbot with sentiment analysis, intent recognition, and multi-language support. Reduces customer service response time by 80% while maintaining high satisfaction scores.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
    link: 'https://example.com/nlp-chatbot',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision Quality Control',
    description: 'Real-time computer vision system for manufacturing quality control. Uses deep learning to detect defects with 99.5% accuracy, significantly reducing manual inspection time and costs.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    link: 'https://example.com/computer-vision',
  },
  {
    id: 'ai-recommendation',
    title: 'Personalized Recommendation Engine',
    description: 'Sophisticated recommendation system using collaborative filtering and deep learning. Increases user engagement by 45% through personalized content and product suggestions.',
    image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg',
    link: 'https://example.com/ai-recommendation',
  },
];