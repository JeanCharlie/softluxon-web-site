export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: ServiceFeature[];
  image: string;
}