interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 'ai-customer-support',
    title: 'AI-Powered Customer Support Agent',
    description: 'Developed an intelligent virtual assistant that uses LLMs to handle customer inquiries, provide instant support, and escalate issues when necessary. Integrated with existing CRM for seamless data flow.',
    image: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/project1',
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    description: 'Built a full-stack e-commerce solution with React.js, featuring product listings, user authentication, shopping cart, and Stripe integration for payments. Featured an intuitive UI for an exceptional shopping experience.',
    image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/project2',
  },
  {
    id: 'design-system',
    title: 'Developer UI Kit & Design System',
    description: 'Created a comprehensive UI kit and design system using React and Tailwind CSS to accelerate development speed and ensure brand consistency across multiple components and design patterns.',
    image: 'https://images.pexels.com/photos/4125559/pexels-photo-4125559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/project3',
  },
  {
    id: 'content-moderation',
    title: 'Automated Content Moderation Tool',
    description: 'Developed an AI-powered content moderation system for social platforms that detects inappropriate content across text, images, and videos. This tool enhanced content safety while reducing manual review by 60%.',
    image: 'https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://example.com/project4',
  },
];