interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 'ai-ethics',
    title: 'AI Ethics Investigation Series',
    description: 'A comprehensive investigative series examining ethical challenges in AI development, featuring interviews with leading AI researchers and policymakers. Winner of the Digital Innovation Award.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    link: 'https://example.com/ai-ethics',
  },
  {
    id: 'future-journalism',
    title: 'The Future of AI in Journalism',
    description: 'An in-depth exploration of how AI is transforming newsrooms, content creation, and fact-checking. Features case studies from major news organizations implementing AI solutions.',
    image: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg',
    link: 'https://example.com/future-journalism',
  },
  {
    id: 'ai-society',
    title: 'AI & Society Documentary',
    description: 'A multimedia documentary project examining the societal impact of AI technologies, featuring interactive elements and data visualizations to engage readers.',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg',
    link: 'https://example.com/ai-society',
  },
  {
    id: 'tech-policy',
    title: 'AI Policy Analysis',
    description: 'Regular coverage and analysis of AI-related policy developments worldwide, providing insights into regulatory frameworks and their implications for technology development.',
    image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg',
    link: 'https://example.com/tech-policy',
  },
];