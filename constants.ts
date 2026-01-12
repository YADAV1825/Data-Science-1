
import { Course, Language, Difficulty } from './types';

export const COURSES: Course[] = [
  {
    id: 'hindi-beginner-1',
    title: 'Data Analytics Full Course - Beginner to Pro',
    youtubeId: 'VaSjiJMrq24',
    description: 'Master Data Analytics from scratch in Hindi. Covers Python, Excel, SQL, and PowerBI.',
    duration: '29 Hours',
    language: Language.HINDI,
    difficulty: Difficulty.BEGINNER,
    order: 1,
    thumbnail: 'https://img.youtube.com/vi/VaSjiJMrq24/maxresdefault.jpg'
  },
  {
    id: 'english-advanced-1',
    title: 'Python for Data Science – Full Course',
    youtubeId: 'CMEWVn1uZpQ',
    description: 'Comprehensive Python tutorial specifically tailored for Data Science workflows.',
    duration: '18 Hours',
    language: Language.ENGLISH,
    difficulty: Difficulty.ADVANCED,
    order: 2,
    thumbnail: 'https://img.youtube.com/vi/CMEWVn1uZpQ/maxresdefault.jpg'
  },
  {
    id: 'english-advanced-2',
    title: 'Python for DS (Pandas, NumPy, Matplotlib)',
    youtubeId: 'LHBE6Q9XlzI',
    description: 'Deep dive into the essential libraries that power modern data science.',
    duration: '13 Hours',
    language: Language.ENGLISH,
    difficulty: Difficulty.ADVANCED,
    order: 3,
    thumbnail: 'https://img.youtube.com/vi/LHBE6Q9XlzI/maxresdefault.jpg'
  },
  {
    id: 'english-advanced-3',
    title: 'Learn Data Science - Full Course for Beginners',
    youtubeId: 'ua-CiDNNj30',
    description: 'Transition from Python basics to foundational Data Science concepts.',
    duration: '6 Hours',
    language: Language.ENGLISH,
    difficulty: Difficulty.ADVANCED,
    order: 4,
    thumbnail: 'https://img.youtube.com/vi/ua-CiDNNj30/maxresdefault.jpg'
  },
  {
    id: 'english-advanced-4',
    title: 'Data Science Hands-On Crash Course',
    youtubeId: 'XU5pw3QRYjQ',
    description: 'Revision and hands-on project based crash course for final readiness.',
    duration: '3 Hours',
    language: Language.ENGLISH,
    difficulty: Difficulty.ADVANCED,
    order: 5,
    thumbnail: 'https://img.youtube.com/vi/XU5pw3QRYjQ/maxresdefault.jpg'
  }
];

export const THEME_COLORS = {
  dark: {
    bg: '#1e1e1e',
    sidebar: '#252526',
    header: '#323233',
    text: '#cccccc',
    accent: '#007acc',
    border: '#3c3c3c',
    card: '#2d2d2d',
    cardHover: '#37373d'
  },
  light: {
    bg: '#ffffff',
    sidebar: '#f3f3f3',
    header: '#f3f3f3',
    text: '#333333',
    accent: '#007acc',
    border: '#e1e1e1',
    card: '#f8f8f8',
    cardHover: '#f0f0f0'
  }
};
