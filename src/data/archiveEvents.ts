export interface ArchiveEvent {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export const archiveEvents: ArchiveEvent[] = [
  { 
    id: 1, 
    date: '2025.03.20', 
    title: 'Spring Showcase', 
    image: '/images/archive-1.jpg',
    link: '/archive/spring-showcase'
  },
  { 
    id: 2, 
    date: '2025.02.15', 
    title: 'Valentine Special', 
    image: '/images/archive-2.jpg',
    link: '/archive/valentine-special'
  },
  { 
    id: 3, 
    date: '2025.01.10', 
    title: 'New Year Live', 
    image: '/images/archive-3.jpg',
    link: '/archive/new-year-live'
  },
];
